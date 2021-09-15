import {
    Container, Slider, Announcement,
    AnnouncementDetails, AnnouncementTitle, AnnouncementSubtitle,
    Unit
} from './styled'

import announcements from '../../services/api/announcements.json'

const Announcements = () => {

    const announcement = announcements[0]

    console.log(announcement)

    return <Container>
        <Slider>
            <Unit>
                <Announcement backgroundImage={announcement.imageUrl} />
                <AnnouncementDetails>
                    <AnnouncementTitle color={announcement.titleColor}>{announcement.title}</AnnouncementTitle>
                    <AnnouncementSubtitle color={announcement.subTitleColor}>{announcement.subTitle}</AnnouncementSubtitle>
                </AnnouncementDetails>
            </Unit>
        </Slider>
    </Container>
}

export default Announcements