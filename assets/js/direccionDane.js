var DANE={
  htmlDireccion: '<div class="modal fade" name="modalFomatDireccion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">' +
  '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' +
  '   <div class="modal-content" style="height: 100px;" autoCal="true" formulacal="height+10">' +
  '      <div class="modal-header">' +
  '         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
  '        <h4 class="modal-title" id="exampleModalLabel">Constructor dirección' +
  '          <button title="Manual de ayuda" titile="Constructor dirección" name="btn_help" type="button" class="btn btn-warning">' +
  '                                <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>' +
  '                            </button></h4>' +
  '        </div>' +
  '        <div class="modal-body" autoCal="true" formulacal="height-90" style="overflow-y: auto;">' +
  '        <input type="hidden" name="componente">' +
  '            <div class="col-md-offset-2 col-md-8">' +
  '               <div class="alert alert-info" role="alert">' +
  '                   Se&ntilde;or estudiante complete la informaci&oacute;n para construir su direcci&oacute;n, ' +
  '                   si usted no puede completar su direcci&oacute;n consulte el instructivo' +
  '               </div>' +
  '            </div>' +
  '            <div class="col-md-12" style="border: solid 1px #ccc;border-radius:15px;padding-top: 10px;">' +
  '                <div class="col-md-2">' +
  '                    <div class="form-group">' +
  '                        <label for="tipovia" class="control-label">Vía</label>' +
  '                        <select class="form-control" name="tipovia" required="true">' +
  '                            <option selected value=""></option>' +
  '                            <option value="AU">Autopista</option>' +
  '                            <option value="AV">Avenida</option>' +
  '                            <option value="AC">Avenida Calle</option>' +
  '                            <option value="AK">Avenida Carrera</option>' +
  '                            <option value="BL">Boulevar</option>' +
  '                            <option value="CL">Calle</option>' +
  '                            <option value="KR">Carrera</option>' +
  '                            <option value="CT">Carretera</option>' +
  '                            <option value="CV">Circunvalar</option>' +
  '                            <option value="CC">Cuentas Corridas</option>' +
  '                            <option value="DG">Diagonal</option>' +
  '                            <option value="PJ">Pasaje</option>' +
  '                            <option value="PS">Paseo</option>' +
  '                            <option value="PT">Peatonal</option>' +
  '                            <option value="TV">Transversal</option>' +
  '                            <option value="TC">Troncal</option>' +
  '                            <option value="VT">Variante</option>' +
  '                            <option value="VI">Vía</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2">' +
  '                    <div class="form-group">' +
  '                        <label for="nnvia_" class="control-label">N&uacute;mero</label>' +
  '                        <input type="text" class="form-control" name="nnvia_" maxlength="50">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2">' +
  '                    <div class="form-group">' +
  '                        <label title="Complemento Nomenclatura. Ej: A, AB, A1, A2B" for="nnvia__" class="control-label">Letra</label>' +
  '                        <input title="Complemento Nomenclatura. Ej: A, AB, A1, A2B" type="text" class="form-control" name="nnvia__" maxlength="3">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2">' +
  '                    <div class="form-group">' +
  '                        <label class="control-label">Prefijo</label>' +
  '                        <select class="form-control" name="prefijo">' +
  '                            <option selected value=""></option>' +
  '                            <option value="BIS">BIS</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2">' +
  '                    <div class="form-group">' +
  '                        <label for="acomprefijo" title="Complemento Prefijo. Ej: A, AB, A1, A2B" class="control-label">Letra Prefijo</label>' +
  '                        <input disabled="true" title="Complemento Prefijo. Ej: A, AB, A1, A2B" type="text" class="form-control" name="acomprefijo" maxlength="3">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2">' +
  '                    <div class="form-group">' +
  '                        <label for="cuadrante" class="control-label">Cuadrante</label>' +
  '                        <select class="form-control" name="cuadrante">' +
  '                            <option selected value=""></option>' +
  '                            <option value="ESTE">Este</option>' +
  '                            <option value="NORTE">Norte</option>' +
  '                            <option value="OESTE">Oeste</option>' +
  '                            <option value="SUR">Sur</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-12" style="margin-top: 10px;border: solid 1px #ccc;border-radius:15px;padding-top: 10px;">' +
  '                <div class="col-md-3">' +
  '                    <div class="form-group">' +
  '                        <label for="nnvia2_" class="control-label">N&uacute;mero</label>' +
  '                        <input type="number" class="form-control" name="nnvia2_">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-3">' +
  '                    <div class="form-group">' +
  '                        <label for="nnvia2__" title="Complemento Nomenclatura. Ej: A, AB, A1, A2B" class="control-label">Letra</label>' +
  '                        <input type="text"  title="Complemento Nomenclatura. Ej: A, AB, A1, A2B" class="form-control" name="nnvia2__" maxlength="3">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-3">' +
  '                    <div class="form-group">' +
  '                        <label for="prefijo2" class="control-label">Sufijo</label>' +
  '                        <select class="form-control" name="prefijo2">' +
  '                            <option selected value=""></option>' +
  '                            <option value="BIS">BIS</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-3">' +
  '                    <div class="form-group">' +
  '                        <label for="acomprefijo2" title="Complemento Sufijo. Ej: A, AB, A1, A2B" class="control-label">Letra Sufijo</label>' +
  '                        <input disabled="true" type="text" title="Complemento Sufijo. Ej: A, A1, AB, A2B" class="form-control" name="acomprefijo2" maxlength="3">' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-12"  style="margin-top: 10px;border: solid 1px #ccc;border-radius:15px;padding-top: 10px;">' +
  '                 <div class="col-md-4">' +
  '                    <div class="form-group">' +
  '                        <label for="placa" class="control-label">Placa</label>' +
  '                        <input type="number" class="form-control" name="placa">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-4">' +
  '                    <div class="form-group">' +
  '                        <label for="cuadrante2" class="control-label">Cuadrante</label>' +
  '                        <select class="form-control" name="cuadrante2">' +
  '                            <option selected value=""></option>' +
  '                            <option value="ESTE">Este</option>' +
  '                            <option value="NORTE">Norte</option>' +
  '                            <option value="OESTE">Oeste</option>' +
  '                            <option value="SUR">Sur</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-12"  style="margin-top: 10px; margin-bottom: 10px; border: solid 1px #ccc;border-radius:15px;padding-top: 10px;">' +
  '                <div class="col-md-4">' +
  '                    <div class="form-group">' +
  '                        <label for="complemento" class="control-label">Complemento</label>' +
  '                        <select class="form-control" name="complemento">' +
  '                            <option selected value=""></option>' +
  '                            <option value="AD">Administración</option>' +
  '                            <option value="AG">Agrupación</option>' +
  '                            <option value="AL">Altillo</option>' +
  '                            <option value="AP">Apartamento</option>' +
  '                            <option value="BR">Barrio</option>' +
  '                            <option value="BQ">Bloque</option>' +
  '                            <option value="BG">Bodega</option>' +
  '                            <option value="CS">Casa</option>' +
  '                            <option value="CU">Célula</option>' +
  '                            <option value="CE">Centro Comercial</option>' +
  '                            <option value="CD">Ciudadela</option>' +
  '                            <option value="CO">Conjunto Residencial</option>' +
  '                            <option value="CN">Consultorio</option>' +
  '                            <option value="DP">Deposito</option>' +
  '                            <option value="DS">Deposito Sótano</option>' +
  '                            <option value="ED">Edificio</option>' +
  '                            <option value="EN">Entrada</option>' +
  '                            <option value="EQ">Esquina</option>' +
  '                            <option value="ES">Estación</option>' +
  '                            <option value="ET">Etapa</option>' +
  '                            <option value="EX">Exterior</option>' +
  '                            <option value="FI">Finca</option>' +
  '                            <option value="GA">Garaje</option>' +
  '                            <option value="GS">Garaje Sótano</option>' +
  '                            <option value="IN">Interior</option>' +
  '                            <option value="KM">Kilómetro</option>' +
  '                            <option value="Local">LC</option>' +
  '                            <option value="LM">Local Mezzanine</option>' +
  '                            <option value="LT">Lote</option>' +
  '                            <option value="MZ">Manzana</option>' +
  '                            <option value="MN">Mezzanine</option>' +
  '                            <option value="MD">Módulo</option>' +
  '                            <option value="OF">Oficina</option>' +
  '                            <option value="PQ">Parque</option>' +
  '                            <option value="PA">Parqueadero</option>' +
  '                            <option value="PN">Pent-House</option>' +
  '                            <option value="PI">Piso</option>' +
  '                            <option value="PL">Planta</option>' +
  '                            <option value="PR">Porteria</option>' +
  '                            <option value="PD">Predio</option>' +
  '                            <option value="PU">Puesto</option>' +
  '                            <option value="RP">Round Point</option>' +
  '                            <option value="SC">Sector</option>' +
  '                            <option value="SS">Semisótano</option>' +
  '                            <option value="SO">Sótano</option>' +
  '                            <option value="ST">Suite</option>' +
  '                            <option value="SM">Supermanzana</option>' +
  '                            <option value="TZ">Terraza</option>' +
  '                            <option value="TO">Torre</option>' +
  '                            <option value="UN">Unidad</option>' +
  '                            <option value="UL">Unidad Residencial</option>' +
  '                            <option value="UR">Urbanización</option>' +
  '                            <option value="ZN">Zona</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                 <div class="col-md-8">' +
  '                    <div class="form-group">' +
  '                        <label for="observacion" class="control-label">Observación Complemento</label>' +
  '                        <input type="text" disabled="true" input class="form-control" maxlength="150" name="observacion">' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '             <div class="col-md-12">' +
  '                <div class="form-group">' +
  '                    <label for="dir" class="control-label">Resultado</label>' +
  '                    <input type="text" readonly="true" class="form-control" name="dir">' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-12" style="display:none;">' +
  '                <div class="form-group">' +
  '                    <label for="dircod" class="control-label">Dirección codificada</label>' +
  '                    <input type="text" readonly="true" class="form-control" name="dircod">' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-12" style="padding-top: 20px; padding-left: 30px;">' +
  '                <button type="button" name="btnAceptarDir" class="btn btn-success">Aceptar' +
  '                    <span class="glyphicon glyphicon-check" aria-hidden="true"></span>' +
  '                </button>' +
  '            </div>' +
  '        </div>' +
  '    </div>' +
  '</div>' +
  '</div>',
  htmlDireccionSencilla: '<div class="modal fade" name="modalFomatDireccionSencilla" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">' +
  '<div class="modal-dialog modal-dialog-centered" role="document" style="width: 90%;">' +
  '   <div class="modal-content" style="height: 100px;" autoCal="true" formulacal="height+10">' +
  '      <div class="modal-header">' +
  '          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
  '          <h4 class="modal-title" id="exampleModalLabel">Constructor dirección' +
  '          <button title="Manual de ayuda" titile="Constructor dirección" name="btn_help" type="button" class="btn btn-warning">' +
  '                                <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>' +
  '                            </button></h4>' +
  '        </div>' +
  '        <div class="modal-body" autoCal="true" formulacal="height-60" style="overflow-y: auto;">' +
  '        <input type="hidden" name="componente">' +
  '            <div class="col-md-offset-2 col-md-8">' +
  '               <div class="alert alert-info" role="alert">' +
  '                   Se&ntilde;or estudiante complete la informaci&oacute;n para construir su direcci&oacute;n, ' +
  '                   si usted no puede completar su direcci&oacute;n presione el bot&oacute;n "Constructor Avanzado"' +
  '               </div>' +
  '            </div>' +
  '            <div class="col-md-12">' +
  '                <div class="col-md-2" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="tipovia" class="control-label">V&iacute;a</label>' +
  '                        <select class="form-control" name="tipovia" required="true">' +
  '                            <option selected value=""></option>' +
  '                            <option value="CL">Calle</option>' +
  '                            <option value="KR">Carrera</option>' +
  '                            <option value="DG">Diagonal</option>' +
  '                            <option value="TV">Transversal</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-1" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="nnvia_" class="control-label">N&uacute;mero</label>' +
  '                        <input type="text" class="form-control" name="nnvia_" maxlength="50">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-1" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label title="Letra. Ej: A, B, C" for="nnvia__" class="control-label">Letra</label>' +
  '                        <select class="form-control" name="nnvia__">' +
  '                            <option selected value=""></option>' +
  '                            <option value="A">A</option>' +
  '                            <option value="B">B</option>' +
  '                            <option value="C">C</option>' +
  '                            <option value="D">D</option>' +
  '                            <option value="E">E</option>' +
  '                            <option value="F">F</option>' +
  '                            <option value="G">G</option>' +
  '                            <option value="H">H</option>' +
  '                            <option value="I">I</option>' +
  '                            <option value="J">J</option>' +
  '                            <option value="K">K</option>' +
  '                            <option value="L">L</option>' +
  '                            <option value="M">M</option>' +
  '                            <option value="N">N</option>' +
  '                            <option value="O">O</option>' +
  '                            <option value="P">P</option>' +
  '                            <option value="Q">Q</option>' +
  '                            <option value="R">R</option>' +
  '                            <option value="S">S</option>' +
  '                            <option value="T">T</option>' +
  '                            <option value="U">U</option>' +
  '                            <option value="V">V</option>' +
  '                            <option value="W">W</option>' +
  '                            <option value="X">X</option>' +
  '                            <option value="Y">Y</option>' +
  '                            <option value="Z">Z</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="cuadrante" class="control-label">Cuadrante</label>' +
  '                        <select class="form-control" name="cuadrante">' +
  '                            <option selected value=""></option>' +
  '                            <option value="ESTE">Este</option>' +
  '                            <option value="NORTE">Norte</option>' +
  '                            <option value="OESTE">Oeste</option>' +
  '                            <option value="SUR">Sur</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div style="padding:1px;float: left;width: 30px;font-size: 20px;padding-top: 16px;text-align: center;">' +
  '                    #' +
  '                </div>' +
  '                <div class="col-md-1" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="nnvia2_" class="control-label">N&uacute;mero</label>' +
  '                        <input type="text" class="form-control" name="nnvia2_">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-1" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="nnvia2__" title="Letra. Ej: A, B, C" class="control-label">Letra</label>' +
  '                        <select class="form-control" name="nnvia2__">' +
  '                            <option selected value=""></option>' +
  '                            <option value="A">A</option>' +
  '                            <option value="B">B</option>' +
  '                            <option value="C">C</option>' +
  '                            <option value="D">D</option>' +
  '                            <option value="E">E</option>' +
  '                            <option value="F">F</option>' +
  '                            <option value="G">G</option>' +
  '                            <option value="H">H</option>' +
  '                            <option value="I">I</option>' +
  '                            <option value="J">J</option>' +
  '                            <option value="K">K</option>' +
  '                            <option value="L">L</option>' +
  '                            <option value="M">M</option>' +
  '                            <option value="N">N</option>' +
  '                            <option value="O">O</option>' +
  '                            <option value="P">P</option>' +
  '                            <option value="Q">Q</option>' +
  '                            <option value="R">R</option>' +
  '                            <option value="S">S</option>' +
  '                            <option value="T">T</option>' +
  '                            <option value="U">U</option>' +
  '                            <option value="V">V</option>' +
  '                            <option value="W">W</option>' +
  '                            <option value="X">X</option>' +
  '                            <option value="Y">Y</option>' +
  '                            <option value="Z">Z</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '                <div style="padding:1px;float: left;width: 30px;font-size: 20px;padding-top: 16px;text-align: center;">' +
  '                    -' +
  '                </div>' +
  '                 <div class="col-md-1" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="placa" class="control-label">Placa</label>' +
  '                        <input type="text" class="form-control" name="placa">' +
  '                    </div>' +
  '                </div>' +
  '                <div class="col-md-2" style="padding:1px;">' +
  '                    <div class="form-group">' +
  '                        <label for="cuadrante2" class="control-label">Cuadrante</label>' +
  '                        <select class="form-control" name="cuadrante2">' +
  '                            <option selected value=""></option>' +
  '                            <option value="ESTE">Este</option>' +
  '                            <option value="NORTE">Norte</option>' +
  '                            <option value="OESTE">Oeste</option>' +
  '                            <option value="SUR">Sur</option>' +
  '                        </select>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-12">' +
  '                <div class="form-group">' +
  '                    <label for="dir" class="control-label">Ejemplos</label>' +
  '                    <div class="table-responsive" style="max-height: 160px;" autoCal="true" formulacal="height-200">'+
  '                      <table class="table table-bordered">'+
  '                         <thead>'+
  '                           <tr>'+
  '                             <th style="text-align:center;">V&iacute;a</th>'+
  '                             <th style="text-align:center;">N&uacute;mero</th>'+
  '                             <th style="text-align:center;">Letra</th>'+
  '                             <th style="text-align:center;">Cuadrante</th>'+
  '                             <th style="text-align:center;">#</th>'+
  '                             <th style="text-align:center;">N&uacute;mero</th>'+
  '                             <th style="text-align:center;">Letra</th>'+
  '                             <th style="text-align:center;">-</th>'+
  '                             <th style="text-align:center;">Placa</th>'+
  '                             <th style="text-align:center;">Cuadrante</th>'+
  '                             <th style="text-align:center;">Resultado</th>'+
  '                           </tr>'+
  '                         </thead>'+
  '                         <tbody>'+
  '                           <tr>'+
  '                             <td style="text-align:center;">Calle</td>'+
  '                             <td style="text-align:center;">14</td>'+
  '                             <td style="text-align:center;">A</td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td style="text-align:center;">#</td>'+
  '                             <td style="text-align:center;">50</td>'+
  '                             <td style="text-align:center;">A</td>'+
  '                             <td style="text-align:center;">-</td>'+
  '                             <td style="text-align:center;">45</td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td>CALLE 14 A # 50 A - 45</td>'+
  '                           </tr>'+
  '                           <tr>'+
  '                             <td style="text-align:center;">Carrera</td>'+
  '                             <td style="text-align:center;">21</td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td style="text-align:center;">Sur</td>'+
  '                             <td style="text-align:center;">#</td>'+
  '                             <td style="text-align:center;">10</td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td style="text-align:center;">-</td>'+
  '                             <td style="text-align:center;">20</td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td>CARRERA 21 SUR # 10 - 20</td>'+
  '                           </tr>'+
  '                           <tr>'+
  '                             <td style="text-align:center;">Diagonal</td>'+
  '                             <td style="text-align:center;">10</td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td style="text-align:center;"></td>'+
  '                             <td style="text-align:center;">#</td>'+
  '                             <td style="text-align:center;">40</td>'+
  '                             <td style="text-align:center;">B</td>'+
  '                             <td style="text-align:center;">-</td>'+
  '                             <td style="text-align:center;">18</td>'+
  '                             <td style="text-align:center;">Norte</td>'+
  '                             <td>DIAGONAL 10 # 40 B - 18 NORTE</td>'+
  '                           </tr>'+
  '                         </tbody>'+
  '                      </table>'+
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '             <div class="col-md-12">' +
  '                <div class="form-group">' +
  '                    <label for="dir" class="control-label">Resultado</label>' +
  '                    <input type="text" readonly="true" class="form-control" name="dir">' +
  '                </div>' +
  '            </div>' +
  '            <div class="col-md-6 col-xs-6" style="padding-top: 20px; padding-left: 30px;text-align:right;">' +
  '                <button type="button" name="btnAceptarDir" class="btn btn-success">Aceptar' +
  '                    <span class="glyphicon glyphicon-check" aria-hidden="true"></span>' +
  '                </button>' +
  '            </div>' +
  '            <div class="col-md-6 col-xs-6" style="padding-top: 20px; padding-left: 30px;text-align:left;">' +
  '                <button type="button" name="btnDirAvanzado" class="btn btn-primary">Constructor Avanzado' +
  '                </button>' +
  '            </div>' +
  '        </div>' +
  '    </div>' +
  '</div>' +
  '</div>'
}

