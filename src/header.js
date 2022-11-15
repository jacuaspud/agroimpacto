function Header() {
    return (
        <header
            id="header"
            className="fixed-top d-flex align-items-center header-transparent"
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <div className="logo me-auto">
                    <h1>
                        <a href="../public/index.html">Agroimpacto Digital</a>
                    </h1>
                </div>

                <div>
                    <a className="navbar-brand" href="index.html">
                        <img
                            src="assets/img/logo.png"
                            alt="Logo"
                            style={{ width: 70 }}
                            className="rounded-pill"
                        />
                    </a>
                </div>

                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <a
                            href="index.html"
                            className="book-a-table-btn scrollto"
                        >
                            Inicio
                        </a>
                        <li>
                            <a className="nav-link scrollto" href="#about">
                                Productos
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#specials">
                                Estadística
                            </a>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#blog">
                                Blog
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="users">
                                <span>Usuario</span>{" "}
                                <i className="bi bi-chevron-down" />
                            </a>
                            <ul>
                                <li>
                                    <a href="#book-a-table">Iniciar Sesión</a>
                                </li>
                                <li>
                                    <a href="#registrarse">Registrarse</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#contact">
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
            </div>
        </header>
    );
}
export { Header };
