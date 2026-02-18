import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Symbiotic Framework", description: "Certified climate resilience infrastructure. Validated on 12,328 projects." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="font-sans bg-[#F8FAFC] text-[#0F172A]">{children}</body></html>;
}
