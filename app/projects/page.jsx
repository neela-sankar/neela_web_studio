'use client'
import { useState } from "react"
import { Tabs,TabsList,TabsContent,TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

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
  {
    image: '/work/PIZZAZZ.png',
    category: 'poster design',
    name: 'Pizzazz Poster',
    description: 'Craving perfection? Feast your eyes on our latest product design: The Ultimate Pizza Poster! Dive into a delicious blend of creativity and flavor as we showcase the art of pizza perfection. From the crust to the toppings, every detail crafted with passion and precision.',
    link: 'https://www.deviantart.com/neelasankar05/art/Pizzazz-1030610232',
    github: '',
  },
  {
    image: '/work/Product Watch.png',
    category: 'poster design',
    name: 'Smart Watch Poster',
    description: 'Stay ahead of the curve with our sleek smartwatch design by @neela_webstudio. Elevate your style and stay connected effortlessly!',
    link: 'https://www.deviantart.com/neelasankar05/art/Product-Watch-1030611935',
    github: '',
  },
  {
    image: '/work/facecream.png',
    category: 'poster design',
    name: 'Face Cream Poster',
    description: 'Unveil the secret to radiant skin with our skincare cream! Say goodbye to dullness and hello to a youthful glow. 💫',
    link: 'https://www.deviantart.com/neelasankar05/art/Facecream-1030612168',
    github: '',
  },
]

//remove category duplicates
const uniqueCategories = ['all projects', ...new Set(projectData.map((item)=> item.category))]

const Projects = () => {
  const[categories,setCategories] = useState(uniqueCategories)
  const[category,setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project)=>{
    //if category is 'all projects' return all projects, else filter by category
    return category === 'all projects' ? project : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category,index) =>{
              return (
                <TabsTrigger onClick={()=>setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project,index)=>{
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects