import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection/'
import ServicesSection from '../components/ServicesSection';
import IconsSection from '../components/IconsSection';
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
        <IconsSection />
      </Layout>
    </>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/services`)
  const services = await res.json()
  return {
    props: {
      services
    },
  }
}
export default Home;
