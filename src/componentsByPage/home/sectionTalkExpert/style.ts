import styled from 'styled-components';
import { Section } from 'src/components/elements/section';
import { Row } from 'src/components/elements/row';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
`;

const StyledCenter = styled(Row)`
	display: flex;

	> div:first-of-type {
		flex: 1;
		padding-right: 80px;
	}

	> div:last-of-type {
		display: flex;
		align-items: center;
	}

	@media screen and (max-width: ${devices.tablet}) {
		display: block;

		> div:first-of-type {
			padding-bottom: 40px;
			padding-right: 0px;
		}
	}

	@media screen and (max-width: ${devices.mobile}) {
		> div:first-of-type {
			padding-bottom: 30px;
		}
	}
`;

const StyledButton = styled.button`
	background: transparent;
	border: 4px solid ${getThemeVariable('colors.primary')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	color: ${getThemeVariable('colors.primary')};
	font-size: 1.4em;
	padding: 10px 25px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-left: 10px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		border-width: 3px;
		font-size: 1.2em;
		padding: 10px 15px;
	}
`;

export {
    StyledCenter,
    StyledSection,
    StyledButton
};