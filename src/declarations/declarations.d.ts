import { darkTheme } from 'src/theme/themes/dark';

type ThemeType = typeof darkTheme;

/**
 * Adds the theme to the styled components.
 */
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends ThemeType {
		
	}
}