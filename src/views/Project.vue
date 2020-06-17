<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <img v-bind:src="works[$route.params.id].image" class="img-fluid" />
      </div>
      <div class="col-lg-5">
        <div class="pt-4">
          <h2
            class="text-uppercase font-weight-bolder text-redhat mb-0"
          >{{works[$route.params.id].name}}</h2>
          <h5 class="text-uppercase font-weight-bold text-secondary text-redhat">
            {{works[$route.params.id].platform}}
            <span class="mx-1">|</span>
            {{works[$route.params.id].year}}
          </h5>
          <div class="py-4">
            <h5 class="font-weight-bold">Tools</h5>
            <div>
              <img
                v-for="index in works[$route.params.id].tools.length"
                :key="index"
                v-bind:src="'/tools/'+works[$route.params.id].tools[index - 1]+'.png'"
                width="40"
                class="mr-3"
              />
            </div>
          </div>

          <p class="text-justify">{{works[$route.params.id].desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          id: 0,
          name: "Bendahara",
          image: "/post/post.jpg",
          year: 2019,
          platform: "ui",
          // tools: [{ name: "vscode" }, { name: "php" }, { name: "mysql" }],
          tools: ["vscode", "php", "mysql"],

          desc: "Bendahara"
        },
        {
          id: 1,
          name: "Projectsekolah!",
          image: "/post/psekolah.jpg",
          // tools: [{ name: "vscode" }, { name: "php" }, { name: "mysql" }],
          tools: ["vscode", "php", "mysql"],
          year: 2019,
          platform: "web",
          desc:
            "Aplikasi ini digunakan untuk mengabsen piket dikelas karena saya ditunjuk untuk menjadi ketua piket. Aplikasi ini juga digunakan untuk melihat jadwal pelajaran disekolah. Aplikasi ini dibuat dengan php native, mysql dan css native tanpa framework karena ini adalah project pertama saya"
        },
        {
          id: 2,
          name: "bankmini",
          image: "/post/bankmini.png",
          year: 2019,
          // tools: [{ name: "vscode" }, { name: "php" }, { name: "mysql" }],
          tools: ["vscode", "php", "mysql"],

          platform: "web",
          desc: "Bankmini"
        }
      ]
    };
  }
};
</script>

<style>
</style>