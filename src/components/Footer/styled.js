import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 100px;
    padding-bottom: 40px;
    font-size: 13px;
    text-align: center;

    span {
        cursor: pointer;
        color: rgb(173, 177, 184);
    }

    span:nth-child(1) {
        font-family: 'Noto Sans KR Medium', sans-serif;
    }

    span + span::before {
        content: "·";
        margin: 0px 6px;
    }
    
    div {
        margin-bottom: 20px;
    }

    .copyright {
        color: rgb(135, 142, 150);
    }
`
