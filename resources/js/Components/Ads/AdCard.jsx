import { Link } from "@inertiajs/react";

export default function AdCard({ ad }) {
    const image =
        ad.images?.[0]?.image_path
            ? ad.images[0].image_path.startsWith("http")
                ? ad.images[0].image_path
                : `/storage/${ad.images[0].image_path}`
            : "/placeholder.png";

    return (
        <Link
            href={`/ads/${ad.id}`}
            className="overflow-hidden transition bg-white border rounded-xl hover:shadow-md"
        >
            {/* IMAGE */}
            <div className="relative">
                <img
                    src={image}
                    alt={ad.title}
                    className="object-cover w-full h-48"
                />

                {/* BADGES */}
                {/* <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-400 rounded">
                        Featured
                    </span>
                </div> */}

                <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded-full">
                        {ad.user?.is_verified ? "Verified" : "Member"}
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">
                <h3 className="text-sm font-semibold line-clamp-2">
                    {ad.title}
                </h3>

                <p className="text-lg font-bold text-green-600">
                    ৳ {Number(ad.price).toLocaleString()}
                </p>

                <div className="flex justify-between text-xs text-gray-500">
                    <span>📍 {ad.location?.name}</span>
                    <span>
                        ⏱ {new Date(ad.created_at).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </Link>
    );
}
