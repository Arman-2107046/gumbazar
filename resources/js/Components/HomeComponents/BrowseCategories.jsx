import { Link } from "@inertiajs/react";

export default function BrowseCategories({ categories = [] }) {
    return (
        <section className="py-16 bg-white">
            <div className="px-4 mx-auto max-w-7xl">

                {/* HEADER */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Browse Categories
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Explore thousands of listings across all categories
                    </p>
                </div>

                {/* CATEGORY GRID */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/all-ads?category=${category.id}`}
                            className="transition-all bg-white border rounded-2xl hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center p-6 text-center">

                                {/* IMAGE / ICON */}
                                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                                    <img
                                        src={
                                            category.thumbnail?.startsWith("http")
                                                ? category.thumbnail
                                                : `/storage/${category.thumbnail}`
                                        }
                                        alt={category.name}
                                        className="object-cover w-10 h-10"
                                    />
                                </div>

                                {/* NAME */}
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {category.name}
                                </h3>

                                {/* OPTIONAL COUNT (future-ready) */}
                                {/* 
                                <p className="mt-1 text-xs text-gray-500">
                                    12,345 Ads
                                </p> 
                                */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
