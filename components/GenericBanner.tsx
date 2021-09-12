import bannerImage from "../public/galatic-city.webp";
import Image from "next/image";

export interface GenericBannerProps {
    img: StaticImageData
}

const GenericBanner: React.FC<GenericBannerProps> = ({ img, children }) => {
    return (
        <div className="relative overflow-hidden rounded mt-3 mb-4">
            <div className="absolute inset-0 z-0">
                <Image
                    src={img}
                    alt="Banner background"
                    className="object-cover"
                    layout="fill"
                />
            </div>

            <div className="z-10 flex flex-col space-y-5 relative backdrop-filter backdrop-blur bg-black bg-opacity-30 py-5 px-3 text-white">
                {children}
            </div>
        </div>
    );
}

export default GenericBanner;
