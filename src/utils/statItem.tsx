import { useCountUp } from "@/hooks/useCountUp";

export function StatItem({
    value,
    suffix,
    label,
    separator,
    start,
}: {
    value: number;
    suffix: string;
    label: string;
    separator?: boolean;
    start: boolean;
}) {
    const count = useCountUp(value, 2000, start);
    const display = separator ? count.toLocaleString("de-DE") : count;

    return (
        <li className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
                {display}
                <span className="text-[#ffc631]">{suffix}</span>
            </span>
            <span className="text-gray-400 text-sm leading-snug whitespace-pre-line">
                {label}
            </span>
        </li>
    );
}