var aceptar = function() {
    var error = false;
    DANE.tipoViaDane.parent('div').removeClass('has-error');
    DANE.placaDane.parent('div').removeClass('has-error');
    DANE.nnVia_.parent('div').removeClass('has-error');
    DANE.nnVia2_.parent('div').removeClass('has-error');
    DANE.acomPrefijoDane.parent('div').removeClass('has-error');
    DANE.nnVia__.parent('div').removeClass('has-error');
    DANE.nnVia2__.parent('div').removeClass('has-error');
    DANE.acomPrefijo2Dane.parent('div').removeClass('has-error');
    DANE.complementoDane.parent('div').removeClass('has-error');
    DANE.observacionDane.parent('div').removeClass('has-error');
    var str = DANE.acomPrefijoDane.val();
    if (str.length>0 && !validarCompl(str)) {
        DANE.acomPrefijoDane.parent('div').addClass('has-error');
        error = true;
        mostrarError("Solo puede ser alfanum&eacute;rico m&aacute;ximo de 3 d&iacute;gitos y solo puede comenzar y finalizar por letra.");
        return;
    }
    var str = DANE.acomPrefijo2Dane.val();
    if (str.length>0 && !validarCompl(str)) {
        DANE.acomPrefijo2Dane.parent('div').addClass('has-error');
        error = true;
        mostrarError("Solo puede ser alfanum&eacute;rico m&aacute;ximo de 3 d&iacute;gitos y solo puede comenzar y finalizar por letra.");
        return;
    }
    var str = DANE.nnVia__.val();
    if (str.length>0 && !validarCompl(str)) {
        DANE.nnVia__.parent('div').addClass('has-error');
        error = true;
        mostrarError("Solo puede ser alfanum&eacute;rico m&aacute;ximo de 3 d&iacute;gitos y solo puede comenzar y finalizar por letra.");
        return;
    }
    var str = DANE.nnVia2__.val();
    if (str.length>0 && !validarCompl(str)) {
        DANE.nnVia2__.parent('div').addClass('has-error');
        error = true;
        mostrarError("Solo puede ser alfanum&eacute;rico m&aacute;ximo de 3 d&iacute;gitos y solo puede comenzar y finalizar por letra.");
        return;
    }
    var str = DANE.nnVia_.val();
    if (str.length>0 && !validarNomen(str)) {
        DANE.nnVia_.parent('div').addClass('has-error');
        error = true;
        mostrarError("Nomenclatura solo puede ser alfanum&eacute;rico.");
        return;
    }
    if (error) {
        mostrarError("Favor revisar los campos en rojo.");
        return;
    } else {
        if (DANE.direccionDane.val().trim() == "") {
            mostrarError("La dirección no puede estar vacía.");
            return;
        } else {
            var parte1=false;
            var parte2=false;
            var parte3=false;
            var parte4=false;
            if(
              (DANE.tipoViaDane.val()!=null && DANE.tipoViaDane.val().trim()!="") ||
              (DANE.nnVia_.val()!=null && DANE.nnVia_.val().trim()!="") ||
              (DANE.nnVia__.val()!=null && DANE.nnVia__.val().trim()!="") ||
              (DANE.prefijoDane.val()!=null && DANE.prefijoDane.val().trim()!="") ||
              (DANE.acomPrefijoDane.val()!=null && DANE.acomPrefijoDane.val().trim()!="") ||
              (DANE.cuadranteDane.val()!=null && DANE.cuadranteDane.val().trim()!="")
            ){
              if(
                !(DANE.tipoViaDane.val()!=null && DANE.tipoViaDane.val().trim()!="") ||
                !(DANE.nnVia_.val()!=null && DANE.nnVia_.val().trim()!="")
              ){
                  DANE.tipoViaDane.parent('div').addClass('has-error');
                  DANE.nnVia_.parent('div').addClass('has-error');
                  mostrarError("La direcci&oacute;n debe tener lleno el tipo de v&iacute;a y la nomenclatura.");
                  return;
              }
              parte1=true;
            }
            if(
              (DANE.nnVia2_.val()!=null && DANE.nnVia2_.val().trim()!="") ||
              (DANE.nnVia2__.val()!=null && DANE.nnVia2__.val().trim()!="") ||
              (DANE.prefijo2Dane.val()!=null && DANE.prefijo2Dane.val().trim()!="") ||
              (DANE.acomPrefijo2Dane.val()!=null && DANE.acomPrefijo2Dane.val().trim()!="")
            ){
              if(
                !(DANE.nnVia2_.val()!=null && DANE.nnVia2_.val().trim()!="")
              ){
                  DANE.nnVia2_.parent('div').addClass('has-error');
                  mostrarError("La direcci&oacute;n debe tener lleno la nomenclatura.");
                  return;
              }
              parte2=true;
            }
            if(
              (DANE.placaDane.val()!=null && DANE.placaDane.val().trim()!="") ||
              (DANE.cuadrante2Dane.val()!=null && DANE.cuadrante2Dane.val().trim()!="")
            ){
              if(
                !(DANE.placaDane.val()!=null && DANE.placaDane.val().trim()!="")
              ){
                  DANE.placaDane.parent('div').addClass('has-error');
                  mostrarError("La direcci&oacute;n debe tener lleno la placa.");
                  return;
              }
              parte3=true;
            }
            if(
              (DANE.complementoDane.val()!=null && DANE.complementoDane.val().trim()!="") ||
              (DANE.observacionDane.val()!=null && DANE.observacionDane.val().trim()!="")
            ){
              if(
                !(DANE.complementoDane.val()!=null && DANE.complementoDane.val().trim()!="") ||
                !(DANE.observacionDane.val()!=null && DANE.observacionDane.val().trim()!="")
              ){
                  DANE.complementoDane.parent('div').addClass('has-error');
                  DANE.observacionDane.parent('div').addClass('has-error');
                  mostrarError("La direcci&oacute;n debe tener lleno el complemento.");
                  return;
              }
              parte4=true;
            }
            if(
              !(parte1==true && parte2==true && parte3==true) &&
              !(parte1==true && parte2==false && parte3==false && parte4==true)
            ){
              mostrarError("Formato de direcci&oacute;n invalido.");
              return;
            }
            llenarDireccion();
            DANE.direccionDane.data('value', DANE.direccionDane.data('value').trim().split("  ").join(" "));
            mostrarConfirmar("Confirmar",
              "¿Est&aacute; seguro que su direcci&oacute;n es: '"+DANE.direccionDane.val()+"'?",
              function(){
                DANE.componenteActual.val(DANE.direccionDane.data('value'));
                DANE.modal.modal('hide');
              }, function(){});
        }

    }

}
var aceptar2 = function() {
    var error = false;
    DANE.sencilla_tipoViaDane.parent('div').removeClass('has-error');
    DANE.sencilla_placaDane.parent('div').removeClass('has-error');
    DANE.sencilla_nnVia_.parent('div').removeClass('has-error');
    DANE.sencilla_nnVia2_.parent('div').removeClass('has-error');
    DANE.sencilla_nnVia__.parent('div').removeClass('has-error');
    DANE.sencilla_nnVia2__.parent('div').removeClass('has-error');

    var str = DANE.sencilla_nnVia_.val();
    if (str.length>0 && !validarNomen2(str)) {
        DANE.sencilla_nnVia_.parent('div').addClass('has-error');
        error = true;
        mostrarError("Nomenclatura solo puede ser num&eacute;rico.");
        return;
    }
    var str = DANE.sencilla_nnVia2_.val();
    if (str.length>0 && !validarNomen2(str)) {
        DANE.sencilla_nnVia2_.parent('div').addClass('has-error');
        error = true;
        mostrarError("Nomenclatura solo puede ser num&eacute;rico.");
        return;
    }
    var str = DANE.sencilla_placaDane.val();
    if (str.length>0 && !validarNomen2(str)) {
        DANE.sencilla_placaDane.parent('div').addClass('has-error');
        error = true;
        mostrarError("Nomenclatura solo puede ser num&eacute;rico.");
        return;
    }
    if (error) {
        mostrarError("Favor revisar los campos en rojo.");
        return;
    } else {
        if (DANE.sencilla_direccionDane.val().trim() == "") {
            mostrarError("La dirección no puede estar vacía.");
            return;
        } else {

            if(
              (DANE.sencilla_tipoViaDane.val()==null || DANE.sencilla_tipoViaDane.val().trim()=="") ||
              (DANE.sencilla_nnVia_.val()==null || DANE.sencilla_nnVia_.val().trim()=="") ||
              (DANE.sencilla_nnVia2_.val()==null || DANE.sencilla_nnVia2_.val().trim()=="") ||
              (DANE.sencilla_placaDane.val()==null || DANE.sencilla_placaDane.val().trim()=="")
            ){
              mostrarError("Formato de direcci&oacute;n invalido.");
              return;
            }
            llenarDireccion2();
            DANE.sencilla_direccionDane.data('value', DANE.sencilla_direccionDane.data('value').trim().split("  ").join(" "));
            mostrarConfirmar("Confirmar",
              "¿Est&aacute; seguro que su direcci&oacute;n es: '"+DANE.sencilla_direccionDane.val()+"'?",
              function(){
                DANE.sencilla_componenteActual.val(DANE.sencilla_direccionDane.data('value'));
                DANE.sencilla_modal.modal('hide');
              }, function(){});
        }

    }

}


