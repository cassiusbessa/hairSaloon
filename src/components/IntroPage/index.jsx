import { useState, useEffect } from 'react';
import './style.scss'
import Form from 'react-bootstrap/Form';
import { genericRequest } from '../../api/client-api';
import { BsCalendar3 } from 'react-icons/bs';
import { InputGroup, Dropdown } from 'react-bootstrap';
import Calendar from '../Calendar'

import MyVerticallyCenteredModal from '../VerticalCenterModal';

function IntroPage() {
  const [modalShow, setModalShow] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [disable, setDisable] = useState();
  const [form, setForm] = useState({
    bairro: '',
    rua: '',
    cidade: '',
    cep: '',
    complemento: '',
    nome: '',
    telefone: '',
    serviçoId:'',
    preço: 0,
    data: ''
  });

  const isFormValid = () => Object.values(form).some((field) => field === '');

  useEffect(() => {
    genericRequest('servicos').then((services) => setServicos(services));
  }, []);

  useEffect(() => {
    setDisable(isFormValid());
  }, [form])

  const handleForm = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  }

  const generateForm = () => {
    const { preço, data, serviçoId, ...newForm } = form;
    const fields = Object.keys(newForm);
    return fields.map((field, i) => (
      <Form.Group key={i}>
        <Form.Label>{`${field[0].toUpperCase()}${field.slice(1)}:`}</Form.Label>
        <Form.Control
          name={field}
          type="text"
          value={form[field]}
          onChange={handleForm}
        />
      </Form.Group>
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('teste');
  }

  const getDateFromCalendar = (data) => {
    setForm({ ...form, data })
  };

  return (
    <div id ="intro-page">
      <button className="default-page-button" variant="primary" onClick={() => setModalShow(true)}>
        Agende o seu horário
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Agendamento"
        additionalcustonbutton= {
          <button
            variant="primary"
            type="submit"
            className="default-page-button"
            onClick={handleSubmit}
            disabled={disable}>
            Agendar
          </button>
        }
      >
        <Form>
          <Form.Group>
            <Form.Label>Serviço:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={handleForm}
              name="serviçoId"
            >
              <option value="">Escolha um serviço</option>
              {servicos?.map((e) => (
                <option id={e.id} key={e.id} value={e.id}>
                  {`${e.serviço} - Tempo médio de ${e.duraçãoMédia}`}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Escolha um horário:</Form.Label>
            <InputGroup>
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-calendar">
                  <BsCalendar3 style={{ fontSize: "3rem" }} className="form-calendar-icon mb-2" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="p-0 border-0">
                  <Calendar getDateFromCalendar={getDateFromCalendar}/>
                </Dropdown.Menu>
              </Dropdown>
              <div className='show-date'>
                <div>Dia: {form.data}</div>
                <div>Horário:</div>
              </div>
            </InputGroup>
          </Form.Group>
          {generateForm()}
        </Form>
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default IntroPage;