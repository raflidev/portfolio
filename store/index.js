import axios from 'axios';
export const state = () => ({
      works: [
        {
          id: 0,
          name: "Bendahara",
          slug: "bendahara",
          image: "/post/post.jpg",
          tools: ["adobexd"],
          year: 2019,
          platform: "ui",
          desc:
            "This prototype was created because I couldn't make an Android application yet. In the future, I want to make this Bendahara application web-based so that they can manage finances in any organization.",
          link: "https://www.instagram.com/p/B6-8bxZlOtU/",
        },
        {
          id: 5,
          name: "Nyuss",
          slug: "nyuss",
          image: "/post/nyuss.jpg",
          tools: ["figma"],
          year: 2020,
          platform: "ui",
          desc: "Prototype UI concept for Coffee cafe website.",
          link: "https://nyuss.netlify.app",
        },
        {
          id: 5,
          name: "Qurbanku",
          slug: "qurbanku",
          image: "/post/qurbanku.jpg",
          tools: ["vscode", "vue"],
          year: 2021,
          platform: "web",
          desc: "Eid al-Adha savings application prototype.",
          link: "https://qurbanku.vercel.app",
        },
        {
          id: 5,
          name: "Info Gempa Terkini",
          slug: "info-gempa-terkini",
          image: "/post/infogempaterkini.jpg",
          tools: ["vscode", "vue", 'nodejs', 'javascript'],
          year: 2021,
          platform: "web",
          desc: "the latest earthquake info in Indonesia, data is obtained from BMKG (Meteorological, Climatological, and Geophysical Agency) every 10 minutes.",
          link: "https://info-gempa-terkini.vercel.app/",
        },
        {
          id: 5,
          name: "Rafliblog",
          slug: "rafliblog",
          image: "/post/rafliblog.jpg",
          tools: ["vscode", "vue"],
          year: 2020,
          platform: "web",
          desc: "Application prototype blog about website development.",
          link: "https://rafliblog.vercel.app/",
        },
        {
          id: 1,
          name: "Projectsekolah!",
          slug: "projectsekolah",
          image: "/post/psekolah.jpg",
          tools: ["vscode", "php", "mysql", "figma"],
          year: 2019,
          platform: "web",
          desc:
            "This application is used to attend picket in class because I was appointed to be the picket chairman. This application is also used to view lesson schedules at school. This application is made with native php, mysql and native css without a framework because this is my first project.",
          link: "https://github.com/raflidev/ProjectSekolah",
        },
        {
          id: 2,
          name: "Bankmini",
          slug: "bankmini",
          image: "/post/bankmini.png",
          tools: ["vscode", "codeigniter", "mysql", "adobexd"],
          year: 2019,
          platform: "web",
          desc:
            "This application is made for the LSP certification held by BNSP. designed with Adobe XD to make it better. BANKMINI is used to save money for students at school",
          link: "https://github.com/raflidev/bankmini",
        },
        {
          id: 3,
          name: "COVID-19",
          slug: "covid19",
          image: "/post/covid19.png",
          tools: ["vscode", "nodejs", "vue"],
          year: 2020,
          platform: "web",
          desc:
            "This application is to see the state of COVID-19 in Indonesia specifically. This application consumes API from government, this application is made with Vue JS and can be PWA (Progresive Web Application)",
          link: "https://dirumahaja.herokuapp.com",
        },
        {
          id: 4,
          name: "Cari Film",
          slug: "cari-film",
          image: "/post/carifilm.jpg",
          tools: ["vscode", "javascript", "nodejs"],
          year: 2020,
          platform: "web",
          desc:
            "Application searches for movies to find details of the film. This application is used for frontend class submission in Dicoding.",
          link: "https://carifilm.herokuapp.com",
        },
        {
          id: 6,
          name: "Kotak IT",
          slug: "kotak-it",
          image: "/post/kotakit.jpg",
          tools: ["vscode", "vue"],
          year: 2020,
          platform: "experiment",
          desc:
            "Kotak IT is a podcast that I created myself with chat content about IT and the latest IT news.",
          link: "https://kotakitpodcast.xyz",
        },
      ],
      medium: [],
      cert: [
        {
          title: "Menjadi Front-End Web Developer Expert",
          exp: "Jul 2021 - Jul 2024",
          credential: "RVZK16Q5MPD5",
          link: "https://www.dicoding.com/certificates/RVZK16Q5MPD5",
        },
        {
          title: "Membangun Progressive Web Apps",
          exp: "Jan 2020 - Jan 2023",
          credential: "MEPJ559V6P3V",
          link: "https://www.dicoding.com/certificates/MEPJ559V6P3V",
        },
        {
          title: "Belajar Fundamental Front-End Web Development",
          exp: "May 2020 - May 2023",
          credential: "L4PQMM5GOZO1",
          link: "https://www.dicoding.com/certificates/L4PQMM5GOZO1",
        },
        {
          title: "Belajar Prinsip Pemrograman SOLID",
          exp: "May 2020 - May 2023",
          credential: "QLZ988VR2X5D",
          link: "https://www.dicoding.com/certificates/QLZ988VR2X5D",
        },
        {
          title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
          exp: "July 2021 - July 2024",
          credential: "07Z65LG2MXQR",
          link: "https://www.dicoding.com/certificates/07Z65LG2MXQR",
        },
        {
          title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
          exp: "April 2021 - April 2024",
          credential: "1OP8DR9W1PQK",
          link: "https://www.dicoding.com/certificates/1OP8DR9W1PQK",
        },
        {
          title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
          exp: "June 2021 - June 2024",
          credential: "QLZ98WO1EX5D",
          link: "https://www.dicoding.com/certificates/QLZ98WO1EX5D",
        },
        {
          title: "Belajar Dasar Pemrograman JavaScript",
          exp: "June 2021 - June 2024",
          credential: "72ZD2133VZYW",
          link: "https://www.dicoding.com/certificates/72ZD2133VZYW",
        },
        {
          title: "Belajar Dasar Pemrograman Web",
          exp: "Jul 2019 - Jul 2022",
          credential: "72ZD2208VZYW",
          link: "https://www.dicoding.com/certificates/72ZD2208VZYW",
        },
      ],
      selectedCategory: "All",
})

export const mutations = {
  SET_MEDIUM(state, medium) {
    state.medium = medium
  }
}

export const actions = {
  getMedium({ commit }) {
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fkotak-it").then(res => {
      commit('SET_MEDIUM', res.data)
    })
  }
}