var llenarDireccion2 = function() {
    var text = "";
    var text2 = "";
    if (DANE.sencilla_tipoViaDane.val() != "") {
        text += textSelect(DANE.sencilla_tipoViaDane) + " ";
        text2 += textSelect(DANE.sencilla_tipoViaDane) + " ";
    }
    text += DANE.sencilla_nnVia_.val() + " ";
    text2 += DANE.sencilla_nnVia_.val() + " ";
    if (DANE.sencilla_nnVia__.val().trim()!="") {
        text += DANE.sencilla_nnVia__.val() + " ";
        text2 += DANE.sencilla_nnVia__.val() + " ";
    }

    if (DANE.sencilla_cuadranteDane.val() != "") {
        text += textSelect(DANE.sencilla_cuadranteDane) + " ";
        text2 += textSelect(DANE.sencilla_cuadranteDane) + " ";
    }
    text += '# ';
    text += DANE.sencilla_nnVia2_.val() + " ";
    text2 += DANE.sencilla_nnVia2_.val() + " ";
    if (DANE.sencilla_nnVia2__.val().trim()!="") {
        text += DANE.sencilla_nnVia2__.val() + " ";
        text2 += DANE.sencilla_nnVia2__.val() + " ";
    }

    text += '- ';
    text += DANE.sencilla_placaDane.val().trim() + " ";
    text2 += DANE.sencilla_placaDane.val().trim() + " ";
    if (DANE.sencilla_cuadrante2Dane.val() != "") {
        text += textSelect(DANE.sencilla_cuadrante2Dane) + " ";
        text2 += textSelect(DANE.sencilla_cuadrante2Dane) + " ";
    }


    DANE.sencilla_direccionDane.val(text.trim().toUpperCase());
    DANE.sencilla_direccionDane.data("value", text2.trim().toUpperCase());
}

