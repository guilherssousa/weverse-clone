import { Container, ArtistImageSafeContainer, ArtistImage, ArtistDescription } from './styled'

const Artist = ({ artist }) => {

    return <Container>
        <ArtistImageSafeContainer>
            <ArtistImage image={artist.homeBannerImgPath}></ArtistImage>
        </ArtistImageSafeContainer>
        <ArtistDescription>
            <p>{artist.name}</p>
        </ArtistDescription>
    </Container>
}

export default Artist