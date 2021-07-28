import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledLogoContainer = styled.div<{ hideLanguage?: boolean; }>`
	text-align: center;
	padding: 0px ${(p): string => p.hideLanguage ? '0px' : '10px'};

	${(p): string => p.hideLanguage ? 
        `@media screen and (max-width: ${devices.tablet}) {
			padding-left: 1em;
		}` : ''}
`;

const StyledName = styled.div<{ isLanding?: boolean }>`
	background: ${getThemeVariable('colors.primary')};
	display: inline-block;

	img, amp-img {
		height: 40px;
		width: 100px;

		@media screen and (max-width: ${devices.mobile}) {
			height: 30px;
			width: 75px;
		}
	}

	${(p): string => p.isLanding ? 
        `@media screen and (max-width: ${devices.mediumMobile}) {
			background: ${getThemeVariable('global.header.logo.landingSmallBackground')};
		}` : ''}
`;

const StyledLanguage = styled.button`
	background: ${getThemeVariable('global.header.logo.language.background')};
	color: ${getThemeVariable('global.header.logo.language.color')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	display: inline-block;
	padding: 2px 5px;
	vertical-align: bottom;
	margin-left: 10px;
	border: none;
	cursor: pointer;
	font-style: italic;
	width: 30px;
	text-align: center;
	
	&:hover {
		background: ${getThemeVariable('global.header.logo.language.backgroundHover')};
	}
`;

export {
    StyledLogoContainer,
    StyledName,
    StyledLanguage
};