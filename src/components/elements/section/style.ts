import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	padding: 80px 0px;

	@media screen and (max-width: ${devices.smallTablet}) {
		padding: 80px 0px;
	}

	@media screen and (max-width: ${devices.mobile}) {
		padding: 50px 0px;
	}
`;

export {
    StyledContainer
};