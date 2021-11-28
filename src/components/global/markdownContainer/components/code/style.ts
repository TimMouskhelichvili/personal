import styled from 'styled-components';
import { lighten } from 'polished';
import { getThemeVariable } from 'src/theme/utils';

const StyledPre = styled.pre<{ clicked?: boolean }>`
	border-radius: ${getThemeVariable('global.borderRadius')};
	overflow: auto;
	background: ${(p): string => p.clicked ? lighten(.05, '#002b36') : '#002b36'};
	position: relative;

	pre {
		border-radius: ${getThemeVariable('global.borderRadius')};
		background: ${(p): string => p.clicked ? lighten(.05, '#002b36') : '#002b36'};
		padding: 0px;
		margin: 0px;
	}

	& > pre {
		padding: 1em;
		padding-top: 0px;
	}
`;

const StyledLanguage = styled.span`
	display: block;
	text-align: right;
	color: #586e75;
	user-select: none;
	margin-top: 7px;
	margin-right: 7px;
`;

const StyledButton = styled.button<{ showIcon: boolean; }>`
	margin-top: 3px;
	border: 0;
	background: ${getThemeVariable('colors.primary')};
	cursor: pointer;
	padding: 0px;
	position: absolute;
	bottom: 0px;
	right: 0px;
	visibility: ${(p): string => p.showIcon ? 'visible' : 'hidden'};
	border-radius-bottom-right: ${getThemeVariable('global.borderRadius')};
	color: white;
	padding: 7px 10px;

	&:hover {
		background: ${getThemeVariable('colors.primaryHovered')};
	}

	svg {
		font-size: 1.2em;
		color: white;
	}
`;

export {
    StyledButton,
    StyledLanguage,
    StyledPre
};