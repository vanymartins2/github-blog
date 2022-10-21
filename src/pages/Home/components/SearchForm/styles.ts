import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;

    color: ${props => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    text-align: right;

    color: ${props => props.theme['base-span']};
  }
`
export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  gap: 8px;

  background: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};

  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`
