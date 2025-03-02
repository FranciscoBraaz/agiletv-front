import { CircleX } from "lucide-react";

// Styles
import "./index.scss";

function TvShowError() {
  return (
    <div className="tv-show-error">
      <CircleX size={64} />
      <p>Houve um erro ao carregar informações do programa</p>
    </div>
  );
}

export default TvShowError;
