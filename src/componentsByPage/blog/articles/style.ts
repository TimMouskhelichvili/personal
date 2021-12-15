import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledTitle = styled.h3`
	margin-bottom: .3em;
	margin-top: 0px;

	a {
		color: ${getThemeVariable('colors.color')};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const StyledContainer = styled.div`
	margin: 20px 0px;
	display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

	@media screen and (max-width: ${devices.smallTablet}) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: ${devices.bigMobile}) {
		display: block;
	}
`;

const StyledArticleContainer = styled.div`
	height: 100%;

	img {
		border: 1px solid ${getThemeVariable('global.borderColor')};
		border-radius: ${getThemeVariable('global.borderRadius')};
		object-fit: cover;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
	}
`;

const StyledMetaData = styled.div`
	font-size: .9em;
	color: ${getThemeVariable('global.markdown.metaDataColor')};
`;

const StyledEmpty = styled.div`
	margin: 20px 0px;
`;

const StyledTitleContainer = styled.div`
	margin-top: 10px;
`;

export {
    StyledTitleContainer,
    StyledArticleContainer,
    StyledContainer,
    StyledMetaData,
    StyledTitle,
    StyledEmpty
};