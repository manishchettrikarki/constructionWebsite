/**
 * State shape shared between the contact form and its Server Action.
 *
 * Kept out of actions.ts because a "use server" module may only export
 * async functions — exporting the constant below from there fails at
 * runtime with "A 'use server' file can only export async functions".
 */
export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export const CONTACT_INITIAL_STATE: ContactFormState = {
  status: "idle",
  message: "",
};
