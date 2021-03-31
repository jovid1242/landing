import Header from './components/header/Header';
import HeroSection from './components/hero_section/HeroSection'
import FeatureSection from './components/feature-section/Index'
import Section from './components/section/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Section />
    </>
  );
}

export default App;
