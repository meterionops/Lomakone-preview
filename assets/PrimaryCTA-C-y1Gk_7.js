import{j as a,L as m}from"./index-DjHysXWD.js";function v({children:l,href:s,onClick:c,icon:e,iconPosition:r="right",size:t="medium",fullWidth:p=!1,ariaLabel:n,className:x=""}){const o=`
    inline-flex items-center justify-center gap-2
    ${t==="small"?"px-5":t==="large"?"px-8":"px-6"} ${t==="small"?"py-2.5":t==="large"?"py-3.5":"py-3"} ${t==="small"?"text-[13px]":"text-[14px]"} font-semibold
    rounded-[var(--radius-pill)]
    bg-[var(--cta-bg-primary)] text-[var(--cta-text-primary)]
    shadow-[var(--cta-shadow)]
    transition-all transition-motion-base
    hover:shadow-[var(--cta-shadow-hover)]
    hover:-translate-y-[1px]
    focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#C8DC4A]/40
    active:translate-y-0
    ${p?"w-full":""}
    ${x}
  `,i=a.jsxs(a.Fragment,{children:[r==="left"&&e,a.jsx("span",{"code-path":"src/components/PrimaryCTA.tsx:49:7",children:l}),r==="right"&&e]});return s?a.jsx(m,{"code-path":"src/components/PrimaryCTA.tsx:56:7",to:s,"aria-label":n,className:o,children:i}):a.jsx("button",{"code-path":"src/components/PrimaryCTA.tsx:67:5",type:"button",onClick:c,"aria-label":n,className:o,children:i})}export{v as P};
