import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="src/img/how.jfif" width={250} height={500} />
                    <Card.Body>
                        <Card.Title>Portal</Card.Title>
                        <Card.Text>
                          Confira as ultimas noticias Ghibli em nosso portal!
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar Portal</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="src/img/T.jfif" width={250} height={500} />
                    <Card.Body>
                        <Card.Title>Catálogo</Card.Title>
                        <Card.Text>
                            Conheça as obras disponíveis!
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="src/img/vio.jfif" width={250} height={500} />
                    <Card.Body>
                        <Card.Title> Sugestões</Card.Title>
                        <Card.Text>
                           Deixe sua sugestão de conteúdo que gostaria de ver em nosso portal!
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;