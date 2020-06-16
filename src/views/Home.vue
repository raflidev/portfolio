<template>
  <main>
    <div class="container border-bottom py-5 mb-5">
      <div class="text-redhat">
        <h2 class="text-muted font-weight-light">Hello, I'm</h2>
        <h1 class="font-weight-bolder">Rafli Ramadhan</h1>
        <h5 class="text-muted">Fullstack Web Developer</h5>
        <div class="media-sosial mt-4 pb-2">
          <a href="https://instagram.com/raflidev" target="_blank" class="pr-4">
            <img src="@/assets/social-media/instagram.svg" width="40" />
          </a>
          <a href="https://twitter.com/raflidev" target="_blank" class="pr-4">
            <img src="@/assets/social-media/twitter.svg" width="40" />
          </a>
          <a href="https://" target="_blank" class="pr-4">
            <img src="@/assets/social-media/dribbble.svg" width="40" />
          </a>
          <a href="https://" target="_blank" class="pr-4">
            <img src="@/assets/social-media/youtube.svg" width="40" />
          </a>
          <a href="https://github.com/raflidev" target="_blank" class="pr-4">
            <img src="@/assets/social-media/github.svg" width="40" />
          </a>
          <a href="https://t.me/raflidev" target="_blank" class="pr-4">
            <img src="@/assets/social-media/telegram.svg" width="40" />
          </a>
        </div>
        <div class="action-link pt-5 mb-5">
          <a
            href="http://"
            class="btn btn-dark rounded-pill py-2 px-4 mr-4 font-weight-bolder"
            >HIRE ME</a
          >
          <a
            href="http://"
            class="btn btn-outline-dark rounded-pill py-2 px-4 mr-4 font-weight-bolder"
            >SEE MY RESUME</a
          >
        </div>
      </div>
    </div>
    <div class>
      <div class="container">
        <div class="py-4 text-center">
          <button
            class="btn btn-outline-secondary font-weight-bold mr-3 rounded-pill"
          >
            Desktop
          </button>
          <button
            class="btn btn-outline-secondary font-weight-bold mr-3 rounded-pill"
          >
            Web
          </button>
          <button
            class="btn btn-outline-secondary font-weight-bold mr-3 rounded-pill"
          >
            UI
          </button>
        </div>
        <div class="row">
          <div class="col-lg-4 py-4">
            <div class="card work">
              <img
                src="@/assets/post/post.jpg"
                class="card-img-top"
                width="325"
                srcset
              />
              <div class="card-body py-0 pt-2">
                <div class="info-porfolio">
                  <a href="http://" class="">
                    <span class="material-icons rounded-circle">
                      visibility
                    </span>
                  </a>
                </div>
                <h6
                  class="font-weight-bold mb-0 text-muted text-uppercase category"
                >
                  UI
                </h6>
                <p class="font-weight-bold float-left text-uppercase">
                  Bendahara
                </p>
                <p class="font-weight-bold float-right">2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.work .category {
  font-size: 14px;
}
.work .info-porfolio {
  position: absolute;
  top: 0;
  bottom: 25px;
  align-items: center;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
}
.work:hover .info-porfolio {
  opacity: 1;
}
.work:hover img {
  opacity: 0.3;
}
</style>
