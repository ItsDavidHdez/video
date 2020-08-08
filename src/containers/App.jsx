import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer'

const App = () => {
    const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: []});

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await fetch("http://localhost:3000/initialState");
            const data = await response.json();
            return setVideos(data);
          } catch {
            console.log(error);
          }
        };
        fetchVideos();
      }, []);

    console.log(videos);

    return(
        <div className="App">￼￼￼
            <Header />
            <Search />

            {videos.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                {videos.trends.map(item => 
                    <CarouselItem key={item.id} {...item} />
                )}          
                </Carousel>
            </Categories>
            <Categories title="Originales">
                <Carousel>
                {
                    videos.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )
                }
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
}

export default App;