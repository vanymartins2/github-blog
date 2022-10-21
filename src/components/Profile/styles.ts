import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  margin-top: -5.5rem;

  background: ${props => props.theme['base-background']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 2.5rem 2rem;
`
export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${props => props.theme['base-title']};
  }
`

export const Link = styled.a`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;

  color: ${props => props.theme.blue};

  svg {
    margin-left: 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
export const Info = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme['base-subtitle']};

    svg {
      color: ${props => props.theme['base-label']};
    }
  }
`
