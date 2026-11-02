function SideBar() {
    return (
        <nav className="p-2">

            <div className="fs-4 fw-bold text-primary mb-3">
                <span className="bi bi-cloud"></span>
                Weather App
            </div>

            <ul className="list-group">

                <li className="list-group-item list-group-item-primary">
                    <span className="bi bi-columns-gap"></span>
                    Dashboard
                </li>

                <li className="list-group-item list-group-item-primary">
                    <span className="bi bi-broadcast"></span>
                    Radar & Maps
                </li>

                <li className="list-group-item list-group-item-primary">
                    <span className="bi bi-clock-history"></span>
                    Hourly
                </li>

                <li className="list-group-item list-group-item-primary">
                    <span className="bi bi-calendar-date"></span>
                    7-Day Outlook
                </li>

                <li className="list-group-item list-group-item-primary">
                    <span className="bi bi-wind"></span>
                    Air Quality
                </li>

            </ul>

            <button className="btn btn-primary w-100 mt-4">
                Signout
            </button>

        </nav>
    );
}

export default SideBar;