import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconAndItemContainer,
  NameAndLinkContainer,
  ProfileDescriptionContainer,
  ProfileDetails,
  ProfilePicture,
  ProfileSummaryContainer,
} from './styles'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useState, useCallback, useEffect } from 'react'
import { api } from '../../../../lib/axios'
import { LoadSpinner } from '../../../../components/LoadSpinner'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function ProfileSummary() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`users/${username}`)

      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])

  const followersText = profileData.followers === 1 ? 'seguidor' : 'seguidores'

  return (
    <ProfileSummaryContainer>
      {isLoading ? (
        <LoadSpinner />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} alt="" />
          <ProfileDetails>
            <NameAndLinkContainer>
              <span>{profileData.name}</span>

              <ExternalLink
                href={profileData.html_url}
                rel="noreferrer"
                text="Github"
                target="_blank"
              />
            </NameAndLinkContainer>
            <ProfileDescriptionContainer>
              <p>{profileData.bio}</p>
            </ProfileDescriptionContainer>
            <IconAndItemContainer>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <p>{profileData.login}</p>
              </div>
              {profileData?.company && (
                <div>
                  <FontAwesomeIcon icon={faBuilding} />
                  <p>{profileData.company}</p>
                </div>
              )}
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <p>
                  {profileData.followers} {followersText}
                </p>
              </div>
            </IconAndItemContainer>
          </ProfileDetails>
        </>
      )}
    </ProfileSummaryContainer>
  )
}
