import React from 'react';
import styled from '@emotion/styled';

export default function Logo() {
	return (
		<StyledLogoWrapper>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="90"
				height="90"
				viewBox="0 0 256 256"
			>
				<g fillRule="evenodd">
					<path d="M75 62c18.434 0 34.96 7.373 46.144 19.027l-15.132 22.191C100.371 92.918 88.603 85.833 75 85.833c-19.09 0-34.567 13.954-34.567 31.167S55.91 148.167 75 148.167c14.796 0 27.42-8.382 32.352-20.167h.181l4.067-8.42 10.167-21.05c2.373-4.203 4.154-7.583 5.341-10.139C132.75 96.727 136 106.521 136 117c0 30.376-27.31 55-61 55s-61-24.624-61-55 27.31-55 61-55z" />
					<path d="M180.848 171.545c-19.528 1.024-36.824-7.856-48.59-20.273l14.548-21.114c5.74 11.035 18.45 18.348 32.795 17.596 18.98-.995 33.636-15.73 32.736-32.913-.9-17.182-17.017-30.305-35.997-29.31-14.71.77-26.823 9.796-31.11 21.817l-.18.01-3.659 7.531-9.149 18.831-5.715 10.74c-5.26-7.154-8.704-15.123-9.203-24.64-1.589-30.321 24.275-56.325 57.77-58.08 33.493-1.756 61.934 21.402 63.523 51.724 1.589 30.322-24.275 56.326-57.77 58.081z" />
					<path d="M132 151v53h26v-36.382z" />
					<path d="M172.463 162v3.918l2.775-1.333L199 205l-30.027-.373-15.374-26.149h-1.381l-.001-2.351-.217-.368.217-.105V162h20.246z" />
				</g>
			</svg>
		</StyledLogoWrapper>
	);
}

const StyledLogoWrapper = styled.span`
	width: 85px;
	height: 85px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid ${p => p.theme.colors.primary};
	border-radius: 50%;
	padding: 12px;

	g {
		fill: ${p => p.theme.colors.primary};
	}
`;
