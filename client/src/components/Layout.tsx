import { Link } from "wouter";
import ParticlesBackground from "./ParticlesBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#000428] relative">
      <div className="absolute inset-0 overflow-hidden">
        <ParticlesBackground />
      </div>
      <nav className="relative bg-primary/80 backdrop-blur-sm text-primary-foreground p-4 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold hover:text-blue-300 transition-colors">Working Links</a>
          </Link>
          <div className="flex gap-6">
            <Link href="/information">
              <a className="hover:text-blue-300 transition-colors">Information</a>
            </Link>
            <Link href="/ultraviolet">
              <a className="hover:text-blue-300 transition-colors">Ultraviolet</a>
            </Link>
            <Link href="/doge-unblocker">
              <a className="hover:text-blue-300 transition-colors">Doge Unblocker</a>
            </Link>
            <Link href="/holy-unblocker">
              <a className="hover:text-blue-300 transition-colors">Holy Unblocker</a>
            </Link>
            <Link href="/net-shield">
              <a className="hover:text-blue-300 transition-colors">Net Shield</a>
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4 relative z-10">{children}</main>
    </div>
  );
}