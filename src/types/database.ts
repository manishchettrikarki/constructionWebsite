/**
 * Hand-written types mirroring supabase/schema.sql.
 *
 * If you'd rather generate these automatically from the live schema,
 * install the Supabase CLI and run:
 *   npx supabase gen types typescript --project-id <your-project-id> > src/types/database.ts
 * That command produces a superset of this file (adds Functions/Enums
 * plumbing) — this hand-written version is a drop-in-compatible subset
 * that keeps the app fully typed without requiring the CLI.
 */

export type ProjectStatus = "Completed" | "Ongoing";

export interface ServiceRow {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectRow {
  id: string;
  title: string;
  location: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
  status: ProjectStatus;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ContactDetailsRow {
  id: string;
  phone: string;
  email: string;
  address: string;
  updated_at: string;
}

export interface FaqRow {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMemberRow {
  id: string;
  name: string;
  position: string;
  qualification: string;
  experience: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface TestimonialRow {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface ContactMessageRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      services: {
        Row: ServiceRow;
        Insert: Partial<ServiceRow> &
          Pick<ServiceRow, "title"> & { id?: string };
        Update: Partial<ServiceRow>;
      };
      projects: {
        Row: ProjectRow;
        Insert: Partial<ProjectRow> &
          Pick<ProjectRow, "title"> & { id?: string };
        Update: Partial<ProjectRow>;
      };
      contact_details: {
        Row: ContactDetailsRow;
        Insert: Partial<ContactDetailsRow> & { id?: string };
        Update: Partial<ContactDetailsRow>;
      };
      faqs: {
        Row: FaqRow;
        Insert: Partial<FaqRow> &
          Pick<FaqRow, "question" | "answer"> & { id?: string };
        Update: Partial<FaqRow>;
      };
      team_members: {
        Row: TeamMemberRow;
        Insert: Partial<TeamMemberRow> &
          Pick<TeamMemberRow, "name"> & { id?: string };
        Update: Partial<TeamMemberRow>;
      };
      testimonials: {
        Row: TestimonialRow;
        Insert: Partial<TestimonialRow> &
          Pick<TestimonialRow, "name" | "quote"> & { id?: string };
        Update: Partial<TestimonialRow>;
      };
      contact_messages: {
        Row: ContactMessageRow;
        Insert: Partial<ContactMessageRow> &
          Pick<ContactMessageRow, "name" | "email" | "message"> & {
            id?: string;
          };
        Update: Partial<ContactMessageRow>;
      };
    };
  };
}