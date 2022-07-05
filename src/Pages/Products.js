import React from 'react'

function Products() {
    return (
        <div className="mt-5 pt-5">
            <a href="#top" className='btn btn-dark btn-home'>
                <i class="fa-solid fa-arrow-up"></i>
            </a>
            <div className="container p-4">
                <div className="card mb-4 zoom-it">
                    <div className="card-header bg-wine text-light">
                        <h1 className='m-auto'>
                            <i className="fas fa-circle fa-fw text-warning"></i><b> Fabricación de Losetas:</b>
                        </h1>
                    </div>
                    <div className="card-body">
                        <p>
                            Nuestras Losetas están fabricadas de acuerdo a normas nacionales e internacionales <b>ISO 9001</b> según
                            el requerimiento del cliente, la fabricación se las realiza a partir del uso del cemento, áridos
                            seleccionados (Grava y Arena) de alto peso especifico (denso) además agregando el color.
                        </p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-center">
                        <img src="./img/fabricacion-losetas.jpg" alt="" />
                    </div>
                </div>
                <div className="card mb-4 zoom-it">
                    <div className="card-header bg-wine text-light">
                        <h1 className='m-auto'>
                            <i className="fas fa-circle fa-fw text-warning"></i><b> Losetas Tipo "S":</b>
                        </h1>
                    </div>
                    <div className="card-body">
                        <p>
                            Nuestras losetas tienen forma y dimensiones muy variadas, por lo regular las producimos en moldes de
                            aluminio, concreto, metal, fibra de vidrio, etc. Pudiéndose agrupar en <b>grupos de losetas</b>.
                        </p>
                    </div>
                    <div className="card-footer d-flex align-items-center justify-content-center">
                        <div className="rounded-circle overflow-hidden shadow-lg mc">
                            <img src="./img/loseta-s.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card zoom-it">
                    <div className="card-header bg-wine text-light">
                        <h1 className='m-auto'>
                            <i className="fas fa-circle fa-fw text-warning"></i><b> Grupos de Losetas:</b>
                        </h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="kastrup" data-bs-toggle="list"
                                        href="#kestrup" role="tab" aria-controls="kestrup">Kastrup</a>
                                    <a className="list-group-item list-group-item-action" id="rectangular-list" data-bs-toggle="list"
                                        href="#rectangular" role="tab" aria-controls="rectangular">Rectangular</a>
                                    <a className="list-group-item list-group-item-action" id="ondulada-s-list" data-bs-toggle="list"
                                        href="#ondulada-s" role="tab" aria-controls="ondulada-s">Ondulada "S"</a>
                                    <a className="list-group-item list-group-item-action" id="hexagonal-list" data-bs-toggle="list"
                                        href="#hexagonal" role="tab" aria-controls="hexagonal">Hexagonal - Tipo 1</a>
                                    <a className="list-group-item list-group-item-action" id="hexagonal-list" data-bs-toggle="list"
                                        href="#hexagonal-2" role="tab" aria-controls="hexagonal-2">Hexagonal - Tipo 2</a>
                                    <a className="list-group-item list-group-item-action" id="venus-list" data-bs-toggle="list"
                                        href="#venus" role="tab" aria-controls="venus">Venus</a>
                                    <a className="list-group-item list-group-item-action" id="tipo1-list" data-bs-toggle="list"
                                        href="#tipo1" role="tab" aria-controls="venus">Tipo - 1</a>
                                </div>
                            </div>
                            <div className="col-sm-12  col-lg-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="kestrup" role="tabpanel" aria-labelledby="kastrup">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/kastrup.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 12 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 16kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="rectangular" role="tabpanel" aria-labelledby="rectangular-list">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/rectangular.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 20 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 10 kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ondulada-s" role="tabpanel" aria-labelledby="ondulada-s-list">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/ondulada-s.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 32 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 7kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="hexagonal" role="tabpanel" aria-labelledby="hexagonal-list">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/exagonal.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 12 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 17kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="hexagonal-2" role="tabpanel" aria-labelledby="hexagonal-2-list">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/exagonal-2.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 12 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 9kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="venus" role="tabpanel" aria-labelledby="venus-list">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/venus.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 12 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 18kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tipo1" role="tabpanel" aria-labelledby="tipo1-list">
                                        <div className="card">
                                            <div className="card-body d-flex align-items-center justify-content-center">
                                                <img src="./img/recursos/adoquines/tipo1.jpg"
                                                    className="shadow-lg border-bottom border-2 border-primary" alt="" />
                                            </div>
                                            <div className="card-footer">
                                                <ul className="list-group">
                                                    <li className="list-group-item">Rendimiento: 24 Pzas/m2</li>
                                                    <li className="list-group-item">Altura: 10 cm.</li>
                                                    <li className="list-group-item">Peso aprox. C/Pza. 6kg.</li>
                                                    <li className="list-group-item">Resistencia característica a la compresión 22 MPa.</li>
                                                    <li className="list-group-item">Resistencia característica a la flexión 3.6 MPa.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products