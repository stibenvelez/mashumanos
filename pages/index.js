import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection/'
import ServicesSection from '../components/ServicesSection';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';
import  ServiciosBD  from '../data/services';


const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection services={ServiciosBD} />
        <ContactSection />
      </Layout>
    </>
  )
}
/*
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/services`)
  const services = await res.json()
  return {
    props: {
      services
    },
  }
}
*/
export default Home;
