<script lang="ts">
import {useProductStore} from "@/stores/products";

const store = useProductStore();

export default {
  async beforeRouteEnter(to: any) {
    const id: string | any = to.params.id;
    await store.fetchGetProductById(id);
    to.meta.data = store.product;
  }
}
</script>

<script setup lang="ts">

import NewsLetter from "@/components/views/NewsLetter.vue";
import ProductDetailsCarts from "@/components/views/ProductDetailsCarts.vue";
import Review from "@/components/items/Review.vue";
import {onMounted, reactive, ref, toRef} from "vue";
import {_ibg} from "@/composables/useImgBg";
import {useProductStore} from "@/stores/products";
import {localStorageGetItem} from "@/helpers/useLocalstorage"


// swiper
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Navigation, Thumbs} from 'swiper';
import axios from "axios";
import {localStorageSetItem} from "@/helpers/useLocalstorage";


const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const product = toRef(props, 'data');

const thumbsSwiper = ref(null);
const activeTab = ref(0);
const modules = ref([FreeMode, Navigation, Thumbs]);
const tabs = ref(['Description', `reviews(0)`, 'specification', 'custom tab']);
const form = reactive({
  name: '',
  email: '',
  rate: 1,
  comment: '',
  productId: product.value._id
});
const isOpenReviewForm = ref(false);
const store = useProductStore();

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}

function onOpenReviewForm() {
  isOpenReviewForm.value = !isOpenReviewForm.value;
}

function onAddReviewLink() {
  const scrollTop2 = $('#addReviewId').offset().top;
  window.scrollTo(0, scrollTop2);
  selectTab(1);
  onOpenReviewForm();
}

function selectTab(index: number) {
  activeTab.value = index;
}

