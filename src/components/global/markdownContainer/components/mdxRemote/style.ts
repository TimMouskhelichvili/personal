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
		padding: 0px;
		overflow: auto;

		pre {
			border-radius: ${getThemeVariable('global.borderRadius')};
			margin: 0px;
		}
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