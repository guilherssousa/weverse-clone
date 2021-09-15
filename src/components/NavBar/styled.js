import styled from 'styled-components'

export const Header = styled.header`
    display: block;
    width: 100%;
    height: 75px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(235, 235, 235);
    z-index: 1000;
    padding: 0px 32px;
    height: inherit;
`

export const LeftContainer = styled.div`
    margin-right: auto;
    display: flex;
    align-items: center;
`

export const RightContainer = styled.div`
    margin-left: auto;
    display: flex;
    column-gap: 25px;
`

export const HamburguerMenu = styled.button`
    appearance: none;
    background-color: transparent;
    border: 0;
    padding: 6px;
    max-height: 36px;
    cursor: pointer;
`

export const Brand  = styled.img`
    margin-left: 16px;
    padding: 6px;
    cursor: pointer;
`