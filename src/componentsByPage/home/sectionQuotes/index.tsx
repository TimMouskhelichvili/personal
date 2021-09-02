import React, { ReactElement } from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledSection, StyledQuotesContainer, StyledDescription, StyledIcon, StyledName, StyledLink, 
    StyledImgContainer, StyledNameContainer, StyledCompany, StyledFooter
} from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Row } from 'src/components/elements/row';
import { useLocale } from 'src/localizations';

/**
 * The SectionQuotes component.
 */
const SectionQuotes = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.quotes.subTitle}</SubTitle>
                <Title>{locale.pages.home.quotes.title}</Title>
                <StyledQuotesContainer>
                    {locale.pages.home.quotes.reviews.map((x, key) => (
                        <div key={key}>
                            <StyledIcon icon={faQuoteLeft} />
                            <StyledDescription>{x.description}</StyledDescription>
                            <StyledFooter>
                                {getImgContainer(x.img, x.name)}
                                <StyledNameContainer>
                                    <StyledName>{x.name}</StyledName>
                                    <StyledCompany>
                                        {x.href ? (
                                            <StyledLink href={x.href} title={x.company}>
                                        		{x.company}
                                            </StyledLink>
                                        ) : x.company}
                                    </StyledCompany>
                                </StyledNameContainer>
                            </StyledFooter>
                        </div>
                    ))}
                </StyledQuotesContainer>
            </Row>
        </StyledSection>
    );
};

/**
 * Returns the img container.
 * @param {string} img - The img. 
 * @param {string} alt - The alt. 
 */
const getImgContainer = (img: string, alt: string): ReactElement => (
    <StyledImgContainer>
        <CustomImage 
            src={`/static/images/home/reviews/${img}`} 
            alt={alt} 
            loading={'lazy'} 
            width={'65px'} 
            height={'65px'} />
    </StyledImgContainer>
);

export {
    SectionQuotes
};