import styled from 'styled-components';

const StyledContainer = styled.div`
	display: inline-block;
	user-select: none;
	
	svg {	
		height: 45px;
	}
`;

const StyledTitle = styled.div`
	margin-top: 5px;
	font-size: 16px;
	text-align: center;
`;

const StyledBold = styled.span`
	font-weight: bold;
`;

const StyledReviewsContainer = styled.div`
	margin-top: -4px;
	text-align: center;

	svg {
		color: #f9ab00;
		height: 15px;
		margin-right: 2px;

		&:last-of-type {
			margin-right: 0px;
		}
	}
`;

export {
    StyledReviewsContainer,
    StyledContainer,
    StyledTitle,
    StyledBold
};