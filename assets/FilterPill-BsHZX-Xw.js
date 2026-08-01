import{j as s}from"./index-DjHysXWD.js";function v({label:o,active:t=!1,onClick:a,icon:l,count:r,disabled:i=!1,size:e="medium",type:n="button",className:x=""}){const d=`
    inline-flex items-center gap-1.5 min-h-[44px]
    ${e==="small"?"px-3":"px-3.5"} ${e==="small"?"py-1":"py-1.5"} ${e==="small"?"text-[11px]":"text-[12px]"} font-medium
    rounded-[var(--radius-pill)] border
    transition-all transition-motion-base
    disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8DC4A]/40
  `,p=t?"bg-[var(--text-primary)] text-white border-[var(--text-primary)] shadow-sm":"bg-white text-[var(--text-secondary)] border-[var(--control-border)] hover:border-[var(--control-border-hover)] hover:shadow-[var(--control-shadow-hover)] hover:-translate-y-[1px]";return s.jsxs("button",{"code-path":"src/components/FilterPill.tsx:44:5",type:n,onClick:a,disabled:i,"aria-pressed":t,className:`${d} ${p} ${x}`,children:[l,o,r!==void 0&&s.jsxs("span",{"code-path":"src/components/FilterPill.tsx:54:9",className:`text-[10px] ${t?"text-white/60":"text-[var(--text-muted)]"}`,children:["(",r,")"]})]})}export{v as F};
