import { useState } from "react";
import { Heart, Share2, MapPin, Clock, AlertTriangle } from "lucide-react";
import Navbar from "@/Components/AppComponents/Navbar";
import Footer from "@/Components/AppComponents/Footer";

export default function AdShow({ ad, relatedAds = [] }) {
    const [current, setCurrent] = useState(0);
    const [showPhone, setShowPhone] = useState(false);

    const images = ad.images || [];

    const getImageSrc = (img) =>
        img.image_path.startsWith("http")
            ? img.image_path
            : `/storage/${img.image_path}`;

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-50">
                <div className="px-4 py-6 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* LEFT COLUMN - Main Content */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Image Gallery */}
                            {images.length > 0 && (
                                <div className="overflow-hidden bg-white shadow-sm rounded-2xl">
                                    {/* Main Image */}
                                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={getImageSrc(images[current])}
                                            alt={ad.title}
                                            className="w-full h-[500px] object-cover"
                                        />

                                        {/* Image Counter Badge */}
                                        <div className="absolute px-3 py-1.5 text-sm font-medium text-white rounded-lg bottom-4 right-4 bg-black/70 backdrop-blur-sm">
                                            {current + 1} / {images.length}
                                        </div>

                                        {/* Navigation Arrows */}
                                        {images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setCurrent(
                                                            current === 0
                                                                ? images.length -
                                                                      1
                                                                : current - 1
                                                        )
                                                    }
                                                    className="absolute text-2xl font-bold text-white transition-all -translate-y-1/2 rounded-full left-4 top-1/2 w-11 h-11 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                                                >
                                                    ‹
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        setCurrent(
                                                            (current + 1) %
                                                                images.length
                                                        )
                                                    }
                                                    className="absolute text-2xl font-bold text-white transition-all -translate-y-1/2 rounded-full right-4 top-1/2 w-11 h-11 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                                                >
                                                    ›
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* Thumbnails */}
                                    {images.length > 1 && (
                                        <div className="flex gap-2 p-4 overflow-x-auto">
                                            {images.map((img, index) => (
                                                <button
                                                    key={img.id}
                                                    onClick={() =>
                                                        setCurrent(index)
                                                    }
                                                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                                        index === current
                                                            ? "border-green-500 ring-2 ring-green-200"
                                                            : "border-gray-200 hover:border-gray-300"
                                                    }`}
                                                >
                                                    <img
                                                        src={getImageSrc(img)}
                                                        className="object-cover w-full h-full"
                                                        alt={`Thumbnail ${
                                                            index + 1
                                                        }`}
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Title & Price Card */}
                            <div className="p-6 bg-white shadow-sm rounded-2xl">
                                <div className="flex items-start justify-between mb-4">
                                    <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                                        {ad.title}
                                    </h1>
                                    <div className="flex gap-2">
                                        <button className="p-2 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                                            <Heart className="w-5 h-5 text-gray-600" />
                                        </button>
                                        <button className="p-2 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                                            <Share2 className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-4xl font-bold text-green-600">
                                        ৳ {Number(ad.price).toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4 text-sm text-gray-600 border-t">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        <span>
                                            {ad.location?.name ||
                                                "Location not specified"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        <span>
                                            Posted{" "}
                                            {new Date(
                                                ad.created_at
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Description Card */}
                            <div className="p-6 bg-white shadow-sm rounded-2xl">
                                <h2 className="mb-3 text-lg font-semibold text-gray-900">
                                    Description
                                </h2>
                                <p className="leading-relaxed text-gray-700 whitespace-pre-line">
                                    {ad.description ||
                                        "No description provided."}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - Sidebar */}
                        <div className="space-y-4">
                            {/* Seller Info Card */}
                            <div className="p-6 bg-white shadow-sm rounded-2xl">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-green-500 rounded-full">
                                        {ad.user?.name
                                            ?.charAt(0)
                                            .toUpperCase() || "S"}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            {ad.user?.name || "Seller"}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Member since{" "}
                                            {ad.user?.created_at
                                                ? new Date(
                                                      ad.user.created_at
                                                  ).getFullYear()
                                                : "2024"}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => setShowPhone(!showPhone)}
                                        className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-all bg-green-600 rounded-lg hover:bg-green-700"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        {showPhone && ad.whatsapp_number
                                            ? ad.whatsapp_number
                                            : "Show Phone Number"}
                                    </button>
{/* 
                                    <button className="flex items-center justify-center w-full gap-2 py-3 font-medium text-gray-700 transition-all bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>
                                        Chat with Seller
                                    </button> */}

                                    {ad.whatsapp_number && (
                                        <a
                                            href={`https://wa.me/${ad.whatsapp_number}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-all bg-gray-800 rounded-lg hover:bg-gray-900"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            WhatsApp
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Safety Tips Card */}
                            <div className="p-5 shadow-sm bg-amber-50 rounded-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                    <p className="font-semibold text-gray-900">
                                        Safety Tips
                                    </p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="text-amber-600">
                                            •
                                        </span>
                                        <span>
                                            Meet in a safe, public place
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-amber-600">
                                            •
                                        </span>
                                        <span>
                                            Check the item before you buy
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-amber-600">
                                            •
                                        </span>
                                        <span>
                                            Pay only after collecting the item
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Report Ad */}
                            <button className="flex items-center justify-center w-full gap-1 py-2 text-sm text-gray-500 transition-colors hover:text-red-600">
                                <AlertTriangle className="w-4 h-4" />
                                Report this ad
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RELATED ADS */}
            {relatedAds.length > 0 && (
                <div className="px-4 pb-12 mx-auto mt-4 max-w-7xl">
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">
                        Related Ads
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {relatedAds.map((item) => {
                            const image =
                                item.images?.[0]?.image_path?.startsWith("http")
                                    ? item.images[0].image_path
                                    : `/storage/${item.images?.[0]?.image_path}`;

                            return (
                                <a
                                    key={item.id}
                                    href={`/ads/${item.id}`}
                                    className="transition bg-white border shadow-sm rounded-xl hover:shadow-md"
                                >
                                    <div className="h-48 overflow-hidden bg-gray-100 rounded-t-xl">
                                        {item.images?.length > 0 && (
                                            <img
                                                src={image}
                                                alt={item.title}
                                                className="object-cover w-full h-full"
                                            />
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <h3 className="mb-1 text-sm font-semibold line-clamp-2">
                                            {item.title}
                                        </h3>

                                        <p className="mb-1 font-bold text-green-600">
                                            ৳{" "}
                                            {Number(
                                                item.price
                                            ).toLocaleString()}
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            {item.location?.name}
                                        </p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