var llenarDireccion = function() {
    var text = "";
    var text2 = "";
    if (DANE.tipoViaDane.val() != "") {
        text += textSelect(DANE.tipoViaDane) + " ";
        text2 += textSelect(DANE.tipoViaDane) + " ";
    }
    text += DANE.nnVia_.val() + " ";
    text2 += DANE.nnVia_.val() + " ";
    if (DANE.nnVia__.val().trim()!="") {
        text += DANE.nnVia__.val() + " ";
        text2 += DANE.nnVia__.val() + " ";
    }

    if (DANE.prefijoDane.val() != "") {
        text += textSelect(DANE.prefijoDane) + " ";
        text2 += textSelect(DANE.prefijoDane) + " ";
        DANE.acomPrefijoDane.removeAttr("disabled");
    } else {
        DANE.acomPrefijoDane.attr("disabled", "true");
        DANE.acomPrefijoDane.val("");
    }
    if (DANE.acomPrefijoDane.val() != "") {
        text += DANE.acomPrefijoDane.val() + " ";
        text2 += DANE.acomPrefijoDane.val() + " ";
    }

    if (DANE.cuadranteDane.val() != "") {
        text += textSelect(DANE.cuadranteDane) + " ";
        text2 += textSelect(DANE.cuadranteDane) + " ";
    }
    text += '# ';
    text += DANE.nnVia2_.val() + " ";
    text2 += DANE.nnVia2_.val() + " ";
    if (DANE.nnVia2__.val().trim()!="") {
        text += DANE.nnVia2__.val() + " ";
        text2 += DANE.nnVia2__.val() + " ";
    }
    if (DANE.prefijo2Dane.val().trim() != "") {
        text += textSelect(DANE.prefijo2Dane) + " ";
        text2 += textSelect(DANE.prefijo2Dane) + " ";
        DANE.acomPrefijo2Dane.removeAttr("disabled");
    } else {
        DANE.acomPrefijo2Dane.attr("disabled", "true");
        DANE.acomPrefijo2Dane.val("");
    }
    if (DANE.acomPrefijo2Dane.val().trim() != "") {
        text += DANE.acomPrefijo2Dane.val() + " ";
        text2 += DANE.acomPrefijo2Dane.val() + " ";
    }

    text += '- ';
    text += DANE.placaDane.val().trim() + " ";
    text2 += DANE.placaDane.val().trim() + " ";
    if (DANE.cuadrante2Dane.val() != "") {
        text += textSelect(DANE.cuadrante2Dane) + " ";
        text2 += textSelect(DANE.cuadrante2Dane) + " ";
    }


    if (DANE.complementoDane.val().trim() != "") {
        text += textSelect(DANE.complementoDane) + " ";
        text2 += textSelect(DANE.complementoDane) + " ";
        DANE.observacionDane.removeAttr("disabled");
    } else {
        DANE.observacionDane.attr("disabled", "true");
        DANE.observacionDane.val("");
    }
    if (DANE.observacionDane.val().trim() != "") {
        text += DANE.observacionDane.val();
        text2 += DANE.observacionDane.val();
    }

    DANE.direccionDane.val(text.trim().toUpperCase());
    DANE.direccionDane.data("value",text2.trim().toUpperCase());
}

