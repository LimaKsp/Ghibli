import {Container, Button, Form} from 'react-bootstrap'
import Banners from '../components/Banners'
import Depoimentos from '../components/Depoimentos'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <>
            <Banners />
            
            <Container className='conteudo-margin'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>

            <Depoimentos />
        </Container>
                    </>

    );
}

export default Contato;