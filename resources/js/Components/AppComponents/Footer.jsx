import React from "react";
import { Link } from "@inertiajs/react";

import {
    FaFacebookF,
    FaYoutube,
    FaPinterestP,
    FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300">
            {/* TOP LINKS */}
            <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl py-14 sm:grid-cols-2 md:grid-cols-4">

                {/* About */}
                <div>
                    <h3 className="mb-4 font-semibold text-white">About Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-white">About Gumbazar</Link></li>
                        <li><Link href="/business" className="hover:text-white">Gumbazar for Business</Link></li>
                        <li><Link href="/career" className="hover:text-white">Careers</Link></li>
                        <li><Link href="#" className="hover:text-white">Media & Press</Link></li>
                        <li><Link href="advertising" className="hover:text-white">Advertising</Link></li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="mb-4 font-semibold text-white">Help & Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link href="'safety" className="hover:text-white">Safety Tips</Link></li>
                        <li><Link href="/policy" className="hover:text-white">Policies</Link></li>
                        {/* <li><Link href="#" className="hover:text-white">Privacy Notice</Link></li> */}
                        <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>

                {/* More */}
                <div>
                    <h3 className="mb-4 font-semibold text-white">More From Us</h3>
                    <ul className="space-y-2 text-sm">
                        {/* <li><Link href="#" className="hover:text-white">Lifestyle</Link></li> */}
                        <li><Link href="#" className="hover:text-white">Buying Guides</Link></li>
                        {/* <li><Link href="#" className="hover:text-white">Reviews</Link></li> */}
                        <li><Link href="#" className="hover:text-white">Sell Faster</Link></li>
                        <li><Link href="#" className="hover:text-white">Community</Link></li>
                    </ul>
                </div>

                {/* Apps */}
                <div>
                    <h3 className="mb-4 font-semibold text-white">Mobile Apps</h3>
                    <div className="space-y-3">
                        <a href="#" className="block w-36">
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="App Store"
                            />
                        </a>
                        <a href="#" className="block w-36">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                            />
                        </a>
                    </div>
                    <p className="mt-4 text-sm cursor-pointer hover:text-white">
                        More about our apps
                    </p>
                </div>
            </div>

            {/* SOCIAL */}
            <div className="py-8 border-t border-white/10">
                <div className="px-6 mx-auto text-center max-w-7xl">
                    <p className="mb-4 text-sm text-gray-400">
                        Join the Gumbazar Community
                    </p>

<div className="flex justify-center gap-6 text-xl">
    <a href="#" className="transition hover:text-white">
        <FaFacebookF />
    </a>
    <a href="#" className="transition hover:text-white">
        <FaInstagram />
    </a>
    <a href="#" className="transition hover:text-white">
        <FaXTwitter />
    </a>
    <a href="#" className="transition hover:text-white">
        <FaYoutube />
    </a>
    <a href="#" className="transition hover:text-white">
        <FaPinterestP />
    </a>
</div>

                </div>
            </div>

            {/* LEGAL */}
            <div className="py-8 text-xs text-gray-400 border-t border-white/10">
                <div className="px-6 mx-auto space-y-4 leading-relaxed text-center max-w-7xl">

                    <p>
                        © {new Date().getFullYear()} Gumbazar. All rights reserved.
                    </p>

                    <p>
                        Gumbazar is a marketplace platform where users can post and browse listings.
                        We do not verify user-generated content. Always meet in safe locations and
                        verify products before purchase.
                    </p>

                    <p>
                        Registered Office: Dhaka, Bangladesh. VAT registration and business
                        compliance details will be provided as required by law.
                    </p>

                    <p className="flex flex-wrap justify-center gap-4 text-blue-400">
                        <Link href="#" className="hover:underline">Terms of Use</Link>
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Cookie Policy</Link>
                        <Link href="#" className="hover:underline">Privacy Settings</Link>
                    </p>

                </div>
            </div>
        </footer>
    );
}
