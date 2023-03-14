import { useLocation, useParams } from "react-router-dom";

const AnimeCard = () => {
  const animeData = useLocation();
  return (
    <div>
      <div>
        <img src={animeData.state.animeData.coverImage.large} alt="" />
        <div>{animeData.state.animeData.title.userPreferred}</div>
      </div>
    </div>
  );
};

export default AnimeCard;
