import styled from 'styled-components'

export const ProfileSummaryContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  max-width: 100%;
`
export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ProfilePicture = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const NameAndLinkContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;

  > span {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.textSizes['title-title-l']};
    font-weight: bold;
    line-height: 130%;
  }
`

export const ProfileDescriptionContainer = styled.section`
  display: flex;
  padding: 0.5rem 0 1.5rem 0;
  font-size: 1rem;
  font-weight: regular;
  line-height: 1.5rem;
`
export const IconAndItemContainer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 1rem;
  line-height: 1.625rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 18px;
  }
`
