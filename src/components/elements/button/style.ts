import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledButton = styled.button`
	padding: 10px 15px;
	border: none;
	color: white;
	background: ${getThemeVariable('colors.primary')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	cursor: pointer;

	&:hover {
		background: ${getThemeVariable('colors.primaryHovered')};
	}
`;

const StyledLink = styled.a`
	padding: 0px 15px;
	border: none;
	color: white;
	background: ${getThemeVariable('colors.primary')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
	height: 40px;
	line-height: 40px;

	&:hover {
		background: ${getThemeVariable('colors.primaryHovered')};
	}
`;

export {
    StyledButton,
    StyledLink
};