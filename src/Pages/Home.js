import React from 'react';

function Home() {
  return (
    <div className="mt-5 pt-5">
      <a href="#top" className='btn btn-dark btn-home'>
        <i class="fa-solid fa-arrow-up"></i>
      </a>
      <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators bg-wine-footer">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner bg-light">
            <div className="carousel-item active">
              <img className="bd-placeholder-img d-none d-sm-block" src="./img/alconvias-logo-new.jpeg"
                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className='mt-5 my-auto'>
                <div className="ratio ratio-21x9">
                  <img className="bd-placeholder-img d-block d-sm-none img-fluid sm-img-xpl"
                    src="./img/alconvias-logo-new-sm.jpeg" aria-hidden="true"
                    preserveAspectRatio="xMidYMid slice" focusable="false" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img d-none d-sm-block"
                src="./img/recursos/equipo-de-trabajores/equipo-personal (1).jpeg" width="100%"
                height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <img className="bd-placeholder-img d-block d-sm-none"
                src="./img/recursos/asfaltos/asf (8).jpeg"
                width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice"
                focusable="false" />
              <div className="container">
                <div className="carousel-caption text-start rounded bg-gray-500">
                  <div className="d-flex">
                    <h1 className="rounded p-3 mc">
                      Trabajos Impecables.
                    </h1>
                    <i className="my-auto p-1 rounded far fa-handshake fs-1"></i>
                  </div>
                  <p className="rounded p-3">
                    Amámos nuestro trabajo y eso nos hace eficientes, cumplidos e impecables.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img d-none d-sm-block"
                src="./img/recursos/provincia/trabajos-provincia (4).jpeg" width="100%" height="100%"
                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <img className="bd-placeholder-img d-block d-sm-none"
                src="./img/recursos/provincia/trabajos-provincia (6).jpeg" width="100%" height="100%"
                aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="container">
                <div className="carousel-caption text-start rounded bg-gray-500">
                  <div className="d-flex">
                    <h1 className="rounded p-3 mc">
                      Estamos en Todos Lados.
                    </h1>
                    <i className="my-auto p-1 rounded fas fa-map-marked-alt fs-1"></i>
                  </div>
                  <p className="rounded p-3">
                    Ciudad, Provincia, no importa, nosotros llegamos a donde nos necesiten.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img d-none d-sm-block"
                src="./img/recursos/preparacion-caminos-tierra/Contrafuerte-48792.jpg" width="100%"
                height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <img className="bd-placeholder-img d-block d-sm-none"
                src="./img/recursos/preparacion-caminos-tierra/Contrafuerte-48792.jpg" width="100%"
                height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
              <div className="container">
                <div className="carousel-caption text-start rounded bg-gray-500">
                  <div className="d-flex">
                    <h1 className="rounded p-3">
                      Arquitectura e Ingenieria Inteligente.
                    </h1>
                    <i className="my-auto p-1 rounded fas fa-brain fs-1"></i>
                  </div>
                  <p className="rounded p-3">
                    Planificación e ingenio profesional, para los mejores resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
            <span className="visually-hidden">-</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
        </div>
        <div className="container-fluid border-top border-2 border-primary">
          <div className="row bg-white rounded">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4 p-4">
              <h1 className="fs-1 text-center text-dark">¿Quienes Somos?</h1>
              <p className="text-center">
                Somos una empresa que pertenece a una Sociedad Empresarial , Nuestra oficina central se encuentra en
                la ciudad de El Alto - La Paz
              </p>
            </div>
            <div className="col-lg-4">
            </div>
          </div>
        </div>

        <div className="container marketing" data-aos="fade-left">
          <div className="row bg-white border-bottom border-2 border-primary">
            <div className="col-lg-4">
              <img src="./img/mision.png" width="250" height="150" alt="" />
              <h2 className="fs-1 text-center text-dark">Misión</h2>
              <p className="text-center">
                Producir, comercializar e innovar productos prefabricados para la construcción, aportando con
                excelencia al desarrollo del país
              </p>
            </div>
            <div className="col-lg-4">
            </div>
            <div className="col-lg-4">
              <img src="img/vision.png" width="250" height="150" alt="" />
              <h2 className="fs-1 text-center text-dark">Visión</h2>
              <p className="text-center">Ser la primera, la mejor y más grande empresa en la producción,
                comercialización e innovación de productos prefabricados </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette g-2 g-sm-4">
            <div>
              <h1 className="text-center fs-1 text-dark mb-4"><u>Nuestros Productos</u></h1>
            </div>
            <div className="col-md-7">
              <ul className="list-group list-group-flush rounded shadow border-end border-start border-2 border-primary">
                <li className="list-group-item p-4">
                  <h2 className="featurette-heading">Losetas Dentadas</h2>
                  <p className="lead tf">
                    Losetas dentadas que se entrelazan entre si en los cuatro costados que al unirse resisten el
                    desplazamiento relativo tanto en sentido longitudinal como transversal.
                  </p>
                </li>
                <li className="list-group-item p-4">
                  <h2 className="featurette-heading">Losetas Dentadas en Dos Lados</h2>
                  <p className="lead tf">
                    Losetas dentadas que se entrelazan entre si en dos costados de manera que resisten
                    desplazamientos relativos solo en las caras paralelas a los ejes longitudinales.
                  </p>
                </li>
                <li className="list-group-item p-4">
                  <h2 className="featurette-heading">Losetas Geometricas</h2>
                  <p className="lead tf">
                    Losetas rectangulares u otras formas geométricas (Hexagonal, trapecio, cuadrado, etc.).
                    Debido a la gran variedad de formas y aplicaciones durante su proceso de fabricación se
                    emplean diferentes métodos que van del manual, hasta la utilización de la mas sofisticada
                    maquinaria, en la cual lo dosificación de los materiales se aplica por medio de
                    computadoras.
                  </p>
                </li>
                <li className="list-group-item p-4">
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <a className="btn btn-outline-primary" type="button" href="/products">Ver
                      Todo</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="p-4 bg-white rounded-circle shadow-lg">
                <img className="img-fluid" src="http://www.preconalbolivia.com/1/images/grupos-de-losetas.gif" />
              </div>
            </div>
          </div>
          <hr className="featurette-divider" />

          <div className="row featurette g-2 g-sm-4">
            <div>
              <h1 className="text-center fs-1 text-dark mb-4"><u>Nuestros Servicios</u></h1>
            </div>
            <div className="col-md-12">
              <ul className="list-group text-center list-group-flush rounded shadow border-end border-start border-2 border-primary">
                <li className="list-group-item p-2">
                  <span className="fs-3">Contrucciones.</span>
                </li>
                <li className="list-group-item p-2">
                  <span className="fs-3">Estudio y Analisis de Suelos.</span>
                </li>
                <li className="list-group-item p-2">
                  <span className="fs-3">Maquinaria</span>
                </li>
                <li className="list-group-item p-4">
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <a className="btn btn-outline-primary" type="button" href="/services">Ver
                      Todo</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
      </div>
    </div>
  );
}

export default Home