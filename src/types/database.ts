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
    };
  };
}