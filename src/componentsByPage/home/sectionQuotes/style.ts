import styled from 'styled-components';
import { OutsideLink } from 'src/components/elements/outsideLink';
import { Paragraph } from 'src/components/elements/paragraph';
import { Section } from 'src/components/elements/section';
import { Icon } from 'src/components/elements/icon';
import { getThemeVariable } from 'src/theme/utils';
import { devices } from 'src/theme';

const StyledSection = styled(Section)`
	border-top: 1px solid ${getThemeVariable('global.borderColor')};
`;

const StyledQuotesContainer = styled.div`
	margin-top: 40px;
	display: grid;
	grid-gap: 50px;
	grid-template-columns: 1fr 1fr 1fr;

	> div {
		position: relative;
	}

	@media screen and (max-width: ${devices.smallTablet}) {
		grid-gap: 60px;
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: ${devices.mobile}) {
		grid-gap: 50px;
	}
`;

const StyledDescription = styled(Paragraph)`
	font-style: italic;
	margin-bottom: 15px;

	@media screen and (max-width: ${devices.smallTablet}) {
		margin-bottom: 20px;
	}
`;

const StyledIcon = styled(Icon)`
	color: ${getThemeVariable('pages.home.quotes.background')}; 
	position: absolute;
	font-size: 3em;
	margin-top: -15px;
	margin-left: -5px;
	z-index: -1;
`;

const StyledName = styled.div`
	font-weight: bold;
	font-size: 1.1em;
	margin-bottom: 2px;
`;

const StyledLink = styled(OutsideLink)`
	color: ${getThemeVariable('colors.color')};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const StyledImgContainer = styled.div`
	background: ${getThemeVariable('pages.home.quotes.background')}; 
	display: inline-block;
	height: 75px;
	width: 75px;
	border-radius: 50%;
	padding: 5px;

	picture > img, > amp-img {
		border-radius: 50%;
	}
`;

const StyledNameContainer = styled.div`
	display: inline-block;
	text-align: left;
	margin-left: 15px;
	vertical-align: top;
	margin-top: 15px;
`;

const StyledCompany = styled.div`
	font-size: 1em;
`;

const StyledFooter = styled.div`
	text-align: center;
`;

export {
    StyledDescription,
    StyledQuotesContainer,
    StyledImgContainer,
    StyledNameContainer,
    StyledSection,
    StyledIcon,
    StyledName,
    StyledLink,
    StyledCompany,
    StyledFooter
};