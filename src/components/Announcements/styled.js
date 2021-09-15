import styled from 'styled-components'

export const Container = styled.section`
  margin: 40px 6px 0 6px;
`

export const Slider = styled.div`
    
`

export const Unit = styled.div`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgb(245, 247, 250);
  display: flex;
  flex-direction: column;

  &::after {
    position: absolute;
    top: 0px;
    left: 0px;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const Announcement = styled.div`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 1040px;
  background-image: url(${props => props.backgroundImage});
`

export const AnnouncementDetails = styled.div`
  position: absolute;
  left: 0px;
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0px;
  padding: 24px 0px 24px 60px;

  font-family: 'Noto Sans KR Regular', sans-serif;
`

export const AnnouncementTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -moz-box-orient: vertical;
  overflow: hidden;
  line-height: 36px;
  max-height: 72px;
  color: ${props => props.color};
  font-family: 'Noto Sans KR Bold', sans-serif;
`

export const AnnouncementSubtitle = styled.div`
  font-size: 16px;
  opacity: 0.8;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -moz-box-orient: vertical;
  overflow: hidden;
  line-height: 24px;
  max-height: 48px;
  color: ${props => props.color};
`
