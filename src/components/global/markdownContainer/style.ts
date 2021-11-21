import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Title } from 'src/components/global/title';

const StyledContainer = styled.div`
	display: flex;
	align-items: top;
`;

const StyledMetaData = styled.div`
	font-size: .9em;
	margin-bottom: 20px;
	color: ${getThemeVariable('global.markdown.metaDataColor')};
	margin-left: 90px;
`;

const StyledTitle = styled(Title)`
	margin-bottom: 10px;
	margin-left: 90px;
`;

const StyledSocialMediaContainer = styled.div`

`;

const StyledMarkdownContainer = styled.div`
	max-width: 600px;
`;

const StyledSummaryContainer = styled.div`

`;

export {
    StyledSummaryContainer,
    StyledMarkdownContainer,
    StyledSocialMediaContainer,
    StyledTitle,
    StyledContainer,
    StyledMetaData
};