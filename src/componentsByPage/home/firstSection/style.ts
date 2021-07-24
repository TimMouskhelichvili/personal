import styled from 'styled-components';
import { devices } from 'src/theme';
import { getThemeVariable } from 'src/theme/utils';

const StyleImgContainer = styled.div`
	text-align: center;

	> div {
		justify-content: center;
		display: flex;
		height: 100%;
	}

	img {
		display: inline-block;
		object-fit: cover;
		border-radius: ${getThemeVariable('global.borderRadius')};
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		display: none;
	}
`;

export {
    StyleImgContainer
};