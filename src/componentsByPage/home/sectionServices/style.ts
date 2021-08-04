import styled from 'styled-components';
import { Paragraph } from 'src/components/elements/paragraph';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
`;

const StyledExpertiseContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;

	> div {
		border-radius: ${getThemeVariable('global.borderRadius')};
		background: ${getThemeVariable('pages.home.services.cardBackground')};
		padding: 20px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: ${devices.mobile}) {
		display: block;

		> div {
			margin-top: 20px;

			&:first-of-type {
				margin-top: 0px;
			}
		}
	}
`;

const StyledTitle = styled.div`
	font-size: 1.3em;
	font-weight: bold;
	margin-bottom: 10px;
`;

const StyledSeparator = styled.div`
	height: 4px;
	width: 40%;
    max-width: 250px;
	margin-top: 40px;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
	background: ${getThemeVariable('colors.primary')};
	border-radius: ${getThemeVariable('global.borderRadius')};
`;

const StyledParagraph = styled(Paragraph)`
	font-size: .95em;
`;

const StyledPS = styled.div`
	font-style: italic;
	text-align: center;
`;

export {
    StyledExpertiseContainer,
    StyledParagraph,
    StyledSeparator,
    StyledSection,
    StyledTitle,
    StyledPS
};