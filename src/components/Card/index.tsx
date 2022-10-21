import { CardContainer, Title } from './styles'

export function Card() {
  return (
    <CardContainer to="/post">
      <Title>
        <h2>Javascript data types and data structures</h2>
        <span>Há 1 dia</span>
      </Title>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        build-in data structures available in...
      </p>
    </CardContainer>
  )
}
