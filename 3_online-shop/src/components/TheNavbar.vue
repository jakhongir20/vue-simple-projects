<script setup lang="ts">

import {localStorageRemoveItem} from "@/helpers/useLocalstorage";


function signIn() {
  $('.modal-overlay').addClass('_active signin');
  $('body').addClass('_lock')
}

function signUp() {
  $('.modal-overlay').addClass('_active signup');
  $('body').addClass('_lock')
}

function logout() {
  localStorageRemoveItem('token');
  alert('You have logged out 🤔');
}
</script>

<template>
  <header class="header">
    <div class="header__top top-header">
      <div class="top-header__content _container">
        <div class="top-header__column">
          <div class="top-header__actions actions-header">
            <div class="actions-header__menu">
              <ul class="actions-header__list">
                <li><a href="" class="actions-header__link actions-header__link_usd"><span>USD</span></a>
                  <span class="menu__arrow arrow arrow-one"></span>
                  <ul class="sub-actions-header__list one">
                    <li><a href="" class="sub-actions-header__link">USD</a></li>
                    <li><a href="" class="sub-actions-header__link">SUM</a></li>
                    <li><a href="" class="sub-actions-header__link">RUB</a></li>
                  </ul>
                </li>
                <li><a href="" class="actions-header__link actions-header__link_lang">English</a>
                  <span class="menu__arrow arrow arrow-two"></span>
                  <ul class="sub-actions-header__list two">
                    <li><a href="" class="sub-actions-header__link">English</a></li>
                    <li><a href="" class="sub-actions-header__link">Uzbek</a></li>
                    <li><a href="" class="sub-actions-header__link">Russian</a></li>
                  </ul>
                </li>
                <li><a href="" class="actions-header__link actions-header__link_help">Help</a>
                  <span class="menu__arrow arrow arrow-three"></span>
                  <ul class="sub-actions-header__list three">
                    <li><a href="" class="sub-actions-header__link">Helping</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="top-header__column">
          <div class="top-header__account account">
            <div class="account__content">
              <ul class="account__list">
                <li><a href="" @click.prevent="signIn" class="account__link account__link_login">Login</a></li>
                <li><a href="" @click.prevent="signUp" class="account__link account__link_register">Register</a></li>
                <li><span class="account__link account__link_select"><img src="@/assets/img/header/myaccount.png"
                                                                          alt="">

										</span>
                  <ul class="sub-account__list">
                    <li><a href="" class="sub-account__link">My Account</a></li>
                    <li><a href="" class="sub-account__link">Wish List</a></li>
                    <li><a href="" class="sub-account__link"> Checkout</a></li>
                    <li><a href="" class="sub-account__link">Shopping Cart</a></li>
                    <li><a href="" @click.prevent="logout" class="sub-account__link">Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom bottom-header">
      <div class="bottom-header__content _container">
        <div class="bottom-header__column">
          <div class="bottom-header__item" data-da="menu__list,last,768">
            <a href="tel:+99894943445533" class="bottom-header__phone">+998 (94) 344-55-33</a>
          </div>
        </div>
        <div class="bottom-header__column">
          <div class="bottom-header__item">
            <router-link to="/" class="bottom-header__logo"><img src="@/assets/img/header/logo.png" alt="Logo">
            </router-link>
          </div>
        </div>
        <div class="bottom-header__column">
          <div class="bottom-header__item">
            <button class="bottom-header__cart"><span>2</span></button>
            <div class="main-header__quickcart quickcart">
              <div class="quickcart-container ">
                <div class="quickcart-content ">
                  <div class="quickcart__body">
                    <div class="quickcart__text">
                      Showing 2 of 2 items added
                    </div>
                    <div class="quickcart__item item-quickcart">
                      <div class="item-quickcart__img">
                        <img src="@/assets/img/product/chair.jpg" alt="costume">
                      </div>
                      <div class="item-quickcart__text">
                        <div class="item-quickcart__label">BEAUTIFUL CHAIR</div>

                        <p>Quantity: <span>2</span></p>
                      </div>
                      <div class="item-quickcart__amount">
                        <div class="cost">$30.00</div>
                        <button><img src="@/assets/img/cross.jpg" alt=""></button>
                      </div>
                    </div>
                    <div class="quickcart__item item-quickcart">
                      <div class="item-quickcart__img">
                        <img src="@/assets/img/product/table.jpg" alt="costume">
                      </div>
                      <div class="item-quickcart__text">
                        <div class="item-quickcart__label">Soft Chair</div>

                        <p>Quantity: <span>3</span></p>
                      </div>
                      <div class="item-quickcart__amount">
                        <div class="cost">$120.00</div>
                        <button><img src="@/assets/img/cross.jpg" alt=""></button>
                      </div>
                    </div>
                    <div class="quickcart__total total">
                      <div class="total__body">
                        <div class="total__text">Total excluding delivry:</div>
                        <div class="total__amount">$150.00</div>
                      </div>
                    </div>
                    <div class="quickcart__buttons">
                      <a href="product.html" class="btn">View Cart</a>
                      <a href="product.html" class="btn btn-arrow">Continue to checkout<img src="@/assets/img/arrow.png"
                                                                                            alt=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="header__main main-header">
      <div class="main-header__content _container">
        <div class="main-header__column">
          <div class="main-header__body">
            <div class="main-header__category category">
              <span class="category__heading">Select a category</span>
              <ul class="category__list">
                <li><a href="" class="category__link category__link_arrow">New Arrivals</a>
                  <ul class="sub-category__list">
                    <li><a href="" class="sub-category__link">new product</a></li>
                    <li><a href="" class="sub-category__link">desk board</a></li>
                    <li><a href="" class="sub-category__link">desk chair</a></li>
                  </ul>
                </li>
                <li><a href="" class="category__link">Chair</a></li>
                <li><a href="" class="category__link category__link_arrow">Chair stul</a>
                  <ul class="sub-category__list">
                    <li><a href="" class="sub-category__link">CHair for school</a></li>
                    <li><a href="" class="sub-category__link">CHair for school</a></li>
                    <li><a href="" class="sub-category__link">CHair for school</a></li>
                    <li><a href="" class="sub-category__link">desk board</a></li>
                    <li><a href="" class="sub-category__link">desk board</a></li>
                  </ul>
                </li>
                <li><a href="" class="category__link">Shelf</a></li>
                <li><a href="" class="category__link">Black Board</a></li>
                <li><a href="" class="category__link">Indoor lightly</a></li>
                <li><a href="" class="category__link">Bedroom</a></li>
                <li><a href="" class="category__link">Shelf New</a></li>
              </ul>
            </div>
            <div class="main-header__form" data-da="menu__body,first,768">
              <form>
                <input type="text" class="" placeholder="Search products ..." autocomplete="off" name="form[]">
                <button class="main-header__search"></button>
              </form>
            </div>

          </div>
        </div>
        <div class="main-header__column">
          <div class="main-header__menu menu">
            <nav class="menu__body">
              <ul class="menu__list">
                <li><a href="catalog.html" class="menu__link active">home</a></li>
                <li><a href="" class="menu__link">furniture</a>
                  <div class="sub-menu__content">
                    <div class="sub-menu__body">
                      <div class="sub-menu__column">
                        <a href="" class="sub-menu__label">Camcorders</a>
                        <ul class="sub-menu__list">
                          <li><a href="" class="sub-menu__link">Sofa</a></li>
                          <li><a href="" class="sub-menu__link">Chair</a></li>
                          <li><a href="" class="sub-menu__link">Shelf white</a></li>
                          <li><a href="" class="sub-menu__link">Shelf black</a></li>
                          <li><a href="" class="sub-menu__link">Desk</a></li>
                          <li><a href="" class="sub-menu__link">Window</a></li>
                        </ul>
                      </div>
                      <div class="sub-menu__column">
                        <a href="" class="sub-menu__label">Camcorders</a>
                        <ul class="sub-menu__list">
                          <li><a href="" class="sub-menu__link">Sofa</a></li>
                          <li><a href="" class="sub-menu__link">Chair</a></li>
                          <li><a href="" class="sub-menu__link">Shelf white</a></li>
                          <li><a href="" class="sub-menu__link">Shelf black</a></li>
                          <li><a href="" class="sub-menu__link">Desk</a></li>
                          <li><a href="" class="sub-menu__link">Window</a></li>
                        </ul>
                      </div>
                      <div class="sub-menu__column">
                        <a href="" class="sub-menu__label">Camcorders</a>
                        <ul class="sub-menu__list">
                          <li><a href="" class="sub-menu__link">Sofa</a></li>
                          <li><a href="" class="sub-menu__link">Chair</a></li>
                          <li><a href="" class="sub-menu__link">Shelf white</a></li>
                          <li><a href="" class="sub-menu__link">Shelf black</a></li>
                          <li><a href="" class="sub-menu__link">Desk</a></li>
                          <li><a href="" class="sub-menu__link">Window</a></li>
                        </ul>
                      </div>

                    </div>
                    <div class="sub-menu__image _ibg">
                      <img src="@/assets/img/header/img_h.jpg" alt="">
                    </div>
                  </div>

                </li>
                <li><a href="catalog.html" class="menu__link">chair</a></li>
                <li><a href="catalog.html" class="menu__link">table</a></li>
                <li><a href="catalog.html" class="menu__link">sofa</a></li>
                <li><a href="catalog.html" class="menu__link">bedroom</a></li>
                <li><a href="catalog.html" class="menu__link">blog</a></li>
              </ul>
            </nav>
            <div class="menu__icon icon-menu" data-da="bottom-header__column,0,768">
              <div class="icon-menu__lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>
