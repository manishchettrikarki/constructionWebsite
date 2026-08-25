import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteTeamMember } from "./actions";
import { ConfirmSubmitButton } from "@/components/admin/confirmSubmitButton";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data: members, error } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1a1a2e]">Team</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage the roster shown in the team section of the About page.
          </p>
        </div>
        <Link
          href="/admin/team/new"
          className="bg-[#ffc631] hover:bg-[#1a1a2e] hover:text-white text-[#1a1a2e] font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          + Add Member
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
          Couldn&apos;t load team members: {error.message}
        </div>
      )}

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Name</th>
              <th className="text-left px-5 py-3 font-semibold">Position</th>
              <th className="text-left px-5 py-3 font-semibold">Qualification</th>
              <th className="text-left px-5 py-3 font-semibold">Experience</th>
              <th className="text-left px-5 py-3 font-semibold">Order</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {members?.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50">
                <td className="px-5 py-3.5 font-semibold text-[#1a1a2e]">
                  {m.name}
                </td>
                <td className="px-5 py-3.5 text-gray-500">{m.position}</td>
                <td className="px-5 py-3.5 text-gray-500 max-w-xs truncate">
                  {m.qualification}
                </td>
                <td className="px-5 py-3.5 text-gray-500">{m.experience}</td>
                <td className="px-5 py-3.5 text-gray-400">{m.sort_order}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-4">
                    <Link
                      href={`/admin/team/${m.id}`}
                      className="text-[#1a1a2e] font-semibold hover:text-[#ffc631] transition-colors"
                    >
                      Edit
                    </Link>
                    <form action={deleteTeamMember.bind(null, m.id)}>
                      <ConfirmSubmitButton
                        confirmMessage={`Remove ${m.name} from the team? This can't be undone.`}
                        className="text-red-500 font-semibold hover:text-red-700 transition-colors"
                      >
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}

            {members?.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-gray-400">
                  No team members yet — click &ldquo;Add Member&rdquo; to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
