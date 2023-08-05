import project1 from './images/project/1.png'
import project2 from './images/project/2.png'
import project3 from './images/project/3.png'
import project4 from './images/project/4.png'
import project5 from './images/project/5.png'

import react from './images/language/react.png'
import vue from './images/language/vue.png'
import tailwind from './images/language/tailwind.png'

const data = [
  {
    "id": 1,
    "name": "BUTTMKP Landing Page",
    "category": "Web Development",
    "image": project1,
    "language":[
      {
        name: 'React',
        image: react, 
      },
      {
        name: 'Tailwind Css',
        image: tailwind,
      },
    ],
    "deskripsi": "Landing page for BUTTMKP (Balai Uji Terap Teknik dan Metode Karantina Pertanian) website competition",
    "link": "https://buttmkp.vercel.app/",
  },
  {
    "id": 2,
    "name": "GRAB IT FAST 2022",
    "category": "Web Development",
    "image": project2,
    "language": [
      {
        name: 'React',
        image: react, 
      },
      {
        name: 'Tailwind Css',
        image: tailwind,
      },
    ],
    "deskripsi": "Website landing page untuk pembelian tiket pentas seni dari The Student Activity Unit telkom university from bogor",
    "link": "https://gif22.vercel.app/",
  },
  {
    "id": 3,
    "name": "Info Gempa Terkini",
    "category": "Web Development",
    "image": project3,
    "language": [
      {
        name: 'Vue',
        image: vue, 
      },
      {
        name: 'Tailwind Css',
        image: tailwind,
      },
    ],
    "deskripsi": "The latest earthquake info in Indonesia, data is obtained from BMKG (Meteorological, Climatological, and Geophysical Agency) every 10 minutes.",
    "link": "https://info-gempa-terkini.vercel.app/",
  },
  {
    "id": 4,
    "name": "Sekala Pasopati",
    "category": "Web Development",
    "image": project4,
    "language": [
      {
        name: 'React',
        image: react, 
      },
      {
        name: 'Tailwind Css',
        image: tailwind,
      },
    ],
    "deskripsi": "landing page for the Sekala Pasopati housing area in Bandung",
    "link": "https://sekala-pasopati.vercel.app/",
  },
  {
    "id": 5,
    "name": "QurbanKu",
    "category": "Web Development",
    "image": project5,
    "language": [
      {
        name: 'Vue',
        image: vue, 
      },
      {
        name: 'Tailwind Css',
        image: tailwind,
      },
    ],
    "deskripsi": "Eid al-Adha savings application prototype.",
    "link": "https://qurbanku.vercel.app/",
  },
]

export default data;