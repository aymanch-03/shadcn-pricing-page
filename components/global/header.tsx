import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="container mx-auto py-4 flex items-center justify-between h-fit">
      <h1 className="text-xl font-bold">Pricing Component</h1>
      <nav className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          target="_blank"
          href="https://github.com/aymanch-03/pricing-component"
        >
          <Button
            variant={"expandIcon"}
            Icon={ArrowRight}
            iconPlacement="right"
            className="h-fit rounded-full bg-secondary font-semibold text-foreground hover:bg-secondary/70"
          >
            Github
          </Button>
        </Link>
      </nav>
    </header>
  );
};
