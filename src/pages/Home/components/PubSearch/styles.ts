import styled from 'styled-components'

export const PubSearchContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`
export const PubSearchHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;

  > h1 {
    font-size: ${(props) => props.theme.textSizes['title-title-s']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
  > span {
    font-size: ${(props) => props.theme.textSizes['text-text-s']};
    color: ${(props) => props.theme.colors['base-span']};
  }
`
export const PubSearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors['base-border']};
  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme.colors['brand-blue']};
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
