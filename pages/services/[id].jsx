import React from 'react'
import Layout from '../../components/Layout'
import CardServicio from '../../components/ServicesSection/CardServicio';

const Services = ({ services }) => {
    return (
        <Layout>
            <div className="container min-h-screen mx-auto ">
                <section className='py-4'>
                    <h1 className="text-6xl font-bold text-center text-graY-700">Nuestros servicios</h1>
                    <p className='text-center text-gray-500'>Conoce nuestros principales servicios</p>
                </section>
                <section className="w-full ">
                    <div className="flex flex-wrap justify-center gap-4">
                        {services &&
                            services
                                .slice(0, 3)
                                .map((service) => (
                                    <CardServicio
                                        key={service.id}
                                        title={service.service}
                                        description={service.shortDescription}
                                        image={service.image}
                                    />
                                ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Services

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.API_URL}/services`);
    const services = await res.json();
    return {
        props: {
            services,
        },
    };
}   