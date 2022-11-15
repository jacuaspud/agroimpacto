function Etiqueta() {
    return (
        <section
            id="topbar"
            className="d-flex align-items-center fixed-top topbar-transparent"
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
                <i className="bi bi-geo-alt-fill ms-4 d-none d-lg-flex align-items-center">
                    <span>
                        COLOMBIA
                        <br />
                    </span>
                </i>
                <br />
                <i className="bi bi-calendar-check" />
                <div id={"new date()"}></div>
            </div>
        </section>
    );
}

export { Etiqueta };
