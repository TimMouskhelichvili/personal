import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

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
		line-height: 30px;
		word-break: break-word;
	}

	h3 {
		margin: 25px 0px 10px;
	}

	h1 {
		margin-bottom: 10px;
	}

	iframe {
		width: 100%;
		height: 400px;
		margin: auto;
		display: block;
		border: 0;

		@media screen and (max-width: ${devices.bigMobile}) {
			height: 300px;
		}
	}

	img {
		max-width: 100%;
		border: 1px solid ${getThemeVariable('global.borderColor')};
	}

	& > pre > pre {
		background: red;
		padding: 10px;
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