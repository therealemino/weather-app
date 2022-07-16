<template>
  <v-footer padless class="main-footer">
      <v-container>
          <v-row >
              <v-col cols="12" sm="6" class="d-flex justify-center">
                  <img id="emino" class="mt-4" src="/emino-img.jpg"  alt="Emino-image" rounded-circle >
              </v-col>
              <!-- laptops and tablets -->
              <v-col cols="12" sm="6" class="d-none d-sm-flex justify-start align-center">
                  <div>
                    <h4 class="text-start footer-text">Hi, I'm Emino. Connect with me</h4>
                    <div class="d-flex justify-start">
                        <div v-for="icon in icons" :key="icon.name" class="px-2 py-2">
                            <a :href="icon.link" target="_blank">
                                <fa :icon="[icon.prefix, icon.name]" class="social-icons"/>
                            </a>
                        </div>
                    </div>
                  </div>
              </v-col>

              <!-- phones -->
              <v-col cols="12" sm="6" class="d-flex d-sm-none justify-center align-center">
                  <div>
                    <div class="text-center footer-text">Hi, I'm Emino. Connect with me</div>
                    <div class="d-flex justify-center">
                        <div v-for="icon in icons" :key="icon.name" class="px-2 py-2">
                            <a :href="icon.link" target="_blank">
                                <fa :icon="[icon.prefix, icon.name]" class="social-icons"/>
                            </a>
                        </div>
                    </div>
                  </div>
              </v-col>              
          </v-row>
      </v-container>
  </v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                {
                    name: "globe",
                    link: "https://ejeiokekeemmanuel.dev",
                    prefix: "fas"
                },
                {
                    name: "github",
                    link: "https://github.com/therealemino",
                    prefix: "fab"
                },
                {
                    name: "twitter",
                    link: "https://twitter.com/therealemino",
                    prefix: "fab"
                },
                {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/ejei-okeke-emmanuel/",
                    prefix: "fab"
                },
                {
                    name: "instagram",
                    link: "https://www.instagram.com/theRealEmino/",
                    prefix: "fab"
                }
            ]
        }
    }

}
</script>

<style>
#emino {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.social-icons {
    font-size: 1.8em;
    color: #fff;
}

.footer-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

.main-footer {
    margin-top: 50px;
}

@media screen and (max-width: 600px) {
    .social-icons {
        font-size: 1.4em;
        color: #fff;
    }
    .footer-text {
        font-size: 1em !important;
    }
}

</style>
