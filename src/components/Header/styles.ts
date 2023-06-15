import styled from 'styled-components'
import headerBg from '../../assets/headerBg.png'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;

  > div {
    display: flex;
    padding-bottom: 4rem;
    align-items: center;
    justify-content: center;
  }
`
