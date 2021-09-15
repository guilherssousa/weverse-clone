import { Container } from './styled'

import Artist from '../Artist'

import artists from '../../services/api/artists.json'

const Artists = () => {
    return <Container>
        {artists.communities.map((artist, id) => (
            <Artist key={id} artist={artist} />
        ))}
    </Container>
}

export default Artists