import styled from 'styled-components';
import { devices } from 'src/theme';

const StyledTitle = styled.h2<{ marginBottom?: string; }>`
	line-height: 40px;
	font-size: 1.9em;
	margin: 10px 0px 30px;

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
		line-height: 30px;
		font-size: 1.5em;
	}

	${(p): string => p.marginBottom ? 
        `margin-bottom: ${p.marginBottom}` : ''}
`;

export {
    StyledTitle
};