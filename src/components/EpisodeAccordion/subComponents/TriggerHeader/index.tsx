import { CirclePlay } from "lucide-react";

//Styles
import "./index.scss";

function TriggerHeader({ title }: { title: string }) {
  return (
    <div className="trigger-header">
      <span title={title}>{title}</span>
      <CirclePlay />
    </div>
  );
}

export default TriggerHeader;
