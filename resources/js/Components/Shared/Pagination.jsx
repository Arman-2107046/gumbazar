import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    if (!links || links.length <= 3) return null;

    return (
        <div className="flex flex-wrap justify-center gap-2">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || ""}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`px-3 py-1 border rounded text-sm ${
                        link.active
                            ? "bg-blue-600 text-white"
                            : "bg-white hover:bg-gray-100"
                    } ${!link.url && "pointer-events-none text-gray-400"}`}
                />
            ))}
        </div>
    );
}
