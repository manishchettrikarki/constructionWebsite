import { StarIcon } from "@/icons";

// 
export function StarRating({ count }: { count: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-[#ffc631]" />
            ))}
        </div>
    );
}