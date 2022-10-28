import { ReactNode, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../../contexts/BlogContext'

import {
  BackButton,
  Content,
  Link,
  NavButtons,
  PostContainer,
  PostHeader,
  PostInfo
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Post() {
  const { issueNumber } = useParams()
  const { issues } = useContext(BlogContext)

  const currentPost = issues?.find(
    issue => String(issue?.issueNumber) === issueNumber
  )

  return (
    <PostContainer>
      <PostHeader>
        <NavButtons>
          <BackButton to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </BackButton>
          <Link href={`${currentPost?.issueUrl}`} target="_blank">
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </NavButtons>

        <h1>{currentPost?.title}</h1>

        <PostInfo>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {currentPost?.user}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(new Date(String(currentPost?.createdAt)), {
              addSuffix: true,
              locale: ptBR
            })}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            {currentPost?.comments}
          </li>
        </PostInfo>
      </PostHeader>

      <Content>
        <ReactMarkdown>{`${currentPost?.body}`}</ReactMarkdown>
      </Content>
    </PostContainer>
  )
}
