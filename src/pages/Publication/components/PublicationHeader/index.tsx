import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PublicationHeaderContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { IPub } from '../../../Home'
import { LoadSpinner } from '../../../../components/LoadSpinner'
import { relativeDateFormatter } from '../../../../utils/Formatter'

interface PublicationHeaderProps {
  publicationData: IPub
  isLoading: boolean
}

export function PublicationHeader({
  publicationData,
  isLoading,
}: PublicationHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const commentText =
    publicationData.comments === 1 ? 'comentário' : 'comentários'

  const formattedDate = relativeDateFormatter(publicationData?.created_at)

  return (
    <PublicationHeaderContainer className="container">
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              text="Voltar"
              onClick={goBack}
              variant="iconLeft"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
            />
            <ExternalLink
              text="Ver no Github"
              href={publicationData.html_url}
              target="_blank"
            />
          </header>

          <h1>{publicationData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {publicationData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {publicationData.comments} {commentText}
            </li>
          </ul>
        </>
      )}
    </PublicationHeaderContainer>
  )
}
