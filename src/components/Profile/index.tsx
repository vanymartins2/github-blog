import { Avatar, Info, Link, ProfileContainer, ProfileTitle } from './styles'
import profilePhoto from '../../assets/dusk-arknights.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src={profilePhoto} alt="" />

      <div>
        <ProfileTitle>
          <h1>Dusk Arknights</h1>
          <Link href="https://github.com/vanymartins2">
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Info>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            duskarknights
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            2.548 seguidores
          </li>
        </Info>
      </div>
    </ProfileContainer>
  )
}
