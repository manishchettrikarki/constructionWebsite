import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TeamMemberForm } from "@/components/admin/teamMemberForm";
import { updateTeamMember } from "../actions";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: member } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!member) notFound();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Edit Team Member
      </h1>
      <p className="text-gray-500 text-sm mb-8">{member.name}</p>
      <TeamMemberForm
        member={member}
        action={updateTeamMember.bind(null, id)}
        submitLabel="Save Changes"
      />
    </div>
  );
}
