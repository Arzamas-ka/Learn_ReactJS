import styled from 'styled-components';
import { mediaQueries, colors } from '../../styles/consts';

export const StyledCatalogWrapper = styled.div`
  color: ${colors.grey};
`;

export const StyledFilterSelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 65px;
  border-bottom: 2px solid ${colors.grey_light};

  ${mediaQueries('sizeXXL')`
    flex-direction: column;
    align-items: center;

    border-bottom: none;
  `}
`;
