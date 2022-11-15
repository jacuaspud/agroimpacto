function Hero() {
    return (
        <section id="hero">
            <div className="hero-container">
                <div
                    id="heroCarousel"
                    data-bs-interval={5000}
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <ol
                        className="carousel-indicators"
                        id="hero-carousel-indicators"
                    />
                    <div className="carousel-inner" role="listbox">
                        <div
                            className="carousel-item active"
                            style={{
                                backgroundImage:
                                    "...../public/assets/img/slide/slide-1.png",
                            }}
                        >
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        <span>
                                            Nuestro campo Colombiano te espera
                                        </span>
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        La mejor forma de progreso en un país es
                                        cuidar su agricultura. Bienvenido!
                                    </p>
                                    <div>
                                        <a
                                            href="#vender"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Vender
                                            <span>
                                                <i className="bi bi-hand-thumbs-up-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#comprar"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Comprar
                                            <span>
                                                <i className="bi bi-cart-check-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Trabajar
                                            <span>
                                                <i className="bi bi-people-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#quieroemplear"
                                            className="btn-menu animate_animated animate_fadeInUp scrollto"
                                        >
                                            Quiero Emplear
                                            <span>
                                                <i className="bi bi-megaphone-fill" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="carousel-item"
                            style={{
                                backgroundImage:
                                    "url(assets/img/slide/slide-2.png)",
                            }}
                        >
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Nuestro campo Colombiano te espera
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        La mejor forma de progreso en un país es
                                        cuidar su agricultura. Bienvenido!
                                    </p>
                                    <div>
                                        <a
                                            href="#vender"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Vender
                                            <span>
                                                <i className="bi bi-hand-thumbs-up-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#comprar"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Comprar
                                            <span>
                                                <i className="bi bi-cart-check-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Trabajar
                                            <span>
                                                <i className="bi bi-people-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#quieroemplear"
                                            className="btn-menu animate_animated animate_fadeInUp scrollto"
                                        >
                                            Quiero Emplear
                                            <span>
                                                <i className="bi bi-megaphone-fill" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="carousel-item"
                            style={{
                                backgroundImage:
                                    "url(assets/img/slide/slide-3.png)",
                            }}
                        >
                            <div className="carousel-container">
                                <div className="carousel-content">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Nuestro campo Colombiano te espera
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        La mejor forma de progreso en un país es
                                        cuidar su agricultura. Bienvenido!
                                    </p>
                                    <div>
                                        <a
                                            href="#vender"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Vender
                                            <span>
                                                <i className="bi bi-hand-thumbs-up-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#comprar"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Comprar
                                            <span>
                                                <i className="bi bi-cart-check-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#menu"
                                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                                        >
                                            Quiero Trabajar
                                            <span>
                                                <i className="bi bi-people-fill" />
                                            </span>
                                        </a>
                                        <a
                                            href="#quieroemplear"
                                            className="btn-menu animate_animated animate_fadeInUp scrollto"
                                        >
                                            Quiero Emplear
                                            <span>
                                                <i className="bi bi-megaphone-fill" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bi bi-chevron-left"
                            aria-hidden="true"
                        />
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bi bi-chevron-right"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
export { Hero };
