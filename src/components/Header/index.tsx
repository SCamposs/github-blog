import logoBlog from '../../assets/logoBlog.svg'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoBlog} alt="" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
