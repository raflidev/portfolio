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
        desc: "Bendahara",
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
          "Aplikasi ini digunakan untuk mengabsen piket dikelas karena saya ditunjuk untuk menjadi ketua piket. Aplikasi ini juga digunakan untuk melihat jadwal pelajaran disekolah. Aplikasi ini dibuat dengan php native, mysql dan css native tanpa framework karena ini adalah project pertama saya",
      },
      {
        id: 2,
        name: "bankmini",
        slug: "bankmini",
        image: "/post/bankmini.png",
        tools: ["vscode", "php", "codeigniter", "mysql", "adobexd"],
        year: 2019,
        platform: "web",
        desc: "Bankmini",
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
    blog: [
      {
        id: 1,
        title: "Top 10 Javascript Library",
        slug: "top-10-javascript-library",
        decs:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora atque quaerat culpa minima corrupti dolor explicabo, vel totam, reiciendis provident!",
      },
      {
        id: 2,
        title: "Why I Made a Portfolio Website",
        slug: "why-i-made-a-portfolio-website",
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
