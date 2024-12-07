"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size={"icon"}
        variant={"ghost"}
        className={cn("rounded-xl", className)}
      >
        <Moon />
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleTheme}
      size={"icon"}
      variant={"ghost"}
      className={cn("rounded-xl", className)}
    >
      {resolvedTheme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};
