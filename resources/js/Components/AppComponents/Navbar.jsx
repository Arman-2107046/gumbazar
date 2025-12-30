import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b">
            <div className="px-4 mx-auto max-w-7xl">

                {/* TOP BAR */}
                <div className="flex items-center justify-between h-16">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.png" className="h-10" alt="Gumbazar" />
                        </Link>

                        {/* Desktop links */}
                        <div className="items-center hidden gap-4 md:flex">
                            <Link
                                href="/all-ads"
                                className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition"
                            >
                                All Ads
                            </Link>

                            <button className="text-sm text-gray-700 hover:text-black">
                                Shop by <br /> category
                            </button>
                        </div>
                    </div>

                    {/* CENTER SEARCH (Desktop) */}
                    <form className="flex-1 hidden mx-6 md:flex">
                        <input
                            type="text"
                            placeholder="Search for anything"
                            className="w-full px-4 py-2 border rounded-l-full focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 text-white bg-blue-600 rounded-r-full"
                        >
                            Search
                        </button>
                    </form>

                    {/* RIGHT (Desktop) */}
                    <div className="items-center hidden gap-4 md:flex">
                        {user ? (
                            <>
                                <Link
                                    href="/ads/create"
                                    className="px-4 py-2 text-sm text-white bg-green-600 rounded-full"
                                >
                                    Post Ad
                                </Link>

                                <Link
                                    href="/dashboard"
                                    className="text-sm text-gray-700 hover:underline"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="text-sm text-red-600 hover:underline"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="text-gray-700 hover:underline">
                                    Login
                                </Link>
                                <Link href="/register" className="text-gray-700  hover:underline">
                                    Register
                                </Link>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-sm text-white bg-green-600 rounded-full"
                                >
                                    Post Ad
                                </Link>
                            </>
                        )}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="pb-4 space-y-4 md:hidden">

                        {/* Mobile Search */}
                        <form className="flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 border rounded-l-lg focus:outline-none"
                            />
                            <button className="px-4 text-white bg-blue-600 rounded-r-lg">
                                Go
                            </button>
                        </form>

                        <Link href="/all-ads" className="block text-gray-700">
                            All Ads
                        </Link>

                        <button className="block text-left text-gray-700">
                            Shop by category
                        </button>

                        <hr />

                        {user ? (
                            <>
                                <Link href="/ads/create" className="block font-medium text-green-600">
                                    Post Ad
                                </Link>
                                <Link href="/dashboard" className="block text-gray-700">
                                    Dashboard
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="block text-left text-red-600"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="block text-gray-700">
                                    Login
                                </Link>
                                <Link href="/register" className="block text-gray-700">
                                    Register
                                </Link>
                                <Link href="/login" className="block font-medium text-green-600">
                                    Post Ad
                                </Link>
                            </>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
