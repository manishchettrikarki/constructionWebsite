import { CheckIcon } from "@/icons";

interface ICheckItemProps {
  children: React.ReactNode;
}

//
export function CheckItem({ children }: ICheckItemProps) {
  return (
    <li className="flex items-center gap-2.5">
      <CheckIcon className="w-5 h-5 text-[#0da574] shrink-0" />
      <span>{children}</span>
    </li>
  );
}
