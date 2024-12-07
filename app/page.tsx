import AnimatedTooltip from "@/components/ui/animated-tooltip";

export default function PricingPage() {
  return (
    <>
      <div>This is the content</div>

      <footer className="absolute bottom-3.5 mx-auto flex items-center gap-[0.5ch] left-1/2 -translate-x-1/2 text-center text-muted-foreground">
        <span>Crafted by</span>
        <AnimatedTooltip
          label="Ayman Echakar"
          className="font-semibold text-foreground transition-colors duration-300 ease-out"
          icon={"/icons/ayman-favicon.svg"}
          href="https://github.com/aymanch-03"
        />
      </footer>
    </>
  );
}
