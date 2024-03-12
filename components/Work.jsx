'use client'
import Link from "next/link"
import { Button } from "./ui/button"

/* swiper react components */
import {Swiper, SwiperSlide} from "swiper/react"

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//required modules
import {Pagination} from 'swiper/modules'

//components
import ProjectCard from '@/components/ProjectCard'

const projectData = [
    {
        image: '/work/gadget.png',
        category: 'react js',
        name: 'Gadget Galaxy',
        description: "Discover a seamless shopping experience with my React-based E-Commerce App. Featuring an intuitive interface, a diverse product catalog, and streamlined checkout with an 'Add to Cart' function.",
        link: 'https://creative-capybara-2646a8.netlify.app/',
        github: 'https://github.com/neela-sankar/E-commerce_Website_using_React',
    },
    {
        image: '/work/gpt.png',
        category: 'react js',
        name: 'GPT-3',
        description: "An innovative web application powered by OpenAI's GPT-3, seamlessly integrated with the popular React JS framework.",
        link: 'https://silver-gumption-4df40c.netlify.app/',
        github: 'https://github.com/neela-sankar/gpt3-website-react',
    },
    {
        image: '/work/nike.png',
        category: 'frontend',
        name: 'Nike Website',
        description: "Nike website using the cutting-edge styling framework, Tailwind CSS. This project showcases my expertise in front-end development and design, as I meticulously implemented Tailwind's utility-first approach to create a visually stunning and responsive user interface.",
        link: 'https://thunderous-kheer-e766bc.netlify.app/',
        github: 'https://github.com/neela-sankar/website-design-tailwindcss',
    },
    {
        image: '/work/sushi.png',
        category: 'react js',
        name: 'Sushimania',
        description: "Step into our digital sushi realm, where a captivating frontend unveils a visual feast of exquisite rolls and sashimi. Engage seamlessly, exploring the artistry of Japanese cuisine through our stunning interface, simplifying your dining experience with just a few clicks.",
        link: 'https://sushimania-restaurant.netlify.app',
        github: 'https://github.com/neela-sankar/sushi_restaurant_website_frontend',
    },
    {
        image: '/work/velvet.png',
        category: 'fullstack',
        name: 'Velvet Vogue',
        description: "Presenting VelvetVogue, a chic e-commerce platform where style meets convenience. Explore our curated collection, seamlessly add your favorites to the cart, and indulge in a hassle-free checkout experience to bring luxury fashion right to your doorstep.",
        link: 'https://velvet-vogue.netlify.app',
        github: 'https://github.com/neela-sankar/velvet_vogue_frontend',
    },
    {
        image: '/work/portfolio.png',
        category: 'next.js',
        name: 'Personal Portfolio',
        description: "Explore my portfolio projects crafted with Next.js and Tailwind CSS, powered by Sanity backend. Experience seamless performance and stunning design as I showcase my expertise in web development. Let's bring your ideas to life together.",
        link: 'https://neela-portfolio.netlify.app',
        github: 'https://github.com/neela-sankar/my_new_portfolio_2024',
    },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">Developed responsive web applications using cutting-edge technologies to enhance user experience and streamline business operations.</p>
                <Link href='/projects'>
                    <Button>All Projects</Button>
                </Link>
            </div>
            {/* slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 cursor-pointer">
                <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}
                >
                    {/* show only the first 4 projects for the slides */}
                    {projectData.slice(0,4).map((project, index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work