function NetflixHeader() {
  return (
    <header className="p-4 d-flex flex-row justify-content-between">
      <div className="ps-5">
        <span className="fs-1 fw-bold text-danger">NETFLIX</span>
      </div>

      <div className="d-flex flex-row align-items-baseline">
        <div className="input-group">
          <span className="input-group-text">
            <span className="bi bi-translate"></span>
          </span>

          <select className="form-select">
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <button className="btn ms-2 btn-danger">Sign In</button>
      </div>
    </header>
  );
}

export default NetflixHeader;
