"use client";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import { Label, Title } from "@/components/Section";
import Footer from "@/components/Footer";

export default function BarbadosPage() {
  return (
    <>
      <UnifiedNavbar active="pilot" />
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#164E63] to-[#0F172A] text-white py-16 px-6">
          <div className="max-w-[880px] mx-auto text-center">
            <div className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold mb-6">Pilot Nation</div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] leading-tight mb-5">Barbados</h1>
            <p className="text-lg text-slate-300 max-w-[650px] mx-auto mb-4">Population 287,000 · 15th most water-scarce country on Earth · 94% fossil fuel dependent · Pilot suitability: <strong className="text-teal-400">Excellent</strong></p>
            <p className="text-[16px] text-slate-400 max-w-[600px] mx-auto">Barbados is already building everything we propose. They just need the financial architecture to connect it all — and the hydrogen pathway to turn surplus into export revenue.</p>
          </div>
        </section>

        {/* What Barbados is already doing */}
        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label>Already Underway</Label>
            <Title>Barbados Is Building the Infrastructure</Title>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">The Barbados National Energy Policy (BNEP) targets 100% renewable energy. The Renewstable project is under construction. Community solar is rolling out across 11 parishes. What&apos;s missing is the financial mechanism that captures the savings and converts them into permanent sovereign wealth.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { t: 'Renewstable Project', v: '$350M · 50MW Solar + Storage', d: 'Under construction. Operational mid-2028. Currently designed for grid storage only — the framework extends this to hydrogen export.', s: '🔋', c: 'bg-amber-50 border-amber-200' },
                { t: 'BNEP 2030 Target', v: '100% Renewable Energy', d: 'Government target: 625MW renewable capacity by 2030. National grid is 249MW. Renewable penetration target exceeds 171% of domestic demand.', s: '☀️', c: 'bg-emerald-50 border-emerald-200' },
                { t: 'Community Solar', v: '50 Sites · 11 Parishes', d: '117MW of solar PV already connected. Community solar portfolio being deployed across 50 sites island-wide. Distributed architecture matches our Norfolk Island model.', s: '🏘️', c: 'bg-blue-50 border-blue-200' },
                { t: 'Blue Bond & Debt Swap', v: '$150M Blue Economy', d: 'Barbados pioneered the debt-for-nature swap with the IDB. The Bridgetown Initiative has reshaped the global climate finance conversation. PM Mottley leads SIDS advocacy.', s: '🌊', c: 'bg-cyan-50 border-cyan-200' },
              ].map(x => (
                <div key={x.t} className={`${x.c} border rounded-xl p-6`}>
                  <div className="text-2xl mb-2">{x.s}</div>
                  <h3 className="font-bold text-[15px] mb-1">{x.t}</h3>
                  <div className="text-sm font-semibold text-teal-700 mb-2">{x.v}</div>
                  <p className="text-[13px] text-slate-600 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What the framework adds */}
        <section className="bg-[#0F172A] text-white py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label className="text-teal-400">The Gap</Label>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight mb-5 text-white">What the Symbiotic Framework Adds</h2>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-8">Not a new programme — an operating system that connects everything Barbados is already building into a self-reinforcing wealth engine.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: 'SRD Financial Architecture', d: 'Convert Renewstable energy savings, Blue Bond proceeds, and fuel import reductions into a permanent citizen-owned Sovereign Wealth Fund. Sabbatical cycles prevent debt traps.', tag: 'Finance', tc: 'text-amber-400', bc: 'border-amber-500/30' },
                { t: 'LSR Certification', d: 'Score every infrastructure project against validated criteria before funding is committed. Catch extractive design patterns. Ensure 92.2% predicted success rate.', tag: 'Diagnose', tc: 'text-teal-400', bc: 'border-teal-500/30' },
                { t: 'Hydrogen Export Pathway', d: 'When generation exceeds domestic demand, excess powers electrolysers. Green hydrogen converts to ammonia for export to EU and Australian markets — earning CBAM-exempt premium pricing.', tag: 'Export', tc: 'text-purple-400', bc: 'border-purple-500/30' },
                { t: 'Integrated Water Infrastructure', d: 'Road corridor network captures 2.2–2.75 billion litres per year across 177km. Replaces 75% of drinking water demand. Refills depleting aquifers. Prevents coral reef runoff damage.', tag: 'Water', tc: 'text-blue-400', bc: 'border-blue-500/30' },
              ].map(x => (
                <div key={x.t} className={`bg-white/[0.04] border ${x.bc} rounded-xl p-6`}>
                  <span className={`text-[10px] uppercase tracking-[0.15em] font-bold ${x.tc} mb-2 block`}>{x.tag}</span>
                  <h3 className="text-white font-bold text-[15px] mb-2">{x.t}</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy + Water + Hydrogen — the integrated picture */}
        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label>Integrated Architecture</Label>
            <Title>Energy → Water → Hydrogen → Export</Title>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">When you combine Barbados&apos;s existing plans with the Symbiotic Framework, you get 100% energy independence, 75% water independence, AND a hydrogen export market — all from the same infrastructure.</p>

            <div className="space-y-3 mb-8">
              {[
                { step: '01', t: '100% Renewable Energy', d: 'BNEP 625MW target covers domestic demand 2.5×. Renewstable + community solar + distributed storage.', c: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                { step: '02', t: '75% Water from Road Corridors', d: '177km ring-ridge-runoff network captures 2.2–2.75B litres/yr. Aquifers refill. Saltwater intrusion stops. Coral reefs protected from nutrient runoff.', c: 'bg-blue-50 border-blue-200 text-blue-700' },
                { step: '03', t: 'Surplus Energy → Electrolysis', d: 'Everything above domestic demand feeds PEM electrolysers. Purified water from road corridors provides feedstock. 57.5 kWh per kg of hydrogen.', c: 'bg-purple-50 border-purple-200 text-purple-700' },
                { step: '04', t: 'Hydrogen → Ammonia → Export', d: 'Green hydrogen converts to ammonia (NH₃) for safe containerised shipping. Target markets: EU industrial (CBAM-exempt), Australian smelters (green aluminium/steel).', c: 'bg-amber-50 border-amber-200 text-amber-700' },
                { step: '05', t: 'Revenue → Sovereign Wealth Fund', d: 'All savings + export revenue flow into the SRD → citizen-owned SWF. Barbados transitions from energy importer to energy exporter — permanently.', c: 'bg-teal-50 border-teal-200 text-teal-700' },
              ].map(x => (
                <div key={x.step} className={`${x.c} border rounded-xl p-5 flex gap-4 items-start`}>
                  <span className="font-mono text-2xl font-bold opacity-40">{x.step}</span>
                  <div><h4 className="font-bold text-[15px] mb-1">{x.t}</h4><p className="text-[13px] opacity-80 leading-relaxed">{x.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hydrogen economics */}
        <section className="bg-white border-y border-slate-200 py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label>Export Economics</Label>
            <Title>Green Hydrogen Revenue Potential</Title>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">Barbados&apos;s &ldquo;problems&rdquo; — too much sun, too much rain — are the raw inputs for a hydrogen export economy. The EU Carbon Border Adjustment Mechanism (CBAM) creates premium pricing for green hydrogen that makes this viable today.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-50">
                  <th className="text-left p-3 text-slate-500 text-xs uppercase">Scenario</th>
                  <th className="text-left p-3 text-slate-500 text-xs uppercase">Renewable MW</th>
                  <th className="text-left p-3 text-slate-500 text-xs uppercase">× Island Demand</th>
                  <th className="text-left p-3 text-slate-500 text-xs uppercase">H₂ Output (t/yr)</th>
                  <th className="text-left p-3 text-slate-500 text-xs uppercase">Green Steel Revenue</th>
                </tr></thead>
                <tbody>
                  {[
                    ['Conservative', '800', '1.7×', '12,035', '$95M/yr'],
                    ['Moderate', '1,200', '2.5×', '24,777', '$196M/yr'],
                    ['Aggressive', '2,000', '4.1×', '50,261', '$398M/yr'],
                  ].map(([s, mw, x, h2, rev]) => (
                    <tr key={s} className="border-t border-slate-100">
                      <td className="p-3 font-medium">{s}</td>
                      <td className="p-3 text-slate-600">{mw}</td>
                      <td className="p-3 text-slate-600">{x}</td>
                      <td className="p-3 text-teal-600 font-semibold">{h2}</td>
                      <td className="p-3 text-teal-600 font-bold">{rev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500">At the aggressive level, green steel revenue = 5.3% of Barbados&apos;s GDP. The aggressive scenario needs just 8.3 km² of utility solar — 1.9% of the island&apos;s land area.</p>
          </div>
        </section>

        {/* SRD Projections */}
        <section className="bg-[#0F172A] text-white py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label className="text-teal-400">SRD Projections</Label>
            <h2 className="font-serif text-3xl leading-tight mb-6 text-white">Barbados Sovereign Wealth Fund</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                ['$500M', 'Initial deployment'],
                ['$110.5M/yr', 'Net SWF contribution'],
                ['Year 5', 'Investment recovered'],
                ['Year 8', 'SWF exceeds GDP'],
                ['Year 20', '$2,000+/citizen dividend'],
                ['Year 35', '$110B terminal value'],
              ].map(([v, l]) => (
                <div key={l} className="bg-white/[0.05] border border-white/10 rounded-xl p-5 text-center">
                  <div className="font-serif text-2xl text-teal-400">{v}</div>
                  <div className="text-xs text-slate-500 mt-1">{l}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed">Cost to Australia: $0. The sovereign guarantee is a contingent liability that is never called because the revenue model (import elimination + renewable energy savings + hydrogen export) provides certainty of service. Net benefit to Australia: $716M in guarantee fees over 20 years.</p>
          </div>
        </section>

        {/* Why Barbados */}
        <section className="py-10 px-6">
          <div className="max-w-[880px] mx-auto">
            <Label>Strategic Value</Label>
            <Title>Why Barbados Is the Ideal Pilot</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: 'Bridgetown Initiative', d: 'PM Mottley has reshaped the global climate finance conversation. Barbados has credibility no other SIDS nation has.' },
                { t: 'Energy Vulnerability = Opportunity', d: '94% fossil fuel dependent. 20%+ of GDP on energy imports. Transformation potential is enormous.' },
                { t: 'Institutional Capacity', d: 'Governance quality 7.2/10. Multi-party democracy. Peaceful transitions. Can implement sophisticated financial structures.' },
                { t: 'Regional Gateway', d: 'Success opens 14 additional CARICOM nations. Caribbean demonstration → Pacific expansion → 38 SIDS.' },
                { t: 'Dual Citizenship Access', d: 'Lead Entrepreneur holds dual Australian-Barbadian citizenship. PM&apos;s office has already reviewed the SRD framework and referred it to the Ministry of Energy.' },
                { t: 'COP31 Timing', d: 'Pilot data available for COP31 (Antalya, November 2026). Australia leads negotiations. Barbados pilot is the proof point.' },
              ].map(x => (
                <div key={x.t} className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[15px] mb-2">{x.t}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-teal-700 text-white py-10 px-6 text-center">
          <div className="max-w-[600px] mx-auto">
            <h2 className="font-serif text-3xl mb-6">Pilot Timeline</h2>
            <div className="space-y-4 text-left">
              {[
                ['Q1 2026', 'Framework agreement with Griffith University and Ministry of Energy'],
                ['Q2 2026', 'LSR certification of existing Barbados infrastructure projects'],
                ['Q3 2026', 'SRD financial architecture design with Treasury/Central Bank'],
                ['Nov 2026', 'Present pilot results at COP31 — Antalya, Turkey'],
                ['2027–28', 'Renewstable operational. SWF begins accumulating. Hydrogen pathway design.'],
                ['2030', '100% renewable. Water corridors under construction. Export hydrogen.'],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <span className="text-teal-200 font-mono text-sm font-bold min-w-[80px] pt-0.5">{t}</span>
                  <p className="text-teal-50 text-[14px] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
