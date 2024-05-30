'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



const testimonials = [
    {
      quote:
        "The music courses on this platform have truly transformed my understanding of music theory and technique. I've learned so much and feel more confident in my abilities as a musician.",
      name: "Emily Johnson",
      title: "Piano Student",
    },
    {
      quote:
        "I can't recommend these music courses enough! The instructors are knowledgeable, patient, and passionate about teaching. I've seen a significant improvement in my guitar playing since joining.",
      name: "Alex Rodriguez",
      title: "Guitar Student",
    },
    {
      quote:
        "The vocal lessons on this platform have been invaluable to me. I've learned proper breathing techniques, vocal exercises, and tips for improving my tone. My singing has improved tremendously thanks to these courses.",
      name: "Sarah Smith",
      title: "Vocal Student",
    },
    {
      quote:
        "As a beginner in music production, I wasn't sure where to start. These courses provided me with a solid foundation in music production techniques, software, and equipment. I'm now producing my own tracks with confidence.",
      name: "Michael Lee",
      title: "Music Production Student",
    },
    {
      quote:
        "The music theory courses here are excellent for both beginners and advanced musicians. I've gained a deeper understanding of scales, chords, and harmony, which has enhanced my songwriting and improvisation skills.",
      name: "Jessica Brown",
      title: "Music Theory Student",
    },
  ];


  
  function TestimonialCards() {
    return (
        <div className="h-[40rem] w-ful dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10 " >Hear our Harmony: Voices of Success</h2>
            <div>
                <div>
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                </div>
            </div>
    
      </div>
    )
  }
  
  export default TestimonialCards