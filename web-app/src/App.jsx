import SideBar from "./components/SideBar";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

function WeatherIndex() {
    return (
        <div className="container-fluid row">

            <div className="col-2">
                <SideBar />
            </div>

            <div className="col-10">

                <Header />

                <WeatherCard />

            </div>

        </div>
    );
}

export default WeatherIndex;