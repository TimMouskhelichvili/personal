import styled from 'styled-components';

const StyledRow = styled.div<{ maxWidth?: string; }>`
	position: relative;
	margin-left: auto;
	margin-right: auto;
	padding-left: 1em;
	padding-right: 1em;
	max-width: ${(p): string => p.maxWidth || '1200px'};
`;

export {
    StyledRow
};