import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Banners from '../components/Banners'
import { Card, CardGroup } from 'react-bootstrap'


function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect(() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <>
            <Banners />
            <Container className='Art'>
                <div>
                    <CardGroup>
                        <Card className='Artcard'>
                            <Card.Img src="src/img/ChiArt.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Chihiro Concept</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Ikanana</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Artcard'>
                            <Card.Img src="src/img/TotoroArt.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Totoro Drawing</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Ikanana</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Artcard'>
                            <Card.Img src="src/img/CasteloAnimado.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>O Castelo Animado Aquarela</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Gabriel Barros</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className='Artcard'>
                            <Card.Img src="src/img/Kiki.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>O serviço de entregas da Kiki</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Qing Han</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Artcard'>
                            <Card.Img src="src/img/Rosso.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Porco Rosso: O Ultimo Herói Romântico</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Adrian Kendall</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Artcard'>
                            <Card.Img src="src/img/Ponyo.jpg" width={50} height={400} />
                            <Card.Body>
                                <Card.Title>Ponyo</Card.Title>
                                <Card.Subtitle>Ilustrador:</Card.Subtitle><Card.Text>Gabriel Soares</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </Container>
        </>
    );
}

export default Sobre