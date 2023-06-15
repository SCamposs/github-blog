import { useEffect, useState, useCallback } from 'react'
import { ProfileSummary } from './components/ProfileSummary'
import { Publication } from './components/Publication'
import { HomeContainer, PubListContainer } from './styles'
import { api } from '../../lib/axios'
import { LoadSpinner } from '../../components/LoadSpinner'
import { PubSearch } from './components/PubSearch'

export interface IPub {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: { login: string }
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Home() {
  const [publications, setPublications] = useState<IPub[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPublications = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`,
      )

      setPublications(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPublications()
  }, [getPublications])
  return (
    <HomeContainer className="container">
      <ProfileSummary />
      <PubSearch
        pubsLength={publications.length}
        getPublications={getPublications}
      />
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <PubListContainer>
          {publications.map((publication) => (
            <Publication key={publication.number} publication={publication} />
          ))}
        </PubListContainer>
      )}
    </HomeContainer>
  )
}
