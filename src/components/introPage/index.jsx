import { useState } from 'react';
import './style.scss'
import Form from 'react-bootstrap/Form';

import MyVerticallyCenteredModal from '../verticalCenterModal';


function IntroPage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id ='introPage'>
      <button className='default-page-button' variant="primary" onClick={() => setModalShow(true)}>
        Agende o seu horário
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title='Agendamento'
        additionalCustonButton= {
          <button variant="primary" type="submit" className='default-page-button'>
            Agendar
          </button>
        }
      >
        <Form>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
          <Form.Group>
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefone:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Endereço:</Form.Label>
            <Form.Control type="email" placeholder="Bairro" />
          </Form.Group>
        </Form>
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default IntroPage;