import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledTitle = styled.div`
	padding: 20px 80px;
	padding-bottom: 0px;
	font-weight: bold;
	font-size: 1.2em;
`;

const StyledContainer = styled.div`
	padding: 0px 10px;
`;

const StyledSubTitle = styled.div`
	text-decoration: underline;
	margin-top: 20px;
	margin-bottom: 10px;
`;

const StyledLabel = styled.label`
	text-decoration: underline;
	margin-top: 20px;
	margin-bottom: 10px;
	display: block;
`;

const StyledButton = styled.button<{ active: boolean; }>`
	border: none;
	display: inline-block;
	padding: 7px 10px;
	border-radius: ${getThemeVariable('global.borderRadius')};
	margin-right: 10px;
	color: ${getThemeVariable('global.color')};
	background: ${getThemeVariable('global.header.options.languages.background')};
	cursor: pointer;

	${(p): string => p.active ?
        `background: ${getThemeVariable('colors.primary')};
		 color: ${getThemeVariable('global.header.options.languages.activeColor')};` 
		 : ''}
`;

export {
    StyledLabel,
    StyledSubTitle,
    StyledContainer,
    StyledTitle,
    StyledButton
};