import { cn } from "@/lib/utils";

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="animate-glow-pulse absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#4F46E5]/30 blur-[120px]" />
      <div className="absolute right-[5%] top-[10%] h-[380px] w-[380px] rounded-full bg-[#7C3AED]/25 blur-[110px]" />
      <div className="absolute left-[8%] top-[30%] h-[320px] w-[320px] rounded-full bg-[#06B6D4]/20 blur-[110px]" />
    </div>
  );
}
