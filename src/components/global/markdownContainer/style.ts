import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledMarkdownContainer = styled.div`
	margin-bottom: 40px;

	a {
		color: ${getThemeVariable('colors.primary')};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		line-height: 24px;
		word-break: break-word;
	}

	h3 {
		margin: 25px 0px 10px;
	}

	h1 {
		margin-bottom: 10px;
	}

	iframe {
		width: 700px;
		height: 400px;
		margin: auto;
		display: block;
	}
`;

const StyledMetaData = styled.div`
	font-size: .9em;
	margin-bottom: 20px;
	color: ${getThemeVariable('global.markdown.metaDataColor')};
`;

export {
    StyledMarkdownContainer,
    StyledMetaData
};