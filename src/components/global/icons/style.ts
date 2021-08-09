import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledIcons = styled.div`
	margin-top: 30px;

	a {
		display: inline-block;
		background: ${getThemeVariable('global.footer.icon.background')};
		height: 40px;
		width: 40px;
		margin: 0px 7.5px;
		border-radius: ${getThemeVariable('global.borderRadius')};

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40px;
			width: 40px;
		}

		svg {
			font-size: 1.5em;
			color: ${getThemeVariable('global.footer.icon.color')};
		}
	}
`;

export {
    StyledIcons
};