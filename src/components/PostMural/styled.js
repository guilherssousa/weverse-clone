import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  
`

export const Label = styled.h2`
    font-size: 24px;
    font-family: "Noto Sans KR Bold", sans-serif;
    line-height: 1.5;
    margin: 90px 0px 28px;
`

export const PostContainer = styled.div`
    height: 815px;
    display: flex;
    flex-flow: column wrap;
    gap: 16px;
`

export const Post = styled.div`

    position: relative;
    box-sizing: border-box;
    width: 248px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    &::after {
        position: absolute;
        top: 0px;
        left: 0px;
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.08);
    }
`

export const PostBackground = styled.div`
    background-image: url(${props => props.photo});
    background-size: cover;
    background-position: center;
    width: 248px;
    height: ${props => props.isLarge ? 440 : 330}px; //343
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.08);
`

export const PostFade = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 84%, rgba(0, 0, 0, 0.3) 92%, rgba(0, 0, 0, 0.6)), linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
`

export const PostAuthor = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 16px;
    display: flex;
    -moz-box-align: center;
    align-items: center;
`

export const PostAuthorPicture = styled(Image)`
    border-radius: 13px;
    border: 1px solid rgba(0, 0, 0, 0.08);
`

export const PostAuthorName = styled.div`
    font-size: 14px;
    font-family: 'Noto Sans KR Bold', sans-serif;
    color: rgb(255, 255, 255);
    margin: 0px 2px 0px 8px;
`

export const PostAuthorNote = styled.div`
    width: inherit;
    height: inherit;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow-wrap: break-word;
    white-space: pre-wrap;
    line-height: 1.2;
    font-family: 'Noto Sans KR Bold', sans-serif;
    text-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;

    color: ${props => props.body.color};
    padding-top: ${props => props.body.x};
    padding-left: ${props => props.body.y};

    padding: 30px;
`