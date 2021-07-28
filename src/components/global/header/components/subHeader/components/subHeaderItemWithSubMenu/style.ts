import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const SubHeaderItemWithSubMenuContainer = styled.div`
	position: absolute;
	background: ${getThemeVariable('colors.background')};
	border: 1px solid ${getThemeVariable('global.borderColor')};
	top: 45px;
	padding: 0px;

	a {
		display: block;
		color: ${getThemeVariable('colors.color')};
		padding: 10px 20px;
		line-height: normal;
		border-bottom: 1px solid ${getThemeVariable('global.borderColor')};

		&:last-of-type {
			border-bottom: 0px;
		}

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				color: ${getThemeVariable('colors.primary')};
			}
		}

		&.active {
			pointer-events: none;
			text-decoration: underline;
		}
	}
`;

export {
    SubHeaderItemWithSubMenuContainer
};