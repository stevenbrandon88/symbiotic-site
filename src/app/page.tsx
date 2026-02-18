"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <UnifiedNavbar active="home" />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F2937] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(13,148,136,0.12)_0%,transparent_60%)]"/>
          <div className="relative z-10 max-w-[780px] mx-auto text-center px-6 pt-20 pb-16">
            <div className="inline-block bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-1 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold mb-6">The Symbiotic Framework</div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] leading-[1.1] mb-4 tracking-tight">
              Development Projects Fail <span className="text-teal-400">91%</span> of the Time.<br/>We Know Why. We Fix It.
            </h1>
            <p className="text-[17px] text-slate-400 max-w-[580px] mx-auto mb-8 leading-relaxed">
              A mathematically validated framework that certifies resilient design, builds permanent sovereign wealth, and prepares nations for the 2035–2045 convergence.
            </p>
            <div className="flex justify-center gap-3 flex-wrap mb-10">
              <a href="/framework" className="px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold text-[15px] hover:bg-teal-500 transition-all no-underline">How It Works →</a>
              <a href="https://github.com/stevenbrandon88/LSR-NCC-Replication" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-all no-underline">Verify the Evidence →</a>
            </div>
            <div className="flex justify-center gap-10 flex-wrap">
              {[["12,328","Projects validated"],["92.2%","Symbiotic success"],["0%","SIDS extractive success"],["2035–45","Convergence window"]].map(([v,l])=>(
                <div key={l} className="text-center"><div className="font-serif text-2xl text-teal-400">{v}</div><div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{l}</div></div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDIBILITY */}
        <div className="bg-white border-b border-slate-200 py-4 px-6">
          <div className="max-w-[900px] mx-auto flex items-center justify-center gap-6 flex-wrap">
            {["Griffith University","IPCC AR7 Review Editor","Barbados PM Office","Tier-1 Industry Partner","3 SSRN Papers"].map(c=>(
              <span key={c} className="flex items-center gap-1.5 text-[12px] text-slate-500 font-medium whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600"/>{c}
              </span>
            ))}
          </div>
        </div>

        {/* THE DISCOVERY */}
        <section className="bg-[#0F172A] text-white py-12 px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-teal-400 mb-2">The Discovery</div>
            <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] leading-tight mb-4 text-white">The Law of Symbiotic Resilience</h2>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-3">Every system operates on a spectrum from <strong className="text-red-400">extractive</strong> (taking more than it returns) to <strong className="text-teal-400">symbiotic</strong> (strengthening what it depends on). This is measurable. It is predictive.</p>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-6">Analysis of <strong className="text-white">12,328 World Bank projects</strong> across 34 years: symbiotic designs succeed at 92.2%. Extractive designs fail at 91%. In SIDS, extractive projects have a <strong className="text-red-400">0% success rate</strong>.</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 text-center">
                <div className="text-[11px] uppercase tracking-wider text-red-400 font-bold mb-1">Extractive</div>
                <div className="font-serif text-4xl text-red-500">91%</div>
                <div className="text-xs text-red-300">Failure rate</div>
              </div>
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-5 text-center">
                <div className="text-[11px] uppercase tracking-wider text-teal-400 font-bold mb-1">Symbiotic</div>
                <div className="font-serif text-4xl text-teal-400">92.2%</div>
                <div className="text-xs text-teal-300">Success rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONVERGENCE WARNING */}
        <section className="bg-[#1C1017] text-white py-12 px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-red-500 mb-2">The Warning</div>
            <h2 className="font-serif text-[clamp(24px,3.5vw,34px)] leading-tight mb-4 text-red-200">The 2035–2045 Convergence</h2>
            <p className="text-red-100/80 text-[15px] leading-relaxed mb-6">Four systems are simultaneously approaching critical extraction thresholds. They are coupled — when one fails, it accelerates the others.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[{s:"Financial",w:"2035–45",c:"amber"},{s:"Climate",w:"2030–50",c:"red"},{s:"Energy",w:"2035–50",c:"purple"},{s:"Geopolitical",w:"2025–40",c:"blue"}].map(x=>(
                <div key={x.s} className="bg-white/[0.04] border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-white text-[13px] font-bold mb-1">{x.s}</div>
                  <div className={`font-mono text-sm font-bold ${x.c==="amber"?"text-amber-400":x.c==="red"?"text-red-400":x.c==="purple"?"text-purple-400":"text-blue-400"}`}>{x.w}</div>
                </div>
              ))}
            </div>
            <p className="text-red-100/70 text-[14px] leading-relaxed"><strong className="text-white">Post-collapse conditions are permanent.</strong> The easily accessible resources that bootstrapped the Industrial Revolution are gone. The intervention window is 2026–2035.</p>
          </div>
        </section>

        {/* MONEY FLOW */}
        <section className="py-12 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-teal-600 mb-2">The Opportunity</div>
            <h2 className="font-serif text-[clamp(24px,3.5vw,34px)] leading-tight mb-4">$300 Billion in Climate Finance. No Delivery Mechanism.</h2>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-6 max-w-[600px] mx-auto">The NCQG commits $300B/year by 2035. There is no credible framework ensuring it builds wealth instead of debt. The Symbiotic Framework is that mechanism.</p>
            <div className="bg-[#0F172A] rounded-xl p-6 text-left">
              {["UN Climate Funds ($300B/yr NCQG)","↓  Australian-led LSR certification standard","↓  SIDS infrastructure (renewables, import elimination)","↓  Savings → citizen-owned sovereign wealth funds","↓  Pooled investment ($45B+) → Australian green processing","↓  Certified green exports to EU / Japan / Korea"].map((s,i)=>(
                <p key={i} className={`text-[14px] mb-1 ${i===0?"text-teal-400 font-bold":"text-slate-400 pl-2"}`}>{s}</p>
              ))}
              <p className="text-white font-bold text-[14px] mt-3 text-center">Cost to Australia: $0 · Net benefit: $716M guarantee fees over 20 years</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-700 py-10 px-6 text-center">
          <div className="max-w-[500px] mx-auto">
            <h2 className="font-serif text-2xl text-white mb-3">Ready to see how it works?</h2>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="/framework" className="px-6 py-3 rounded-xl bg-white text-teal-700 font-semibold text-[15px] hover:bg-teal-50 transition-all no-underline">The Framework →</a>
              <a href="/pilot" className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-all no-underline">See Barbados Pilot →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
