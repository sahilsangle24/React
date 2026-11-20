import NetflixMain from "./NetflixMain";

function NetflixArticle() {
  return (
    <article className="mt-5 pt-5 text-center text-white">
      <div className="article-title">
        Entertainment for <br />
        every moment <br />
        time.
      </div>

      <div className="article-subtitle">
        Starts at ₹149. Cancel at any time.
      </div>

      <div className="d-flex justify-content-center mt-3">
        <NetflixMain />
      </div>
    </article>
  );
}

export default NetflixArticle;
