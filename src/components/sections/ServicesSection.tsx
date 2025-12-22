export default function ServicesSection() {
    return (
        <section
            id="services"
            className="font-sans text-slate-600 antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-primary selection:text-black"
        >
            <div className="fixed inset-0 pointer-events-none grid-bg z-0"></div>
            <section className="flex-grow flex flex-col items-center relative z-10">
                <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 md:py-22">
                    <div
                        className="flex flex-col items-center text-center gap-6 mb-24 max-w-4xl mx-auto fade-in-up"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                                ></span>
                                <span
                                    className="relative inline-flex rounded-full h-2 w-2 bg-primary"
                                ></span>
                            </span>
                            <span
                                className="text-xs font-semibold text-primary tracking-wide uppercase"
                            >AI Consulting &amp; Development</span
                            >
                        </div>
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
                        >
                            Powering the <br className="hidden md:block" />
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-500"
                            >Autonomous Enterprise</span
                            >
                        </h1>
                        <p
                            className="text-slate-500 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
                        >
                            We architect and deploy agentic AI systems that transform how
                            businesses operate, from predictive modeling to intelligent process
                            automation.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
                    >
                        <div
                            className="service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up delay-1 cursor-pointer"
                        >
                            <div
                                className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 400", fontSize: "28px" }}
                                >neurology</span
                                >
                            </div>
                            <div className="flex flex-col gap-3 flex-grow">
                                <h3
                                    className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors duration-300"
                                >
                                    Agentic AI Systems
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Autonomous agents designed to plan, reason, and execute complex
                                    multi-step workflows without human intervention.
                                </p>
                            </div>
                            <div
                                className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors"
                            >
                                <span>Explore Agents</span>
                                <span
                                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 400", fontSize: "18px" }}
                                >arrow_forward</span
                                >
                            </div>
                        </div>
                        <div
                            className="service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up delay-2 cursor-pointer"
                        >
                            <div
                                className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 400", fontSize: "28px" }}
                                >chat_bubble</span
                                >
                            </div>
                            <div className="flex flex-col gap-3 flex-grow">
                                <h3
                                    className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors duration-300"
                                >
                                    Intelligent Chatbots
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Next-gen conversational AI for 24/7 customer support and
                                    internal knowledge retrieval, powered by LLMs.
                                </p>
                            </div>
                            <div
                                className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors"
                            >
                                <span>See Chat Solutions</span>
                                <span
                                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 400", fontSize: "18px" }}
                                >arrow_forward</span
                                >
                            </div>
                        </div>
                        <div
                            className="service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up delay-3 cursor-pointer"
                        >
                            <div
                                className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 400", fontSize: "28px" }}
                                >settings_suggest</span
                                >
                            </div>
                            <div className="flex flex-col gap-3 flex-grow">
                                <h3
                                    className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors duration-300"
                                >
                                    Process Automation
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    End-to-end automation of repetitive tasks, streamlining
                                    operations to significantly reduce manual overhead and error.
                                </p>
                            </div>
                            <div
                                className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors"
                            >
                                <span>View Workflows</span>
                                <span
                                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 400", fontSize: "18px" }}
                                >arrow_forward</span
                                >
                            </div>
                        </div>
                        <div
                            className="service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up delay-1 cursor-pointer"
                        >
                            <div
                                className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 400", fontSize: "28px" }}
                                >ssid_chart</span
                                >
                            </div>
                            <div className="flex flex-col gap-3 flex-grow">
                                <h3
                                    className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors duration-300"
                                >
                                    Predictive Modeling
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Data-driven insights and forecasting models designed to
                                    future-proof strategies and identify market opportunities early.
                                </p>
                            </div>
                            <div
                                className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors"
                            >
                                <span>Analyze Data</span>
                                <span
                                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 400", fontSize: "18px" }}
                                >arrow_forward</span
                                >
                            </div>
                        </div>
                        <div
                            className="service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up delay-2 cursor-pointer"
                        >
                            <div
                                className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 400", fontSize: "28px" }}
                                >terminal</span
                                >
                            </div>
                            <div className="flex flex-col gap-3 flex-grow">
                                <h3
                                    className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors duration-300"
                                >
                                    Custom Software
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Bespoke software solutions architected specifically for your
                                    unique business challenges and scalability needs.
                                </p>
                            </div>
                            <div
                                className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors"
                            >
                                <span>Start Building</span>
                                <span
                                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 400", fontSize: "18px" }}
                                >arrow_forward</span
                                >
                            </div>
                        </div>
                        <div
                            className="service-card group relative p-8 rounded-3xl flex flex-col h-full fade-in-up delay-3 cursor-pointer"
                        >
                            <div
                                className="mb-8 w-14 h-14 rounded-full icon-container flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 400", fontSize: "28px" }}>hub</span>
                            </div>
                            <div className="flex flex-col gap-3 flex-grow">
                                <h3
                                    className="text-slate-900 text-xl font-semibold group-hover:text-primary-dark transition-colors duration-300"
                                >
                                    Enterprise Integration
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Seamlessly connecting your fragmented tech stack into a unified,
                                    high-performance ecosystem.
                                </p>
                            </div>
                            <div
                                className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-primary-dark transition-colors"
                            >
                                <span>Connect Apps</span>
                                <span
                                    className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'wght' 400", fontSize: "18px" }}
                                >arrow_forward</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full border-t border-slate-200 bg-slate-50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div
                        className="group relative flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl bg-white border border-slate-200 p-12 overflow-hidden shadow-lg shadow-slate-200/50"
                    >
                        <div
                            className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700"
                        ></div>
                        <div className="flex flex-col gap-4 relative z-10 max-w-xl">
                            <h2
                                className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight"
                            >
                                Ready to automate your enterprise?
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Let&apos;s discuss how our AI solutions can scale your business
                                operations and reduce costs.
                            </p>
                        </div>
                        <div className="relative z-10 flex-shrink-0">
                            <button
                                className="flex cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-base font-bold transition-all shadow-[0_0_20px_rgba(70,19,236,0.3)] hover:shadow-[0_0_30px_rgba(70,19,236,0.5)] hover:-translate-y-1"
                            >
                                Book a Discovery Call
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}
