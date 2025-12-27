import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

/**
 * 🔹 STATIC CAROUSEL (TEMP)
 * Using public images:
 *  - /car.jpg
 *  - /elec.png
 *  - /fashion.jpg
 *
 * 🔸 Dynamic carousel (items from DB) is commented out
 *    and can be re-enabled later when Filament is fixed
 */

const Carousel = ({ items = [] }) => {
    // ===============================
    // 🔹 STATIC SLIDES (TEMP)
    // ===============================
    const staticSlides = [
        {
            id: 1,
            image: "/car.jpg",
            link: "/category/vehicles",
            name: "Vehicles",
        },
        {
            id: 2,
            image: "/elec.png",
            link: "/category/electronics",
            name: "Electronics",
        },
        {
            id: 3,
            image: "/fashion.jpg",
            link: "/category/fashion",
            name: "Fashion",
        },
    ];

    const slides = staticSlides; // 🔥 switch back later

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!slides.length) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    if (!slides.length) return null;

    return (
        <div className="w-full py-6">
            {/* CONTAINER */}
            <div className="relative mx-auto overflow-hidden shadow max-w-7xl rounded-2xl">

                {/* SLIDES */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <Link
                            key={slide.id}
                            href={slide.link}
                            className="block min-w-full"
                        >
                            <img
                                src={slide.image}
                                alt={slide.name}
                                className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover"
                            />
                        </Link>
                    ))}
                </div>

                {/* DOTS */}
                <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2.5 h-2.5 rounded-full transition ${
                                current === index
                                    ? "bg-white"
                                    : "bg-white/50 hover:bg-white"
                            }`}
                        />
                    ))}
                </div>

                {/* PREV */}
                <button
                    onClick={() =>
                        setCurrent(
                            current === 0 ? slides.length - 1 : current - 1
                        )
                    }
                    className="absolute flex items-center justify-center text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/40 w-9 h-9 hover:bg-black/60"
                >
                    ‹
                </button>

                {/* NEXT */}
                <button
                    onClick={() =>
                        setCurrent((current + 1) % slides.length)
                    }
                    className="absolute flex items-center justify-center text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/40 w-9 h-9 hover:bg-black/60"
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default Carousel;