function textSelect(componente) {
    value = componente.val();
    for (var i = 0; i < componente.children().length; ++i) {
        var child = componente.children()[i];
        if (child.value == value)
            return child.text;
    }
    return "";
}


function validarNomen(str) {
    var patt = null;
    var res = null;
    str = str.trim().toUpperCase();
    if (str.length > 0 ) {
        patt = new RegExp("^([A-Z]|[0-9]|[ ])+$");
        res = patt.test(str);
        if (!res) {
            return false;
        }
    }else{
      return false;
    }

    return true;
}
function validarNomen2(str) {
    var patt = null;
    var res = null;
    str = str.trim().toUpperCase();
    if (str.length > 0 ) {
        patt = new RegExp("^([0-9])+$");
        res = patt.test(str);
        if (!res) {
            return false;
        }
    }else{
      return false;
    }

    return true;
}
function validarCompl(str) {
    var patt = null;
    var res = null;
    str = str.trim().toUpperCase();
    if (str.length == 1 || str.length == 2) {
        patt = new RegExp("^([A-Z])+$");
        res = patt.test(str);
        if (!res) {
          patt = new RegExp("^[A-Z][0-9]$");
          res = patt.test(str);
          if (!res) {
              return false;
          }
        }
    } else if (str.length == 3) {
        patt = new RegExp("^[A-Z][0-9][A-Z]$");
        res = patt.test(str);
        if (!res) {
            return false;
        }
    }else{
        return false;
    }

    return true;
}

