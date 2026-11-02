import NetflixHeader from "./components/NetflixHeader";
import NetflixArticle from "./components/NetflixArticle";

function NetflixIndex() {
  return (
    <div className="bg-shade">
      <NetflixHeader />
      <NetflixArticle />
    </div>
  );
}

export default NetflixIndex;
