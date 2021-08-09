import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	background: ${getThemeVariable('global.footer.background')};
	text-align: center;
`;

const StyledCopyright = styled.div`
	padding: 20px;
	text-align: center;
	font-size: .9em;
	user-select: none;
`;

const StyledName = styled.div`
	background: ${getThemeVariable('colors.primary')};
	display: inline-block;
	margin-bottom: 20px;
	user-select: none;

	img {
		height: 40px;
	}
`;

const StyledMailLink = styled.a`
	color: ${getThemeVariable('colors.primary')};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-right: 5px;
	}
`;

const StyledPhoneLink = styled.a`
	color: ${getThemeVariable('colors.primary')};
	text-decoration: none;
	margin-top: 10px;
	display: inline-block;

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-right: 5px;
	}
`;

const StyledMenu = styled.div`
	margin-bottom: 20px;
	user-select: none;

	a {
		color: ${getThemeVariable('global.footer.menuColor')};
		display: inline-block;
		padding: 2px 7.5px;

		@media screen and (max-width: ${devices.mobile}) {
			padding: 15px 7.5px;
		}
	}
`;

const StyledQuote = styled.div`
	font-style: italic;
	margin-bottom: 20px;
	user-select: none;
`;

export {
    StyledCopyright,
    StyledSection,
    StyledName,
    StyledMailLink,
    StyledMenu,
    StyledQuote,
    StyledPhoneLink
};