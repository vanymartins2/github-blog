import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const PostContainer = styled.article`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  margin-bottom: 10rem;
`

export const PostHeader = styled.div`
  width: 54rem;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  padding: 2rem;

  background: ${props => props.theme['base-background']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${props => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const NavButtons = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;

  color: ${props => props.theme.blue};

  svg {
    margin: 0 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
export const BackButton = styled(RouterLink)`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;

  color: ${props => props.theme.blue};

  svg {
    margin: 0 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const PostInfo = styled.ul`
  display: flex;
  gap: 2rem;

  li {
    list-style: none;
    color: ${props => props.theme['base-span']};

    svg {
      color: ${props => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
export const Content = styled.p`
  padding: 2rem 2.5rem;
`
