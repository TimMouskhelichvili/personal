import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Title } from 'src/components/global/title';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	display: flex;
	align-items: top;
	position: relative;

	@media screen and (max-width: ${devices.tablet}) {
		justify-content: center;
	}
`;

const StyledMetaData = styled.div`
	font-size: .9em;
	color: ${getThemeVariable('global.markdown.metaDataColor')};
`;

const StyledTitleData = styled.div`
	margin-bottom: 3px;
`;

const StyledTitle = styled(Title)`
	margin-bottom: 10px;
`;

const StyledSocialContainer = styled.div`
	position: sticky;
	top: 80px;
	align-self: flex-start;
	margin-bottom: 20px;
	width: 90px;
	margin-top: 5px;

	@media screen and (max-width: ${devices.tablet}) {
		margin-left: -90px;
	}

	@media screen and (max-width: ${devices.bigMobile}) {
		display: none;
	}
`;

const StyledSummaryContainer = styled.div`
	position: sticky;
	top: 80px;
	align-self: flex-start;
	margin-bottom: 20px;
	margin-left: 30px;
	margin-top: 5px;

	@media screen and (max-width: ${devices.tablet}) {
		display: none;
	}
`;

const StyledMarkdownContainer = styled.div<{ clear?: boolean }>`
	max-width: 600px;

	${(p): string => p.clear ? 'margin: 0 auto;' : ''}
	
	@media screen and (max-width: ${devices.bigMobile}) {
		margin: 0 auto;
	}

	@media screen and (max-width: ${devices.markdownMobile}) {
		max-width: 100%;
	}
`;

const StyledTitleContainer = styled.div<{ clear?: boolean; }>`
	max-width: 600px;
	margin-left: 90px;

	${(p): string => p.clear ? 'margin-left: 0px;margin: 0 auto;' : ''}

	@media screen and (max-width: ${devices.tablet}) {
		margin: 0 auto;
	}

	@media screen and (max-width: ${devices.markdownMobile}) {
		max-width: 100%;
	}
`;

const StyledAuthorContainer = styled.div`
	display: flex;
	margin-bottom: 10px;

	img {
		border-radius: 50%;
	}

	svg {
		margin-right: 4px;
	}
`;

const StyledAuthorTitleContainer = styled.div`
	margin-left: 12px;
`;

export {
    StyledAuthorTitleContainer,
    StyledAuthorContainer,
    StyledTitleContainer,
    StyledSummaryContainer,
    StyledSocialContainer,
    StyledMarkdownContainer,
    StyledTitle,
    StyledContainer,
    StyledMetaData,
    StyledTitleData
};