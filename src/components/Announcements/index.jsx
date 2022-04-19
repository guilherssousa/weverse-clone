import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Container,
  Slider,
  Announcement,
  AnnouncementDetails,
  AnnouncementTitle,
  AnnouncementSubtitle,
  Unit,
} from "./styled";

import announcements from "../../services/api/announcements.json";

const Announcements = () => {
  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        emulateTouch
        transitionTime={500}
        showStatus={false}
        showIndicators={false}
        centerMode={false}
        preventMovementUntilSwipeScrollTolerance
        showThumbs={false}
      >
        {announcements.map((announcement) => (
          <Unit key={announcement.id}>
            <Announcement backgroundImage={announcement.imageUrl} />
            <AnnouncementDetails>
              <AnnouncementTitle color={announcement.titleColor}>
                {announcement.title}
              </AnnouncementTitle>
              <AnnouncementSubtitle color={announcement.subTitleColor}>
                {announcement.subTitle}
              </AnnouncementSubtitle>
            </AnnouncementDetails>
          </Unit>
        ))}
      </Carousel>
    </Container>
  );
};

export default Announcements;
