export interface SolutionDetail {
	slug: string;

	hero: {
		titleParts: {
			text: string;
			highlight?: boolean;
		}[];
		description: string[];
		primaryCta: string;
		secondaryCta: string;
		image?: string;
	};

	features: {
		icon: string;
		title: string;
		description: string;
	}[];

	experiment: {
		tag: string;
		title: string;
		exampleimage: string;
		exampletitle: string;
		description: string;
		image: string;
		
	}[];

  bestFor: {
		icon: string;
		title: string;
		description: string;
	}[];

	cta: {
		titleParts: {
			text: string;
			highlight?: boolean;
		}[];
		description: string;
		primary: string;
		secondary: string;
	};
}
