import styled from 'styled-components';
import { Row } from 'src/components/elements/row';
import { devices } from 'src/theme';

const StyledSideBySide = styled(Row)<{ customMargin?: string }>`
	display: flex;

	> div {
		&:first-of-type {
			padding-right: ${(p): string => p.customMargin || '40px'};
		}

		&:last-of-type {
			padding-left: ${(p): string => p.customMargin || '40px'};
		}

		@media screen and (max-width: ${devices.tablet}) {
			&:first-of-type {
				padding-right: 20px;
			}
	
			&:last-of-type {
				padding-left: 20px;
			}
		}
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		display: block;

		> div {
			&:first-of-type {
				padding-right: 0px;
			}
	
			&:last-of-type {
				padding-left: 0px;
			}
		}
	}
`;

export {
    StyledSideBySide
};