import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import Carousel from "@/Components/HomeComponents/Carousel";
import { Link } from "@inertiajs/react";

const Welcome = ({ carousels, categories }) => {
    return (
        <div>
            <Navbar />

            {/* Carousel */}
            <section className="w-full">
                <Carousel items={carousels} />
            </section>

            {/* Categories */}
            <section className="py-14 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl">
                    <h2 className="mb-8 text-3xl font-bold tracking-tight">
                        Browse Categories
                    </h2>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={route("category.show", category.slug)}
                                className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm group hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="w-full aspect-[4/4] overflow-hidden">
                                    <img
                                        src={category.thumbnail}
                                        alt={category.name}
                                        className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Title */}
                                <div className="p-3 text-center">
                                    <h3 className="font-semibold text-gray-800 text-md">
                                        {category.name}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Welcome;
