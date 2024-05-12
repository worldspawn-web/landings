import 'swiper/css';

import {
  Description,
  Header,
  ImageSlider,
  LearnMore,
  Lottery,
  Advert,
  BuySection,
  Footer,
} from '.';

import './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <ImageSlider />
      <LearnMore />
      <Description />
      <Lottery />
      <Advert />
      <BuySection />
      <Footer />
    </>
  );
}

export default App;
