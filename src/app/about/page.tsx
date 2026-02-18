"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <UnifiedNavbar active="about" />
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-14 px-6">
          <div className="max-w-[880px] mx-auto text-center">
            <h1 className="font-serif text-[clamp(32px,5vw,44px)] leading-tight mb-3">Steven Brandon</h1>
            <p className="text-slate-400 max-w-[550px] mx-auto">6RAR Infantry Veteran · PhD Candidate, Griffith University · Dual Australian-Barbadian Citizenship</p>
          </div>
        </section>

        {/* Bio + sidebar */}
        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h2 className="font-serif text-xl mb-2">The Story</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">I&apos;m a former 6RAR Infantry soldier who served in Queensland flood operations. After leaving the ADF, I spent years studying why development projects fail — and discovered a mathematical law that predicts it with 92.2% accuracy.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">My great-grandfather, Rev. Francis Godson MBE, helped establish Barbados&apos;s pension and social welfare system. I hold dual Australian-Barbadian citizenship. The countries I come from are directly affected by climate vulnerability and predatory finance. This work is personal.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">The Symbiotic Framework grew from a simple question: why do 91% of development projects fail? The answer — validated across 12,328 World Bank projects — is that extractive designs are mathematically guaranteed to fail. Symbiotic designs succeed. Zero exceptions.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">I&apos;m now building the institutional architecture to deploy this at scale — through the Sovereign Resilience Derivative, the SIDS Consortium, and COP31 — before the 2035–2045 convergence window closes.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/images/adf-flood-assist-final.jpg" alt="Private Steven Brandon — 7th Brigade flood assist" className="w-full h-auto" />
              </div>
              <p className="text-[11px] text-slate-400 text-center italic leading-snug">&ldquo;Whatever you choose to do in life, try to do it with as much joy as Private Steven Brandon when he&apos;s covered in mud helping his fellow Queenslanders&rdquo; — 7th Brigade</p>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-[11px] font-bold text-teal-600 uppercase tracking-wider mb-3">Credentials</h3>
                <ul className="space-y-2 text-[13px] text-slate-600">
                  {["PhD Candidate, Griffith University","Prof Brendan Mackey (IPCC AR7 Review Editor)","6RAR Infantry Veteran, ADF","3 SSRN Papers Published","Dual AU-BB Citizenship","Barbados PM Office Engagement","AEA Ignite $500K Applicant"].map(c => (
                    <li key={c} className="flex gap-2"><span className="text-teal-600 text-xs mt-0.5">✓</span>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="text-[11px] font-bold text-teal-600 uppercase tracking-wider mb-3">Contact</h3>
                <ul className="space-y-1.5 text-[13px] text-slate-600">
                  <li><a href="mailto:steven.brandon@connect.qut.edu.au" className="text-teal-600 hover:underline">steven.brandon@connect.qut.edu.au</a></li>
                  <li>+61 427 729 235</li>
                  <li><a href="https://ssrn.com/author=7801909" target="_blank" rel="noopener" className="text-teal-600 hover:underline">SSRN Author Profile →</a></li>
                  <li><a href="https://github.com/stevenbrandon88/LSR-NCC-Replication" target="_blank" rel="noopener" className="text-teal-600 hover:underline">GitHub Replication →</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage */}
        <section className="bg-white border-y border-slate-200 py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <h2 className="font-serif text-xl mb-4">Bilateral Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#F0FDFA] border border-teal-200 rounded-xl p-5">
                <h3 className="font-bold text-teal-800 text-[15px] mb-2">Australia</h3>
                <p className="text-[13px] text-teal-700 leading-relaxed">6RAR Infantry veteran. Queensland flood operations. Based in Algester, Brisbane. PhD at Griffith University under IPCC AR7 Review Editor. Engaging with Treasury, DFAT, and Minister Bowen&apos;s COP31 preparation team.</p>
              </div>
              <div className="bg-[#EFF6FF] border border-blue-200 rounded-xl p-5">
                <div className="flex gap-3 mb-2">
                  <img src="/images/francis-godson.jpg" alt="Rev. Francis Godson MBE" className="w-16 h-20 object-cover rounded-lg border border-blue-300" />
                  <div>
                    <h3 className="font-bold text-blue-800 text-[15px] mb-0.5">Barbados</h3>
                    <p className="text-[11px] text-blue-600 font-medium">Great-grandfather: Rev. Francis Godson MBE</p>
                  </div>
                </div>
                <p className="text-[13px] text-blue-700 leading-relaxed">Dual citizen. Rev. Godson established the national pension and social welfare system. The PM personally reviewed the SRD framework and referred it to the Ministry of Energy. First SRD pilot nation.</p>
                <img src="/images/francis-godson-drive.jpg" alt="Francis Godson Drive, Barbados" className="mt-2 w-full rounded-lg border border-blue-200" />
                <p className="text-[10px] text-blue-400 mt-1">Francis Godson Drive, Barbados — named in his honour</p>
              </div>
            </div>
          </div>
        </section>

        {/* Norfolk Island */}
        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <h2 className="font-serif text-xl mb-3">Prior Art — Norfolk Island 2017</h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-4">In 2017, through Solagift Technologies, I submitted EOI 08_17 to the Norfolk Island Regional Council for a distributed battery storage system — the same architecture now proposed for SIDS deployment. Government-validated but never implemented due to administrative delays.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[["3,427 kWh","Battery storage"],["119","Modular cabinets"],["15","Substations"],["$7–10M","Project value"]].map(([v,l]) => (
                <div key={l} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                  <div className="font-serif text-xl text-teal-600">{v}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-slate-500 mt-3">Same manufacturing partner, same architecture. Scaling: 1,800 pop → 280,000 (Barbados) → 32 million (38 SIDS).</p>
          </div>
        </section>

        <Footer/>
      </main>
    </>
  );
}
