<template>
  <div>
    <div>
      <div class="w-full bg-white">
        <div class="w-full bg-white bg-opacity-100 lg:bg-opacity-90 py-4 md:px-0 fixed top-0 z-10">
          <div class="flex justify-center">
            <div class="w-full px-4 lg:w-1/2 flex lg:px-0 justify-between items-center font-medium">
              <a button v-scroll-to="'#landing'">
                <img src="/logo.jpg" width="50" alt="">
              </a>
              <div class="space-x-0 lg:space-x-4 lg:inline" :class="{ 'hidden': !menu, 'absolute lg:static -ml-4 lg:-ml-0 top-20 grid bg-gray-300 lg:bg-white w-full lg:w-1/2 divide-y divide-black lg:divide-none': menu }">
                <button v-scroll-to="{ el: '#work', offset: -90 }" class="hover:text-green-400 focus:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Work</button>
                <button v-scroll-to="{ el: '#about_me', offset: -150 }" class="hover:text-green-400 focus:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">About me</button>
                <button v-scroll-to="{ el: '#certificate', offset: -90 }" class="hover:text-green-400 focus:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Certificate</button>
                <button v-scroll-to="{ el: '#resume', offset: -90 }" class="hover:text-green-400 focus:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Resume</button>
                <button v-scroll-to="{ el: '#blog', offset: -90 }" class="hover:text-green-400 focus:text-green-400" :class="{ 'hover:bg-white px-4 lg:px-0 py-3 lg:py-0': menu }">Blog</button>
              </div>
              <button @click="menu = !menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 inline lg:hidden hover:bg-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="landing" class="px-4 lg:px-0 flex justify-center">
        <div class="mt-48 w-full lg:w-1/2 flex items-center space-x-10">
          <div class="w-full lg:w-1/2 space-y-3 animate__animated animate__fadeInLeft">
            <h1 class="font-bold text-5xl">Muhammad Rafli Ramadhan</h1>
            <p class="font-medium text-xl">Frontend Web Developer</p>
            <div class="flex space-x-4">
              <a href="http://instagram.com/raflidev">
                <img src="/social-media/instagram.svg" width="30" alt="" srcset="">
              </a>
              <a href="http://github.com/raflidev">
                <img src="/social-media/github.svg" width="30" alt="" srcset="">
              </a>
              <a href="http://dribbble.com/raflidev">
                <img src="/social-media/dribbble.svg" width="30" alt="" srcset="">
              </a>
            </div>
            <button @click="hire" class="px-8 py-2 rounded-md bg-green-400 font-medium hover:text-white hover:bg-green-600">HIRE ME</button>
          </div>
          <div class="hidden lg:inline animate__animated animate__fadeIn w-1/2">
            <img src="/me/home.jpg" class="rounded" alt="raflidev">
          </div>
        </div>
      </section>

      <section id="about_me" class="mt-40">
        <div class="bg-green-600 py-10 text-white">
          <h1 class="text-center font-bold text-3xl mb-6">About me</h1>
          <div class="flex justify-center">
            <div class="w-3/5 space-y-6"> 
              <div class="block">
                Hello I'm Rafli!
              </div>
              <div class="block">
                I'm a B.Sc. Computer Science candidate at Telkom University who love to spend time learning new things.
              </div>
              <div class="block">
                Now I'm focuses on learning web-based hybrid programming that can be accessed on desktop and android.
              </div>
              <div class="block">
                My work that you see is my learning progress.
              </div>
              <div class="block">
                I like to make blog and share content on Instagram and the media and also like to create innovations and ideas that I like.
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="work" class="px-4 lg:px-0 flex justify-center mt-40">
        <div class="w-full lg:w-1/2">
          <h1 class="font-bold text-3xl text-center">My Favourite Projects</h1>
          <p class="font-light text-xl text-center mt-2">My Learning Progress</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20" v-if="showless">
            <div v-for="(work, index) in work" :key="work.index">
              <div class="relative animate__animated animate__fadeIn" v-if="index < 4">
                <img class="rounded-md" :src="work.image" :alt="work.name">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:bg-opacity-50 items-center flex flex-col justify-center space-y-3">
                  <p class="font-bold text-xl">{{work.name}}</p>
                  <div class="flex space-x-2">
                    <button class="hover:bg-green-700 hover:text-white p-1 rounded-2xl" @click="toggleModal = !toggleModal, workIndex = index">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <a target="_blank" :href="work.link" class="hover:bg-green-700 hover:text-white p-1 rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20" v-else>
            <div v-for="(work, index) in work" :key="work.index">
              <div class="relative animate__animated animate__fadeIn">
                <img class="rounded-md" :src="work.image" :alt="work.name">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:bg-opacity-50 items-center flex flex-col justify-center space-y-3">
                  <p class="font-bold text-xl">{{work.name}}</p>
                  <div class="flex space-x-2">
                    <button class="hover:bg-green-700 hover:text-white p-1 rounded-2xl" @click="toggleModal = !toggleModal, workIndex = index">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <a target="_blank" :href="work.link" class="hover:bg-green-700 hover:text-white p-1 rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <button v-if="showless" @click="showless = false" class="text-center bg-gray-300 py-2 px-4 rounded">Show all</button>
            <button v-else @click="showless = true" v-scroll-to="{ el: '#work', offset: -90 }" class="text-center bg-gray-300 py-2 px-4 rounded">Show less</button>
          </div>
        </div>
      </section>

      <section id="modal" class="fixed inset-0 flex items-center justify-center mt-12 z-20" :class="{'opacity-100': toggleModal, 'hidden opacity-0': !toggleModal }">
        <div class="relative animate__animated animate__fadeIn bg-gray-100 w-4/5 flex justify-center">
          <div class="absolute top-5 lg:-top-8 right-5 lg:right-0">
            <button @click="toggleModal = !toggleModal, workIndex = null, certIndex =  null">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="w-full lg:w-4/5 py-10">
            <div v-if="workIndex != null" class="flex justify-center lg:justify-between space-x-0 lg:space-x-10">
              <img :src="work[workIndex].image" class="animate__animated animate__fadeIn hidden lg:inline object-cover w-5/12" alt="">
              <div class="px-8 lg:px-0 w-full lg:w-7/12 space-y-3">
                <div>
                  <h1 class="font-bold text-3xl">
                    {{work[workIndex].name}}
                  </h1>
                  <p class="uppercase font-medium"> {{work[workIndex].platform}} | {{work[workIndex].year}}</p>
                </div>
                <div>
                  <p class="mb-1 font-semibold">Tools</p>
                  <div class="flex space-x-4 items-center">
                    <div v-for="tool in work[workIndex].tools" :key="tool.index">
                      <img :src="'/tools/'+tool+'.png'" width="30" alt="">
                    </div>
                  </div>
                </div>
                <p>{{work[workIndex].desc}}</p>
                <div>
                  <a target="_blank" :href="work[workIndex].link" class="py-2 px-4 text-white rounded-md bg-green-600">Link Project</a>
                </div>
              </div>
            </div>
            <div v-if="certIndex != null" class="flex justify-center lg:justify-between space-x-0 lg:space-x-10">
              <img :src="'/cert/'+cert[certIndex].credential+'.png'" class="animate__animated animate__fadeIn hidden lg:inline object-cover w-5/12" alt="">
              <div class="px-8 lg:px-0 w-full lg:w-7/12 space-y-3">
                <div>
                  <h1 class="font-bold text-3xl">
                    {{cert[certIndex].title}}
                  </h1>
                  <p class="uppercase font-medium"> {{cert[certIndex].exp}}</p>
                </div>
                <div>
                  <p class="font-semibold">Credential</p>
                  <p>{{cert[certIndex].credential}}</p>
                </div>
                <div>
                  <a target="_blank" :href="cert[certIndex].link" class="py-2 px-4 text-white rounded-md bg-green-600 uppercase">See credential</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" class="mt-40">
        <h1 class="font-bold text-3xl text-center mb-10">Resume</h1>
        <div class="flex justify-center">
          <div class="w-full px-4 lg:px-0 lg:w-3/5">
            <iframe src="/CV_RAFLI.pdf" class="w-full" height="500" frameborder="0"></iframe>
          </div>
        </div>
      </section>

      <section id="certificate" class="mt-40 flex justify-center">
        <div class="w-full lg:w-1/2">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl">Certificate</h1>
            <p class="font-light text-xl mt-2">My Competency Certificate</p>
          </div>

          <div class="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4" v-if="showcerti">
            <div v-for="(cert, index) in cert" :key="cert.index">
              <div class="relative animate__animated animate__fadeIn" v-if="index < 4">
                <img :src="'/cert/'+cert.credential+'.png'" :alt="cert.credential">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:bg-opacity-50 items-center flex flex-col justify-center space-y-3">
                  <p class="font-bold text-xl text-center">{{cert.title}}</p>
                  <div class="flex space-x-2">
                    <button class="hover:bg-green-700 hover:text-white p-1 rounded-2xl" @click="toggleModal = !toggleModal, certIndex = index">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <a target="_blank" :href="cert.link" class="hover:bg-green-700 hover:text-white p-1 rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4" v-else>
            <div v-for="(cert, index) in cert" :key="cert.index">
              <div class="relative animate__animated animate__fadeIn">
                <img :src="'/cert/'+cert.credential+'.png'" :alt="cert.credential" srcset="">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:bg-opacity-50 items-center flex flex-col justify-center space-y-3">
                  <p class="font-bold text-xl text-center">{{cert.title}}</p>
                  <div class="flex space-x-2">
                    <button class="hover:bg-green-700 hover:text-white p-1 rounded-2xl" @click="toggleModal = !toggleModal, certIndex = index">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <a target="_blank" :href="cert.link" class="hover:bg-green-700 hover:text-white p-1 rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="flex justify-center mt-8">
              <button v-if="showcerti" @click="showcerti = false" class="text-center bg-gray-300 py-2 px-4 rounded">Show all</button>
              <button v-else @click="showcerti = true" class="text-center bg-gray-300 py-2 px-4 rounded">Show less</button>
            </div>
        </div>
      </section>

      <section id="blog" class="mt-40 flex justify-center">
        <div class="w-full lg:w-1/2 px-4 lg:px-0">
          <div class="mb-10">
            <h1 class="font-bold text-center text-3xl">Blog</h1>
            <p class="font-light text-center text-xl mt-2">Sometimes i write and sharing</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="blog in blog.items" :key="blog.index">
              <div class="relative animate__animated animate__fadeIn">
                <img :src="blog.thumbnail" class="w-full" alt="">
                <div class="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-white hover:bg-opacity-50 items-center flex flex-col justify-center space-y-1">
                  <p class="font-bold text-xl text-center">{{blog.title}}</p>
                  <div class="flex space-x-2">
                    <a target="_blank" :href="blog.link" class="hover:bg-green-700 hover:text-white p-1 rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-32 bg-gray-100">
        <div class="flex justify-center">
          <div class="w-1/2 py-10 flex justify-between items-center">
            <div class="space-y-2">
              <h1 class="text-2xl font-bold uppercase">raflidev</h1> 
              <div>
                <p class="text-sm">rafliramdhn@gmail.com</p>
                <p class="text-sm">+62 812 888 2526 3</p>
              </div>
              <div>
                <p class="text-sm">Copyright &copy; 2019 - {{ new Date().getFullYear() }}</p>
              </div>
            </div>
            <div>
              <button class="flex flex-col items-center bg-green-600 text-white p-2 rounded" v-scroll-to="'#landing'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <p class="text-xs">
                  To Top
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      showless: true,
      menu: false,
      showcerti: true,
      items:[],
      index: null,
      toggleModal: false,
      workIndex: null,
      certIndex: null,
    }
  },
  methods: {
    hire(){
      const kata = "Halo, Saya memerlukan jasa untuk membuat website, berikut detailnya:"
      window.location.href = `https://api.whatsapp.com/send?phone=6281288825263&text=${kata}`;
    }
  },
  computed: {
    work(){
      return this.$store.state.works
    },
    cert(){
      this.items = this.$store.state.cert
      return this.$store.state.cert
    },
    blog(){
      return this.$store.state.medium
    }
  },
  created(){
     this.$store.dispatch("getMedium");
  }
}
</script>

<style>

</style>