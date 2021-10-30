import styled from 'styled-components';
import { Paragraph } from 'src/components/elements/paragraph';
import { devices } from 'src/theme';

const StyledParagraph = styled(Paragraph)`
	margin-bottom: 50px;
	
	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
	}
`;

export {
    StyledParagraph
};