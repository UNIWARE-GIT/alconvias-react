import React from 'react';

function Contact() {
    return (
        <div className="mt-5 pt-5">
            <a href="#top" className='btn btn-dark btn-home'>
                <i class="fa-solid fa-arrow-up"></i>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
                        <div className="card mb-4">
                            <div className="card-header">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <img src="./img/gerente.png" className="img-fluid card-img-top embed-responsive-item" alt="..." />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="text-center">Gerente General</h2>
                                <h3 className="text-center">Propietario</h3>
                                <hr />
                                <ul className="list-group fs-4">
                                    <li className="list-group-item">
                                        Ing. Alanoca
                                    </li>
                                    <li className="list-group-item">
                                        Nro. de Celular. 69951459
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex align-items-stretch">
                        <div className="card">
                            <div className="card-header">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <img src="./img/rep-legal.jpg" className="img-fluid card-img-top embed-responsive-item" alt="" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="text-center">Representante Legal</h2>
                                <h3 className="text-center">Propietario</h3>
                                <hr />
                                <ul className="list-group fs-4">
                                    <li className="list-group-item">
                                        Lic. Durán
                                    </li>
                                    <li className="list-group-item">
                                        Nro. de Celular. 76597147
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact