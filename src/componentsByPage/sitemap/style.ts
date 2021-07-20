import styled from 'styled-components';
import { MyLink } from 'src/components/elements/link';
import { getThemeVariable } from 'src/theme/utils';

const StyledLink = styled(MyLink)`
	color: ${getThemeVariable('colors.primary')};
	display: inline-block;
	margin-bottom: 5px;
`;

const StyledContainer = styled.div`
	margin-bottom: 40px;
`;

export {
    StyledLink,
    StyledContainer
};