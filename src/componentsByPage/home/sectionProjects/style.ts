import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Section } from 'src/components/elements/section';
import { Title } from 'src/components/landing/title';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
`;

const StyledTitle = styled(Title)`
	margin-bottom: 40px;
`;

export {
    StyledSection,
    StyledTitle
};