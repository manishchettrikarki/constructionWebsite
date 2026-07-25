import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteProject } from "./actions";
import { ConfirmSubmitButton } from "@/components/admin/confirmSubmitButton";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1a1a2e]">Projects</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage the project directory shown on the public Projects page.
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="bg-[#ffc631] hover:bg-[#1a1a2e] hover:text-white text-[#1a1a2e] font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          + Add Project
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
          Couldn&apos;t load projects: {error.message}
        </div>
      )}

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Title</th>
              <th className="text-left px-5 py-3 font-semibold">Category</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
              <th className="text-left px-5 py-3 font-semibold">Order</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects?.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-5 py-3.5 font-semibold text-[#1a1a2e] max-w-xs truncate">
                  {p.title}
                </td>
                <td className="px-5 py-3.5 text-gray-500">{p.category}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      p.status === "Ongoing"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-gray-400">{p.sort_order}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-4">
                    <Link
                      href={`/admin/projects/${p.id}`}
                      className="text-[#1a1a2e] font-semibold hover:text-[#ffc631] transition-colors"
                    >
                      Edit
                    </Link>
                    <form action={deleteProject.bind(null, p.id)}>
                      <ConfirmSubmitButton
                        confirmMessage={`Delete "${p.title}"? This can't be undone.`}
                        className="text-red-500 font-semibold hover:text-red-700 transition-colors"
                      >
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}

            {projects?.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-gray-400">
                  No projects yet — click &ldquo;Add Project&rdquo; to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
