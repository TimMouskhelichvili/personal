import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledContainer = styled.div`
	margin-left: 30px;
	margin-top: 5px;
	border: 1px solid ${getThemeVariable('global.borderColor')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	padding: 20px;
`;

const StyledTitle = styled.div`
	text-transform: uppercase;
	font-size: 1.2em;
	font-weight: 700;
	text-decoration: underline;
	margin-bottom: 15px;
`;

const StyledItem = styled.div`
	cursor: pointer; 

	&:not(:last-of-type) {
		margin-bottom: 10px;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export {
    StyledItem,
    StyledTitle,
    StyledContainer
};