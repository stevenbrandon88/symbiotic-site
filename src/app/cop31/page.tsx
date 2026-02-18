"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import Footer from "@/components/Footer";
import { Label, Title } from "@/components/Section";

export default function COP31Page() {
  return (
    <>
      <UnifiedNavbar active="cop31" />
      <main className="min-h-screen bg-[#F8FAFC]">
        <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F2937] text-white py-16 px-6">
          <div className="max-w-[880px] mx-auto text-center">
            <div className="inline-block bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6">9–20 November 2026 · Antalya, Turkey</div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] leading-tight mb-5">
              Climate change doesn&apos;t destroy countries.<br/>
              <span className="text-red-400">Cascading institutional failure does.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-[650px] mx-auto">That means the problem is actionable — and Australia leads the negotiations on the solution.</p>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label>The Cascade</Label>
            <Title>How Nations Actually Fail</Title>
            <div className="flex items-center gap-0 flex-wrap justify-center mb-8">
              {["Climate Event","Infrastructure Failure","Service Collapse","Economic Crisis","Governance Failure","State Collapse"].map((s,i)=>(
                <span key={s} className="flex items-center">
                  <span className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-[13px] text-red-700 font-medium whitespace-nowrap">{s}</span>
                  {i<5 && <span className="text-red-400 px-2 text-xl">→</span>}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h3 className="text-red-800 font-bold text-lg mb-3">Old Narrative (Hopeless)</h3>
                <p className="text-red-700 text-sm leading-relaxed">&ldquo;Climate change will devastate small island nations. We need more aid, more adaptation funding, more promises.&rdquo; This framing creates dependency. It treats nations as victims. It has failed for 30 years of COPs.</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
                <h3 className="text-teal-800 font-bold text-lg mb-3">New Narrative (Actionable)</h3>
                <p className="text-teal-700 text-sm leading-relaxed">&ldquo;Nations fail when institutions extract more than they regenerate. The mathematics are clear. The solution is to certify resilient design and build permanent sovereign wealth — before the window closes.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F172A] text-white py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label className="text-teal-400">Australia&apos;s Role</Label>
            <h2 className="font-serif text-3xl leading-tight mb-5 text-white">Why Australia Leading COP31 Changes Everything</h2>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-6">
              Chris Bowen has &ldquo;exclusive authority in relation to the negotiations&rdquo; at COP31. Australia selects co-facilitators, sets the agenda, and presides over the SIDS climate finance session. A Pre-COP will be hosted in a Pacific island nation.
            </p>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-8">
              Australia leading COP31 negotiations isn&apos;t just symbolic. Chris Bowen has exclusive authority over the negotiations — it&apos;s the moment where Australia can launch a new global standard for climate finance that serves Pacific interests while creating strategic returns for Australia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["1","Adopt LSR as the global certification standard for climate finance eligibility"],
                ["2","Launch Barbados as the first SRD pilot — live sovereign wealth fund by COP31"],
                ["3","Establish the SIDS Consortium as the partnership framework for 38 nations"],
                ["4","Open the Replication Academy — full transparency, anyone can verify"],
              ].map(([n,t])=>(
                <div key={n} className="bg-white/[0.06] border border-white/10 rounded-xl p-5 flex gap-4">
                  <span className="font-serif text-2xl text-teal-400">{n}</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label>Strategic Context</Label>
            <Title>China Is Signing Deals Now</Title>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
              BRI has secured port access and debt leverage across 12 Pacific nations. Every month without an alternative narrows Australia&apos;s strategic options. COP31 is the stage. The framework is validated. The architecture is ready.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-50">
                  <th className="text-left p-3 text-slate-500 text-xs uppercase">Dimension</th>
                  <th className="text-left p-3 text-red-500 text-xs uppercase">BRI</th>
                  <th className="text-left p-3 text-teal-600 text-xs uppercase">Symbiotic Framework</th>
                </tr></thead>
                <tbody>
                  {[["Financial structure","Debt accumulation","Wealth creation (SWF)"],["Default outcome","Asset seizure","Revenue prevents default"],["Long-term position","Dependent debtor","Equity owner"],["Success rate","91% failure","92.2% success"]].map(([d,b,s])=>(
                    <tr key={d} className="border-t border-slate-100"><td className="p-3 font-medium">{d}</td><td className="p-3 text-red-600">{b}</td><td className="p-3 text-teal-600">{s}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-y border-amber-200 py-10 px-6 text-center">
          <div className="max-w-[600px] mx-auto">
            <p className="text-amber-800 font-bold text-xl mb-3">The window is closing.</p>
            <p className="text-amber-700 text-[15px]">COP31: 9–20 November 2026. Nine months away. Every week of delay is a week China gains ground.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
