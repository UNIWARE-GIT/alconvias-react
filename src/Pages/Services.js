import React from 'react'

function Services() {
  return (
    <div className="mt-5 pt-5">
      <a href="#top" className='btn btn-dark btn-home'>
        <i class="fa-solid fa-arrow-up"></i>
      </a>
      <div className="container p-4">
        <div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Contrucciones: </b>
              </h1>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className='list-group-item'>
                  Edificios.
                </li>
                <li className='list-group-item'>
                  Salones.
                </li>
                <li className='list-group-item'>
                  Cholet.
                </li>
                <li className='list-group-item'>
                  Etc.
                </li>
              </ul>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Tratamientos Asfálticos Superficiales: </b>
              </h1>
            </div>
            <div className="card-body">
              <p>
                Consiste en la colocación de una capa de revestimiento de poco espesor, formada por riegos sucesivos
                y alternados de material bituminoso y agregados pétreos. La que no da un refuerzo de estructura sino
                simplemente protege la base de la acción del tiempo y del desgaste. Los tratamientos superficiales
                no corrigen depresiones, ni deformaciones, ni agrietamientos fuertes, solamente logran una capa
                impermeable.
              </p>
              <p>
                La ventaja en el uso de estos es que permiten construir una carpeta por etapas, en forma
                relativamente sencilla y sin el uso de equipos sofisticados.
              </p>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Tipos de Tratamientos: </b>
              </h1>
            </div>
            <div className="card-body shadow-lg">
              <div className="row p-4">
                <div className="col-md-7 col-sm-12 border-bottom border-2 border-primary p-2">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="t1-list" data-bs-toggle="list"
                      href="#t1" role="tab" aria-controls="t1">
                      Tratamientos superficiales con aplicación de asfalto y distribución de agregados.
                    </a>
                    <a className="list-group-item list-group-item-action" id="t2-list" data-bs-toggle="list"
                      href="#t2" role="tab" aria-controls="t2">
                      Tratamientos Superficiales Simples (TSS).
                    </a>
                    <a className="list-group-item list-group-item-action" id="t3-list" data-bs-toggle="list"
                      href="#t3" role="tab" aria-controls="t3">
                      Tratamientos Superficiales Dobles (TSD).
                    </a>
                    <a className="list-group-item list-group-item-action" id="t4-list" data-bs-toggle="list"
                      href="#t4" role="tab" aria-controls="t4">
                      Riego de Imprimación.
                    </a>
                    <a className="list-group-item list-group-item-action" id="t5-list" data-bs-toggle="list"
                      href="#t5" role="tab" aria-controls="t5">
                      Paliativos de polvo
                    </a>
                    <a className="list-group-item list-group-item-action" id="t6-list" data-bs-toggle="list"
                      href="#t6" role="tab" aria-controls="t6">
                      Road rolling
                    </a>
                    <a className="list-group-item list-group-item-action" id="t7-list" data-bs-toggle="list"
                      href="#t7" role="tab" aria-controls="t7">
                      Riegos de liga
                    </a>
                    <a className="list-group-item list-group-item-action" id="t8-list" data-bs-toggle="list"
                      href="#t8" role="tab" aria-controls="t8">
                      Riego pulverizado (Fog seal)
                    </a>
                    <a className="list-group-item list-group-item-action" id="t9-list" data-bs-toggle="list"
                      href="#t9" role="tab" aria-controls="t9">
                      Lechadas asfálticas
                    </a>
                    <a className="list-group-item list-group-item-action" id="t10-list" data-bs-toggle="list"
                      href="#t10" role="tab" aria-controls="t10">
                      Telford
                    </a>
                    <a className="list-group-item list-group-item-action" id="t11-list" data-bs-toggle="list"
                      href="#t11" role="tab" aria-controls="t11">
                      Macadam Asfáltico
                    </a>
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="t1" role="tabpanel" aria-labelledby="t1-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Los tratamientos asfalticos abarcan desde una simple y ligera aplicación de
                            cemento asfáltico o emulsión bituminosa, a múltiples aplicaciones de
                            materiales
                            asfálticos sobre las que se distribuyen agregados pétreos.
                            También se consideran tratamientos asfalticos superficiales algunos tipos de
                            mezcla asfáltica-agregados. Todos los tratamientos superficiales sellan y
                            prolongan la vida de los caminos. Cada tipo tiene una o más propósitos
                            especiales.

                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t2" role="tabpanel" aria-labelledby="t2-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Consiste en una sola aplicación uniformemente distribuida de ligante
                            bituminoso, seguido de una aplicación de árido de tamaño tan uniforme como
                            sea posible. Esta se realiza sobre una superficie acondicionada y con una
                            estructura apropiada a las condiciones de so¬licitación a que va a estar
                            expuesta.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t3" role="tabpanel" aria-labelledby="t3-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Son dos riegos alternados y uniformemente distribuidos de ligante bituminoso
                            y árido so¬bre una superficie acondicionada previamen¬te. El tamaño medio
                            del árido de cada distribu¬ción sucesiva es la mitad o menos del tamaño
                            medio de la capa precedente. El espesor total es aproximadamente igual al
                            tamaño máximo nominal del árido de la primera aplicación.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t4" role="tabpanel" aria-labelledby="t4-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Es una aplicación de emulsión asfáltica (de rotura media) o asfalto diluido
                            (de endurecimiento medio) a una superficie absorbente. Se usa para
                            preparación de una base no tratada para recibir un riego asfáltico ligante
                            modificándola y confiriéndola.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t5" role="tabpanel" aria-labelledby="t5-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Consiste en la distribución de una emulsión asfáltica de rotura lenta. El
                            asfalto y el diluyente penetran y cubren las partículas finas, mitigando
                            temporariamente las molestias ocasionada por el polvo. Cuando se emplean
                            emulsiones, se debe diluir con agua en cinco o más partes, en volumen. El
                            riego paliativo de polvo con emulsiones diluidas requiere generalmente de
                            varias aplicaciones.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t6" role="tabpanel" aria-labelledby="t6-list">
                      <div className="card">
                        <div className="card-body">
                          El objetivo de este tipo de riego es lograr una subrasante fuerte que no se
                          sature con el agua y pueda servir a su vez como superficie de rodamiento firme y
                          libre de polvo.
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t7" role="tabpanel" aria-labelledby="t7-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            El riego de liga es una aplicación de emulsión (de rotura rápida) sobre un
                            pavimento existente para asegurar la adherencia entre la superficie vieja y
                            la nueva capa asfáltica. Debe ser muy delgado y cubrir uniformemente el área
                            a pavimentar.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t8" role="tabpanel" aria-labelledby="t8-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Aplicación muy ligera de emulsión diluida de rotura lenta. Se utiliza para
                            renovar pavimentos viejos, y cerrar grietas y huecos superficiales. También
                            se lo utiliza para sellar huecos en mezclas asfálticas nuevas y evitar la
                            producción de polvo en tratamientos superficiales.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t9" role="tabpanel" aria-labelledby="t9-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Es una mezcla compuesta por una emulsión asfáltica de quiebre lento, árido
                            bien graduado, filler, agua y eventualmente aditivos. Es una mezcla de
                            consistencia fluida, capaz de penetrar y sellar grietas y defectos menores.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t10" role="tabpanel" aria-labelledby="t10-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Esta es otra estructura de piedras similar al macadam, diferenciándose en
                            que en el Telford se usa grandes piedras (no trituradas) planas, las cuales
                            se acomodan en posición de equilibrio manualmente.
                            El Telford perdió importancia debido a que produce una superficie de
                            rodadura incomoda para el vehículo moderno; de ahí su uso muy limitado.

                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="t11" role="tabpanel" aria-labelledby="t11-list">
                      <div className="card">
                        <div className="card-body">
                          <p>
                            Consiste en la construcción de una superficie de rodado de un camino usando
                            3 capas de diferentes tamaños de agregados, colocando la más gruesa abajo y
                            la más fina arriba para luego ser compactada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Funciones de los Tratamientos Asfálticos </b>
                Superficiales:
              </h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center">
                  <p>
                    Un tratamiento asfaltico superficial por sí mismo no es considerado un pavimento.
                    Básicamente brinda una cubierta impermeable a la superficie existente de la calzada y
                    resistencia abrasiva del tránsito. Algunas de las funciones más comunes con:
                  </p>
                </div>
                <div className="col-sm-12 col-md-5">
                  <ol>
                    <li>
                      <p>
                        Proveer una superficie económica y duradera para caminos con bases granulares que tienen
                        tránsitos ligeros y de mediano volumen.
                      </p>
                    </li>

                    <li>
                      <p>
                        Prevenir la penetración superficial de agua en bases granulares y pavimentos viejos que
                        han comenzado a desintegrarse por el tiempo o a fisurarse.
                      </p>
                    </li>

                    <li>
                      <p>
                        Rellanar huecos, recubrir y ligar partículas minerales desprendidas y restaurar la
                        superficie del pavimento.
                      </p>
                    </li>

                    <li>
                      <p>
                        Renovar superficies y restaurar la resistencia al deslizamiento de pavimentos
                        deteriorados
                        por el tránsito en los cuales los agregados superficiales han comenzado a pulirse.
                      </p>
                    </li>
                    <li>
                      <p>
                        Restaurar capas de rodamientos afectadas por los agentes climáticos y dar nueva vida a
                        superficies de pavimentos resecas.
                      </p>
                    </li>

                    <li>
                      <p>
                        Proveer una cubierta temporaria en los casos de construcción de pavimentos incompletos y
                        demorados o cuando se trata de una construcción por etapas.
                      </p>
                    </li>

                    <li>
                      <p>
                        Paliar el polvo.
                      </p>
                    </li>
                    <li>
                      <p>
                        Asegurar la adherencia de las capas asfálticas superiores con las bases granulares
                        (riego de imprimación).
                      </p>
                    </li>
                    <li>
                      <p>
                        Asegurar la trabazón entre la superficie que está siendo pavimentada y la capa superior
                        (riego de liga).
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Maquinaria: </b>
              </h1>
            </div>
            <div className="card-body">
              <div className="row p-4">
                <div className="col-sm-12 col-md-6">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="c1-list" data-bs-toggle="list"
                      href="#c1" role="tab" aria-controls="c1">
                      Camión regador de asfalto.
                    </a>
                    <a className="list-group-item list-group-item-action" id="c2-list" data-bs-toggle="list"
                      href="#c2" role="tab" aria-controls="c2">
                      Gravilladora.
                    </a>
                    <a className="list-group-item list-group-item-action" id="c3-list" data-bs-toggle="list"
                      href="#c3" role="tab" aria-controls="c3">
                      Rodillo Metálico Liso
                    </a>
                    <a className="list-group-item list-group-item-action" id="c4-list" data-bs-toggle="list"
                      href="#c4" role="tab" aria-controls="c4">
                      Barredora
                    </a>
                    <a className="list-group-item list-group-item-action" id="c5-list" data-bs-toggle="list"
                      href="#c5" role="tab" aria-controls="c5">
                      Compactador Neumático
                    </a>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="c1" role="tabpanel" aria-labelledby="c1-list">
                      <div className="card">
                        <div className="card-header">
                          <img src="http://e-asfalto.com/ingles/hotackdistributor/tackhot2000.JPG"
                            className="img-fluid rounded" alt="" />
                        </div>
                        <div className="card-body">
                          <p>
                            Está constituido por un camión o semirremolque sobre el que se monta un
                            tanque aislado. Algunos distribuidores están equipados con un sistema de
                            calentamiento que consiste, en general, en un quemador de gas-oil.

                            El distribuidor está provisto de una motobomba, capaz de manejar productos
                            que varían desde asfaltos líquidos muy ligeros, que se aplican en frío, como
                            las emulsiones bituminosas, hasta cementos asfálticos muy viscosos, que
                            deben calentarse para obtener la viscosidad de riego.

                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="c2" role="tabpanel" aria-labelledby="c2-list">
                      <div className="card">
                        <div className="card-header">
                          <img src="http://victoryepes.blogs.upv.es/files/2019/04/gravilladora-hidrostatica-rosco-11.jpg"
                            className="img-fluid rounded" alt="" />
                        </div>
                        <div className="card-body">
                          <p>
                            El equipo que le sigue en importancia al distribuidor de asfalto es la
                            gravilladora. En este los distribuidores pueden variar desde un tipo
                            sencillo unido al fondo de la caja del camión, hasta una unidad
                            autopropulsada de gran rendimiento.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="c3" role="tabpanel" aria-labelledby="c3-list">
                      <div className="card">
                        <div className="card-header">
                          <img src="https://rdv-files.nyc3.cdn.digitaloceanspaces.com/pub/html/files_html/3/1/0/000723105.jpg"
                            className="img-fluid rounded m-auto w-100" alt="" />
                        </div>
                        <div className="card-body">
                          <p>
                            Está constituido por un camión o semirremolque sobre el que se monta un
                            tanque aislado. Algunos distribuidores están equipados con un sistema de
                            calentamiento que consiste, en general, en un quemador de gas-oil.

                            El distribuidor está provisto de una motobomba, capaz de manejar productos
                            que varían desde asfaltos líquidos muy ligeros, que se aplican en frío, como
                            las emulsiones bituminosas, hasta cementos asfálticos muy viscosos, que
                            deben calentarse para obtener la viscosidad de riego.

                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="c4" role="tabpanel" aria-labelledby="c4-list">
                      <div className="card">
                        <div className="card-header">
                          <img src="https://www.eivmaquinaria.com/uploads/5/1/5/8/51584447/s514058444989793121_p746_i1_w2560.jpeg"
                            className="img-fluid rounded" alt="" />
                        </div>
                        <div className="card-body">
                          <p>
                            Sopladora mecánica o manual Es aquella maquina que se encarga de romper y
                            luego limpiar los escombros.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="c5" role="tabpanel" aria-labelledby="c5-list">
                      <div className="card">
                        <div className="card-header">
                          <img src="https://www.manualesdetodo.net/wp-content/uploads/2021/12/manual-compactador-neumatico-ps360c-1200x675.jpg"
                            className="img-fluid rounded" alt="" />
                        </div>
                        <div className="card-body">
                          <p>
                            Para el acabado final, con presión de inflado en las llantas superior a 7
                            Kg/cm2.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Obras de Arte y Drenaje de Carreteras: </b>
              </h1>
            </div>
            <div className="card-body">
              <p>
                Las obras de drenaje son elementos estructurales que eliminan la inaccesibilidad de un camino,
                provocada por el agua o la humedad.
              </p>
              <h3>Los objetivos primordiales de las obras de drenaje son:</h3>
              <ol className='list-group'>
                <li className='list-group-item'>
                  Dar salida al agua que se llegue a acumular en el camino.
                </li>
                <li className='list-group-item'>
                  Reducir o eliminar la cantidad de agua que se dirija hacia el camino.
                </li>
                <li className='list-group-item'>
                  Evitar que el agua provoque daños estructurales.
                </li>
              </ol>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className="m-auto">
                <i className="fas fa-circle fa-fw text-warning"></i><b> Laboratorios de Suelos:</b>
              </h1>
            </div>
            <div className="card-body">
              <div className='mb-4'>
                <h3><i className="fas fa-search-location fa-fw"></i> - Estudio "In Situ":</h3>
                <p>
                  Como su nombre lo indica, son los estudios que se realizan directamente sobre el terreno, donde
                  se busca trabajar con muestras extraídas directamente del suelo, evitando la dificultad de hacer
                  llegar una muestra inalterada a un laboratorio.
                </p>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    SPT - Ensayo de penetración estándar (Standard Penetration Test)
                  </li>
                  <li className='list-group-item'>
                    CPT - Ensayo de penetración estática (Cone Penetration Test)
                  </li>
                  <li className='list-group-item'>
                    VST - Ensayo de Molinete (también conocido como Vane Teste)
                  </li>
                  <li className='list-group-item'>
                    Ensayo presiométrico
                  </li>
                  <li className='list-group-item'>
                    DMT - Dilatómetro plano Marchetti
                  </li>
                  <li className='list-group-item'>
                    Ensayo de placa de carga
                  </li>
                  <li className='list-group-item'>
                    Esclerómetro Schmidt
                  </li>
                  <li className='list-group-item'>
                    PLT - Ensayo de carga puntual
                  </li>
                  <li className='list-group-item'>
                    Ensayos de bombeo
                  </li>
                </ul>
              </div>
              <div className='mb-4'>
                <h3><i className="fas fa-flask fa-fw"></i> - Ensayos en laboratorio </h3>
                <p>
                  Son todos aquello ensayos que permiten estudiar las propiedades del suelo a través de muestras,
                  lo más inalteradas posibles, provenientes del terreno objeto de análisis; y se realizan en
                  ambientes controlados, dentro de un laboratorio.
                </p>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    De identificación y estado ( tamizado, sedimentación, humedad, densidad, permeabilidad,
                    etc.)
                  </li>
                  <li className='list-group-item'>
                    De resistencia (compresión, corte y ensayo triaxial)
                  </li>
                  <li className='list-group-item'>
                    De deformabilidad (edométrico)
                  </li>
                  <li className='list-group-item'>
                    De compactación y reutilización (ensayo Próctor y CBR)
                  </li>
                  <li className='list-group-item'>
                    En rocas (durabilidad, resistencia, densidad, absorción, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card mb-4 shadow-lg zoom-it">
            <div className="card-header bg-wine text-light">
              <h1 className='m-auto'>
                <i className="fas fa-circle fa-fw text-warning"></i><b> ¿No está lo que necesitas?</b>
              </h1>
            </div>
            <div className="card-body d-flex align-items-center justify-content-center">
              <a href="/contacts" className="btn btn-outline-success">Contáctanos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services