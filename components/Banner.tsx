import bannerImage from "../public/galatic-city.webp";
import Image from "next/image";

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`.trim();

const Banner = () => {
    return (
        <div className="relative overflow-hidden rounded mt-3 mb-4">
            <div className="absolute inset-0 z-0">
                <Image
                    src={bannerImage}
                    alt="Background"
                    className="object-cover"
                    layout="fill"
                />
            </div>

            <div className="z-10 flex flex-col space-y-5 relative backdrop-filter backdrop-blur bg-black bg-opacity-30 py-5 px-3 text-white">
                <h1 className="font-bold text-4xl text-center">Bus to Show&apos;s Events</h1>

                <p className="mx-auto max-w-4xl text-center">{text}</p>
            </div>
        </div>
    );
};

export default Banner;
