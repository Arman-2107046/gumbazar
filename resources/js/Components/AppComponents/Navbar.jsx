import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <nav className="w-full bg-white border-b">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="flex items-center justify-between h-16">

                    {/* LEFT: Logo + Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-blue-600"
                        >
                            <img src="logo.png" className="h-8"/>
                        </Link>

                        {/* NEW: All Ads */}
                  {/* NEW: All Ads */}
<Link
    href="/all-ads"
    className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-700 transition"
>
    All Ads
</Link>

                        <button className="text-sm text-gray-700 hover:text-black">
                            Shop by <br/>
                            category
                        </button>
                    </div>

                    {/* CENTER: Search */}
                    <form className="flex flex-1 mx-6">
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

                    {/* RIGHT: Auth Actions */}
                    <div className="flex items-center gap-4">
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
                                <Link
                                    href="/login"
                                    className="text-sm text-gray-700 hover:underline"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="text-sm text-gray-700 hover:underline"
                                >
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

                </div>
            </div>
        </nav>
    );
}
