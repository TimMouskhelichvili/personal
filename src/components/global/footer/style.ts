import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledCopyright = styled.div`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
	padding: 20px;
	text-align: center;
	font-size: .9em;
	user-select: none;
`;

export {
    StyledCopyright
};