function constructorDireccion(componente) {
    $("body").append(DANE.htmlDireccionSencilla);
    DANE.sencilla_modal=$("[name=modalFomatDireccionSencilla]");
    DANE.sencilla_componenteActual=componente;

    DANE.sencilla_direccionDane = DANE.sencilla_modal.find('[name=dir]');
    DANE.sencilla_tipoViaDane = DANE.sencilla_modal.find('[name=tipovia]');
    DANE.sencilla_nnVia_ = DANE.sencilla_modal.find('[name=nnvia_]');
    DANE.sencilla_nnVia__ = DANE.sencilla_modal.find('[name=nnvia__]');
    DANE.sencilla_cuadranteDane = DANE.sencilla_modal.find('[name=cuadrante]');
    DANE.sencilla_nnVia2_ = DANE.sencilla_modal.find('[name=nnvia2_]');
    DANE.sencilla_nnVia2__ = DANE.sencilla_modal.find('[name=nnvia2__]');
    DANE.sencilla_placaDane = DANE.sencilla_modal.find('[name=placa]');
    DANE.sencilla_cuadrante2Dane = DANE.sencilla_modal.find('[name=cuadrante2]');
    DANE.sencilla_btnDirAvanzado = DANE.sencilla_modal.find('[name=btnDirAvanzado]');
    DANE.sencilla_btnAceptar = DANE.sencilla_modal.find('[name=btnAceptarDir]');
    DANE.sencilla_btnAyuda=DANE.sencilla_modal.find("[name=btn_help]");
    DANE.sencilla_modal.modal('show');
    DANE.sencilla_modal.on('hidden.bs.modal', function(e) {
      $(this).remove();
    });

    DANE.sencilla_tipoViaDane.on('change', llenarDireccion2);
    DANE.sencilla_nnVia_.on('keyup', llenarDireccion2);
    DANE.sencilla_nnVia__.on('change', llenarDireccion2);
    DANE.sencilla_cuadranteDane.on('change', llenarDireccion2);
    DANE.sencilla_nnVia2_.on('keyup', llenarDireccion2);
    DANE.sencilla_nnVia2__.on('change', llenarDireccion2);
    DANE.sencilla_cuadrante2Dane.on('change', llenarDireccion2);
    DANE.sencilla_placaDane.on('keyup', llenarDireccion2);
    DANE.sencilla_btnAceptar.on('click', aceptar2);

    DANE.sencilla_btnAyuda.on("click", function() {
        fileInModal(BASE_URL + "../../siaaf/user_guide/constructor_direccion_sencilla.pdf");
    });
    DANE.sencilla_btnDirAvanzado.on('click', function(){
        constructorDireccion2(DANE.sencilla_componenteActual)
        DANE.sencilla_modal.modal('hide')
    })
    $(window).resize();
}

