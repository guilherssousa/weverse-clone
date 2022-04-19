import styled from "styled-components";
import Image from "next/image";

export const Header = styled.header`
  display: block;
  width: 100%;
  height: 75px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid
    ${(props) => (props.theme.dark ? "rgb(25, 25, 25)" : "rgb(235, 235, 235)")};
  z-index: 1000;
  padding: 0px 32px;
  height: inherit;
  position: fixed;
  width: inherit;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

export const LeftContainer = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  margin-left: auto;
  display: flex;
  column-gap: 25px;
`;

export const HamburguerMenu = styled.button`
  &:focus {
    outline: none;
  }
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 6px;
  max-height: 36px;
  cursor: pointer;
  filter: ${(props) => props.theme.dark && "invert(100%)"};
`;

export const Brand = styled.img`
  margin-left: 16px;
  padding: 6px;
  cursor: pointer;
`;

export const MenuButton = styled.img`
  cursor: pointer;
  filter: ${(props) => props.theme.dark && "invert(100%)"};
`;

export const Sidebar = styled.div`
  width: 222px;
  display: ${(props) => (props.isOpened ? "block" : "none")};
`;

export const SidebarContainer = styled.div`
  height: 100%;
  position: fixed;
  top: 75px;
  z-index: 20;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 18px 30px 75px 30px;
  overflow: hidden auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.helperColor};
    border-radius: 10px;
  }
`;

export const SidebarLabel = styled.div`
  color: rgb(173, 177, 184);
  padding: 0 8px 8px;
  letter-spacing: -0.5px;
  line-height: 20px;
  font-size: 13px;
  font-family: "Noto Sans KR Bold", sans-serif;

  .ruler + & {
    margin: 15px 0 0;
  }

  cursor: default;
`;

export const Artist = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  cursor: pointer;

  padding: 11px 8px 11px 8px;
  font-size: 14px;
  letter-spacing: -0.5px;
  color: ${(props) => (props.theme.dark ? "#aaa" : "rgb(52, 58, 64)")};
  padding-left: 12px;
`;

export const ArtistProfile = styled(Image)`
  border-radius: 15px;
  img {
    border: 1px solid rgb(235, 235, 235);
  }
`;

export const SidebarRuler = styled.div`
  width: 100%;
  height: 0.5px;
  border: 1px solid ${(props) => props.theme.helperColor};
  margin: 15px 0 0;
`;
