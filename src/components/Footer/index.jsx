import { Container } from './styled'

const Footer = () => {
  return (
    <Container>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Terms of Operation</span>
        <span>Terms of Use for Paid Services</span>
        <span>Cookie Policy</span>
        <span>Weverse Subs Terms Of Use</span>
        <span>About Weverse</span>
        <div>
            <span>한국어</span>
            <span>English</span>
            <span>日本語</span>
        </div>
        <span className="copyright">
            Original product: © WEVERSE COMPANY Inc. This is a study only version.
            Do not rent or sell it. Made by
            <a target="_blank" href="https://github.com/guilherssousa/weverse-clone">@guilherssousa</a>
            /
            <a target="_blank" href="https://twitter.com/krteazy">@krteazy</a>
            </span>
    </Container>
  )
}

export default Footer