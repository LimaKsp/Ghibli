import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="src/img/img1.jpg" alt="Foto do depoimento" className='rounded' width={150} height={150} />
            </Col>
            <Col sm="12" md="10">
                <strong>  Coment 1 </strong>
                <p>
                   O melhor portal! Noticias muito relevantes e informativas sobre o nosso querido estúdio!
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                    <img src="src/img/img2.jpg" alt="Foto do depoimento2" className='rounded' width={150} height={150} />
            </Col>
            <Col sm="12" md="10">
                <strong> Coment 2 </strong>
                <p>
                Excelente portal, adoro a divulgação das artworks!
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos