import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    home: [
      {
        id: 0,
        name: "Bendahara",
        slug: "bendahara",
        image: "/post/post.jpg",
        tools: ["adobexd"],
        year: 2019,
        platform: "ui",
        desc: "Bendahara",
      },
      {
        id: 3,
        name: "COVID-19",
        slug: "covid19",
        image: "/post/covid19.png",
        tools: ["vscode", "adobexd", "javascript", "nodejs", "vue"],
        year: 2020,
        platform: "web",
        desc: "COVID-19 Counter",
      },
      {
        id: 4,
        name: "Cari Film",
        slug: "cari-film",
        image: "/post/carifilm.jpg",
        tools: ["vscode", "javascript", "nodejs"],
        year: 2020,
        platform: "web",
        desc: "Aplikasi pencari film",
      },
    ],
    works: [
      {
        id: 0,
        name: "Bendahara",
        slug: "bendahara",
        image: "/post/post.jpg",
        tools: ["adobexd"],
        year: 2019,
        platform: "ui",
        desc: "Prototype ini dibuat karena saya belum bisa membuat aplikasi android. untuk kedepannya saya ingin buat aplikasi Bendahara ini web-based agar bisa mengatur keuangan di organisasi manapun.",
        link: "https://www.instagram.com/p/B6-8bxZlOtU/"
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
          "Aplikasi ini digunakan untuk mengabsen piket dikelas karena saya ditunjuk untuk menjadi ketua piket. Aplikasi ini juga digunakan untuk melihat jadwal pelajaran disekolah. Aplikasi ini dibuat dengan php native, mysql dan css native tanpa framework karena ini adalah project pertama saya.",
          link: "https://github.com/raflidev/ProjectSekolah"
      },
      {
        id: 2,
        name: "bankmini",
        slug: "bankmini",
        image: "/post/bankmini.png",
        tools: ["vscode", "codeigniter", "mysql", "adobexd"],
        year: 2019,
        platform: "web",
        desc: "Aplikasi ini dibuat untuk sertifikasi LDKS. di desain dengan Adobe XD agar lebih bagus. BANKMINI digunakan untuk menabung uang siswa di sekolah",
        link: "https://github.com/raflidev/bankmini"
      },
      {
        id: 3,
        name: "COVID-19",
        slug: "covid19",
        image: "/post/covid19.png",
        tools: ["vscode", "nodejs", "vue"],
        year: 2020,
        platform: "web",
        desc: "Aplikasi ini untuk melihat keadaan COVID-19 di Indonesia khususnnya. API consume, aplikasi ini dibuat dengan Vue JS dan sudah bisa PWA (Progresive Web Application)",
        link: "https://dirumahaja.herokuapp.com"
      },
      {
        id: 4,
        name: "Cari Film",
        slug: "cari-film",
        image: "/post/carifilm.jpg",
        tools: ["vscode", "javascript", "nodejs"],
        year: 2020,
        platform: "web",
        desc: "Aplikasi mencari film untuk mencari detail dari film tersebut. Aplikasi ini digunakan untuk submisi kelas frontend di dicoding.",
        link: "https://carifilm.herokuapp.com"
      },
      {
        id: 5,
        name: "Nyuss",
        slug: "nyuss",
        image: "/post/nyuss.jpg",
        tools: ["figma"],
        year: 2020,
        platform: "ui",
        desc: "Konsep Prototype UI untuk website Kafe kopi.",
        link: "https://nyuss.netlify.app"
      },
      {
        id: 6,
        name: "Kotak IT",
        slug: "kotak-it",
        image: "/post/kotakit.jpg",
        tools: ["vscode","vue"],
        year: 2020,
        platform: "eksperimen",
        desc: "Kotak IT adalah podcast yang saya buat sendiri dengan konten obrolan seputar IT dan berita IT terkini.",
        link: "https://kotakitpodcast.xyz"
      },
    ],
    blog: [
      {
        id: 1,
        title: "Top 10 Javascript Library",
        slug: "top-10-javascript-library",
        date: "2020-08-03",
        image: {
          thumb: "https://picsum.photos/300/200",
          large: "https://picsum.photos/900/300",
        },
        decs:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, cumque consectetur! Nulla asperiores culpa excepturi nesciunt, adipisci quibusdam, corporis voluptates illo eos nemo cumque velit eaque voluptate architecto? Perferendis, minima. Tempora ullam, ad enim libero ut cum mollitia dolor asperiores quaerat perferendis consectetur quidem nesciunt, corporis officiis cupiditate voluptas, eum officia quam magni! Voluptas a, asperiores error dolorem odio enim laudantium quia sit blanditiis nesciunt molestias placeat ipsum pariatur nisi minima suscipit consequuntur animi sapiente quidem. Voluptate, fugiat nemo nesciunt delectus consectetur error temporibus corrupti doloribus? Itaque quia nemo a alias autem fugit similique ullam, minus quo tempore quos qui!",
      },
      {
        id: 2,
        title: "Why I Made a Portfolio Website",
        slug: "why-i-made-a-portfolio-website",
        date: "2020-08-03",
        image: {
          thumb: "https://picsum.photos/300/200",
          large: "https://picsum.photos/900/300",
        },
        decs:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora atque quaerat culpa minima corrupti dolor explicabo, vel totam, reiciendis provident!",
      },
      {
        id: 3,
        title: "Microinteraction better than UX",
        slug: "microinteraction-better-than-ux",
        date: "2020-12-23",
        image: {
          thumb: "https://picsum.photos/300/200",
          large: "https://picsum.photos/900/300",
        },
        decs:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora atque quaerat culpa minima corrupti dolor explicabo, vel totam, reiciendis provident!",
      },
    ],
    selectedCategory: "All",
  },
  mutations: {},
  actions: {},
  modules: {},
});
