// Components
import Accordion from "../Accordion";
import Content from "./subComponents/Content";
import TriggerHeader from "./subComponents/TriggerHeader";

function EpisodeAccordion() {
  return (
    <Accordion
      triggerHeader={<TriggerHeader title={"Nice work"} />}
      styleHeader={{ backgroundColor: "transparent", height: 20 }}
      content={
        <Content
          image={
            "https://agile-releases.s3.us-east-1.amazonaws.com/tests/assets/034570233.jpeg"
          }
          description={
            "Londres, 1891. A polícia investiga uma série de assassinatos, mas Sir Malcolm Murray e a bela Vanessa Ives sabem que há algo mais sombrio por trás de tudo."
          }
        />
      }
      defaultValue=""
      ariaLabelReference="employee-details"
    />
  );
}

export default EpisodeAccordion;
