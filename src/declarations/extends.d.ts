declare global {

	interface Window {

		/**
		 * The redux devtools extensions.
		 */
		__REDUX_DEVTOOLS_EXTENSION__: () => never;

		/**
		 * The getInsights.io global object.
		 */
		insights: {
			init: (id: string) => void;
			trackPages: () => void;
		};

		/**
		 * The tawk.to api object.
		 */
		Tawk_API: {
			onLoad: () => void;
			hideWidget: () => void;
			showWidget: () => void;
		};

	}

	namespace NodeJS {

		interface ProcessEnv {

			/**
			 * The dirname.
			 */
			dirName: string;

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

			/**
			 * The sitemap locales.
			 */
			sitemapLocales: {};

			/**
			 * The images sizes.
			 */
			images: { [key in string]: { 
				h: string;
				w: string;
			}}

		}

	}

}

export { };