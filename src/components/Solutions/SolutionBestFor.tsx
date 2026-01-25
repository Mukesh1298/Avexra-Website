interface bestFor {
	icon: string;
	title: string;
	description: string;
}

interface SolutionBestforProps {
	bestfor: bestFor[];
}

export default function SolutionBestfor({
	bestfor,
}: SolutionBestforProps) {
	return (
		<section className="py-24 bg-white dark:bg-background-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<div className="mb-16">
					<h2 className="text-4xl font-bold mb-4">
						Best For
					</h2>
					<p className="text-text-secondary text-lg font-normal leading-relaxed">
					Tailored solutions for every department.
					</p>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
					{bestfor.map((bestFor, index) => (
						<div
							key={index}
							className="group relative flex flex-col gap-4 rounded-2xl border border-border-light bg-surface-light p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/80 transition-all duration-300 hover:-translate-y-1"
						>
							{/* Icon */}
							<div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-blue-600 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
								<span
									className="material-symbols-outlined"
									style={{
										fontVariationSettings: "'wght' 400, 'opsz' 24",
									}}
								>
									{bestFor.icon}
								</span>
							</div>

							{/* Content */}
							<div className="flex flex-col gap-2">
								<h3 className="text-text-main text-lg font-bold">
									{bestFor.title}
								</h3>
								<p className="text-text-secondary text-sm leading-relaxed">
									{bestFor.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
