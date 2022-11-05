import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/registro.css";

const Registro1 = () => {
  return (
    <div id="slider">
      <div>
        <section className="py-5 text-center container">
          <div className="row py-lg-10">
            <br></br>
            <br></br>
            <br></br>
            <div className="col-md-12 "></div>
            <div id="formReg">
              <h1>Registro de usuarios</h1>
              <Form className="contenido col-md-12">
                <div id="izq" className="caja col-md-4">
                  <Form.Group className="">
                    <Form.Group className="mb-3" controlId="formBasicNames">
                      <Form.Label for="name">Nombres</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        placeholder="Ingresa tus nombres "
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Direccion de residencia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Direccion de residencia "
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu email " />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                </div>

                <div id="der" className="caja col-md-4">
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tus apellidos "
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu numero de cel "
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                </div>

                <div className="cen row col-md-12">
                  <div class="col-md-4"></div>
                <Form.Group className="col-md-4" controlId="formBasicPassword">
                  <Form.Label> Confirma tu Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <div class="col-md-4"></div> <div class="col-md-4"></div>

                  <Form.Group className="col-md-4" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                </div>
                <div className="btn1 col-mb-12">
                <Button align="center" className="col-md-2 primary" id="button1" variant="primary" type="submit">
                  Registrar
                </Button>
                </div>
                
              </Form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registro1;
