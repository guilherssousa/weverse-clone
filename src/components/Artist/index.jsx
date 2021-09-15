import { Container, ArtistImageSafeContainer, ArtistImage, ArtistDescription } from './styled'

const Artist = ({ artist }) => {

    return <Container>
        <ArtistImageSafeContainer>
            <ArtistImage
                key={artist.name}
                src={artist.homeBannerImgPath}
                width={248}
                height={186}
                className="image"
            />
        </ArtistImageSafeContainer>
        <ArtistDescription>
            <p>{artist.name}</p>
        </ArtistDescription>
    </Container>
}

export default Artist