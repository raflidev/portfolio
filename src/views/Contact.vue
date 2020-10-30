<template>
  <div class="container">
    <div class="row mt-5 mb-3">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <h1 class="font-weight-bold">LET'S TALK!</h1>
        <h4 class="font-weight-light">CALL ME OR SEND ME A REQUEST</h4>
        <div class="my-5">
          <h5 class="font-weight-light">
            <span class="material-icons mr-3">local_phone</span>
            +62 812 8882 5263
          </h5>
          <h5 class="font-weight-light">
            <span class="material-icons mr-3">mail</span>
            rafliramdhn@gmail.com
          </h5>
        </div>
        <div class="my-3">
          <h5 class="font-weight-light">Address Email</h5>
          <input type="email" class="form-control rounded py-4" placeholder="Address Email" />
        </div>
        <div class="my-3">
          <h5 class="font-weight-light">Request</h5>
          <textarea
            type="email"
            class="form-control rounded py-4"
            placeholder="Type your request.."
          />
        </div>
        <a :href="'mailto:test@example.com'" class="btn btn-lg font-weight-bold px-5 float-right btn-dark rounded-pill">SEND!</a>
      </div>
      <div class="col-lg-6 d-none d-sm-block">
        <img src="/me/home.jpg" class="img-fluid animate__animated animate__fadeIn" alt srcset />
      </div>
    </div>
  </div>
</template>

<style>
</style>