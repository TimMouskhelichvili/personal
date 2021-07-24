import styled from 'styled-components';
import { Row } from 'src/components/elements/row';
import { devices } from 'src/theme';

const StyledSideBySide = styled(Row)`
	display: flex;

	> div {
		&:first-of-type {
			padding-right: 40px;
		}

		&:last-of-type {
			padding-left: 40px;
		}

		@media screen and (max-width: ${devices.tablet}) {
			&:first-of-type {
				padding-right: 20px;
			}
	
			&:last-of-type {
				padding-left: 20px;
			}
		}

		flex: 1;
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