// Components
import { Episode } from "../../@types/episode";
import Accordion from "../Accordion";
import Content from "./subComponents/Content";
import TriggerHeader from "./subComponents/TriggerHeader";

function EpisodeAccordion({ episode }: { episode: Episode }) {
  return (
    <Accordion
      triggerHeader={<TriggerHeader title={episode.Title} />}
      styleHeader={{ backgroundColor: "transparent", height: 20 }}
      content={<Content image={episode.Image} description={episode.Synopsis} />}
      defaultValue=""
      ariaLabelReference="employee-details"
    />
  );
}

export default EpisodeAccordion;
