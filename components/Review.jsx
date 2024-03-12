'use client'

import Image from "next/image"
import { Card, CardDescription, CardHeader,CardTitle } from "./ui/card"

/* swiper react components */
import {Swiper, SwiperSlide} from "swiper/react"

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//required modules
import {Pagination} from 'swiper/modules'

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richard Thompson',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et totam magnam laborum magni debitis exercitationem culpa sequi neque placeat.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Evelyn Anderson',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et totam magnam laborum magni debitis exercitationem culpa sequi neque placeat.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et totam magnam laborum magni debitis exercitationem culpa sequi neque placeat.'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Emily Smith',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et totam magnam laborum magni debitis exercitationem culpa sequi neque placeat.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Oliver Taylor',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et totam magnam laborum magni debitis exercitationem culpa sequi neque placeat.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Mason Wilson',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium et totam magnam laborum magni debitis exercitationem culpa sequi neque placeat.'
    },
]

const Review = () => {
  return (
    <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Client Reviews</h2>
            {/* slider */}
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {slidesPerView: 2},
                    1400: {slidesPerView: 3},
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true
                }}
                className="h-[350px]"            
            >
                {reviewsData.map((person, index)=> {
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] cursor-pointer'>
                                <CardHeader className='p-0 mb-10'>
                                    <div className="flex items-center gap-x-4">
                                        {/* image */}
                                        <Image 
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt=""
                                            priority
                                        />
                                        {/* name */}
                                        <div className="flex flex-col">
                                            <CardTitle>{person.name}</CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'>
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Review