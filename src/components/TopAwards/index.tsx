// Styles
import useDefineClassName from "./hooks/useDefineClassName";
import "./index.scss";

const awards = {
  "73 Golden Globes Awards (2016)": [
    {
      category: "Best Leading Actor in a TV Series - Drama (Eva Green)",
      type: "Indicado",
    },
  ],
  "BAFTA 2016": [
    {
      category: "Best TV Make Up & Hair Design",
      type: "Indicado",
    },
  ],
  "BAFTA 2015": [
    {
      category: "Best Original Television Music (Abel Korzeniowski)",
      type: "Vencedor",
    },
    {
      category:
        "Best Production Design - TV (Jonathan Mckinstry, Philip Murphy)",
      type: "Vencedor",
    },
    {
      category: "Best TV Costume Design (Gabiella Pescucci, Vicky Gill)",
      type: "Indicado",
    },
    {
      category:
        "Best TV Make Up & Hair Design (Enzo Mastrantonio, Nick Dudman, Stefano Ceccarelli)",
      type: "Vencedor",
    },
  ],
};

function TopAwards() {
  const { defineCategoryTypeClassName } = useDefineClassName();

  return (
    <section className="top-awards">
      {Object.keys(awards).map((awardName) => {
        return (
          <article key={awardName}>
            <h3>{awardName}</h3>
            <ul className="top-awards__categories">
              {awards[awardName as keyof typeof awards].map((award, index) => {
                return (
                  <li key={index}>
                    <p className={defineCategoryTypeClassName(award.type)}>
                      {award.type}
                    </p>
                    <p className="top-awards__categories__title">
                      {award.category}
                    </p>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </section>
  );
}

export default TopAwards;
