<script setup lang="ts">
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper';

const modules = ref([
  FreeMode, Navigation, Thumbs, Pagination
]);

let thumbsSwiper = ref(null);

function setThumbsSwiper(swiper: any)  {
  thumbsSwiper.value = swiper;
}

</script>


<template>
  <section class="page__main main-page">
    <aside class="page__left leftpage">
      <div class="leftpage__top">
        <div class="leftpage__label">Hot Deals</div>
        <div class="leftpage__dots"></div>
      </div>
      <swiper
          :loop="true"
          :navigation="false"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :pagination="{
            el: '.leftpage__dots',
            type: 'bullets',
            clickable: true
            }"
          class="leftpage__body"
      >
        <swiper-slide>
          <div class="leftpage__item item-leftpage">
            <div class="item-leftpage__image">
              <img src="@/assets/img/product/001.webp" alt="">
              <button type="submit" class="item-leftpage__addtocart"><span>Add to cart</span></button>
              <div class="item-leftpage__event">
                <div>
                  <p>25</p>
                  <span>days</span>
                </div>
                <div>
                  <p>10</p>
                  <span>hrs</span>
                </div>
                <div>
                  <p>45</p>
                  <span>mins</span>
                </div>
                <div>
                  <p>30</p>
                  <span>secs</span>
                </div>
              </div>
            </div>
            <div class="item-leftpage__text">Aenean Ru Bristique</div>
            <div class="item-leftpage__stars">
              <img src="@/assets/img/stars.jpg" alt="">
            </div>
            <div class="item-leftpage__footer">
              <div class="item-leftpage__actions">
                <a href="" class="item-leftpage__eye"></a>
                <a href="" class="item-leftpage__love"></a>
                <a href="" class="item-leftpage__change"></a>
              </div>
              <div class="item-leftpage__prices">
                <div class="item-leftpage__oldprice"><span>$350.00</span></div>
                <div class="item-leftpage__price"><span>$300.00</span></div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="leftpage__item item-leftpage">
            <div class="item-leftpage__image">
              <img src="@/assets/img/product/sofa2.jpg" alt="">
              <button class="item-leftpage__addtocart"><span>Add to cart</span></button>
              <div class="item-leftpage__event">
                <div>
                  <p>25</p>
                  <span>days</span>
                </div>
                <div>
                  <p>10</p>
                  <span>hrs</span>
                </div>
                <div>
                  <p>45</p>
                  <span>mins</span>
                </div>
                <div>
                  <p>30</p>
                  <span>secs</span>
                </div>
              </div>
            </div>
            <div class="item-leftpage__text">Aenean Ru Bristique</div>
            <div class="item-leftpage__stars">
              <img src="@/assets/img/stars.jpg" alt="">
            </div>
            <div class="item-leftpage__footer">
              <div class="item-leftpage__actions">
                <a href="" class="item-leftpage__eye"></a>
                <a href="" class="item-leftpage__love"></a>
                <a href="" class="item-leftpage__change"></a>
              </div>
              <div class="item-leftpage__prices">
                <div class="item-leftpage__oldprice"><span>$350.00</span></div>
                <div class="item-leftpage__price"><span>$300.00</span></div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="leftpage__item item-leftpage">
            <div class="item-leftpage__image">
              <img src="@/assets/img/product/sofa3.jpg" alt="">
              <button class="item-leftpage__addtocart"><span>Add to cart</span></button>
              <div class="item-leftpage__event">
                <div>
                  <p>25</p>
                  <span>days</span>
                </div>
                <div>
                  <p>10</p>
                  <span>hrs</span>
                </div>
                <div>
                  <p>45</p>
                  <span>mins</span>
                </div>
                <div>
                  <p>30</p>
                  <span>secs</span>
                </div>
              </div>
            </div>
            <div class="item-leftpage__text">Aenean Ru Bristique</div>
            <div class="item-leftpage__stars">
              <img src="@/assets/img/stars.jpg" alt="">
            </div>
            <div class="item-leftpage__footer">
              <div class="item-leftpage__actions">
                <a href="" class="item-leftpage__eye"></a>
                <a href="" class="item-leftpage__love"></a>
                <a href="" class="item-leftpage__change"></a>
              </div>
              <div class="item-leftpage__prices">
                <div class="item-leftpage__oldprice"><span>$350.00</span></div>
                <div class="item-leftpage__price"><span>$300.00</span></div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </aside>
    <div class="page__right rightpage">
      <swiper
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :pagination="false"
          class="rightpage__body"
      >
        <swiper-slide>
          <div class="rightpage__item item-rightpage">
            <img src="@/assets/img/product/mainslider.jpg" alt="">
            <div class="item-rightpage__content">
              <h1 class="item-rightpage__title">indoor <span>furniture</span></h1>
              <div class="item-rightpage__text">save up to 50% of all furniture</div>
              <button type="submit" class="item-rightpage__btn">Shop now</button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rightpage__item item-rightpage">
            <img src="@/assets/img/main2.webp" alt="">
            <div class="item-rightpage__content">
              <h1 class="item-rightpage__title">soft <span>chair</span></h1>
              <div class="item-rightpage__text">save up to 50% of all furniture</div>
              <button type="submit" class="item-rightpage__btn">Shop now</button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="rightpage__item item-rightpage">
            <img src="@/assets/img/product/sofa4.jpg" alt="">
            <div class="item-rightpage__content">
              <h1 class="item-rightpage__title">lightly <span>sofa</span></h1>
              <div class="item-rightpage__text">save up to 50% of all furniture</div>
              <button type="submit" class="item-rightpage__btn">Shop now</button>
            </div>

          </div>
        </swiper-slide>
      </swiper>
      <div class="rightpage__arrows">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

    </div>
  </section>
  <section class="page__support support-page">
    <div class="support-page__body">
      <div class="support-page__column">
        <div class="support-page__item">
          <div class="support-page__circle">
            <div class="support-page__icon __one"></div>
          </div>
          <div class="support-page__text">
            Free Shipping
            <p>all order</p>
          </div>
        </div>
      </div>
      <div class="support-page__column">
        <div class="support-page__item">
          <div class="support-page__circle">
            <div class="support-page__icon __two"></div>
          </div>
          <div class="support-page__text">
            24/7 customer
            <p>support</p>
          </div>
        </div>
      </div>
      <div class="support-page__column">
        <div class="support-page__item">
          <div class="support-page__circle">
            <div class="support-page__icon __three"></div>
          </div>
          <div class="support-page__text">
            money back
            <p>guarantee</p>
          </div>
        </div>
      </div>
      <div class="support-page__column">
        <div class="support-page__item">
          <div class="support-page__circle">
            <div class="support-page__icon __four"></div>
          </div>
          <div class="support-page__text">
            MEMBER DISCOUNT
            <p>first order</p>
          </div>
        </div>
      </div>

    </div>

  </section>
  <section class="page__advertisement advertisement-page">
    <div class="advertisement-page__body">
      <div class="advertisement-page__column">
        <div class="advertisement-page__item">
          <a href="" class="advertisement-page__image">
            <img src="@/assets/img/adv/adv_03.jpg" alt="">
            <div class="advertisement-page__text">
              <div>
                guest room <p>sofa</p> <span>-20%</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="advertisement-page__column">
        <div class="advertisement-page__item advertisement-page__item_small">
          <a href="" class="advertisement-page__image advertisement-page__image_small">
            <img src="@/assets/img/adv/adv_1.jpg" alt="">
          </a>
        </div>
        <div class="advertisement-page__item advertisement-page__item_small">
          <a href="" class="advertisement-page__image advertisement-page__image_small">
            <img src="@/assets/img/adv/adv_2.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


