interface IStaticProps {
	locale: string;
	defaultLocale: string;
	params: {
		[key in string]: string;
	}
}

export type {
    IStaticProps
};