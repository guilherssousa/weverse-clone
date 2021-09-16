import {
    Container, Label, PostContainer,
    Post, PostBackground, PostFade, PostAuthor,
    PostAuthorPicture, PostAuthorName, PostAuthorNote
} from './styled'

const PostMural = ({ posts }) => {
  return (
    <Container>
        <Label>From Artists</Label>
        
        <PostContainer>
            {posts.map((post, index) => {
                const image = post.photo ? post.photo.orgImgUrl : post.backgroundImageUrl

                const large = [true, false, false, true, true, false, false, true]

                return (
                    <Post key={post.postId}>
                        <PostBackground isLarge={large[index]} photo={image}>
                            <PostFade />
                            <PostAuthorNote body={post.extraBody?.texts[0] || {
                                    align: 'CENTER',
                                    color: '#FFFFFFFF',
                                    rotate: 0,
                                    scale: 1,
                                    x: 0,
                                    y: 0
                                }
                            }>{post.body}</PostAuthorNote>
                            <PostAuthor>
                                <PostAuthorPicture src={post.artistProfileImageUrl} height={26} width={26} />
                                <PostAuthorName>{post.artistProfileNickName}</PostAuthorName>
                            </PostAuthor>
                        </PostBackground>
                    </Post>
                )
            })}
        </PostContainer>
    </Container>
  )
}

export default PostMural