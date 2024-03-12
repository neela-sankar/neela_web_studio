import {GanttChartSquare, Blocks, Gem, Car} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: "I specializes in creating custom websites that not only look stunning but also drive results. I craft each website with 100% handwritten code, ensuring optimal performance and a unique online presence!"
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: "With expertise in full-stack development, I craft scalable, user-friendly websites and web applications. From front-end design to back-end functionality, I deliver custom solutions tailored to your business needs."
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Product Poster Design',
        description: "Elevate your brand with eye-catching visuals that captivate your audience. Whether it's for promotions, events, or marketing campaigns, I'll ensure your message stands out."
    },
]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
            {/* grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24'>
                {servicesData.map((item,index)=>{
                    return (
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Services