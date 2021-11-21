import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledContainer = styled.div`
	position: fixed;
	border: 1px solid ${getThemeVariable('global.borderColor')};
	padding: 20px;
	margin-left: 30px;
	margin-top: 5px;
	border-radius: ${getThemeVariable('global.borderRadius')};
`;

const StyledTitle = styled.div`
	text-transform: uppercase;
	font-size: 1.2em;
	font-weight: 700;
	text-decoration: underline;
	margin-bottom: 10px;
`;

const StyledItem = styled.div`
	margin-bottom: 5px;
	font-size: .9em;
	color: ${getThemeVariable('colors.primary')};
	cursor: pointer; 

	&:hover {
		text-decoration: underline;
	}
`;

export {
    StyledItem,
    StyledTitle,
    StyledContainer
};