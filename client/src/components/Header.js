import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function Header() {
    return(
        <HeaderWrapper>
        <section className="brand-wrapper">
          <img className="brand" src="/remazing-brand.png" />
        </section>
        <section className="user-items">
            <Icon className="icon -bell" name="bell" />
            <img className="user-image" src="https://source.unsplash.com/50x50/?portrait" />
        </section>
      </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 20% 80%;

  .brand-wrapper {
    padding: 20px 60px 0;
    border-right: 1px solid #E4E6E8;
  }

  .brand {
    width: 120px;
  }

  .user-items {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 50px;
    align-self: center;
    justify-content: end;
    padding: 0 80px 0 0;
  }

  .user-image {
    border-radius: 50%;
    width: 30px;
    height: auto;
  }
`