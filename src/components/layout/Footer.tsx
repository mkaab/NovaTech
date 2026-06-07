import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold tracking-tighter text-white">NOVA</span>
        </div>
        
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link className="transition hover:text-white" href="/">
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/">
                Support
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/">
                Shipping
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" href="/">
                Terms
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-white/50">&copy; 2026 Nova Technologies. All rights reserved.</p>
      </div>
    </footer>
  )
}
