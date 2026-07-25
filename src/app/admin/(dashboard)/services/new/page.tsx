import { ServiceForm } from "@/components/admin/serviceForm";
import { createService } from "../actions";

export default function NewServicePage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Add Service
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        This will appear immediately on the Home and Services pages.
      </p>
      <ServiceForm action={createService} submitLabel="Create Service" />
    </div>
  );
}
