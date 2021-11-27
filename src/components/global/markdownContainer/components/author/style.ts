import styled from 'styled-components';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledContainer = styled.div`
	border: 1px solid ${getThemeVariable('global.borderColor')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	padding: 20px;
	display: flex;

	@media screen and (max-width: ${devices.smallTablet}) {
		display: block;
		margin-top: 20px;
	}
`;

const StyledImageContainer = styled.div`
	@media screen and (max-width: ${devices.smallTablet}) {
		display: block;

		img, amp-img {
			margin: 0 auto;
			display: block;
		}
	}

	img {
		border: 0px;
		border-radius: 50%;
	}
`;

const StyledDetailsContainer = styled.div`
	@media screen and (max-width: ${devices.smallTablet}) {
		margin-top: 20px;
		margin-left: 0px;
	}

	margin-left: 20px;

	.img-group {
		margin-top: 5px;
		display: flex;
	}

	.img-group img {
		height: 20px;
		margin-right: 5px;
		border-radius: 0px;
	}
`;

const StyledAuthorName = styled.div`
	font-size: 1.2em;
	font-weight: bold;
	margin-bottom: 10px;
`;

const StyledSubTitle = styled.div`
	text-transform: uppercase;
	font-weight: 300;
`;

const StyledButton = styled.button`
	margin-top: 20px;
	background: transparent;
	border: 2px solid ${getThemeVariable('colors.primary')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	color: ${getThemeVariable('colors.primary')};
	padding: 10px 25px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}

	svg {
		margin-left: 10px;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		border-width: 3px;
		font-size: 1.2em;
		padding: 10px 15px;
	}
`;

export {
    StyledImageContainer,
    StyledAuthorName,
    StyledDetailsContainer,
    StyledContainer,
    StyledSubTitle,
    StyledButton
};