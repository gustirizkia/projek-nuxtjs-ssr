<template>
  <div>
    <navmobile />

    <div
      class="
        bg-center bg-cover
        sm:bg-left-top
        lg:bg-center
        bg-hero-galang-dana
        from-green-700
        to-red-300
      "
    >
      <navbar />

      <div class="conatiner px-2 md:px-10 md:mt-20 md:flex hidden">
        <div
          class="
            md:text-5xl md:pt-10
            pt-4
            lg:text-left
            text-center
            sm:w-full
            text-gray-50
            font-semibold
            text-2xl
            flex-none
            md:w-6/12
          "
        >
          Program Peduli Umat
          <div
            class="
              md:mt-4
              sm:mt-4
              text-gray-200
              font-light
              text-center text-sm
              md:text-left md:text-xl
              flex-none
            "
          >
            Mari berbuat baik, berbagi sedikit yang Anda berikan banyak bagi
            mereka yang membutuhkan
            <div class="mt-6 hidden md:block">
              <a
                href=""
                class="
                  bg-hijau-button
                  px-8
                  py-2
                  rounded-full
                  shadow-hijau-hmi2
                  mr-2
                  hover:bg-green-400
                "
              >
                Berbuat Baik
              </a>
              <a
                href=""
                class="
                  bg-hijau-button
                  px-8
                  py-2
                  rounded-full
                  shadow-hijau-hmi2
                  mx-2
                  hover:bg-green-400
                "
              >
                Galang Dana
              </a>
            </div>
          </div>
        </div>
        <div class="h-auto w-auto">
          <img src="~assets/image/hero-galangdana.png" alt="" class="h-auto" />
        </div>
      </div>
    </div>

    <!-- header mobile -->
    <section
      class="
        container
        mx-auto
        lg:px-10
        px-2
        md:mt-16
        p-4
        block
        md:hidden
        bg-green-400
        rounded-b-2xl
      "
    >
      <div>
        <div class="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            class="
              bg-white
              h-10
              px-5
              pr-10
              rounded-full
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:border-transparent
              w-full
            "
            autocomplete="off"
            v-model="cari"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <!-- endheader mobile -->

    <!-- step illustator -->
    <section
      class="container mx-auto lg:px-10 px-2 md:mt-16 mt-4 hidden md:block"
    >
      <div
        class="
          md:text-3xl
          text-center
          md:text-left
          font-medium
          md:w-5/12 md:text-gray-800
        "
      >
        Hanya butuh 3 langkah untuk menjalankan galang dana online
      </div>
      <div class="md:block hidden">
        <img src="~assets/image/Step Illustration.svg" alt="" class="" />
      </div>
      <div class="md:hidden block mt-4">
        <img src="~assets/image/Group 121.svg" alt="" class="mx-auto mb-4" />
        <!-- <img src="~assets/image/Step by Step1.svg" alt="" class="mx-auto" /> -->
      </div>
    </section>
    <!-- end step illustator -->

    <!-- loading search -->
    <div class="text-center">
      <span class="" v-if="loadingSearch">
        <button
          type="button"
          class="
            inline-flex
            items-center
            px-4
            py-2
            border border-transparent
            text-base
            leading-6
            font-semibold
            text-green-800
            active:bg-indigo-700
            transition
            ease-in-out
            duration-150
          "
        >
          <svg
            class="animate-spin -ml-1 mr-3 h-8 w-8 text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Memuat pencarian ...
        </button>
      </span>
    </div>
    <!-- endloading search -->

    <section class="mt-8">
      <div class="container px-2 md:px-10 my-4 mb-20">
        <div
          class="grid md:grid-cols-3 grid-cols-2 grid-flow-row gap-2 md:gap-4"
        >
          <div
            class="
              bg-white
              border
              md:p-4
              p-1
              rounded
              md:rounded-lg md:pb-0
              pb-2
            "
            v-for="item in items"
            :key="item.id"
          >
            <nuxt-link :to="'/galang-dana-detail/' + item.id">
              <div class="md:block">
                <!-- image atau thumbnail -->
                <div class="">
                  <img
                    :src="item.thumbnail"
                    alt=""
                    class="
                      w-full
                      rounded
                      md:rounded-lg md:h-44
                      h-20
                      object-cover
                    "
                  />
                </div>
                <!-- deskripsi -->
                <div class="">
                  <!-- title atau name -->
                  <div
                    class="
                      text-green-900
                      font-semibold
                      text-xs
                      md:text-base
                      mt-2
                    "
                  >
                    {{ item.judul }}
                  </div>
                  <!-- location -->
                  <div class="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="md:h-5 md:w-5 h-4 w-4 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div class="text-gray-600 md:text-sm text-xs">
                      {{ item.kota }}
                    </div>
                  </div>
                  <!-- progresbar -->
                  <div class="mt-2 flex">
                    <div class="font-medium text-xs md:text-base">50%</div>
                    <div
                      class="font-medium text-xs md:text-base text-right w-full"
                    >
                      Rp.{{ item.goal_amount | currency }}
                    </div>
                  </div>
                  <div
                    class="w-full bg-gray-200 mt-2 rounded-full hover:hidden"
                  >
                    <div
                      class="
                        bg-green-500
                        text-xs
                        leading-none
                        md:py-1 md:h-5
                        font-medium
                        text-center text-white
                        rounded-full
                      "
                      style="width: 50%"
                    >
                      50%
                    </div>
                  </div>
                  <!-- end profressbar -->
                  <!-- button found -->
                  <div class="w-full items-stretch">
                    <a
                      href=""
                      class="
                        rounded-full
                        text-center
                        mt-3
                        bg-green-700
                        w-full
                        md:py-1
                        text-white
                        md:font-medium
                        hidden
                        md:block md:mb-4
                        my-auto
                      "
                      >Fund</a
                    >
                  </div>
                  <!-- endbutton Fund -->
                </div>
                <div class="text-green-900 font-semibold flex"></div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <Cfooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          itemprop: 'image',
          content: 'https://gustirizkia.my.id/thumbnail-galang-dana-page.jpg',
        },
        {
          hid: 'image',
          name: 'image',
          itemprop: 'image',
          property: 'image',
          content: 'https://gustirizkia.my.id/thumbnail-galang-dana-page.jpg',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          itemprop: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          itemprop: 'og:image:width',
          property: 'og:image:width',
          content: '300',
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          itemprop: 'og:image:height',
          property: 'og:image:height',
          content: '300',
        },
        {
          itemprop: 'width',
          content: '300',
        },
        {
          itemprop: 'height',
          content: '300',
        },
        {
          itemprop: 'image',
          name: 'image',
          content: 'https://gustirizkia.my.id/thumbnail-galang-dana-page.jpg',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Himpunan Mahasiswa Islam Komisariat Fakultas Teknik Cabang Ciputat',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'HMI program peduli umat, fitur donasi dan galang dana. Mari bergotong royong',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'HMI KOMFAKTEK | PROGRAM PEDULI UMAT',
        },
      ],
    }
  },
  data() {
    return {
      items: [],
      cari: '',
      loadingSearch: false,
    }
  },

  mounted() {
    this.getGalangDana()
  },

  methods: {
    async getGalangDana() {
      let data = await this.$axios.get('galang-dana').then((ress) => {
        this.items = ress.data.data
      })
    },
    async cariGalangDana() {
      let data = await this.$axios
        .post('galang-dana/cari', {
          keyword: this.cari,
        })
        .then((ress) => {
          this.items = ress.data.data
          this.loadingSearch = false
        })
    },
  },
  watch: {
    cari() {
      if (this.cari.length > 3) {
        this.loadingSearch = true
        this.cariGalangDana()
      } else {
        this.getGalangDana()
      }
    },
  },
}
</script>
