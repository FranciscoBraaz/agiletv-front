// Styles
import { useState } from "react";
import "./index.scss";
import Skeleton from "react-loading-skeleton";

function EpisodeContent({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  function returnClassName() {
    let className = "episode-content__img";
    if (isLoading) {
      className += " episode-content__img--loading";
    }

    return className;
  }
  return (
    <div className="episode-content">
      {isLoading && (
        <div className="episode-content__skeleton-container">
          <Skeleton
            width="100%"
            height={159.5}
            baseColor="#1e2427"
            highlightColor="#2a3236"
          />
        </div>
      )}
      <img
        className={returnClassName()}
        src={image}
        onLoad={() => setIsLoading(false)}
      />
      <p>{description ?? "Sem descrição"}</p>
    </div>
  );
}

export default EpisodeContent;