async function onSubmitComment() {
  if (!form.name || !form.email) {
    alert('Enter your name and email please 🙂');
    return;
  }
  try {
    const token = localStorageGetItem('token');
    await axios.post('/api/review', form, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    await store.fetchGetProductById(product.value._id);
    product.value.reviews.push(store.getProduct.reviews.pop()) ;
    alert('Successful comment! 😊');
    form.name = form.email = form.comment = '';
    form.productId = null;
  } catch (err) {
    console.error('Error: ', err);
    alert(err.response?.data.message ?? err.response?.data, '😒');
  }
}


onMounted(() => {
  _ibg();
  $('input.nice-number').niceNumber();
});


</script>

<template>
  <div class="main-product">
    <div class="main-product__body">
      <div class="main-product__image _ibg">
        <img src="@/assets/img/main2.webp" alt="">
      </div>
      <div class="main-product__content">
        <div class="main-product__container _container">
          <div class="main-product__top">
            <div class="main-product__title">Product</div>
            <div class="main-product__pages">
              <a href="" class="main-product__pages--link">home</a>
              <a href="" class="main-product__pages--link">furniture</a>
              <a href="" class="main-product__pages--link _active">{{ product?.title }}</a>
            </div>
          </div>
          <div class="main-product__bottom product">
            <div class="product__content">

              <div class="product__images images-product">
                <swiper
                    :loop="true"
                    :navigation="true"
                    :spaceBetween="10"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules"
                    class="images-product__mainslider mainslider mySwiper2"
                >
                  <swiper-slide>
                    <a href="" class="images-product__mainslide">
                      <div class="images-product__image"><img :src="product.imageUrl" alt=""></div>
                      <div class="images-product__view"></div>
                    </a>
                  </swiper-slide>
                  <swiper-slide>
                    <a href="" class="images-product__mainslide">
                      <div class="images-product__image"><img src="@/assets/img/product/022.png" alt=""></div>
                      <div class="images-product__view"></div>
                    </a>
                  </swiper-slide>
                  <swiper-slide>
                    <a href="" class="images-product__mainslide">
                      <div class="images-product__image"><img src="@/assets/img/product/02.jpg" alt=""></div>
                      <div class="images-product__view"></div>
                    </a>
                  </swiper-slide>
                  <swiper-slide>
                    <a href="" class="images-product__mainslide">
                      <div class="images-product__image"><img src="@/assets/img/product/01.jpg" alt=""></div>
                      <div class="images-product__view"></div>
                    </a>
                  </swiper-slide>
                  <swiper-slide>
                    <a href="" class="images-product__mainslide">
                      <div class="images-product__image"><img src="@/assets/img/product/01.jpg" alt=""></div>
                      <div class="images-product__view"></div>
                    </a>
                  </swiper-slide>
                </swiper>

                <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
                    :spaceBetween="2"
                    :slidesPerView="4"
                    :freeMode="true"
                    :watchSlidesProgress="true"

                    :modules="modules"
                    class="images-product__subslider mySwiper">
                  <swiper-slide>
                    <div class="images-product__subslide">
                      <div class="images-product__subimage _ibg"><img :src="product.imageUrl" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-product__subslide">
                      <div class="images-product__subimage _ibg"><img src="@/assets/img/product/022.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-product__subslide">
                      <div class="images-product__subimage _ibg"><img src="@/assets/img/product/02.jpg" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-product__subslide">
                      <div class="images-product__subimage _ibg"><img src="@/assets/img/product/01.jpg" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-product__subslide">
                      <div class="images-product__subimage _ibg"><img src="@/assets/img/product/01.jpg" alt=""></div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <div class="product__body body-product">
                <div class="body-product__top __hr">
                  <div class="body-product__title">{{ product.title }}</div>
                  <div class="body-product__review">
                    <p>
                      <vue3-star-ratings
                          v-model="product.rate"
                          :showControl="false"
                          :starColor="'#2a2a2a'"
                          :inactiveColor="'rgba(190,182,182,0.78)'"
                          :starSize="'15'"
                          :disableClick="true"
                      />
                    </p>
                    <p>({{ product.reviews.length }} reviews)</p>
                    <p><a href="#" @click.prevent="onAddReviewLink">Add Your Review</a></p>
                  </div>
                </div>
                <div class="body-product__prices __hr">
                  <span class="body-product__oldprice">${{ (product.price * 1.20).toFixed(0) }}.00</span>
                  <span class="body-product__price"><span>${{ product.price }}.00</span></span>
                </div>
                <div class="body-product__actions actions-product __hr">
                  <div class="actions-product__top">
                    <a @click.prevent="addToCart(product.id)" href="#" class="actions-product__addtocart">add to
                      cart</a>
                    <a href="" class="actions-product__like"></a>
                    <a href="" class="actions-product__change"></a>
                    <a href="" class="actions-product__email"></a>
                  </div>
                  <div class="actions-product__quantities">
                    <span>Quantity:</span>
                    <input class="nice-number" type="number" value="1" min="1">
                  </div>
                </div>
                <div class="body-product__about __hr">
                  <div class="body-product__label">Quick Overview</div>
                  <p class="body-product__text">{{ product.description }}</p>
                </div>
                <div class="body-product__categories __hr">
                  <div class="body-product__available">
                    <p>Availability: <span>In Stock</span></p>
                    <p>Category: <span class="_category">{{ product.category }}</span></p>
                  </div>
                </div>
                <div class="body-product__social">
                  <a href="" class="body-product__social--f">facebook<span>Share</span></a>
                  <a href="" class="body-product__social--g">Google+<span>Share</span></a>
                  <a href="" class="body-product__social--t">Twittter<span>Share</span></a>
                  <a href="" class="body-product__social--p">Pinterest<span>Share</span></a>
                  <a href="" class="body-product__social--l">Linkedin<span>Share</span></a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="tabs">
    <div class="tabs__container _container">
      <div class="tabs__content">
        <div class="tabs__button">
          <button
              v-for="(item, index) in tabs"
              :class="[index == activeTab ? '_active' : '']"
              @click="selectTab(index)"
          >
            {{ index !== 1 ? item : `reviews (${product.reviews.length})`  }}
          </button>
        </div>
        <div class="tabs__body">
          <div :class="activeTab === 0 && '_active'" class="tabs__panel panel-tabs">
            <div class="panel-tabs__body">
              <div id="addReviewId" class="panel-tabs__title">{{ product.title }}</div>
              <div class="panel-tabs__text">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
          <div :class="activeTab === 1 && '_active'" class="tabs__panel panel-tabs ">
            <div class="panel-tabs__body">
              <div class="comments" v-if="product.reviews.length">
                <Review
                    v-for="review in product.reviews"
                    :key="review._id"
                    :review="review"
                />
              </div>
              <div v-else class="panel-tabs__text">There are no reviews for this product.</div>
              <span @click="onOpenReviewForm" class="panel-tabs__title">Add a review</span>
              <template v-if="isOpenReviewForm">
                <div class="panel-tabs__rating">Your Rating</div>
                <div class="panel-tabs__stars">
                  Bad
                  <vue3-star-ratings
                      v-model="form.rate"
                      :showControl="false"
                      :starColor="'#D58E32'"
                      :inactiveColor="'rgba(0,0,0,0.30)'"
                      :starSize="'17'"
                  />
                  Good
                </div>
                <form>
                  <label for="textarea">Your Review</label>
                  <textarea v-model="form.comment" name="textarea" id="textarea"></textarea>
                  <div class="form-group">
                    <input v-model="form.name" type="text" placeholder="Name*">
                    <input v-model="form.email" type="email" placeholder="Email*">
                    <button @click="onSubmitComment" type="button" class="btn">Continue</button>
                  </div>
                </form>
              </template>
            </div>
          </div>
          <div :class="activeTab === 2 && '_active'" class="tabs__panel panel-tabs">
            <div class="panel-tabs__body">
              <div class="panel-tabs__title">This Product is Good</div>
              <div class="panel-tabs__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit
                  esse cillum.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit
                  esse cillum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit
                  esse cillum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.</p>
              </div>
            </div>
          </div>
          <div :class="activeTab === 3 && '_active'" class="tabs__panel panel-tabs">
            <div class="panel-tabs__body">
              <div class="panel-tabs__title">This Product is Perfect</div>
              <div class="panel-tabs__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit
                  esse cillum.
                </p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit
                  esse cillum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea comm odo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit
                  esse cillum.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!-- верстка -->
  <ProductDetailsCarts/>
  <!-- верстка -->
  <NewsLetter/>
</template>

