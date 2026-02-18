'use client';
import { useState } from 'react';
const M = 'https://symbioticframework.com';
const NAV = [
  { id:'home',      label:'Home',      href:M },
  { id:'framework', label:'Framework', href:M+'/framework' },
  { id:'evidence',  label:'Evidence',  href:M+'/evidence' },
  { id:'pilot',     label:'Pilot',     href:M+'/pilot' },
  { id:'cop31',     label:'COP31',     href:M+'/cop31', accent:true },
  { id:'partner',   label:'Partner',   href:M+'/partner' },
  { id:'about',     label:'About',     href:M+'/about' },
];
export default function UnifiedNavbar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#0b1121]/95 backdrop-blur-md border-b border-white/[0.06]" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center h-14">
          <a href={M} className="flex items-center gap-2 shrink-0 no-underline mr-8">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>
            </div>
            <span className="text-white font-bold text-[15px] tracking-tight hidden sm:block">Symbiotic Framework</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {NAV.map(n=>(
              <a key={n.id} href={n.href} className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors no-underline ${
                n.accent?'text-amber-400 hover:text-amber-300 hover:bg-amber-400/10'
                :active===n.id?'text-teal-400 bg-teal-400/10'
                :'text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}>{n.label}</a>
            ))}
          </nav>
          <button onClick={()=>setOpen(!open)} className="md:hidden p-2 text-gray-400 hover:text-white bg-transparent border-none cursor-pointer ml-auto" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open?<path d="M6 18L18 6M6 6l12 12"/>:<path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
        {open&&<div className="md:hidden pb-3 border-t border-white/[0.06]">
          {NAV.map(n=><a key={n.id} href={n.href} onClick={()=>setOpen(false)} className={`block px-4 py-2.5 text-sm font-medium no-underline ${n.accent?'text-amber-400':active===n.id?'text-teal-400':'text-gray-400'}`}>{n.label}</a>)}
        </div>}
      </div>
    </header>
  );
}
