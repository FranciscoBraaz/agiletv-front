import { CirclePlay } from "lucide-react";

//Styles
import "./index.scss";

function EpisodeTriggerHeader({ title }: { title: string }) {
  return (
    <div className="episode-trigger-header">
      <span title={title}>{title}</span>
      <CirclePlay />
    </div>
  );
}

export default EpisodeTriggerHeader;
