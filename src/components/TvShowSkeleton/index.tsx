import { Image } from "lucide-react";
import Skeleton from "react-loading-skeleton";

// Styles
import "./index.scss";

const skeletonColors = {
  baseColor: "#1e2427",
  highlightColor: "#2a3236",
};

function TvShowSkeleton() {
  return (
    <div className="tv-show-skeleton">
      <main>
        <section className="tv-show-skeleton__header">
          <Skeleton height={60} {...skeletonColors} />
          <Skeleton width="30%" height={30} {...skeletonColors} />
        </section>
        <section className="tv-show-skeleton__middle-area">
          <Image />
          <div className="tv-show-skeleton__list-episodes">
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
            <Skeleton height={30} {...skeletonColors} />
          </div>
        </section>
      </main>
      <footer>
        <div className="tv-show-skeleton__footer-actions">
          <Skeleton height={40} {...skeletonColors} />
          <Skeleton height={40} {...skeletonColors} />
          <Skeleton height={40} {...skeletonColors} />
          <Skeleton height={40} {...skeletonColors} />
        </div>
        <div className="tv-show-skeleton__footer-text">
          <Skeleton width="20%" height={20} {...skeletonColors} />
          <div>
            <Skeleton height={15} {...skeletonColors} />
            <Skeleton height={15} {...skeletonColors} />
            <Skeleton width="60%" height={15} {...skeletonColors} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TvShowSkeleton;
