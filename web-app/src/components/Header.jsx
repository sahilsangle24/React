function Header() {
    return (
        <header className="p-3 d-flex align-items-center bg-light mt-2 justify-content-between">

            <div className="w-50">
                <div className="input-group">

                    <input
                        type="text"
                        placeholder="Search your city weather"
                        className="form-control"
                    />

                    <button className="btn btn-primary">
                        <span className="bi bi-search"></span>
                    </button>

                </div>
            </div>

            <div className="fs-5">

                <span className="bi bi-heart">
                    Wishlist
                </span>

                <span className="bi bi-gift mx-4">
                    Offers
                </span>

                <span className="bi bi-person">
                    Signin
                </span>

            </div>

        </header>
    );
}

export default Header;