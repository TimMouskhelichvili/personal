import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	flex: 1;
`;

const StyledSection = styled(Section)`
	background: ${getThemeVariable('pages.home.description.background')};
`;

const StyleImgContainer = styled.div`
	img {
		display: inline-block;
		object-fit: cover;
		border-radius: ${getThemeVariable('global.borderRadius')};
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		text-align: center;
	
		img {
			margin-bottom: 30px;
		}
	}

	@media screen and (max-width: ${devices.smallMobile}) {
		img {
			width: 100%;
			height: auto;
		}
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

const StyledQuote = styled.div`
	text-align: center;
`;

const StyledDescription = styled.div`
	.img-group {
		margin-top: 5px;
		display: flex;
	}

	.img-group img {
		height: 20px;
		margin-right: 5px;
	}
`;

export {
    StyledContainer,
    StyledDescription,
    StyledSeparator,
    StyledSection,
    StyleImgContainer,
    StyledQuote
};