import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Row } from 'src/components/elements/row';
import { devices } from 'src/theme';

const StyledHeader = styled.div`
	border-bottom: 1px solid ${getThemeVariable('global.borderColor')};
	background: ${getThemeVariable('global.background')};
	width: 100%;
	height: 61px;
	position: fixed;
	z-index: 1;
	user-select: none;

	@media screen and (max-width: ${devices.mobile}) {
		height: 51px;
	}
`;

const StyledHeaderRow = styled(Row)`
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	display: flex;
	height: 100%;

	@media screen and (max-width: ${devices.tablet}) {
		padding: 0px;
	}
`;

const StyledButton = styled.button<{ open: boolean; }>`
	height: 100%;
	margin-right: auto;
	background: transparent;
	border: none;
	padding: 0px 1em;
	cursor: pointer;
	font-size: 20px;
	border-left: 1px solid ${getThemeVariable('global.borderColor')};
	border-right: 1px solid ${getThemeVariable('global.borderColor')};
	color: ${getThemeVariable('global.header.iconColor')};

	svg {
		animation-fill-mode: forwards;
		transition: transform .1s ease-out;
		will-change: transform;
	}

	${(p): string => p.open ? `
		svg {
			transform: rotate(90deg);
		}
	` : ''}

	@media screen and (max-width: ${devices.tablet}) {
		&:first-of-type {
			border-left: 0px;
		}
		&:last-of-type {
			border-right: 0px;
		}
	}
`;

export {
    StyledHeader,
    StyledButton,
    StyledHeaderRow
};
