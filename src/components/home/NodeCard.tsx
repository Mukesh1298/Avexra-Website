import { ReactNode } from "react";

interface NodeCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function NodeCard({
  title,
  icon,
  children,
  className = "",
}: NodeCardProps) {
  return (
    <div
      className={`absolute rounded-xl bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)]
      transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] ${className}`}
    >
      <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50 rounded-t-xl">
        {icon}
        <span className="text-xs font-bold text-slate-700">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
