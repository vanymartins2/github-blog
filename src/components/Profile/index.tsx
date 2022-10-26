import { Avatar, Info, Link, ProfileContainer, ProfileTitle } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <Avatar src={user.avatarUrl} alt="" />

      <div>
        <ProfileTitle>
          <h1>{user.name}</h1>
          <Link href={user.profileUrl}>
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileTitle>
        <p>{user.bio}</p>
        <Info>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </li>
        </Info>
      </div>
    </ProfileContainer>
  )
}
