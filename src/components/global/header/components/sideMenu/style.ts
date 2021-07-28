import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledLogoContainer = styled.div`
	border-bottom: 1px solid ${getThemeVariable('global.borderColor')};
	padding: 10px;

	& > div {
		width: 220px;
	}
`;

const StyledSideMenuItemFooterContainer = styled.div`
	margin-top: 20px;
	text-align: center;
`;

export {
    StyledLogoContainer,
    StyledSideMenuItemFooterContainer
};