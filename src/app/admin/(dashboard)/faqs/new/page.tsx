import { FaqForm } from "@/components/admin/faqForm";
import { createFaq } from "../actions";

export default function NewFaqPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">Add FAQ</h1>
      <p className="text-gray-500 text-sm mb-8">
        This will appear immediately in the FAQ section on the Home page.
      </p>
      <FaqForm action={createFaq} submitLabel="Create FAQ" />
    </div>
  );
}
