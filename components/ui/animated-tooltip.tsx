"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  icon: string;
  href?: string;
  className?: string;
  rotate?: number;
};

const AnimatedTooltip = ({ label, icon, href, className, rotate }: Props) => {
  const iconVariants = {
    initial: {
      opacity: 0,
      x: "-50%",
      y: -25,
      filter: "blur(5px)",
    },
    hover: {
      opacity: 1,
      x: "-50%",
      y: -40,
      filter: "blur(0px)",
      rotate: rotate ?? 0,
    },
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("relative inline-block", className)}
      initial="initial"
      whileHover="hover"
    >
      {label}
      <motion.span
        className="absolute left-1/2 z-50 size-8 select-none"
        variants={iconVariants}
      >
        <Image
          src={icon}
          alt={label}
          className="rounded"
          width={100}
          height={100}
        />
      </motion.span>
    </motion.a>
  );
};

export default AnimatedTooltip;
