import bantik from '@/assets/projects/bantik-4.png'
import coffeeme from '@/assets/projects/coffeeme.png'
import ddw from '@/assets/projects/ddw.png'
import evoAcademy from '@/assets/projects/evoAcademy2.png'
import valser from '@/assets/projects/valser.png'
import unical from '@/assets/projects/unical.png'


export const projects = [
  {
    id: "1",
    title: "Bantik",
    isLink: true,
    href: "https://bantik.az",
    variant: "image",
    description:
      "A React Native + Next.js concept for a crypto finance dashboard with clean dark UI and smooth charts.",
    images: [
      { src: bantik, alt: "Bantik", display: "centered" },
    ]
  },
  {
    id: "2",
    title: "CoffeeMe",
    isLink: true,
    href: "https://coffeeme.az",
    variant: "image",
    description:
      "A React Native + Next.js concept for a crypto finance dashboard with clean dark UI and smooth charts.",
    images: [
      { src: coffeeme, alt: "CoffeeMe", display: "centered" },
    ]
  },
  {
    id: "3",
    title: "Valser",
    isLink: true,
    href: "https://valser.az",
    variant: "image",
    description:
      "A React Native + Next.js concept for a crypto finance dashboard with clean dark UI and smooth charts.",
    images: [
      { src: valser, alt: "Valser", display: "centered" },
    ]
  },
  {
    id: "4",
    title: "Evo Academy",
    isLink: true,
    href: "https://evoacademy.az",
    variant: "image",
    description:
      "A React Native + Next.js concept for a crypto finance dashboard with clean dark UI and smooth charts.",
    images: [
      { src: evoAcademy, alt: "Evo Academy", display: "centered" },
    ]
  },
  {
    id: "5",
    title: "DDW",
    isLink: true,
    href: "https://ddw.az",
    variant: "image",
    description:
      "A React Native + Next.js concept for a crypto finance dashboard with clean dark UI and smooth charts.",
    images: [
      { src: ddw, alt: "DDW", display: "centered" },
    ]
  },
  {
    id: "6",
    title: "Unical Clinic",
    isLink: false,
    href: "https://unical.az",
    variant: "image",
    description:
      "A React Native + Next.js concept for a crypto finance dashboard with clean dark UI and smooth charts.",
    images: [
      { src: unical, alt: "Unical", display: "centered" },
    ]
  },
//   {
//     id: "4",
//     title: "Personal Portfolio",
//     variant: "text",
//     content:
//       "Modern portfolio designed with a fixed left profile panel and a scrollable gallery on the right. Built with Next.js 15 and Tailwind CSS v4.",
//     bullets: [
//       "Left column is sticky/fixed for desktop",
//       "Right column supports image and text sections",
//       "Configurable image modes: fullscreen or padded",
//       "Mobile-friendly responsive layout"
//     ]
//   },
];

export default projects;
