import Card from './Card'
import React from 'react'
import service5 from './assets/img/service5.jpg'
import service2 from './assets/img/service2.jpg'
import service3 from './assets/img/service3.jpg'

const Services = () => {
  return (
    <section className='container pt-10 mb-40'>
        <h1 className='title'>What we’re offering</h1>
        <div className='flex items-center justify-center gap-5 md:flex-row xxs:flex-col'>
            <Card service={service5} name="Safari Tours" description="Explore the wild side with our exciting Safari Tours. Witness incredible wildlife and breathtaking landscapes."/>
            <Card service={service2} name="Airport Transfer" description="Experience hassle-free transportation with our Airport Transfer services. We ensure a comfortable and timely journey."/>
            <Card service={service3} name="All Island Tours" description="Discover the beauty of the entire island with our All Island Tours. From historic sites to picturesque beaches, we've got it all covered.'"/>
        </div>
    </section>
  )
}

export default Services