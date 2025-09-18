import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from "lucide-react";

const WhoWeAre = () => {
    return (
        <section
            id="who-we-are"
            className="py-20 bg-white/90 rounded-[80px] shadow-sm"
        >
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Collage Images (Left Side) */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Team working together"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            alt="Creative collaboration"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg -mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                            alt="Modern office space"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                            alt="Team brainstorming"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Text Content (Right Side) */}
                <div className="lg:col-span-6">
                    <div className="mb-6">
                        <span className="bg-primary/10 text-black px-4 py-2 rounded-full text-sm font-medium">
                            Who We Are
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-black mb-6">
                        We’re Passionate About{" "}
                        <span className="text-black">Building Solutions</span>
                    </h2>

                    <p className="text-lg text-black leading-relaxed mb-4">
                        At <span className="text-black font-semibold">Samayu Solutions</span>,
                        we believe in creating digital experiences that inspire, connect, and drive growth.
                        Our team of experts collaborates with brands worldwide to craft custom strategies,
                        modern web solutions, and innovative products.
                    </p>

                    <p className="text-lg text-black leading-relaxed mb-8">
                        Whether it’s building cutting-edge websites, designing scalable platforms, or
                        delivering top-notch support, we’re here to help businesses achieve more and
                        grow smarter with technology.
                    </p>


                    <Button size="lg" className="btn-hero group">
                        Learn More About Us
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
