import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledTitle = styled.h1`
	font-size: 2em;

	@media screen and (max-width: ${devices.mobile}) {
		font-size: 1.5em;
	}
`;

export {
    StyledTitle
};