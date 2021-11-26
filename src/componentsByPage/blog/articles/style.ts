import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledTitle = styled.h2`
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
    grid-template-columns: 1fr 1fr;

	@media screen and (max-width: ${devices.smallTablet}) {
		display: block;
	}
`;

const StyledArticleContainer = styled.div`
	border: 1px solid ${getThemeVariable('global.borderColor')};
	background: ${getThemeVariable('pages.blog.item.background')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	height: 100%;

	img {
		border-top-left-radius: ${getThemeVariable('global.borderRadius')};
		border-top-right-radius: ${getThemeVariable('global.borderRadius')};
		border-bottom: 1px solid ${getThemeVariable('global.borderColor')};
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
	padding: 20px;
`;

export {
    StyledTitleContainer,
    StyledArticleContainer,
    StyledContainer,
    StyledMetaData,
    StyledTitle,
    StyledEmpty
};