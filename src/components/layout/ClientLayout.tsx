"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
            >
                <Navbar />
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
