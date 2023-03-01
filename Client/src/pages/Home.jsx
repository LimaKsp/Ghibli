import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'

function Home() {
    return (
        <>
            <Banners />
            <Container>
                <div><h1 className='title'>Ultimos Lançamentos</h1></div>
                <Destaques />
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;