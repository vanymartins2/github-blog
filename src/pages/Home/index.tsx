import { Card } from '../../components/Card'
import { Profile } from '../../components/Profile'
import { SearchForm } from './components/SearchForm'
import { CardsSection, MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <Profile />

      <SearchForm />

      <CardsSection>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsSection>
    </MainContainer>
  )
}
