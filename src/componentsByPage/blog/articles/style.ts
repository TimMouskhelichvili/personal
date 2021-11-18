import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

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
	margin-top: 20px;

	.masonry-grid {
		display: flex;
		margin-left: -20px;
	}

	.masonry-grid-column {
		padding-left: 20px;
	}
`;

const StyledArticleContainer = styled.div`
	border: 1px solid ${getThemeVariable('global.borderColor')};
	background: ${getThemeVariable('pages.blog.item.background')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	padding: 20px;
	margin-bottom: 1em;

	img {
		border: 1px solid ${getThemeVariable('global.borderColor')};
		object-fit: cover;
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

export {
    StyledArticleContainer,
    StyledContainer,
    StyledMetaData,
    StyledTitle,
    StyledEmpty
};