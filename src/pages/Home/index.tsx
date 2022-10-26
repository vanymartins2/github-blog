import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { BlogContext } from '../../contexts/BlogContext'
import { SearchForm } from './components/SearchForm'
import { CardContainer, CardsSection, MainContainer, Title } from './styles'

export function Home() {
  const { issues } = useContext(BlogContext)

  return (
    <MainContainer>
      <Profile />

      <SearchForm />

      <CardsSection>
        {issues.map(issue => (
          <CardContainer to={`/post/${issue.issueNumber}`} key={issue.id}>
            <Title>
              <h2>{issue.title}</h2>
              <span>{String(issue.createdAt)}</span>
            </Title>
            <p>{issue.body}</p>
          </CardContainer>
        ))}
      </CardsSection>
    </MainContainer>
  )
}
