import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledCustomMDXContainer = styled.div`
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

	p:first-of-type {
		margin-top: 0px;
	}

	h3 {
		margin: 25px 0px 10px;
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
		height: auto;
		border: 1px solid ${getThemeVariable('global.borderColor')};
		border-radius: ${getThemeVariable('global.borderRadius')};
	}

	table {
		width: 100%;
		text-align: left;

		td, th {
			border: 1px solid ${getThemeVariable('global.borderColor')};
			padding: 10px;
		}
	}

	.inlineCode {
		color: ${getThemeVariable('colors.primary')};
		background-color: ${getThemeVariable('global.markdown.code.background')};
		padding: 3px 7px;
		border-radius: ${getThemeVariable('global.borderRadius')};
	}

	.overflowAuto {
		overflow-x: auto;
	}

	li > .inlineCode {
		padding: 0px 7px;
	}

	blockquote {
		border-left: 10px solid ${getThemeVariable('colors.primary')};
		background-color: ${getThemeVariable('global.markdown.blockquote.background')};
		margin: 1em 0px;
		padding: 20px;
		border-radius: ${getThemeVariable('global.borderRadius')};

		p {
			margin-bottom: 0px;
		}

		ol {
			margin: 0px;
			padding: 0px;
			padding-left: 15px;
		}
	}
`;

const StyledSocialTabContainer = styled.div`
	display: none;

	& > button {
		margin-right: 10px;
	}

	@media screen and (max-width: ${devices.bigMobile}) {
		display: flex;
	}
`;

const StyledSummary = styled.div`
	display: none;

	@media screen and (max-width: ${devices.tablet}) {
		display: block;
	}
`;

export {
    StyledSummary,
    StyledSocialTabContainer,
    StyledCustomMDXContainer
};