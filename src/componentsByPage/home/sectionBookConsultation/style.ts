import styled from 'styled-components';
import { Paragraph } from 'src/components/elements/paragraph';
import { getThemeVariable } from 'src/theme/utils';
import { CTA } from 'src/components/special/cta';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	border-radius: ${getThemeVariable('global.borderRadius')};
	border: 4px solid ${getThemeVariable('colors.primary')};
	padding: 40px;
	margin-top: 80px;
	display: flex;

	> div:first-of-type {
		flex: 1;
		padding-right: 40px;
	}

	> div:last-of-type {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: ${devices.tablet}) {
		margin-top: 60px;
		display: block;

		> div:first-of-type {
			padding-bottom: 40px;
			padding-right: 0px;
		}
	}


	@media screen and (max-width: ${devices.smallTablet}) {
		> div:first-of-type {
			padding-bottom: 20px;
		}
	}

	@media screen and (max-width: ${devices.mobile}) {
		margin-top: 40px;
		padding: 20px;
	}
`;

const StyledCTA = styled(CTA)`
	font-size: 1.3em;
	height: auto;
	line-height: auto;
	padding: 10px 25px;
	user-select: none;

	@media screen and (max-width: ${devices.smallTablet}) {
		font-size: 1.2em;
		padding: 10px 15px;
	}
`;

const StyledTitle = styled.div`
	font-size: 1.8em;
	font-weight: bold;
	margin-bottom: 20px;

	@media screen and (max-width: ${devices.smallTablet}) {
		font-size: 1.5em;
	}

	@media screen and (max-width: ${devices.mobile}) {
		margin-bottom: 10px;
	}
`;

const StyledParagraph = styled(Paragraph)`
	font-style: italic;
`;

export {
    StyledParagraph,
    StyledTitle,
    StyledContainer,
    StyledCTA
};