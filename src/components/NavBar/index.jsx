import { useState } from "react";
import {
  Header,
  Container,
  LeftContainer,
  RightContainer,
  HamburguerMenu,
  Brand,
  MenuButton,
  Sidebar,
  SidebarLabel,
  Artist,
  ArtistProfile,
  SidebarRuler,
  SidebarContainer,
} from "./styled";

const NavBar = ({ artists, toggleTheme, theme }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const handleToggleSidebar = () => {
    console.log("Sidebar opened! Old state:", isSidebarOpened);
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <Header>
      <Container>
        <LeftContainer>
          <HamburguerMenu onClick={handleToggleSidebar}>
            <img alt="Menu" src={"/static/hamburguer.svg"} />
          </HamburguerMenu>
          <Brand alt="Weverse" src={"/static/logo.svg"} />
        </LeftContainer>
        <RightContainer>
          <MenuButton
            alt="Toggle Color Mode"
            src={`/static/${theme ? "dark" : "light"}.svg`}
            onClick={() => toggleTheme(!theme)}
          />
          <MenuButton alt="User" src={"/static/user.svg"} />
          <MenuButton alt="Notifications" src={"/static/bell.svg"} />
          <MenuButton alt="Settings" src={"/static/menu.svg"} />
        </RightContainer>
      </Container>
      <Sidebar isOpened={isSidebarOpened}>
        <SidebarContainer>
          <SidebarLabel>Your Weverse</SidebarLabel>
          {artists.communities
            .filter((artist) => artist.joined)
            .map((artist) => {
              return (
                <Artist key={artist.name}>
                  <ArtistProfile
                    src={artist.iconImgPath}
                    width={30}
                    height={30}
                  />
                  {artist.name}
                </Artist>
              );
            })}
          <SidebarRuler className="ruler" />
          <SidebarLabel>More Weverse</SidebarLabel>
          {artists.communities
            .sort((a, b) => a.id < b.id)
            .filter((artist) => !artist.joined)
            .map((artist) => {
              return (
                <Artist key={artist.name}>
                  <ArtistProfile
                    src={artist.iconImgPath}
                    width={30}
                    height={30}
                  />
                  {artist.name}
                </Artist>
              );
            })}
          <SidebarRuler />
        </SidebarContainer>
      </Sidebar>
    </Header>
  );
};

export default NavBar;
