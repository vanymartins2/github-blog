import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { Input, SearchContainer, Title } from './styles'

export function SearchForm() {
  const { issues } = useContext(BlogContext)

  return (
    <SearchContainer>
      <Title>
        <h2>Publicações</h2>
        <span>{issues.length} publicações</span>
      </Title>

      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
