import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Content,
  Link,
  NavButtons,
  PostContainer,
  PostHeader,
  PostInfo
} from './styles'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <NavButtons>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <Link to={'/'}>
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </NavButtons>

        <h1>JavaScript data types and data structures</h1>

        <PostInfo>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            duskarknights
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            Há 1 dia
          </li>
        </PostInfo>
      </PostHeader>

      <Content>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </Content>
    </PostContainer>
  )
}
