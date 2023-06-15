import { PublicationContainer } from './styles'
import { IPub } from '../../../Home/index.tsx'
import { relativeDateFormatter } from '../../../../utils/Formatter.ts'
interface PubProps {
  publication: IPub
}

export function Publication({ publication }: PubProps) {
  const formattedDate = relativeDateFormatter(publication.created_at)

  return (
    <PublicationContainer to={`/post/${publication.number}`}>
      <div>
        <strong>{publication.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{publication.body}</p>
    </PublicationContainer>
  )
}
