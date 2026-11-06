"use client";

import { useEffect, useRef } from "react";

/* Нарисованные пёс и кот. Зрачки плавно следят за курсором;
   если мыши нет (телефон) — питомцы сами посматривают по сторонам. */

export function Pets() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    let lastMove = -1e9;
    // зрачки помечены data-eye="радиус хода" — находим их после отрисовки
    const eyes = Array.from(svg.querySelectorAll<SVGGElement>("[data-eye]")).map((el) => ({ el, r: Number(el.dataset.eye) }));

    const onMove = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect();
      // направление взгляда: от центра рисунка к курсору, -1..1
      tx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width * 0.6)));
      ty = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * 0.45)) / (r.height * 0.6)));
      lastMove = performance.now();
    };

    const loop = (now: number) => {
      if (now - lastMove > 3000) {
        // никто не водит мышью — смотрят сами
        const t = now / 1000;
        tx = Math.sin(t * 0.7) * 0.8;
        ty = Math.sin(t * 0.45 + 1) * 0.4;
      }
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      for (const eye of eyes) {
        eye.el.setAttribute("transform", `translate(${(x * eye.r).toFixed(2)} ${(y * eye.r).toFixed(2)})`);
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 400 380" className="absolute inset-[8%_4%_4%_4%] h-[88%] w-[92%]" aria-hidden="true">
      {/* пёс */}
      <g transform="translate(40 70)">
        <path className="wag" d="M200 250 q40 -10 52 -60" stroke="#c98a55" strokeWidth="20" strokeLinecap="round" fill="none" />
        <ellipse cx="120" cy="250" rx="110" ry="70" fill="#e0a06a" />
        <circle cx="120" cy="130" r="92" fill="#e0a06a" />
        <ellipse cx="40" cy="120" rx="30" ry="62" fill="#8a5a3b" transform="rotate(18 40 120)" />
        <ellipse cx="200" cy="120" rx="30" ry="62" fill="#8a5a3b" transform="rotate(-18 200 120)" />
        <ellipse cx="120" cy="165" rx="48" ry="36" fill="#f6dcc2" />
        <circle cx="88" cy="118" r="15" fill="#fff" />
        <circle cx="152" cy="118" r="15" fill="#fff" />
        <g data-eye="5"><circle cx="88" cy="118" r="9" fill="#2b1d14" /><circle cx="91" cy="115" r="2.5" fill="#fff" /></g>
        <g data-eye="5"><circle cx="152" cy="118" r="9" fill="#2b1d14" /><circle cx="155" cy="115" r="2.5" fill="#fff" /></g>
        <ellipse cx="120" cy="150" rx="16" ry="11" fill="#2b1d14" />
        <path d="M106 176 q14 14 28 0" stroke="#2b1d14" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M114 182 q6 18 12 0" fill="#ff8f9a" />
      </g>
      {/* кот */}
      <g transform="translate(225 150)">
        <ellipse cx="70" cy="185" rx="70" ry="45" fill="#4a4a5c" />
        <path d="M14 40 L26 -10 L58 26 Z M126 40 L114 -10 L82 26 Z" fill="#4a4a5c" />
        <path d="M24 30 L29 4 L46 24 Z M116 30 L111 4 L94 24 Z" fill="#ff9aa8" opacity=".55" />
        <circle cx="70" cy="80" r="62" fill="#4a4a5c" />
        <g className="blink">
          <ellipse cx="48" cy="76" rx="10" ry="13" fill="#ffd36e" />
          <ellipse cx="92" cy="76" rx="10" ry="13" fill="#ffd36e" />
          <g data-eye="4"><ellipse cx="48" cy="77" rx="3.2" ry="9" fill="#2b1d14" /></g>
          <g data-eye="4"><ellipse cx="92" cy="77" rx="3.2" ry="9" fill="#2b1d14" /></g>
        </g>
        <path d="M64 98 h12 l-6 7 z" fill="#ff9aa8" />
        <path d="M30 104 h-26 M30 112 h-24 M110 104 h26 M110 112 h24" stroke="#dcdce8" strokeWidth="2" />
      </g>
    </svg>
  );
}
