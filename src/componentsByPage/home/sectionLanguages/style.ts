import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
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

const StyledH3 = styled.h3`
	margin-top: 0px;
	margin-bottom: 15px;
`;

const StyledLanguagesContainer = styled.div`
	margin-bottom: 20px;

	> div {
		border-radius: ${getThemeVariable('global.borderRadius')};
		background: ${getThemeVariable('pages.home.services.cardBackground')};
		padding: 10px;
		text-align: center;
		display: inline-block;
		margin-bottom: 10px;
		margin-right: 10px;
	}
`;

export {
  	StyledSection,
    StyleImgContainer,
    StyledLanguagesContainer,
    StyledH3
};