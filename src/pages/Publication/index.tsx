import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IPub } from '../Home'
import { PublicationHeader } from './components/PublicationHeader'
import { useCallback, useState, useEffect } from 'react'
import { PublicationContent } from './components/PublicationContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Publication() {
  const [publicationData, setPublicationData] = useState<IPub>({} as IPub)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPublicationDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPublicationData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPublicationDetails()
  }, [getPublicationDetails])

  return (
    <>
      <PublicationHeader
        isLoading={isLoading}
        publicationData={publicationData}
      />
      {!isLoading && <PublicationContent content={publicationData.body} />}
    </>
  )
}
