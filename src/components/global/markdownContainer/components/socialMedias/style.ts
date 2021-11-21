import styled from 'styled-components';
import { darken } from 'polished';
import { getThemeVariable } from 'src/theme/utils';

const StyledContainer = styled.div`
	width: 90px;
`;

const StyledFixedContainer = styled.div`
	position: fixed;
	margin-top: 5px;

`;

const StyledButton = styled.button<{ backgroundColor: string; }>`
	width: 60px;
	height: 50px;
	font-size: 1.5em;
	margin-bottom: 10px;
	border: 0px;
	color: white;
	border-radius: ${getThemeVariable('global.borderRadius')};
	background: ${(p): string => p.backgroundColor};
	cursor: pointer;

	&:hover {
		background: ${(p): string => darken(.1, p.backgroundColor)};
	}
`;

export {
    StyledButton,
    StyledFixedContainer,
    StyledContainer
};