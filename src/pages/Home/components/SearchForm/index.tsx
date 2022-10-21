import { Input, SearchContainer, Title } from './styles'

export function SearchForm() {
  return (
    <SearchContainer>
      <Title>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </Title>

      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
