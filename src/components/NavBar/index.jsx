import {
    Header, Container, LeftContainer, RightContainer,
    HamburguerMenu, Brand
} from './styled'


const NavBar = () => {
    return <Header>
        <Container>
        <LeftContainer>
            <HamburguerMenu>
                <img src={'/static/hamburguer.svg'} />
            </HamburguerMenu>
            <Brand src={'/static/logo.svg'} />
        </LeftContainer>
        <RightContainer>
            <img src={'/static/user.svg'} />
            <img src={'/static/bell.svg'} />
            <img src={'/static/menu.svg'} />
        </RightContainer>
        </Container>
    </Header>
}

export default NavBar