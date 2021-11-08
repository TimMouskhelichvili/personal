interface IPages {

	/**
	 * The articles.
	 */
	articles: {
		[key in string]: {
			en?: string;
			fr?: string;
		}
	};

	/**
	 * The pages.
	 */
	pages: {
		[key in string]: {
			en?: string;
			fr?: string;
		}
	};

}

export type {
    IPages
};