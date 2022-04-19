import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.h2`
  font-size: 24px;
  font-family: "Noto Sans KR Bold", sans-serif;
  line-height: 1.5;
  margin: 90px 0px 28px;
`;

export const HighlightContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 80px;
`;

export const Highlight = styled.div`
  display: flex;
  width: 50%;
  padding-bottom: 36px;
  border-bottom: 1px solid rgb(235, 235, 235);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    h1 {
      text-decoration: underline;
    }
  }
`;

export const HighlightImage = styled.div`
  min-width: 120px;
  min-height: 120px;
  max-width: 120px;
  max-height: 120px;

  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

export const HighlightData = styled.div`
  padding-left: 16px;
  width: 344px;
`;

export const HighlightTitle = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  font-family: "Noto Sans KR Medium", sans-serif;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HighlightDescription = styled.div`
  color: ${(props) => props.theme.lowContrastText};
  font-size: 13px;
  line-height: 1.54;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -moz-box-orient: vertical;
  overflow: hidden;
`;