function constructorDireccion2(componente) {
    $("body").append(DANE.htmlDireccion);
    DANE.modal=$("[name=modalFomatDireccion]");
    DANE.direccionDane = DANE.modal.find('[name=dir]');
    DANE.tipoViaDane = DANE.modal.find('[name=tipovia]');
    DANE.nnVia_ = DANE.modal.find('[name=nnvia_]');
    DANE.nnVia__ = DANE.modal.find('[name=nnvia__]');
    DANE.prefijoDane = DANE.modal.find('[name=prefijo]');
    DANE.acomPrefijoDane = DANE.modal.find('[name=acomprefijo]');
    DANE.cuadranteDane = DANE.modal.find('[name=cuadrante]');
    DANE.tipoVia2Dane = DANE.modal.find('[name=tipovia2]');
    DANE.prefijo2Dane = DANE.modal.find('[name=prefijo2]');
    DANE.acomPrefijo2Dane = DANE.modal.find('[name=acomprefijo2]');
    DANE.nnVia2_ = DANE.modal.find('[name=nnvia2_]');
    DANE.nnVia2__ = DANE.modal.find('[name=nnvia2__]');
    DANE.placaDane = DANE.modal.find('[name=placa]');
    DANE.cuadrante2Dane = DANE.modal.find('[name=cuadrante2]');
    DANE.complementoDane = DANE.modal.find('[name=complemento]');
    DANE.observacionDane = DANE.modal.find('[name=observacion]');
    DANE.btnAceptar = DANE.modal.find('[name=btnAceptarDir]');
    DANE.btnAyuda=DANE.modal.find("[name=btn_help]");
    DANE.componenteActual=componente;

    DANE.modal.on('hidden.bs.modal', function(e) {
        $(this).remove();
    });

    DANE.tipoViaDane.on('change', llenarDireccion);
    DANE.nnVia_.on('keyup', llenarDireccion);
    DANE.nnVia__.on('keyup', llenarDireccion);
    DANE.prefijoDane.on('change', llenarDireccion);
    DANE.acomPrefijoDane.on('keyup', llenarDireccion);
    DANE.cuadranteDane.on('change', llenarDireccion);

    DANE.tipoVia2Dane.on('change', llenarDireccion);
    DANE.nnVia2_.on('keyup', llenarDireccion);
    DANE.nnVia2__.on('keyup', llenarDireccion);
    DANE.prefijo2Dane.on('change', llenarDireccion);
    DANE.acomPrefijo2Dane.on('keyup', llenarDireccion);
    DANE.cuadrante2Dane.on('change', llenarDireccion);
    DANE.placaDane.on('keyup', llenarDireccion);
    DANE.complementoDane.on('change', llenarDireccion);
    DANE.observacionDane.on('keyup', llenarDireccion);
    DANE.btnAceptar.on('click', aceptar);
    DANE.modal.modal('show');
    DANE.btnAyuda.on("click", function() {
        fileInModal(BASE_URL + "../../siaaf/user_guide/constructor_direccion.pdf");
    });
    $(window).resize();
}
