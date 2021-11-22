import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Title } from 'src/components/global/title';

const StyledContainer = styled.div`
	display: flex;
	align-items: top;
	position: relative;
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

const StyledStickyContainer = styled.div`
	position: sticky;
	top: 80px;
	align-self: flex-start;
	margin-bottom: 20px;
`;

const StyledMarkdownContainer = styled.div`
	max-width: 600px;
`;

export {
    StyledStickyContainer,
    StyledMarkdownContainer,
    StyledTitle,
    StyledContainer,
    StyledMetaData
};