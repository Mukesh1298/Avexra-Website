"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

export default function WhyChooseUsSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    const [activated, setActivated] = useState(false);

    const retention = useCountUp(activated ? 98 : 0, 1400);
    const deployments = useCountUp(activated ? 40 : 0, 1400);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || activated) return;

                setActivated(true);

                // reveal cards slowly
                cardRefs.current.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("reveal-visible");
                    }, i * 280);
                });

                // animate connector after first card
                setTimeout(() => {
                    if (lineRef.current) {
                        lineRef.current.classList.remove("scale-y-0");
                        lineRef.current.classList.add("scale-y-100");
                    }
                }, 200);

                observer.disconnect();
            },
            {
                threshold: 0.45, // 🔑 VERY IMPORTANT
            }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [activated]);

    const features = [
        {
            icon: "psychology",
            title: "AI-First Architecture",
            desc: "LLMs and autonomous agents form the core — not plugins, but intelligence itself.",
        },
        {
            icon: "code",
            title: "Founder-Led Engineering",
            desc: "Direct collaboration with senior engineers who design and build your system.",
        },
        {
            icon: "terminal",
            title: "Custom-Built Core",
            desc: "Bespoke engines designed for your workflows. No templates. No shortcuts.",
        },
        {
            icon: "shield_lock",
            title: "Enterprise Security",
            desc: "SOC2-ready, isolated, and compliant infrastructure by design.",
        },
        {
            icon: "rocket_launch",
            title: "Rapid Deployment",
            desc: "Production systems delivered in weeks, not months.",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="why-choose-us"
            className="relative w-full bg-white py-28 lg:py-36 overflow-hidden"
        >
            {/* background glows */}
            <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 animate-ping" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Engineering the{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                Autonomy
                            </span>{" "}
                            of Tomorrow.
                        </h2>

                        <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                            We build adaptive, intelligent systems that scale with ambition —
                            engineered by real people, not templates.
                        </p>

                        <div className="flex items-center gap-4">
                            <button className="group flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-indigo-600 transition-all shadow-lg">
                                Start Building
                                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>

                            <button className="text-sm font-semibold text-slate-500 hover:text-slate-900 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all">
                                View Our Work
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200 max-w-sm">
                            <div>
                                <div className="text-3xl font-bold text-slate-900">
                                    {retention}%
                                </div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">
                                    Retention Rate
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-slate-900">
                                    {deployments}+
                                </div>
                                <div className="text-xs uppercase tracking-widest text-slate-500">
                                    Deployments
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-7 relative flex flex-col gap-6">
                        {/* connector */}
                        <div
                            ref={lineRef}
                            className="
                            absolute left-8 top-0 bottom-0 w-[2px]
                            bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent
                            origin-top scale-y-0 transition-transform duration-[900ms]
                            hidden md:block
                        "
                        />

                        {features.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => el && (cardRefs.current[i] = el)}
                                className="
                                group
                                reveal-on-scroll
                                glass-card
                                rounded-3xl p-8
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-2xl
                                "
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-indigo-600 text-3xl">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="
                                            text-xl
                                            font-bold
                                            text-slate-900
                                            mb-2
                                            transition-colors
                                            group-hover:text-indigo-600
                                            ">
                                            {item.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
