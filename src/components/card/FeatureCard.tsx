import Image, { StaticImageData } from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

interface Props {
    image: StaticImageData;
    label: string;
    delay: number;
}


const FeatureCard = ({ image, label, delay }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delay }}
            viewport={{ once: false, amount: 0.3 }}
            className="outline-2 outline-[#E6E6E6] p-5 rounded-md flex-1/2"
        >
            <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
            </div>

            <div className="py-[14px]">
                <Image className="w-full" src={image} alt="Premium demo preview" />
            </div>

            <div className="flex justify-between items-center">
                <h1>Elite Commerce</h1>

                <Button

                    label={label}
                    className="md:py-2 bg-gradient-to-r from-red-500 to-orange-400 hover:from-[#0CE47F] hover:to-[#01904D] duration-300 transform transition-colors  text-white lg:px-3.5 py-1 px-2.5 whitespace-nowrap lg:text-base md:text-sm rounded-full outline-2 outline-[#E6E6E6] cursor-pointer"
                />
            </div>
        </motion.div>
    );
};
export default FeatureCard;