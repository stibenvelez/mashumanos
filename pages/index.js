import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection/'
import ServicesSection from '../components/ServicesSection';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';

const Home = ({ services }) => {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection services={services} />
        <ContactSection />
      </Layout>
    </>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.API_URL}/services`)
  const services = await res.json()
  return {
    props: {
      services
    },
  }
}

export default Home;
