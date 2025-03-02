// Components
import {
  Content,
  Trigger,
  Item,
  Root,
  Header,
} from "@radix-ui/react-accordion";

// Types
import { Episode } from "../../@types/episode";

// Components
import EpisodeContent from "./subComponents/EpisodeContent";
import EpisodeTriggerHeader from "./subComponents/EpisodeTriggerHeader";

// Styles
import "./index.scss";

function EpisodeAccordion({ episodes }: { episodes: Episode[] }) {
  return (
    <Root className="accordion" type="single" collapsible>
      {episodes.map((episode) => (
        <Item key={episode.ID} className="accordion__item" value={episode.ID}>
          <Header className="accordion__header">
            <Trigger
              className="accordion__trigger"
              aria-label="employee-details"
            >
              <EpisodeTriggerHeader
                title={episode.Title}
                episodeNumber={episode.EpisodeNumber}
              />
            </Trigger>
          </Header>
          <Content aria-label="employee-details" className="accordion__content">
            <EpisodeContent
              image={episode.Image}
              description={episode.Synopsis}
            />
          </Content>
        </Item>
      ))}
    </Root>
  );
}

export default EpisodeAccordion;
