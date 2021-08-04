import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';

const StyledSection = styled(Section)`
	background: ${getThemeVariable('pages.home.description.background')};
`;

const StyleImgContainer = styled.div`
	img {
		display: inline-block;
		object-fit: cover;
		border-radius: ${getThemeVariable('global.borderRadius')};
	}
`;

const StyledSeparator = styled.div`
	width: 40%;
	max-width: 250px;
	height: 5px;
	background: ${getThemeVariable('colors.primary')};
	margin: 40px auto;
	border-radius: 10px;
`;

const StyledItalic = styled.div`
	font-style: italic;
`;

export {
    StyledSeparator,
    StyledSection,
    StyleImgContainer,
    StyledItalic
};