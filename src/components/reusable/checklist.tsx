interface ChecklistProps {
  items: string[];
  light?: boolean;
}

export function Checklist({ items, light = false }: ChecklistProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-center gap-3 text-sm ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#ffc631] shrink-0">
            <svg
              className="w-3 h-3 text-[#1a1a2e]"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
