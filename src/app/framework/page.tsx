"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import Footer from "@/components/Footer";

const TOOLS = [
  {n:"01",name:"Diagnose",tool:"LSR Certification",d:"Screen projects before funding. Symbiotic = proceed. Extractive = reject. Proprietary multi-indicator assessment.",href:"https://certify.symbioticframework.com",icon:"🔬"},
  {n:"02",name:"Monitor",tool:"CASCADE Platform",d:"Track institutional resilience across 54 industries and 42 SIDS in real-time. Early warning system for cascading failure.",href:"https://cascade.symbioticframework.com",icon:"📡"},
  {n:"03",name:"Finance",tool:"SRD Calculator",d:"Model sovereign wealth fund projections. Transform climate grants into permanent citizen-owned wealth. Zero debt.",href:"https://srd.symbioticframework.com",icon:"💎"},
  {n:"04",name:"Build",tool:"SIDS Consortium",d:"38 nations, 68.9 million people. Pooled procurement. Shared infrastructure standards. Individual + collective dashboards.",href:"https://sids.symbioticframework.com",icon:"🏗️"},
  {n:"05",name:"Sustain",tool:"CUP Tracker",d:"Practitioner certification and competency uplift. 184,315 practitioners. Knowledge transfer. Institutional memory.",href:"https://cup.symbioticframework.com",icon:"🎓"},
];

export default function FrameworkPage() {
  return (
    <>
      <UnifiedNavbar active="framework" />
      <main>
        <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-12 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="font-serif text-[clamp(28px,4vw,42px)] leading-tight mb-3">Five-Stage Pipeline</h1>
            <p className="text-slate-400 text-[16px] max-w-[550px] mx-auto">A closed-loop system. Every stage feeds the next. Nothing leaks. Each tool is operational — click through to use it.</p>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-[900px] mx-auto space-y-4">
            {TOOLS.map(s=>(
              <a key={s.n} href={s.href} target="_blank" rel="noopener" className="block bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-2xl shrink-0 group-hover:bg-teal-100 transition-colors">{s.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-mono text-[11px] text-teal-600 tracking-wider">STAGE {s.n}</span>
                      <h3 className="text-[16px] font-bold text-slate-900">{s.name}</h3>
                      <span className="text-[12px] text-slate-400 ml-auto hidden sm:block">{s.tool} →</span>
                    </div>
                    <p className="text-[14px] text-slate-600 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* BRI Counter */}
        <section className="bg-[#0F172A] text-white py-10 px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-teal-400 mb-2">Strategic Context</div>
            <h2 className="font-serif text-2xl text-white mb-4">Belt &amp; Road vs Symbiotic Framework</h2>
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full text-sm">
                <thead><tr className="bg-white/[0.06]">
                  <th className="text-left p-3 text-slate-400 text-xs uppercase">Dimension</th>
                  <th className="text-left p-3 text-red-400 text-xs uppercase">BRI</th>
                  <th className="text-left p-3 text-teal-400 text-xs uppercase">Symbiotic</th>
                </tr></thead>
                <tbody>
                  {[["Financial structure","Debt accumulation","Wealth creation (SWF)"],["Default outcome","Asset seizure","Revenue prevents default"],["Long-term position","Dependent debtor","Equity owner"],["Success rate","91% failure","92.2% success"]].map(([d,b,s])=>(
                    <tr key={d} className="border-t border-white/5"><td className="p-3 text-slate-300">{d}</td><td className="p-3 text-red-400">{b}</td><td className="p-3 text-teal-400">{s}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
