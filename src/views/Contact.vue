<template>
  <div class="container">
    <div class="row mt-5 mb-3">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <h1 class="font-weight-bold">LET'S TALK!</h1>
        <h4 class="font-weight-light">CALL ME OR SEND ME A REQUEST</h4>
        <div class="my-5">
          <h5 class="font-weight-light">
            <span class="material-icons mr-3">local_phone</span>
            +62 812 8882 5263 (Whatsapp only)
          </h5>
          <h5 class="font-weight-light">
            <span class="material-icons mr-3">mail</span>
            rafliramdhn@gmail.com
          </h5>
        </div>
        <div class="my-3">
          <h5 class="font-weight-light">Request</h5>
          <textarea
            v-model="mail"
            class="form-control rounded py-2"
            placeholder="Type your request.."
            rows="5"
          />
        </div>
        <div v-if="mail != ''">
          <a :href="`mailto:rafliramdhn@gmail.com?subject=Contact - Hi Rafli.&body=${mail}`" class="btn btn-lg font-weight-bold px-5 float-right btn-dark rounded-pill">SEND!</a>
        </div>
        <div v-else>
          <a href="#" class="btn btn-lg font-weight-bold px-5 float-right btn-dark rounded-pill disabled" aria-disabled="true">SEND!</a>
        </div>
      </div>
      <div class="col-lg-6 d-none d-sm-block">
        <img src="/me/home.jpg" class="img-fluid animate__animated animate__fadeIn" alt srcset />
      </div>
    </div>
  </div>
</template>

<style>
</style>
<script>
export default {
  name:"contact",
  data(){
    return{
      mail:""
    }
  },
  methods: {
    kirimEmail: () =>{
      // console.log("asdasd");
      // mailto:test@example.com?subject=Contact - Hi Rafli.&body=${request}
    }
  }
}
</script>