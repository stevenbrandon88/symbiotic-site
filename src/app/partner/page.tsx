"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  return (
    <>
      <UnifiedNavbar active="partner" />
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-14 px-6">
          <div className="max-w-[880px] mx-auto text-center">
            <div className="inline-block bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold mb-4">Industry Partner</div>
            <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight mb-3">Manufacturing <span className="text-teal-400">Partner</span></h1>
            <p className="text-slate-400 max-w-[550px] mx-auto text-[15px]">Tier-1 certified heavy industry supplier · International quality accreditation · 120+ years operation · 22 patents</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[["Tier-1","Certified Supplier"],["75/100","Quality Score"],["120+","Years Operating"],["22","Patents Held"]].map(([v,l]) => (
                <div key={l} className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                  <div className="font-serif text-2xl text-teal-600">{v}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>

            {/* Capabilities + SRD Contribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="text-[12px] font-bold text-teal-600 uppercase tracking-wider mb-3">Capabilities</h3>
                <ul className="space-y-2 text-[14px] text-slate-600">
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Precision casting and forging for heavy industry</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Modular component manufacturing at scale</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Battery enclosure and substation fabrication</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>ISO 9001 quality management certified</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Direct export capability to Pacific region</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="text-[12px] font-bold text-teal-600 uppercase tracking-wider mb-3">SRD Contribution</h3>
                <ul className="space-y-2 text-[14px] text-slate-600">
                  <li className="flex gap-2"><span className="text-teal-500">•</span>In-kind: $50K engineering services</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Modular component specification for SIDS deployment</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Manufacturing quotation &amp; supply chain coordination</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Same supply chain as Norfolk Island 2017 proposal</li>
                  <li className="flex gap-2"><span className="text-teal-500">•</span>Quality audit valid to July 2026</li>
                </ul>
              </div>
            </div>

            {/* Norfolk connection */}
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-teal-800 text-[15px] mb-2">Norfolk Island Connection</h3>
              <p className="text-[14px] text-teal-700 leading-relaxed">This manufacturing partner provided component specifications for the 2017 Norfolk Island energy grid proposal (EOI 08_17) — 3,427 kWh battery storage across 119 modular cabinets and 15 substations. The same distributed architecture and supply chain now scales to 38 SIDS nations.</p>
            </div>

            {/* Disclosure */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h4 className="text-amber-700 font-bold text-[13px] mb-2">Disclosure</h4>
              <p className="text-[14px] text-amber-700 leading-relaxed mb-3">The relationship between the Lead Entrepreneur and the manufacturing partner is familial. This is fully disclosed in all grant applications and institutional documentation.</p>
              <p className="text-[13px] text-amber-600 leading-relaxed"><strong>Conflict mitigation:</strong> Independent procurement oversight, competitive benchmarking against alternative suppliers, and Griffith University ethics governance. The relationship provides genuine strategic advantage — direct access to internationally certified manufacturing capability without intermediary costs.</p>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </>
  );
}
