import Image from 'next/image';
import React from 'react'
import Layout from '../../components/Layout'
import CardServicio from '../../components/ServicesSection/CardServicio';

const Services = ({ service }) => {

    //console.log(services);
    return (
        <Layout>
            <div className="container min-h-screen mx-auto ">
                <div className="flex  gap-4">
                    <Image
                        src={`/static/img/${service.image}`}
                        alt="image service"
                        width={600}
                        height={400}
                    />
                    <div className='space-y-4'>
                        <h1 className="text-6xl font-bold text-gray-700">
                            {service.service}
                        </h1>
                        <p className=" text-gray-500">
                            {service.longDescription}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Services

export async function getServerSideProps(context) {
    const {id} = context.query
    const res = await fetch(`${process.env.API_URL}/services/${id}`);
    const service = await res.json();

    return {
        props: {
            service,
        },
    };
}   