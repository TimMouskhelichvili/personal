import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledSideMenuItemContainer = styled.div`
	margin-bottom: 10px;
`;

const SideMenuItemClose = styled.div`
	border-bottom: 1px solid ${getThemeVariable('global.borderColor')};
	background: ${getThemeVariable('global.header.sideMenu.goBackBackground')};
	cursor: pointer;
	padding: 15px;

	svg {
		margin-right: 15px;
	}
`;

export {
    StyledSideMenuItemContainer,
    SideMenuItemClose
};