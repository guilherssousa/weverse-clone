import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
    margin: 0px 6px 16px;
    width: 248px;
    display: inline-block;

    background-color: rgb(255, 255, 255);
    height: 256px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    vertical-align: top;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

    cursor: pointer;
`

export const ArtistImageSafeContainer = styled.div`
    width: 100%;
    height: 186px;
    overflow: hidden;
`

export const ArtistImage = styled(Image)`
    width: 100%;
    height: 186px;
    background-color: rgb(245, 247, 250);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    border-radius: 0px;
    background-image: url(${props => props.image});

    &:hover {
        transition: transform .8s cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1.05);
    }

    .image {
        -webkit-user-drag: none; 
        -khtml-user-drag: none; 
        -moz-user-drag: none; 
        -o-user-drag: none; 
    }
`

export const ArtistDescription = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    -moz-box-pack: center;
    justify-content: center;
    padding: 0px 18px;
    z-index: 10;

    p { 
        font-family: "Noto Sans KR Bold", sans-serif;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        color: rgb(32, 36, 41);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`