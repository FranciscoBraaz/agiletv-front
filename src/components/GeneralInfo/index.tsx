import { CirclePlus, Disc, Frown, Share } from "lucide-react";

// Styles
import "./index.scss";

function GeneralInfo({ synopsis }: { synopsis: string }) {
  return (
    <section className="general-info">
      <ul className="general-info__actions">
        <li>
          <button>
            <CirclePlus size={24} />
            <p>Mi Lista</p>
          </button>
        </li>
        <li>
          <button>
            <Frown size={24} />
            <p>Evaluar</p>
          </button>
        </li>
        <li>
          <button>
            <Disc size={24} />
            <p>Grabar</p>
          </button>
        </li>
        <li>
          <button>
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
