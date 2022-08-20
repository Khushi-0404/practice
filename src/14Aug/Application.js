import react from "react"
import Carousel from 'better-react-carousel'
import './style.css'
import Footer from "./Footer"


const Application = () => {
  return (
    <>
    <Carousel cols={1} rows={1} gap={5} loop>
      <Carousel.Item>
        <img width="102%" height="500" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="102%" height="500" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="102%" height="500"src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>
    <Footer></Footer></>
  )
}
export default Application