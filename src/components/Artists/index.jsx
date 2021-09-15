import { Container } from './styled'

import Artist from '../Artist'

const Artists = ({ artists }) => {
    return artists ? <Container>
        {artists.map((artist, index) => (
            <Artist key={index} artist={artist} />
        ))}
    </Container> : null
}

export default Artists