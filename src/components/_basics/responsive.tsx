import styled from 'styled-components';

export const DesktopOnly = styled.div`
	@media (max-width: 1024px) {
		display: none;
	}

	@media (min-width: 1024px) {
		display: block;
	}
`;

export const MobileOnly = styled.div`
	@media (min-width: 1024px) {
		display: none;
	}
	@media (max-width: 1024px) {
		display: block;
	}
`;
