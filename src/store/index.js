import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works: [
      {
        id: 0,
        name: "Bendahara",
        image: "/post/post.jpg",
        year: 2019,
        platform: "ui",
        desc: "Bendahara",
      },
      {
        id: 1,
        name: "Projectsekolah!",
        image: "/post/psekolah.jpg",
        tools: ["vscode", "php", "mysql"],
        year: 2019,
        platform: "web",
        desc:
          "Aplikasi ini digunakan untuk mengabsen piket dikelas karena saya ditunjuk untuk menjadi ketua piket. Aplikasi ini juga digunakan untuk melihat jadwal pelajaran disekolah. Aplikasi ini dibuat dengan php native, mysql dan css native tanpa framework karena ini adalah project pertama saya",
      },
      {
        id: 2,
        name: "bankmini",
        image: "/post/bankmini.png",
        year: 2019,
        platform: "web",
        desc: "Bankmini",
      },
    ],
    selectedCategory: "All",
  },
  mutations: {},
  actions: {},
  modules: {},
});
