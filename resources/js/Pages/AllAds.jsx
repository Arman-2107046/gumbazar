import Navbar from "@/Components/AppComponents/Navbar";
import Footer from "@/Components/AppComponents/Footer";
import AdCard from "@/Components/Ads/AdCard";
import Pagination from "@/Components/Shared/Pagination";
import { usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function AllAds({ ads }) {
    const { locations, filters } = usePage().props;

    const [form, setForm] = useState({
        location: filters.location || "",
        min_price: filters.min_price || "",
        max_price: filters.max_price || "",
        verified: filters.verified || "",
        member: filters.member || "",
    });

    const [showFilters, setShowFilters] = useState(false);

    const applyFilters = () => {
        router.get("/all-ads", form, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <Navbar />

            <div className="px-4 py-10 mx-auto max-w-7xl">
                <h1 className="mb-6 text-2xl font-bold">All Ads</h1>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

                    {/* SIDEBAR */}
                    <aside className="lg:col-span-1">

                        {/* Mobile filter toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full px-4 py-2 mb-4 text-sm font-medium text-left bg-white border rounded-lg lg:hidden"
                        >
                            {showFilters ? "Hide Filters ▲" : "Show Filters ▼"}
                        </button>

                        {/* Filters */}
                        <div
                            className={`p-5 space-y-5 bg-white border rounded-xl
                            ${showFilters ? "block" : "hidden"} lg:block`}
                        >
                            <h3 className="text-lg font-semibold">Filters</h3>

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

                            {/* PRICE */}
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
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={form.verified === "1"}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                verified: e.target.checked
                                                    ? "1"
                                                    : "",
                                                member: "",
                                            })
                                        }
                                    />
                                    <span className="text-sm">
                                        Verified Sellers
                                    </span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={form.member === "1"}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                member: e.target.checked
                                                    ? "1"
                                                    : "",
                                                verified: "",
                                            })
                                        }
                                    />
                                    <span className="text-sm">Members</span>
                                </label>
                            </div>

                            <button
                                onClick={applyFilters}
                                className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* ADS GRID */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {ads.data.map((ad) => (
                                <AdCard key={ad.id} ad={ad} />
                            ))}
                        </div>

                        <div className="mt-10">
                            <Pagination links={ads.links} />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
