import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { Title } from 'src/components/global/title';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	display: flex;
	align-items: top;
	position: relative;

	@media screen and (max-width: ${devices.bigMobile}) {
		display: block;
	}
`;

const StyledMetaData = styled.div`
	font-size: .9em;
	margin-bottom: 20px;
	color: ${getThemeVariable('global.markdown.metaDataColor')};
	margin-left: 90px;

	@media screen and (max-width: ${devices.bigMobile}) {
		margin-left: 0px;
	}
`;

const StyledTitle = styled(Title)`
	margin-bottom: 10px;
	margin-left: 90px;

	@media screen and (max-width: ${devices.bigMobile}) {
		margin-left: 0px;
	}
`;

const StyledSocialContainer = styled.div`
	position: sticky;
	top: 80px;
	align-self: flex-start;
	margin-bottom: 20px;

	@media screen and (max-width: ${devices.bigMobile}) {
		display: none;
	}
`;

const StyledSummaryContainer = styled.div`
	position: sticky;
	top: 80px;
	align-self: flex-start;
	margin-bottom: 20px;

	@media screen and (max-width: ${devices.tablet}) {
		display: none;
	}
`;

const StyledMarkdownContainer = styled.div`
	max-width: 600px;

	@media screen and (max-width: ${devices.bigMobile}) {
		margin: 0 auto;
	}
`;

export {
    StyledSummaryContainer,
    StyledSocialContainer,
    StyledMarkdownContainer,
    StyledTitle,
    StyledContainer,
    StyledMetaData
};