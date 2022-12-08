import project1 from './images/project/1.png'
import project2 from './images/project/2.png'
import project3 from './images/project/3.png'

import react from './images/language/react.png'
import vue from './images/language/vue.png'
import tailwind from './images/language/tailwind.png'

const data = [
  {
    "id": "1",
    "name": "BUTTMKP",
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
    "deskripsi": "landing page for BUTTMKP (Balai Uji Terap Teknik dan Metode Karantina Pertanian) website competition"
  },
  {
    "id": "2",
    "name": "GRAB IT FAST 2022",
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
    "deskripsi": "website landing page untuk pembelian tiket pentas seni dari The Student Activity Unit telkom university from bogor"
  },
  {
    "id": "3",
    "name": "Info Gempa Terkini",
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
    "deskripsi": "the latest earthquake info in Indonesia, data is obtained from BMKG (Meteorological, Climatological, and Geophysical Agency) every 10 minutes."
  }
]

export default data;