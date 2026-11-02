function NetflixMain() {
  return (
    <main className="mt-3">
      <div className="mb-2">
        Ready to watch? Enter your email to create or restart your membership.
      </div>

      <div>
        <form className="input-group input-group-lg">
          <input
            type="email"
            className="form-control"
            placeholder="Your email address"
          />

          <button className="btn btn-danger">
            Get Started
            <span className="bi bi-chevron-right"></span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default NetflixMain;
