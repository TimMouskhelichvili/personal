declare global {

	interface Window {

		/**
		 * The redux devtools extensions.
		 */
		__REDUX_DEVTOOLS_EXTENSION__: () => never;

		/**
		 * The getinsights.io global object.
		 */
		insights: {
			init: (id: string) => void;
			trackPages: () => void;
		};

		/**
		 * The tawk.to api object.
		 */
		Tawk_API: {};

	}

	namespace NodeJS {

		interface ProcessEnv {

			/**
			 * The markdown articles.
			 */
			markdown: {

				/**
				 * The pages.
				 */
				pages: {

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

				};

				/**
				 * The paths.
				 */
				paths: {

					/**
					 * The articles.
					 */
					articles: string[];

					/**
					 * The pages.
					 */
					pages: string[];
				
				};

			};

			/**
			 * The sitemap locales.
			 */
			sitemapLocales: {};

		}

	}

}

export { };