<script setup lang="ts">

import {reactive, ref} from "vue";
import axios from "axios";
import {localStorageSetItem} from "@/helpers/useLocalstorage"

const form = reactive({
  login: null,
  password: null
});

async function login() {
  try {
    const {data} = await axios.post('/api/auth/admin/login', form);
    console.log('token', data.token)
    localStorageSetItem('token', data.token);
    alert('Successful login! 😊');
    onCloseModal();
  } catch (err) {
    alert(err.response?.data.message, '😒');
    console.error('Error: ', err);
  }
}

async function createUser() {
  try {
    const {data} = await axios.post('/api/auth/admin/create', form);
    alert('You have successfully registered! 🙂');
    onCloseModal();
    console.log('data', data)
  } catch (err) {
    alert(err.response?.data.message, '🤢');
    console.error('Error: ', err);
  }
}

function onCloseModal() {
  $('.modal-overlay').removeClass('_active signup signin');
  $('body').removeClass('_lock')
}
</script>


<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal__title login">Login</div>
      <div class="modal__title register">Register</div>
      <div class="modal__text">Enter your login and password</div>

      <div class="modal__body">
        <!-- signup modal -->
        <div class="modal__signup signup">
          <div class="signup__content signup__content--1">
            <div class="signup__top">
              <input v-model="form.login" type="text" placeholder="Login" class="input" name="login">
              <input v-model="form.password" type="password" placeholder="Password" class="input" name="password">
              <button @click="login" class="signup__btn  btn btn--min login"> Confirm</button>
              <button @click="createUser" class="signup__btn  btn btn--min register"> Confirm</button>
            </div>
          </div>
        </div>
        <div @click="onCloseModal" class="modal__close">
          <svg width="25" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
                  fill="white"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import "@/styles/scss/mixins.scss";

.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(21, 21, 21, 0.6);
  z-index: 30;
}


.modal-overlay._active.signin .login {
  display: block;
}
.modal-overlay._active.signup .register {
  display: block;
}
.modal-overlay._active.signup .login {
  display: none;
}
.modal-overlay._active.signin .register {
  display: none;
}
.modal-overlay._active {
  @include flexbox();
}
.modal {
  position: relative;
  background: #ffffff;
  box-shadow: 80px 120px 504px rgba(0, 0, 0, 0.16);
  border-radius: 2px;
  padding: 32px;
  width: 360px;
  text-align: center;
  @media (max-width: 374px) {
    width: 350px;
    padding: 28px;
  }
  // .modal__title
  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 12px;
  }

  // .modal__text
  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9092a3;
    margin-bottom: 18px;
    max-width: 290px;
  }

  &__close {
    position: absolute;
    right: -30px;
    top: 5px;
    cursor: pointer;
  }
}

/* ================================================================================================================ */

.signup {
  // .signup__text
  &__text {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #9092a3;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 7px;
    margin-top: 2px;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}


.input {
  background: rgba(144, 146, 163, 0.12);
  mix-blend-mode: normal;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #151515;
  padding: 12px 24px;
  display: block;
  margin-bottom: 15px;
  min-width: 296px;

  &::placeholder {
    font-size: 14px;
    line-height: 24px;
    color: #9092a3;
  }

  &[type="number"] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &[type="file"] {
    &::-webkit-file-upload-button {
      -webkit-appearance: none;
      margin: 0;
      display: none;
    }

    &::-webkit-keygen-select {
      display: none;
    }
  }

  &::-ms-clear {
    display: none;
  }
}

</style>
