export default function TrustedBy() {
  return (
    <section className="w-full border-t border-slate-200 bg-white relative z-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-400 mb-8 uppercase tracking-widest font-semibold">
          Trusted by visionary teams at
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-default">
            ACME Corp
          </h3>
          <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-default">
            Nebula AI
          </h3>
          <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-default">
            GlobalBank
          </h3>
          <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-default">
            FutureScale
          </h3>
          <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-default md:col-span-4 lg:col-span-1">
            TechFlow
          </h3>
        </div>
      </div>
    </section>
  );
}
