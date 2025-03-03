import { CircleCheck, CirclePlus, Disc, Share } from "lucide-react";

// Components
import RateDialog from "../RateDialog";

// Styles
import "./index.scss";
import useManageActions from "./hooks/useManageActions";

function GeneralInfo({ synopsis }: { synopsis: string }) {
  const { rate, addedToList, handleRate, handleAddToList, copyToClipboard } =
    useManageActions();

  return (
    <section className="general-info">
      <ul className="general-info__actions">
        <li>
          <button onClick={handleAddToList}>
            {addedToList ? (
              <>
                <CircleCheck size={24} />
                <p>En Lista</p>
              </>
            ) : (
              <>
                <CirclePlus size={24} />
                <p>Mi Lista</p>
              </>
            )}
          </button>
        </li>
        <li>
          {rate ? (
            <div className="general-info__rate">
              <span>{rate}</span>
              <p>Evaluado</p>
            </div>
          ) : (
            <RateDialog onRate={(value: number) => handleRate(value)} />
          )}
        </li>
        <li>
          <button>
            <Disc size={24} />
            <p>Grabar</p>
          </button>
        </li>
        <li>
          <button onClick={copyToClipboard}>
            <Share size={24} />
            <p>Compartir</p>
          </button>
        </li>
      </ul>
      <div>
        <h3>SINOPSE</h3>
        <p className="general-info__synopsis">{synopsis}</p>
      </div>
    </section>
  );
}

export default GeneralInfo;
