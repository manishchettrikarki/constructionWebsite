import { ArrowRightIcon } from "@/icons";

interface ChecklistItemProps {
  text: string;
}

export function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <li className="checklist_item flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
      <ArrowRightIcon className="w-5 h-5 text-[#ffc631] shrink-0" />
      <span>{text}</span>
    </li>
  );
}
