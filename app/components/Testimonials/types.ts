//StaaticImageData is a type provided by Next.js for handling static images. It allows you to import images directly into your components and provides optimized image handling, including automatic resizing and lazy loading. In this code snippet, we are importing several images (q1, q2, q3, q5) from the assets folder and using them in our testimonial data. Each testimonial includes an image that represents the person giving the testimonial, enhancing the visual appeal of the testimonials section on the website.
import { StaticImageData } from 'next/image';

// Importing images for testimonials
import q1 from '../../assets/10.jpg'
import q2 from '../../assets/11.png'
import q3 from '../../assets/12.png'
import q4 from '../../assets/13.png'

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: StaticImageData; 
}

export const TESTIMONIAL_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: q1,
  },
   {
    id: 2,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: q2,
  },
   {
    id: 3,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: q3,
  },
   {
    id: 4,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: q4,
  },
   {
    id: 5,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: q4,
  },
   {
    id: 6,
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    content: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    image: q1,
  },
  
];