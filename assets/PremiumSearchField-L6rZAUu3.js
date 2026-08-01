import{j as e}from"./index-DjHysXWD.js";import{S as u}from"./search-D9PYyhoy.js";function b({value:r,onChange:o,placeholder:a="Hae...",ariaLabel:c,helperText:n,size:t="medium",leadingIcon:i,className:l=""}){const m=r.trim().length>0,d=t==="large"?"py-3.5":"py-3",x=t==="large"?"text-[15px]":"text-[14px]",s=t==="large"?"w-5 h-5":"w-[18px] h-[18px]";return e.jsxs("div",{"code-path":"src/components/PremiumSearchField.tsx:31:5",className:l,children:[e.jsxs("div",{"code-path":"src/components/PremiumSearchField.tsx:32:7",className:"relative",children:[e.jsx("div",{"code-path":"src/components/PremiumSearchField.tsx:33:9",className:`absolute left-3.5 top-1/2 -translate-y-1/2 ${s} text-[#C8DC4A] pointer-events-none`,children:i||e.jsx(u,{"code-path":"src/components/PremiumSearchField.tsx:34:27",className:s})}),e.jsx("input",{"code-path":"src/components/PremiumSearchField.tsx:36:9",type:"text",value:r,onChange:p=>o(p.target.value),placeholder:a,"aria-label":c||a,className:`
            w-full pl-10 pr-20 ${d} ${x}
            bg-[#FAF7F2] rounded-[var(--radius-control)]
            border border-[var(--control-border)]
            text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
            transition-all transition-motion-base
            focus:outline-none
            focus:border-[var(--control-border-focus)]
            focus:shadow-[var(--control-focus-ring)]
            hover:border-[var(--control-border-hover)]
          `}),m&&e.jsx("button",{"code-path":"src/components/PremiumSearchField.tsx:55:11",type:"button",onClick:()=>o(""),"aria-label":"Tyhjennä haku",className:`
              absolute right-3 top-1/2 -translate-y-1/2
              text-[11px] text-[var(--text-muted)]
              hover:text-[var(--text-primary)]
              bg-[var(--surface-muted)] hover:bg-[var(--accent-soft)]
              rounded-full px-3 py-1
              transition-colors transition-motion-fast
            `,children:"Tyhjennä"})]}),n&&e.jsx("p",{"code-path":"src/components/PremiumSearchField.tsx:73:9",className:"text-[11px] text-[var(--text-muted)] mt-2 ml-1",children:n})]})}export{b as P};
