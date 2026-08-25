import { TeamMemberForm } from "@/components/admin/teamMemberForm";
import { createTeamMember } from "../actions";

export default function NewTeamMemberPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Add Team Member
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        This will appear immediately in the team section of the About page.
      </p>
      <TeamMemberForm action={createTeamMember} submitLabel="Create Member" />
    </div>
  );
}
