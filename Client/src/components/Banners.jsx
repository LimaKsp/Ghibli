import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\Banner1.jpg"
                    width={1500}
                    height={300}
                    alt=""
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\Banner2.jpg"
                    width={1500}
                    height={300}
                    alt=""
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\Banner4.webp"
                    alt="imagem3"
                    width={1500}
                    height={300}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners