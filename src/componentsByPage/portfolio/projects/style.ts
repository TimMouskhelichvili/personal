import styled from 'styled-components';
import { OutsideLink } from 'src/components/elements/outsideLink';
import { SideBySide } from 'src/components/landing/sideBySide';
import { SubTitle } from 'src/components/landing/subTitle';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSideBySide = styled(SideBySide)`
	padding-left: 0px;
	padding-right: 0px;
	margin-bottom: 50px;

	> div {
		flex: 1 1 0%;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 30px;
		border-top: 1px solid ${getThemeVariable('global.borderColor')};
		padding-top: 40px;
	}

	&:nth-child(even) {
		flex-direction: row-reverse;

		> div {
			&:last-of-type {
				padding-right: 40px;
				padding-left: 0px;

				@media screen and (max-width: ${devices.smallTablet}) {
					padding-right: 0px;
					padding-left: 0px;
				}
			}
	
			&:first-of-type {
				padding-right: 0px;
				padding-left: 40px;

				@media screen and (max-width: ${devices.smallTablet}) {
					padding-right: 0px;
					padding-left: 0px;
				}
			}
		}	
	}
`;

const StyledImgContainer = styled.div`
	background: ${getThemeVariable('pages.portfolio.image.background')};
	border-radius: ${getThemeVariable('global.borderRadius')};
	position: relative;
	padding-top: 62%;

	img {
		border-radius: ${getThemeVariable('global.borderRadius')};
		border: 1px solid ${getThemeVariable('pages.portfolio.image.background')};
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		width: 70%;
		margin: 0px auto;
		padding-top: 42%;
	}

	@media screen and (max-width: ${devices.mobile}) {
		width: 100%;
		padding-top: 62%;
	}
`;

const StyledTagsContainer = styled.div`
	margin-top: 10px;

	> div {
		border-radius: ${getThemeVariable('global.borderRadius')};
		background: ${getThemeVariable('pages.portfolio.cardBackground')};
		padding: 10px;
		text-align: center;
		display: inline-block;
		margin-bottom: 10px;
		margin-right: 10px;
	}
`;

const StyledSubTitle = styled(SubTitle)`
	@media screen and (max-width: ${devices.smallTablet}) {
		margin-top: 30px;
	}
`;

const StyledOutsideLink = styled(OutsideLink)`
	color: ${getThemeVariable('colors.primary')};
	margin-top: 20px;
	margin-bottom: 10px;
	margin-right: 10px;
	display: inline-block;
`;

export {
    StyledTagsContainer,
    StyledImgContainer,
    StyledSideBySide,
    StyledSubTitle,
    StyledOutsideLink
};