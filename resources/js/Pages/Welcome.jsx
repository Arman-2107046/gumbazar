import Footer from "@/Components/AppComponents/Footer";
import Navbar from "@/Components/AppComponents/Navbar";
import Carousel from "@/Components/HomeComponents/Carousel";

const Welcome = ({carousels}) => {
    return (
        <div>
            <Navbar />

            <section className="w-full">
                <Carousel items={carousels} />
            </section>

            <section className="h-[100vh]"></section>
            <Footer />
        </div>
    );
};

export default Welcome;
