import styled from 'styled-components';
import { MyLink } from 'src/components/elements/link';
import { getThemeVariable } from 'src/theme/utils';

const StyledLink = styled(MyLink)`
	padding: 0px 15px;
	border: none;
	color: white;
	background: ${getThemeVariable('colors.primary')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
	height: 40px;
	line-height: 40px;
	margin-top: 10px;
	margin-bottom: 60px;

	&:hover {
		background: ${getThemeVariable('colors.primaryHovered')};
	}
`;

export {
    StyledLink
};