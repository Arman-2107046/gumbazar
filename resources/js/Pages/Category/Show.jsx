import Navbar from "@/Components/AppComponents/Navbar";
import Footer from "@/Components/AppComponents/Footer";
import AdCard from "@/Components/Ads/AdCard";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ category, ads }) {
    const { locations, filters } = usePage().props;

    const [showFilters, setShowFilters] = useState(false);

    const [form, setForm] = useState({
        subcategories: filters.subcategories || [],
        location: filters.location || "",
        min_price: filters.min_price || "",
        max_price: filters.max_price || "",
        verified: filters.verified || "",
        member: filters.member || "",
    });

    const applyFilters = () => {
        router.get(
            route("category.show", category.slug),
            form,
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    return (
        <>
            <Navbar />

            <div className="px-4 py-10 mx-auto max-w-7xl">

                {/* CATEGORY TITLE */}
                <h1 className="mb-6 text-3xl font-bold">
                    {category.name}
                </h1>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

                    {/* ================= SIDEBAR ================= */}
                    <aside className="lg:col-span-1">

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full px-4 py-2 mb-4 bg-white border rounded-lg lg:hidden"
                        >
                            {showFilters ? "Hide Filters ▲" : "Show Filters ▼"}
                        </button>

                        <div
                            className={`bg-white border rounded-xl p-5 space-y-6
                            ${showFilters ? "block" : "hidden"} lg:block`}
                        >
                            <h3 className="text-lg font-semibold">
                                Filters
                            </h3>

                            {/* SUBCATEGORIES (MULTI SELECT) */}
                            <div>
                                <h4 className="mb-2 text-sm font-medium">
                                    Subcategories
                                </h4>

                                <div className="space-y-2 overflow-y-auto max-h-60">
                                    {category.subcategories.map((sub) => (
                                        <label
                                            key={sub.id}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={form.subcategories.includes(sub.id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setForm({
                                                            ...form,
                                                            subcategories: [
                                                                ...form.subcategories,
                                                                sub.id,
                                                            ],
                                                        });
                                                    } else {
                                                        setForm({
                                                            ...form,
                                                            subcategories: form.subcategories.filter(
                                                                (id) => id !== sub.id
                                                            ),
                                                        });
                                                    }
                                                }}
                                            />
                                            {sub.name}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div>
                                <label className="text-sm font-medium">
                                    Location
                                </label>
                                <select
                                    className="w-full p-2 mt-1 border rounded"
                                    value={form.location}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            location: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">All Locations</option>
                                    {locations.map((loc) => (
                                        <option key={loc.id} value={loc.id}>
                                            {loc.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* PRICE RANGE */}
                            <div>
                                <label className="text-sm font-medium">
                                    Price Range
                                </label>
                                <div className="flex gap-2 mt-1">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="w-full p-2 border rounded"
                                        value={form.min_price}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                min_price: e.target.value,
                                            })
                                        }
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="w-full p-2 border rounded"
                                        value={form.max_price}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                max_price: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            {/* SELLER TYPE */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={form.verified === "1"}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                verified: e.target.checked ? "1" : "",
                                                member: "",
                                            })
                                        }
                                    />
                                    Verified Sellers
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={form.member === "1"}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                member: e.target.checked ? "1" : "",
                                                verified: "",
                                            })
                                        }
                                    />
                                    Members
                                </label>
                            </div>

                            <button
                                onClick={applyFilters}
                                className="w-full py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* ================= ADS GRID ================= */}
                    <div className="lg:col-span-3">

                        {ads.data.length === 0 ? (
                            <p className="text-gray-500">
                                No ads found in this category.
                            </p>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                                    {ads.data.map((ad) => (
                                        <AdCard key={ad.id} ad={ad} />
                                    ))}
                                </div>

                                {/* PAGINATION */}
                                <div className="flex justify-center gap-2 mt-10">
                                    {ads.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url ?? "#"}
                                            preserveScroll
                                            className={`px-4 py-2 rounded-lg text-sm ${
                                                link.active
                                                    ? "bg-indigo-600 text-white"
                                                    : "bg-white border hover:bg-gray-100"
                                            } ${
                                                !link.url &&
                                                "opacity-50 cursor-not-allowed"
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
