import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/registro.css";

const Registro1 = () => {
  return (
    <div id="slider" >
      <div>
        <section className="py-5 text-center container">
          <div className="row py-lg-10">
          <br></br><br></br><br></br>
            <div  className="col-lg-12 col-md-12 "></div>
            <div id="formReg" >
              <h1>Registro de usuarios</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicNames">
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tus nombres " />
                  <Form.Text className="text-muted">                    
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tus apellidos " />
                  <Form.Text className="text-muted">                    
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu numero de cel " />
                  <Form.Text className="text-muted">                    
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu email " />
                  <Form.Text className="text-muted">                    
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registro1;
