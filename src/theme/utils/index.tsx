import { RecursiveThemeKeyOf } from 'src/theme/types/RecursiveThemeKeyOf';
import { primaryColors, themesName } from 'src/theme';
import { configuration } from 'src/configuration';
import { MyTheme } from 'src/theme/types/MyTheme';
import { darkTheme } from 'src/theme/themes/dark';
import { darken, lighten } from 'polished';

/**
 * Returns the global theme.
 * @param {{}} theme - The theme. 
 * @param {{}} obj - The obj. 
 * @param {string} stack - The stack. 
 */
const getGlobalTheme = (theme: {}, obj = {}, stack = '-'): {} => {
    for (const i in theme) {
        const name = `${stack}-${i}`;
		
        if (typeof theme[i] === 'string' && theme[i]) {
            obj[name] = theme[i];
        } else {
            getGlobalTheme(theme[i], obj, name);
        }
    }
	
    return obj;
};

/**
 * Returns the global themes.
 * @param {{}} themes - The themes. 
 */
const getGlobalThemes = (themes: {}): string => {
	let html = '';

	for (let i in themes) {
		const theme = getGlobalTheme(themes[i]);
		html += `[data-${configuration.localStorage.theme}="${i}"] {\n`;
		for (let a in theme) {
			html += `${a}: ${theme[a]};\n`;
		}
		html += '}\n';
	}

	return html;
}

/**
 * Returns the global colors.
 * @param {string[]} colors - The colors. 
 */
const getGlobalColors = (colors: string[]): string => {
	let html = '';

	for (let i in colors) {
		html += `[data-${configuration.localStorage.primary}="${colors[i]}"] {
				  	--colors-primary: ${colors[i]};
					--colors-primaryHovered: ${darken(.1, colors[i])};
					--colors-primaryLighten: ${lighten(.1, colors[i])};
		         }\n`;
	}

	return html;
}

/**
 * Returns the theme variable.
 * @param {RecursiveThemeKeyOf<typeof darkTheme>} theme - The theme. 
 */
const getThemeVariable = (theme: RecursiveThemeKeyOf<typeof darkTheme>): string => {
	return `var(--${theme.replace(/\./g, '-')})`;
}

/**
 * Returns the theme HTML.
 */
const getThemeHTML = (): string => (
	`(function() {
		var theme   = localStorage.getItem('${configuration.localStorage.theme}');
		var primary = localStorage.getItem('${configuration.localStorage.primary}');

		if ('${themesName.join(',')}'.split(',').indexOf(theme) === -1) {
			theme = '${configuration.defaults.themeName}';
		}

		if ('${primaryColors.join(',')}'.split(',').indexOf(primary) === -1) {
			primary = '${configuration.defaults.primary}';
		}

		document.documentElement.setAttribute('data-${configuration.localStorage.theme}', theme);
		document.documentElement.setAttribute('data-${configuration.localStorage.primary}', primary);
	})();`
);

/**
 * Returns the html theme attribute.
 */
const getHTMLThemeAttribute = (): string => {
	return String(document.documentElement.getAttribute(`data-${configuration.localStorage.theme}`));
}

/**
 * Returns the html primary attribute.
 */
const getHTMLPrimaryAttribute = (): string => {
	return String(document.documentElement.getAttribute(`data-${configuration.localStorage.primary}`));
}

/**
 * Sets the html theme attribute.
 * @param {MyTheme} theme - The theme. 
 */
const setHTMLThemeAttribute = (theme: MyTheme): void => {
	document.documentElement.setAttribute(`data-${configuration.localStorage.theme}`, theme);
	localStorage.setItem(configuration.localStorage.theme, theme);
}

/**
 * Sets the html primary attribute.
 * @param {string} color - The color. 
 */
const setHTMLPrimaryAttribute = (color: string): void => {
	document.documentElement.setAttribute(`data-${configuration.localStorage.primary}`, color);
	localStorage.setItem(configuration.localStorage.primary, color);
}

export {
	setHTMLPrimaryAttribute,
	getHTMLPrimaryAttribute,
	getGlobalColors,
	setHTMLThemeAttribute,
	getHTMLThemeAttribute,
	getThemeVariable,
	getGlobalThemes,
	getGlobalTheme,
	getThemeHTML
};