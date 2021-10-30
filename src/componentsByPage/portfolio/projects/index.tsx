import React, { ReactElement } from 'react';
import { StyledImgContainer, StyledSideBySide, StyledSubTitle, StyledOutsideLink, StyledTagsContainer } from './style';
import { IProject } from 'src/componentsByPage/portfolio/projects/interfaces/IProject';
import { CustomImage } from 'src/components/elements/customImage';
import { Paragraph } from 'src/components/elements/paragraph';
import { Title } from 'src/components/landing/title';
import { useLocale } from 'src/localizations';

interface IProjectsProps {
	max?: number;
}

/**
 * The Projects component.
 * @param {IProjectsProps} props - The props.
 */
const Projects = (props: IProjectsProps): ReactElement => {
    const locale = useLocale();
    const { portfolio } = locale.pages;
    const projects = props.max ? 
        portfolio.projects.slice(0, props.max) : portfolio.projects;

    return (
        <>
            {projects.map(project => getProject(project, portfolio.link))}
        </>
    );
};

/**
 * Returns the project.
 * @param {IProject} project - The project.
 * @param {string} link - The link.
 */
const getProject = (project: IProject, link: string): ReactElement => (
    <StyledSideBySide key={project.title}>
        <div>
            <StyledImgContainer>
                <CustomImage
                    height={'100%'}
                    width={'100%'}
                    alt={project.title}
                    title={project.title}
                    src={`/static/images/portfolio/${project.project}.png`} />
            </StyledImgContainer> 
        </div>
        <div>
            <StyledSubTitle>{project.subTitle}</StyledSubTitle>
            <Title marginBottom={'20px'}>{project.title}</Title>
            <Paragraph>{project.description}</Paragraph>
            {project.tags && (
                <StyledTagsContainer>
                    {project.tags.map((tag) => (
                        <div key={tag}>{tag}</div>
                    ))}
                </StyledTagsContainer>
            )}
            {project.href && 
				<StyledOutsideLink href={project.href} >{link}</StyledOutsideLink>}
        </div>
    </StyledSideBySide>
);

export {
    Projects
};