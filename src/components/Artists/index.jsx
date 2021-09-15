import { Container } from './styled'

import Artist from '../Artist'

const Artists = ({ artists }) => {
    return artists ? <Container>
        {artists.map((artist, index) => (
            <Artist key={artist.id + index} artist={artist} />
        ))}
    </Container> : null
}

export default Artists