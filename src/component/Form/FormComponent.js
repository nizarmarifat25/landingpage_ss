import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './FormComponent.css'
function FormComponent() {
  return (
    <section id="form-component" className="pt-5">
      <Container>
        <Row>
          <Col sm="12" md="6">
            <h1 className="text-white">
              Have questions in mind?
            </h1>
            <p>Let’s chat with us!</p>
          </Col>
          <Col sm="12" md="6">
            <Form>
              <FormGroup>
                <Input placeholder="Name*" />
                <Input type="email" name="email" id="exampleEmail" placeholder="Email*" />
                <Input placeholder="Phone*" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="text" id="exampleText"  placeholder="Share Your Problem*"/>
              </FormGroup>
              <span>
                We will response to your email by maximum of 1x24 workday. Please be patient and wait for us.
              </span>
              <br/>
              <Button className="text-black bg-white">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FormComponent
