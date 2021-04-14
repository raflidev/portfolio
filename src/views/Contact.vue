<template>
  <div class="container">
    <div class="row mt-5 mb-3">
      <form name="contact-form" class="col-lg-6 col-md-12 col-sm-12">
        <h1 class="font-weight-bold">LET'S TALK!</h1>
        <h4 class="font-weight-light">EMAIL ME OR SEND ME A REQUEST</h4>
        <div class="my-3">
          <div class="mb-3">
            <h5 class="font-weight-bold">Name</h5>
            <input
              type="name"
              v-model="name"
              class="form-control rounded py-2"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div class="mb-3">
            <h5 class="font-weight-bold">Email</h5>
            <input
              type="email"
              v-model="email"
              class="form-control rounded py-2"
              placeholder="Your email"
              name="email"
            />
          </div>
          <div class="mb-3">
            <h5 class="font-weight-bold">Request</h5>
            <textarea
              v-model="mail"
              class="form-control rounded py-2"
              placeholder="Type your request.."
              rows="5"
              name="request"
            />
          </div>
        </div>
        <div v-if="mail != ''">
          <button type="submit" class="btn btn-lg font-weight-bold px-5 float-right btn-dark rounded-pill">SEND!</button>
        </div>
        <div v-else>
          <button class="btn btn-lg font-weight-bold px-5 float-right btn-dark rounded-pill disabled" aria-disabled="true">SEND!</button>
        </div>
      </form>
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
      mail:"",
      name:"",
      email:"",
    }
  },
  mounted(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx0jsaVFPQq9jlePB9-28yeWr15od881BPQyw28iqKvMhO7mJIFkFqFplSa-AkVlxdU/exec'
    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
  }
}
</script>