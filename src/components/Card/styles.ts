import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const CardContainer = styled(RouterLink)`
  max-width: 26rem;
  max-height: 16.25rem;
  padding: 2rem;

  background: ${props => props.theme['base-post']};
  border-radius: 10px;

  text-decoration: none;
  transition: all 0.2s ease-out;

  p {
    color: ${props => props.theme['base-text']};
  }

  &:hover {
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`

export const Title = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;

    color: ${props => props.theme['base-title']};
    flex: 1;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
  }
`
