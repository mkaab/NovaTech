import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-white/80 transition">
            NOVA
          </Link>
        </div>
        
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link className="transition hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/support">
                Support
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-white/50">&copy; 2026 Nova Technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}
