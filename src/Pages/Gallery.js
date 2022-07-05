import React, { useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
    const asfaltos = [
        {
            id: 1,
            src: '/img/recursos/asfaltos/asfaltos (1).jpeg'
        },
        {
            id: 2,
            src: '/img/recursos/asfaltos/asfaltos (2).jpeg'
        },
        {
            id: 3,
            src: '/img/recursos/asfaltos/asfaltos (3).jpeg'
        },
        {
            id: 4,
            src: '/img/recursos/asfaltos/asfaltos (4).jpeg'
        },
        {
            id: 5,
            src: '/img/recursos/asfaltos/asfaltos (5).jpeg'
        },
        {
            id: 6,
            src: '/img/recursos/asfaltos/asfaltos (6).jpeg'
        },
        {
            id: 7,
            src: '/img/recursos/asfaltos/asfaltos (7).jpeg'
        },
        {
            id: 8,
            src: '/img/recursos/asfaltos/asfaltos (8).jpeg'
        },
        {
            id: 9,
            src: '/img/recursos/asfaltos/asfaltos (9).jpeg'
        },
        {
            id: 10,
            src: '/img/recursos/asfaltos/asfaltos (10).jpeg'
        }
    ];

    const adoq1 = [
        {
            id: 1,
            src: '/img/recursos/asfaltos/adoq (1).jpeg'
        },
        {
            id: 2,
            src: '/img/recursos/asfaltos/adoq (2).jpeg'
        },
        {
            id: 3,
            src: '/img/recursos/asfaltos/adoq (3).jpeg'
        },
        {
            id: 4,
            src: '/img/recursos/asfaltos/adoq (4).jpeg'
        },
        {
            id: 5,
            src: '/img/recursos/asfaltos/adoq (5).jpeg'
        },
        {
            id: 6,
            src: '/img/recursos/asfaltos/adoq (6).jpeg'
        },
        {
            id: 7,
            src: '/img/recursos/asfaltos/adoq (7).jpeg'
        },
        {
            id: 8,
            src: '/img/recursos/asfaltos/adoq (8).jpeg'
        },
        {
            id: 9,
            src: '/img/recursos/asfaltos/adoq (9).jpeg'
        },
        {
            id: 10,
            src: '/img/recursos/asfaltos/adoq (10).jpeg'
        }
    ];

    const adoq2 = [
        {
            id: 1,
            src: '/img/recursos/asfaltos/adoq2 (1).jpeg'
        },
        {
            id: 2,
            src: '/img/recursos/asfaltos/adoq2 (2).jpeg'
        },
        {
            id: 3,
            src: '/img/recursos/asfaltos/adoq2 (3).jpeg'
        },
        {
            id: 4,
            src: '/img/recursos/asfaltos/adoq2 (4).jpeg'
        },
        {
            id: 5,
            src: '/img/recursos/asfaltos/adoq2 (5).jpeg'
        },
        {
            id: 6,
            src: '/img/recursos/asfaltos/adoq2 (6).jpeg'
        },
        {
            id: 7,
            src: '/img/recursos/asfaltos/adoq2 (7).jpeg'
        },
        {
            id: 8,
            src: '/img/recursos/asfaltos/adoq2 (8).jpeg'
        },
        {
            id: 9,
            src: '/img/recursos/asfaltos/adoq2 (9).jpeg'
        },
        {
            id: 10,
            src: '/img/recursos/asfaltos/adoq2 (10).jpeg'
        },
        {
            id: 11,
            src: '/img/recursos/asfaltos/adoq2 (11).jpeg'
        },
        {
            id: 12,
            src: '/img/recursos/asfaltos/adoq2 (12).jpeg'
        },
        {
            id: 13,
            src: '/img/recursos/asfaltos/adoq2 (13).jpeg'
        },
        {
            id: 14,
            src: '/img/recursos/asfaltos/adoq2 (14).jpeg'
        },
        {
            id: 15,
            src: '/img/recursos/asfaltos/adoq2 (15).jpeg'
        },
        {
            id: 16,
            src: '/img/recursos/asfaltos/adoq2 (16).jpeg'
        },
        {
            id: 17,
            src: '/img/recursos/asfaltos/adoq2 (17).jpeg'
        },
        {
            id: 18,
            src: '/img/recursos/asfaltos/adoq2 (18).jpeg'
        },
        {
            id: 19,
            src: '/img/recursos/asfaltos/adoq2 (19).jpeg'
        },
        {
            id: 20,
            src: '/img/recursos/asfaltos/adoq2 (20).jpeg'
        }
    ];

    const asf2 = [
        {
            id: 1,
            src: '/img/recursos/asfaltos/asf (1).jpeg'
        },
        {
            id: 2,
            src: '/img/recursos/asfaltos/asf (2).jpeg'
        },
        {
            id: 3,
            src: '/img/recursos/asfaltos/asf (3).jpeg'
        },
        {
            id: 4,
            src: '/img/recursos/asfaltos/asf (4).jpeg'
        },
        {
            id: 5,
            src: '/img/recursos/asfaltos/asf (5).jpeg'
        },
        {
            id: 6,
            src: '/img/recursos/asfaltos/asf (6).jpeg'
        },
        {
            id: 7,
            src: '/img/recursos/asfaltos/asf (7).jpeg'
        },
        {
            id: 8,
            src: '/img/recursos/asfaltos/asf (8).jpeg'
        },
        {
            id: 9,
            src: '/img/recursos/asfaltos/asf (9).jpeg'
        },
        {
            id: 10,
            src: '/img/recursos/asfaltos/adoq2 (10).jpeg'
        },
        {
            id: 11,
            src: '/img/recursos/asfaltos/asf (11).jpeg'
        },
        {
            id: 12,
            src: '/img/recursos/asfaltos/asf (12).jpeg'
        },
        {
            id: 13,
            src: '/img/recursos/asfaltos/asf (13).jpeg'
        },
        {
            id: 14,
            src: '/img/recursos/asfaltos/asf (14).jpeg'
        },
        {
            id: 15,
            src: '/img/recursos/asfaltos/asf (15).jpeg'
        },
        {
            id: 16,
            src: '/img/recursos/asfaltos/asf (16).jpeg'
        },
        {
            id: 17,
            src: '/img/recursos/asfaltos/asf (17).jpeg'
        }
    ];

    const asf3 = [
        {
            id: 1,
            src: '/img/recursos/asfaltos/asf3 (1).jpeg'
        },
        {
            id: 2,
            src: '/img/recursos/asfaltos/asf3 (2).jpeg'
        },
        {
            id: 3,
            src: '/img/recursos/asfaltos/asf3 (3).jpeg'
        },
        {
            id: 4,
            src: '/img/recursos/asfaltos/asf3 (4).jpeg'
        },
        {
            id: 5,
            src: '/img/recursos/asfaltos/asf3 (5).jpeg'
        }
    ];

    const maq = [
        {
            id: 1,
            src: '/img/recursos/asfaltos/maq (1).jpeg'
        },
        {
            id: 2,
            src: '/img/recursos/asfaltos/maq (2).jpeg'
        },
        {
            id: 3,
            src: '/img/recursos/asfaltos/maq (3).jpeg'
        },
        {
            id: 4,
            src: '/img/recursos/asfaltos/maq (4).jpeg'
        },
        {
            id: 5,
            src: '/img/recursos/asfaltos/maq (5).jpeg'
        },
        {
            id: 6,
            src: '/img/recursos/asfaltos/maq (6).jpeg'
        }
    ];

    const [model, setModel] = useState(false);
    const [tempSrc, setTempSrc] = useState('');
    const getImg = (src) => {
        setTempSrc(src);
        setModel(true);
    }
    return (
        <div className="mt-5 pt-5">
            <a href="#top" className='btn btn-dark btn-home'>
                <i class="fa-solid fa-arrow-up"></i>
            </a>
            <div className={model ? "model open" : "model"}>
                <img src={tempSrc} />
                <i className="fa-solid fa-rectangle-xmark fa-fw fa-2x" onClick={() => setModel(false)}></i>
            </div>
            <h1 className="fs-1">
                Bienvenido(a) a la galeria de Alconvias S.R.L
            </h1>
            <h4 className="mb-4">Aqui podrás observar imagenes de todas nuestras obras, además, nuestra forma de trabajar!</h4>

            <div className="container accordion accordion-flush mb-4" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <i className="fa-solid fa-camera fa-fw fa-2x text-success mx-2"></i><h3>Asfaltados en la Ciudad y Barrios</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <div className="gallery">
                                    {asfaltos.map((item, index) => {
                                        return (
                                            <div className="pics img-fluid" key={index}>
                                                <img src={item.src} style={{ width: '100%' }} onClick={() => getImg(item.src)} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <i className="fa-solid fa-camera fa-fw fa-2x text-success mx-2"></i><h3>Adoquinado en la Ciudad y Barrios</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <div className="gallery">
                                    {adoq1.map((item, index) => {
                                        return (
                                            <div className="pics img-fluid" key={index}>
                                                <img src={item.src} style={{ width: '100%' }} onClick={() => getImg(item.src)} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <i className="fa-solid fa-camera fa-fw fa-2x text-success mx-2"></i><h3>Preparación de Adoquinado (Laboratorios)</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <div className="gallery">
                                    {adoq2.map((item, index) => {
                                        return (
                                            <div className="pics img-fluid" key={index}>
                                                <img src={item.src} style={{ width: '100%' }} onClick={() => getImg(item.src)} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFourth">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
                            <i className="fa-solid fa-camera fa-fw fa-2x text-success mx-2"></i><h3>Equipo de Asfaltos</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseFourth" className="accordion-collapse collapse" aria-labelledby="flush-headingFourth" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <div className="gallery">
                                    {asf2.map((item, index) => {
                                        return (
                                            <div className="pics img-fluid" key={index}>
                                                <img src={item.src} style={{ width: '100%' }} onClick={() => getImg(item.src)} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFifth">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifth" aria-expanded="false" aria-controls="flush-collapseFifth">
                            <i className="fa-solid fa-camera fa-fw fa-2x text-success mx-2"></i><h3>Maquinaria en Acción</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseFifth" className="accordion-collapse collapse" aria-labelledby="flush-headingFifth" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <div className="gallery">
                                    {asf3.map((item, index) => {
                                        return (
                                            <div className="pics img-fluid" key={index}>
                                                <img src={item.src} style={{ width: '100%' }} onClick={() => getImg(item.src)} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSixth">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixth" aria-expanded="false" aria-controls="flush-collapseSixth">
                            <i className="fa-solid fa-camera fa-fw fa-2x text-success mx-2"></i><h3>Maquinaria en Acción en Carreteras</h3>
                        </button>
                    </h2>
                    <div id="flush-collapseSixth" className="accordion-collapse collapse" aria-labelledby="flush-headingSixth" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="container-fluid">
                                <div className="gallery">
                                    {maq.map((item, index) => {
                                        return (
                                            <div className="pics img-fluid" key={index}>
                                                <img src={item.src} style={{ width: '100%' }} onClick={() => getImg(item.src)} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery