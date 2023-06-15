import {
  PubSearchContainer,
  PubSearchInput,
  PubSearchHeaderContainer,
} from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({ query: z.string() })

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  pubsLength: number
  getPublications: (query?: string) => Promise<void>
}

export function PubSearch({ pubsLength, getPublications }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPublications(data: SearchFormInput) {
    await getPublications(data.query)
  }

  const publicationText = pubsLength === 1 ? 'publicação' : 'publicações'

  return (
    <PubSearchContainer onSubmit={handleSubmit(handleSearchPublications)}>
      <PubSearchHeaderContainer>
        <h1>Publicações</h1>
        <span>
          {pubsLength} {publicationText}
        </span>
      </PubSearchHeaderContainer>

      <PubSearchInput
        type="search"
        placeholder="Buscar Conteúdo"
        {...register('query')}
      />
    </PubSearchContainer>
  )
}
