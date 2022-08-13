import { useState, useEffect } from 'react';
import './style.scss'
import Form from 'react-bootstrap/Form';
import { genericRequest } from '../../api/client-api';

import MyVerticallyCenteredModal from '../verticalCenterModal';

// const formObj = {
//   logradouro: {
//     bairro: 'Cascadura',
//     rua:'Nobra da Conceição',
//     cidade: 'Rio de Janeiro',
//     cep: '88963-71',
//     complemento: 'Número 72, próximo a quadra de futebol'
//     },
//   cliente: {
//     nome: 'Anderson',
//     telefone:'(21)666666666'
//   },
//   atendimento: {
//     serviçoId:'cf2775de-098a-11ed-b204-cfa63ad6c76d',
//     preço: 0,
//     data: '2022-09-27 12:30:00'
//   } 
// }

function IntroPage() {
  const [modalShow, setModalShow] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [disable, setDisable] = useState()
  const [form, setForm] = useState({
    bairro: '',
    rua:'',
    cidade: '',
    cep: '',
    complemento: '',
    nome: '',
    telefone:'',
    serviçoId:'',
    preço: 0,
    // data: ''
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
    return fields.map((field ) => (
      <Form.Group>
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('teste');
  // }

  return (
    <div id ='introPage'>
      <button className='default-page-button' variant="primary" onClick={() => setModalShow(true)}>
        Agende o seu horário
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title='Agendamento'
        additionalcustonbutton= {
          <button
            variant="primary"
            type="submit"
            className='default-page-button'
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
              name='serviçoId'
            >
              <option value="">Escolha um serviço</option>
              {servicos?.map((e) => (
                <option id={e.id} key={e.id} value={e.id}>
                  {`${e.serviço}- Tempo médio de ${e.duraçãoMédia}`}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {generateForm()}
        </Form>
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default IntroPage;