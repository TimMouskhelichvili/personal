import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';
import { Paragraph } from 'src/components/elements/paragraph';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
`;

const StyledListContainer = styled.div`
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

const StyledParagraph = styled(Paragraph)`
	font-size: .95em;
`;

export {
    StyledParagraph,
    StyledListContainer,
  	StyledSection,
    StyledTitle
};