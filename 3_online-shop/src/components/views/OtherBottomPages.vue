<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Navigation, Pagination, Thumbs} from 'swiper';
import {_ibg} from "@/composables/useImgBg";

const modules = ref([
  FreeMode, Navigation, Thumbs, Pagination
]);

let thumbsSwiper = ref(null);

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper;
}

onMounted(() => {
  _ibg()
})
</script>

<template>
  <section class="page__gallery gallery-page">
    <div class="gallery-page__body">
      <div class="gallery-page__column">
        <div class="gallery-page__item item-gallery">
          <div class="item-gallery__header">
            <h2 class="item-gallery__title">furniture gallery</h2>
          </div>
          <div class="item-gallery__body">
            <div class="item-gallery__top">
              <nav class="item-gallery__tabs tabs-gallery">
                <a href="" class="tabs-gallery__item"><span>featured</span></a>
                <a href="" class="tabs-gallery__item tabs-gallery__item-active"><span>top seller</span></a>
                <a href="" class="tabs-gallery__item"><span>sale off</span></a>
                <a href="" class="tabs-gallery__item"><span>top rated</span></a>
              </nav>
            </div>
            <div class="item-gallery__content">
              <div class="item-gallery__images images-gallery">
                <swiper
                    :loop="true"
                    :navigation="false"
                    :spaceBetween="10"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules"
                    class="images-gallery__mainslider mySwiper2"
                >
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/04.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/03.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/01.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/05.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/02.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/03.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__mainslide">
                      <img src="@/assets/img/gallery/05.png" alt="">
                      <div class="images-gallery__actions">
                        <a href="" class="images-gallery__like" data-tooltip="like"></a>
                        <a href="" class="images-gallery__change" data-tooltip="change"></a>
                        <a href="" class="images-gallery__eye" data-tooltip="quick view"></a>
                        <a href="" class="images-gallery__addtocart" data-tooltip="add to cart"></a>
                      </div>
                      <div class="images-gallery__footer">
                        <div class="images-gallery__content">
                          <div class="images-gallery__prices">
                            <div class="images-gallery__price">$120.00</div>
                            <div class="images-gallery__oldprice">$160.00</div>
                          </div>
                          <div class="images-gallery__title">Aenean Ru Bristique Aenean Ru Bristique</div>
                          <div class="images-gallery__stars"><img src="@/assets/img/stars.jpg" alt=""></div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>

                <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
                    :navigation="{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }"
                    :spaceBetween="2"
                    :slidesPerView="6"
                    :freeMode="true"
                    :watchSlidesProgress="true"
                    :modules="modules"
                    :breakpoints="{
                         1170: {
                          slidesPerView: 6,
                        },
                         991: {
                          slidesPerView: 6,
                        },
                         575: {
                          slidesPerView: 5,
                        },
                         480: {
                          slidesPerView: 4,
                        },
                         415: {
                          slidesPerView: 3,
                        },
                         340: {
                          slidesPerView: 3,
                        },
                    }"
                    class="images-gallery__subslider mySwiper"
                >
                  <div class="swiper-button-prev swiper-button-arrow">
                    <div></div>
                  </div>
                  <div class="swiper-button-next swiper-button-arrow">
                    <div></div>
                  </div>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/04.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/03.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/01.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/05.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/02.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/03.png" alt=""></div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="images-gallery__subslide">
                      <div class="images-gallery__subimage"><img src="@/assets/img/gallery/05.png" alt=""></div>
                    </div>
                  </swiper-slide>

                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-page__column">
        <div class="images-gallery__advertisement advertisement-gallery">
          <div class="advertisement-gallery__image">
            <img src="@/assets/img/adv/adv_04.jpg" alt="">
            <div class="advertisement-gallery__item">
              <div class="advertisement-gallery__text">
                <p>from <span>$50.80</span></p>
                bedroom bed
              </div>
              <a href="" class="advertisement-gallery__btn">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page__blog blog-page">
    <div class="blog-page__header">
      <h2 class="blog-page__title">latest blog</h2>
      <div class="blog-page__dots"></div>
    </div>
    <swiper
        :loop="true"
        :navigation="false"
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :pagination="{
            el: '.blog-page__dots',
            type: 'bullets',
            clickable: true
            }"
        class="blog-page__slider"
    >
      <swiper-slide>
        <div class="blog-page__slide">
          <div class="blog-page__body">
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/product/mainslider.jpg" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim.
                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/adv/adv_03.jpg" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim.
                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/main2.webp" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim. Lorem ipsum dolor sit amet consectetur!

                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="blog-page__slide">
          <div class="blog-page__body">
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/product/mainslider.jpg" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim.
                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/adv/adv_03.jpg" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim.
                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/main2.webp" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim. Lorem ipsum dolor sit amet consectetur!

                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="blog-page__slide">
          <div class="blog-page__body">
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/product/mainslider.jpg" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim.
                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/adv/adv_03.jpg" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim.
                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
            <div class="blog-page__column">
              <div class="blog-page__item ">
                <a href="" class="blog-page__image _ibg"><img src="@/assets/img/main2.webp" alt=""></a>
                <div class="blog-page__box box-blog">
                  <div class="box-blog__header">
                    <span>15 jun 2020</span>
                    <p>4 comments</p>
                  </div>
                  <a href="" class="box-blog__title">Products That Fight Static </a>
                  <div class="box-blog__text">Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget
                    luctus
                    nisi. Nullam euismod leo vehicula, rutrum magna in, ornare enim vehicula, rutrum magna in,
                    ornare
                    enim. Lorem ipsum dolor sit amet consectetur!

                  </div>
                  <p><a href="" class="box-blog__btn btn">read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

  </section>

  <section class="page__brands brands-page">
    <div class="brands-page__body">
      <swiper
          :loop="true"
          :navigation="false"
          :slidesPerView="6"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :breakpoints="{
            991: {
              slidesPerView: 6,
              spaceBetween: 20
            },
            780: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 25
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            430: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 15
            }
          }"
          class="brands-page__slider"
      >
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/01.png" alt=""></a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/08.jpg" alt=""></a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/02.png" alt=""></a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/04.png" alt=""></a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/03.png" alt=""></a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/07.png" alt=""></a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="brands-page__slide">
            <a href="" class="brands-page__image"><img src="@/assets/img/brand/02.png" alt=""></a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="page__feedback feedback-page">
    <div class="feedback-page__header">
      <h2 class="feedback-page__title">client feedback</h2>
      <div class="feedback-page__dots"></div>
    </div>
    <div class="feedback-page__body">
      <swiper
          :loop="true"
          :navigation="false"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :pagination="{
            el: '.feedback-page__dots',
            type: 'bullets',
            clickable: true
            }"
          class="feedback-page__slider"
      >
        <swiper-slide>
          <div class="feedback-page__slide slide-feedback">
            <div class="slide-feedback__icon"></div>
            <p class="slide-feedback__text">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
            <div class="slide-feedback__bottom">
              <div class="slide-feedback__image"><img src="@/assets/img/feedback/01.jpg" alt=""></div>
              <div class="slide-feedback__name">
                <p>John Smith</p>
                <span>Furniture client</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback-page__slide slide-feedback">
            <div class="slide-feedback__icon"></div>
            <p class="slide-feedback__text">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
            <div class="slide-feedback__bottom">
              <div class="slide-feedback__image"><img src="@/assets/img/feedback/02.jpg" alt=""></div>
              <div class="slide-feedback__name">
                <p>John Smith</p>
                <span>Furniture client</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="feedback-page__slide slide-feedback">
            <div class="slide-feedback__icon"></div>
            <p class="slide-feedback__text">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
            <div class="slide-feedback__bottom">
              <div class="slide-feedback__image"><img src="@/assets/img/feedback/03.jpg" alt=""></div>
              <div class="slide-feedback__name">
                <p>John Smith</p>
                <span>Furniture client</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>


