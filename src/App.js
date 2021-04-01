import Header from './components/header/Header'
import HeroSection from './components/hero_section/HeroSection'
import FeatureSection from './components/feature-section/Index'
import Section from './components/section/Index'
import Slider from './components/testimonials-section/Index'
import PeopleSection from './components/people-section/Index'
import Footer from './components/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Section />
      <Slider />
      <PeopleSection />
      <Footer />
    </>
  );
}

export default App;
