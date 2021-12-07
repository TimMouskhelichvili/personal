import styled from 'styled-components';
import { darken } from 'polished';
import { getThemeVariable } from 'src/theme/utils';

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

const StyledAmpContainer = styled.div`
	amp-social-share {
		border-radius: ${getThemeVariable('global.borderRadius')};
		margin-bottom: 8px;
	}
`;

export {
    StyledAmpContainer,
    StyledButton 
};