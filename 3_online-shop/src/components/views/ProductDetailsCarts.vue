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
  <div class="page__products products-slider">
    <div class="products-slider__container _container">
      <div class="products-slider__header __details">
        <h2 class="products-slider__title">new furniture</h2>
        <div class="products-slider__dots "></div>

      </div>
      <div class="products-slider__list--responsive"></div>
      <swiper
          :loop="true"
          :navigation="false"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :pagination="{
            el: '.products-slider__dots',
            type: 'bullets',
            clickable: true
            }"
          class="products-slider__item __details"
      >
        <swiper-slide>
          <div class="products-slider__slide">
            <div class="products-slider__items items-products">
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__image">
                    <img src="@/assets/img/product/01.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__image">
                    <div class="items-product__sale">sale</div>
                    <img src="@/assets/img/product/02.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Lorem ipsum dolor sit amet consectetur.</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__oldprice"><span>$30.00</span></div>
                      <div class="items-product__price"><span>$20.00</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__image">
                    <img src="@/assets/img/product/01.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__sale">sale</div>
                  <div class="items-product__image">
                    <img src="@/assets/img/product/03.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__oldprice"><span>$35.00</span></div>
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="products-slider__slide">
            <div class="products-slider__items items-products ">
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__image">
                    <img src="@/assets/img/product/01.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__sale">sale</div>
                  <div class="items-product__image">
                    <img src="@/assets/img/product/02.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__oldprice"><span>$30.00</span></div>
                      <div class="items-product__price"><span>$20.00</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__image">
                    <img src="@/assets/img/product/04.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>


                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__sale">sale</div>
                  <div class="items-product__image">
                    <img src="@/assets/img/product/03.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__oldprice"><span>$35.00</span></div>
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="products-slider__slide">
            <div class="products-slider__items items-products ">
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__image">
                    <img src="@/assets/img/product/01.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__sale">sale</div>
                  <div class="items-product__image">
                    <img src="@/assets/img/product/04.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__oldprice"><span>$35.00</span></div>
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">
                  <div class="items-product__sale">sale</div>
                  <div class="items-product__image">
                    <img src="@/assets/img/product/03.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">
                      <div class="items-product__oldprice"><span>$35.00</span></div>
                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="items-products__column">
                <div class="items-product">

                  <div class="items-product__image">
                    <img src="@/assets/img/product/02.jpg" alt="">
                  </div>
                  <div class="items-product__body">
                    <div class="items-product__title">Aenean Ru Bristique</div>
                    <div class="items-product__stars">
                      <img src="@/assets/img/stars.jpg" alt="">
                    </div>
                    <div class="items-product__hover hover-item-product">
                      <a href="" class="hover-item-product__quickview">Quick View</a>
                      <button type="submit" class="hover-item-product__addtocart"><span>Add to cart</span></button>
                    </div>
                  </div>
                  <div class="items-product__footer">
                    <div class="items-product__actions">
                      <a href="" class="items-product__like"></a>
                      <a href="" class="items-product__change"></a>
                    </div>
                    <div class="items-product__prices">

                      <div class="items-product__price"><span>$25.00</span></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>



