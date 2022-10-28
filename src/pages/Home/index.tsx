import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { BlogContext } from '../../contexts/BlogContext'
import { SearchForm } from './components/SearchForm'
import { CardContainer, CardsSection, MainContainer, Title } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Home() {
  const { issues, filteredIssues } = useContext(BlogContext)

  return (
    <MainContainer>
      <Profile />

      <SearchForm />

      <CardsSection>
        {filteredIssues.length !== 0
          ? filteredIssues.map(issue => (
              <CardContainer to={`/post/${issue.issueNumber}`} key={issue.id}>
                <Title>
                  <h2>{issue.title}</h2>
                  <span>
                    {formatDistanceToNow(new Date(issue.createdAt), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </span>
                </Title>
                <p>{issue.body}</p>
              </CardContainer>
            ))
          : issues.map(issue => (
              <CardContainer to={`/post/${issue.issueNumber}`} key={issue.id}>
                <Title>
                  <h2>{issue.title}</h2>
                  <span>
                    {formatDistanceToNow(new Date(issue.createdAt), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </span>
                </Title>
                <p>{issue.body}</p>
              </CardContainer>
            ))}
      </CardsSection>
    </MainContainer>
  )
}
