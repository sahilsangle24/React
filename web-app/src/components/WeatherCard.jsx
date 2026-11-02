function WeatherCard() {
  return (
    <div className="card mt-4 bg-dark text-white w-50">
      <div className="card-header bg-info d-flex justify-content-between">
        <div>
          <div className="fs-3 fw-bold">Hyderabad</div>

          <div>29-OCT-2026</div>
        </div>

        <div>Live Weather</div>
      </div>

      <div className="card-body d-flex justify-content-between">
        <div className="fs-1 fw-bold">27&deg;C</div>

        <div>
          <span className="bi bi-cloud-rain">Raining</span>
        </div>
      </div>

      <div className="card-footer bg-danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt soluta
        quia nostrum.
      </div>
    </div>
  );
}

export default WeatherCard;
