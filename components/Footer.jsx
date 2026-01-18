"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-200">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold tracking-tighter text-gray-900">
              Nabaraj<span className="text-red-600">.</span>
            </h2>
            <p className="text-sm text-gray-600 mt-2">Software Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div>
              <SocialLinks />
            </div>
            <p
              className={cn(
                "text-sm text-gray-500 mt-6",
                "before:content-['©'] before:mr-2",
              )}
            >
              {currentYear}{" "}
              <span className="text-red-600 font-semibold">Nabaraj Basnet</span>
              . All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
