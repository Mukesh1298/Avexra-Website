import { Feature } from "next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin";
import { features } from "process";

interface features {
	icon: string;
	title: string;
	description: string;
}

interface SolutionFeaturesProps {
	feature: features[];
}

export default function SolutionFeature({
	feature,
}: SolutionFeaturesProps) {
	return (
		<section className="py-24 px-4 relative bg-indigo-100/50 border-t border-black/5">
			<div className="layout-content-container max-w-[1200px] mx-auto flex flex-col gap-16">
				{/* Heading */}
				<div className="flex flex-col gap-4 text-center max-w-[800px] mx-auto">
					<h2 className="text-text-main text-3xl md:text-4xl font-bold leading-tight tracking-tight">
						Key Capabilities
					</h2>
					<p className="text-text-secondary text-lg font-normal leading-relaxed">
						Core capabilities designed to deliver real, measurable impact across
						your systems and workflows.
					</p>
				</div>

				{/* Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{feature.map((feature, index) => (
						<div
							key={index}
							className="group relative flex flex-col gap-4 rounded-2xl border border-border-light bg-surface-light p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/80 transition-all duration-300 hover:-translate-y-1"
						>
							{/* Icon */}
							<div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-blue-600 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
								<span
									className="material-symbols-outlined "
									style={{
										fontVariationSettings: "'wght' 400, 'opsz' 24",
									}}
								>
									{feature.icon}
								</span>
							</div>

							{/* Content */}
							<div className="flex flex-col gap-2">
								<h3 className="text-text-main text-lg font-bold">
									{feature.title}
								</h3>
								<p className="text-text-secondary text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
