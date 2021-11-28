import { getGlobalThemes, getThemeVariable, getGlobalColors } from 'src/theme/utils';
import { devices, primaryColors, themes } from 'src/theme';

/**
 * The global styles.
 */
const globalStyles = `
	${getGlobalThemes(themes)}
	${getGlobalColors(primaryColors)}

	html, body {
		font-family: -apple-system, system-ui, BlinkMacSystemFont, 
					  Segoe UI, Roboto,Oxygen-Sans, Ubuntu, Cantarell, 
					  Helvetica Neue, sans-serif;
		font-weight: 400;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-size: 16px;
		color: ${getThemeVariable('colors.color')};
		background: ${getThemeVariable('colors.background')};
		letter-spacing: 0px;
		scroll-padding-top: 75px;
	}

	@media screen and (max-width: ${devices.mobile}) {
		html {
			scroll-padding-top: 60px;
		}
	}

	* {
		appearance: none;
		-webkit-font-smoothing: antialiased;
  		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: transparent;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
	
	*:focus,
	*:active,
	*:visited,
	*:hover {
		outline: 0;
	}
	
	button,
	textarea,
	input {
		display: block;
		font-family: inherit;
		font-size: 1em;
	}

	img { 
		display: block;
	}

	[data-slider] {
		display: none;
	}

	.underline {
		text-decoration: underline;
	}

	.italic {
		font-style: italic;
	}

	.space {
		margin-top: 15px;
	}

	.bold {
		font-weight: bold;
	}

	.primary {
		color: ${getThemeVariable('colors.primary')};
	}
`;

export {
    globalStyles
};