import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";
// Use ESM build of xlsx and set fs for Node environment
import XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXCEL_FILE = path.join(__dirname, "contact_submissions.xlsx");

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    // this.loadFromExcel();
  }

  private loadFromExcel() {
    try {
      if (!fs.existsSync(EXCEL_FILE)) return;

      const buf = fs.readFileSync(EXCEL_FILE);
      const workbook = XLSX.read(buf, { type: "buffer" });

      const sheet = workbook.Sheets["Contact Submissions"];
      if (!sheet) return;
      const data = XLSX.utils.sheet_to_json<Record<string, any>>(sheet);
      data.forEach((row: Record<string, any>) => {
        if (row.id && row.email && row.name && row.projectIdea) {
          const submission: ContactSubmission = {
            id: row.id,
            name: row.name,
            email: row.email,
            projectIdea: row.projectIdea,
            submittedAt: new Date(row.submittedAt),
          };
          this.contactSubmissions.set(row.id, submission);
        }
      });
    } catch (error) {
      console.error("Error loading contact submissions from Excel:", error);
    }
  }

  private saveToExcel() {
    try {
      const data = Array.from(this.contactSubmissions.values()).map((submission) => ({
        id: submission.id,
        name: submission.name,
        email: submission.email,
        projectIdea: submission.projectIdea,
        submittedAt: submission.submittedAt.toISOString(),
      }));

      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, "Contact Submissions");
      XLSX.writeFile(workbook, EXCEL_FILE);
    } catch (error) {
      console.error("Error saving contact submissions to Excel:", error);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    // this.saveToExcel();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
