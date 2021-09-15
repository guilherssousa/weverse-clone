import {
    Header, Container, LeftContainer, RightContainer,
    HamburguerMenu, Brand, MenuButton
} from './styled'


const NavBar = () => {
    return <Header>
        <Container>
        <LeftContainer>
            <HamburguerMenu>
                <img alt="Menu" src={'/static/hamburguer.svg'} />
            </HamburguerMenu>
            <Brand alt="Weverse" src={'/static/logo.svg'} />
        </LeftContainer>
        <RightContainer>
            <MenuButton alt="User" src={'/static/user.svg'} />
            <MenuButton alt="Notifications" src={'/static/bell.svg'} />
            <MenuButton alt="Settings" src={'/static/menu.svg'} />
        </RightContainer>
        </Container>
    </Header>
}

export default NavBar