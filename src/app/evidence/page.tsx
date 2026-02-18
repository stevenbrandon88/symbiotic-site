"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import Footer from "@/components/Footer";

export default function EvidencePage() {
  return (
    <>
      <UnifiedNavbar active="evidence" />
      <main>
        <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-16 pb-12 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="font-serif text-[clamp(28px,4vw,42px)] leading-tight mb-3">Evidence</h1>
            <p className="text-slate-400 text-[16px]">Three published papers. Open-source replication. Multi-dataset validation. Zero exceptions.</p>
          </div>
        </section>

        {/* Papers */}
        <section className="py-10 px-6">
          <div className="max-w-[800px] mx-auto space-y-4">
            {[
              {t:"The Law of Symbiotic Resilience",d:"12,328 World Bank IEG projects. Symbiotic designs succeed at 92.2%, extractive fail at 91%. Statistically significant (p < 0.001). Zero exceptions.",tags:["Development Finance","World Bank"]},
              {t:"The Sovereign Resilience Derivative",d:"Financial architecture transforming climate grants into citizen-owned sovereign wealth funds. Zero debt, zero capital outflow. Revenue certainty from import elimination.",tags:["Climate Finance","SIDS"]},
              {t:"Bundled Resilience Bonds & the SIDS Consortium",d:"Pooled procurement and shared infrastructure for 38 SIDS nations. 68.9 million population. Kardashev Scale framework for energy transition.",tags:["SIDS","Energy Transition"]},
            ].map(p=>(
              <div key={p.t} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="text-[16px] font-bold mb-1">{p.t}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed mb-3">{p.d}</p>
                <div className="flex gap-2">{p.tags.map(t=><span key={t} className="text-[11px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Replication */}
        <section className="bg-white border-y border-slate-200 py-10 px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif text-xl mb-3">Open-Source Replication</h2>
            <p className="text-slate-600 text-[14px] mb-4">The entire analysis can be independently replicated with a single command. Zero dependencies. MD5-verified data integrity.</p>
            <div className="bg-[#0F172A] rounded-lg p-5 font-mono text-sm text-teal-400">
              <p className="text-slate-500 mb-1"># Clone and verify</p>
              <p>git clone https://github.com/stevenbrandon88/LSR-NCC-Replication.git</p>
              <p>cd LSR-NCC-Replication && python run_replication.py</p>
              <p className="text-slate-500 mt-1"># 18/18 checks passing · 0 exceptions</p>
            </div>
          </div>
        </section>

        {/* Validation checklist */}
        <section className="py-10 px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif text-xl mb-4">Validation Summary</h2>
            <div className="space-y-2">
              {[["World Bank IEG (12,328 projects)","✓"],["Seshat Databank (109 civilisation tests)","✓ 96%"],["ADB IED (independent dataset)","✓"],["IPCC AR7 Review Editor supervising","✓"],["Barbados PM Office","✓ Referred to Min. of Energy"],["GitHub replication","✓ 18/18"],["SSRN papers","✓ 3 published"]].map(([i,s])=>(
                <div key={i} className="flex justify-between items-center bg-white border border-slate-200 rounded-lg px-4 py-2.5">
                  <span className="text-[14px] text-slate-700">{i}</span><span className="text-[13px] text-teal-600 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Norfolk Island */}
        <section className="bg-[#0F172A] text-white py-10 px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-serif text-xl text-white mb-3">Prior Art — Norfolk Island 2017</h2>
            <p className="text-slate-400 text-[14px] leading-relaxed mb-4">EOI 08_17 submitted to Norfolk Island Regional Council. Distributed battery storage system — same architecture now proposed for SIDS. Government-validated. Same manufacturing partner.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[["3,427 kWh","Battery"],["119","Cabinets"],["15","Substations"],["$7–10M","Value"]].map(([v,l])=>(
                <div key={l} className="bg-white/[0.05] border border-white/10 rounded-lg p-4 text-center"><div className="font-serif text-xl text-teal-400">{v}</div><div className="text-[11px] text-slate-500 mt-0.5">{l}</div></div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
