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
            Submit
          </button>
        }
      >
        <Form>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" />
            <Form.Text className="text-muted">
              Nós nunca enviaremos seu email para ninguém.
            </Form.Text>
          </Form.Group>
        </Form>
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default IntroPage;