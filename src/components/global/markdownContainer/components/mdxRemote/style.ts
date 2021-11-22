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
	}

	& > pre {
		border-radius: ${getThemeVariable('global.borderRadius')};
		background: ${getThemeVariable('global.markdown.background')};
		padding: 10px;
		overflow: auto;
	}

	table {
		width: 100%;
		text-align: left;

		td, th {
			border: 1px solid ${getThemeVariable('global.borderColor')};
			padding: 10px;
		}
	}

	[id]::before {
		content: '';
		display: block;
		height:      75px;
		margin-top: -75px;
		visibility: hidden;
	}
`;

export {
    StyledCustomMDXContainer
};