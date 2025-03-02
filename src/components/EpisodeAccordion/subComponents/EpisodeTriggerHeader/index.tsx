import { CirclePlay } from "lucide-react";

//Styles
import "./index.scss";

function EpisodeTriggerHeader({
  title,
  episodeNumber,
}: {
  title: string;
  episodeNumber: number;
}) {
  return (
    <div className="episode-trigger-header">
      <span
        title={`${episodeNumber} ${title}`}
      >{`${episodeNumber} ${title}`}</span>
      <CirclePlay />
    </div>
  );
}

export default EpisodeTriggerHeader;
