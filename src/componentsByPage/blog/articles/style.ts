import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';

const StyledTitle = styled.h2`
	margin-top: 1em;
	margin-bottom: .3em;

	a {
		color: ${getThemeVariable('colors.color')};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const StyledMetaData = styled.div`
	font-size: .9em;
	margin-bottom: 20px;
	color: ${getThemeVariable('global.markdown.metaDataColor')};
`;

const StyledEmpty = styled.div`
	margin: 20px 0px;
`;

export {
    StyledMetaData,
    StyledTitle,
    StyledEmpty
};