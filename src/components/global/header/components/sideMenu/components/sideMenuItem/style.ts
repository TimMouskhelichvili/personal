import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledSideMenuItemContainer = styled.div`
	border-bottom: 1px solid ${getThemeVariable('global.borderColor')};

	a, div {
		display: block;
		padding: 15px;
		text-decoration: none;
		cursor: pointer;
		position: relative;
		color: ${getThemeVariable('global.color')};

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				color: ${getThemeVariable('colors.primary')};
			}
		}

		&.active {
			pointer-events: none;
			text-decoration: underline;
		}

		svg {
			position: absolute;
			right: 15px;
		}
	}
`;

export {
    StyledSideMenuItemContainer
};