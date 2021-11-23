import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledContainer = styled.div`
	margin-top: 5px;
	border: 1px solid ${getThemeVariable('global.borderColor')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	padding: 20px;
	max-width: 450px;
`;

const StyledTitle = styled.div`
	text-transform: uppercase;
	font-size: 1.2em;
	font-weight: 700;
	margin-bottom: 15px;
	text-decoration: underline;
`;

const StyledItem = styled.a`
	display: block;
	cursor: pointer; 
	color: ${getThemeVariable('colors.primary')};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const StyledList = styled.ol`
	margin: 0px;
	padding-left: 25px;

	& > li:not(:last-of-type) > a {
		margin-bottom: 8px;
	}
`;

export {
    StyledList,
    StyledItem,
    StyledTitle,
    StyledContainer
};