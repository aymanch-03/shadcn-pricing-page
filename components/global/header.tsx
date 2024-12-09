import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="container mx-auto flex h-fit items-center justify-between py-4">
      <h1 className="flex items-center gap-2 text-xl font-bold">
        <Image
          src={"/icons/shadcn-logo.png"}
          width={30}
          height={30}
          className="select-none rounded border shadow-md"
          alt="shadcn/ui"
        />
        <span>Pricing Page</span>
      </h1>
      <nav className="flex items-center gap-4">
        <Link
          target="_blank"
          href="https://github.com/aymanch-03/shadcn-pricing-page"
        >
          <Button
            variant={"expandIcon"}
            Icon={ArrowRight}
            iconPlacement="right"
            className="h-fit rounded-full bg-[#222] font-semibold text-white hover:bg-[#222]/90"
          >
            Github
          </Button>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};
