import { Apple, Grid2x2, Terminal, type LucideIcon } from "lucide-react";
import type { PlatformDownload } from "@/lib/site-config";

export const osIcons: Record<PlatformDownload["icon"], LucideIcon> = {
  windows: Grid2x2,
  apple: Apple,
  linux: Terminal,
};
