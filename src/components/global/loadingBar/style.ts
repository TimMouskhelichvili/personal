import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledLoadingBar = styled.div`
	height: 5px;
	width: 0%;
	z-index: 999999999;
	position: absolute;
	background: ${getThemeVariable('colors.primary')};
	top: 0px;
`;

export {
    StyledLoadingBar
};