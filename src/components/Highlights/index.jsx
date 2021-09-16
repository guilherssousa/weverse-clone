import Image from 'next/image'
import {
  Container, Label,
  HighlightContainer,
  Highlight, HighlightImage,
  HighlightData, HighlightTitle, HighlightDescription
} from './styled'

const Highlights = ({ title, highlights }) => {
  return (
    <Container>
        <Label>{title}</Label>

        <HighlightContainer>
          { highlights.map(highlight => (
            <Highlight key={highlight.id}>
              <HighlightImage>
                <Image src={highlight.thumbnailUrl} width={120} height={120} />
              </HighlightImage>
              <HighlightData>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightDescription>{highlight.description}</HighlightDescription>
              </HighlightData>
            </Highlight>
          ))}
        </HighlightContainer>
    </Container>
  )
}

export default Highlights
