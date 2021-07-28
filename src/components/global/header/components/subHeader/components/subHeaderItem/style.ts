import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledSubHeaderItemContainer = styled.div`
	display: inline-block;
	height: 100%;

	> div, > a {
		padding: 0px 1em;
		line-height: 60px;
		display: block;
		color: ${getThemeVariable('colors.color')};
		text-decoration: none;
		cursor: pointer;
		
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

	svg {
		margin-left: 5px;
		font-size: .8em;
	}
`;

export {
    StyledSubHeaderItemContainer
};