export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-8 px-6 text-center">
      <p className="text-slate-600 text-xs">© 2026 Symbiotic Framework · Steven Brandon · Griffith University</p>
      <div className="flex justify-center gap-5 mt-3">
        <a href="https://ssrn.com/author=7801909" target="_blank" rel="noopener" className="text-teal-500 text-xs hover:text-teal-400 no-underline">SSRN</a>
        <a href="https://github.com/stevenbrandon88/LSR-NCC-Replication" target="_blank" rel="noopener" className="text-teal-500 text-xs hover:text-teal-400 no-underline">GitHub</a>
        <a href="mailto:steven.brandon@connect.qut.edu.au" className="text-teal-500 text-xs hover:text-teal-400 no-underline">Contact</a>
      </div>
    </footer>
  );
}
