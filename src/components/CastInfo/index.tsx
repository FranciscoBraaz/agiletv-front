import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Types
import { Character } from "../../@types/tvShowDetails";

// Custom hooks
import { usePrevNextButtons } from "./hooks/usePrevNextButtons";

// Styles
import "./index.scss";

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
          className="cast-info__scroll-button cast-info__scroll-button--prev"
          onClick={onPrevButtonClick}
        >
          <ChevronLeft />
        </button>
      )}
      {!nextBtnDisabled && (
        <button
          className="cast-info__scroll-button cast-info__scroll-button--next"
          onClick={onNextButtonClick}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
