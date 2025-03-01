// Styles
import "./index.scss";

function Content({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  return (
    <div className="episode-content">
      <img src={image} />
      <p>{description}</p>
    </div>
  );
}

export default Content;
