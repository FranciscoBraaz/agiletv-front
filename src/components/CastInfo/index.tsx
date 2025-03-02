import useEmblaCarousel from "embla-carousel-react";

// Styles
import "./index.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrevNextButtons } from "./hooks/usePrevNextButtons";

interface Character {
  ID: string;
  Name: string;
  Role?: string;
}

export function CastInfo({ cast }: { cast: Character[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="cast-info" ref={emblaRef}>
      <div className="cast-info__container">
        {cast.map((character) => (
          <div key={character.ID} className="cast-info__slide">
            <h3>{character.Name}</h3>
            <p>{character.Role}</p>
          </div>
        ))}
      </div>
      {!prevBtnDisabled && (
        <button
          className="cast-info__scroll-button cast-info__scroll-prev"
          onClick={onPrevButtonClick}
        >
          <ChevronLeft />
        </button>
      )}
      {!nextBtnDisabled && (
        <button
          className="cast-info__scroll-button cast-info__scroll-next"
          onClick={onNextButtonClick}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
