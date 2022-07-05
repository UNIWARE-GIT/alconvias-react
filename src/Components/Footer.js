import React from 'react'

function Footer() {
    return (
        <div className="container-fluid p-0">
            <footer className="bg-wine text-center text-white">
                <div className="p-4">
                    <section className="mb-4 d-flex items-center justify-content-center">
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            target="__blank"
                            href="https://www.facebook.com/profile.php?id=100079499606660"
                            role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" role="button" href="https://twitter.com/AlconviasBo">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" role="button" href="https://www.instagram.com/alconviasbo/">
                            <i className="fab fa-instagram"></i>
                        </a>

                    </section>
                    <section className="mb-4">
                        <p className="text-light text-center">
                            <i>~Alconvias Creando el Ambiente que Sueñas, Nuestra Pasión es Construir Vías del Futuro.</i>
                        </p>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright: <a className="text-white" href="/">Alconvias S.R.L</a> <br/> <a className="text-white far fa-envelope" href="mailto:alconvias.bolivia@gmail.com"></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer