import styled from 'styled-components';
import { Icon } from 'src/components/elements/icon';
import { getThemeVariable } from 'src/theme/utils';

const SwitchContainerAll = styled.div`
	display: inline-block;
`;

const SwitchContainer = styled.div`
	position: relative;
	display: flex;
`;

const SwitchTrack = styled.div<{ checked: boolean }>`
	width: 60px;
	height: 30px;
	background: ${getThemeVariable('global.darkModeSwitch.background')};
	border-radius: 15px;
	transition: all 150ms;

	${(p): string => p.checked ? `
		background: ${getThemeVariable('colors.primary')};
	` : ''}
`;

const SwitchInput = styled.input`
	appearance: none;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	margin: 0px;
	cursor: pointer;
	border: none;

	&:focus,
	&:active,
	&:visited,
	&:hover {
		outline: 0;
	}
`;

const SwitchButton = styled.div<{ checked: boolean }>`
	width: 23px;
	height: 23px;
	border-radius: 50%;
	background: ${getThemeVariable('global.color')};
	position: absolute;
	top: 3px;
	left: 3px;
	transition: all 150ms;

	${(p): string => p.checked ? `
		left: calc(100% - 3px);
		transform: translateX(-100%);
	` : ''}
`;

const SwitchIcon = styled(Icon)<{ checked: boolean }>`
	position: absolute;
	font-size: 16px;
	top: 7px;
	right: 7px;

	${(p): string => p.checked ? `
		left: 7px;
		right: auto;
	` : ''}
`;

export {
    SwitchContainerAll,
    SwitchContainer,
    SwitchTrack,
    SwitchInput,
    SwitchButton,
    SwitchIcon
};