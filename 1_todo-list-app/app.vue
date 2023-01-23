<script setup lang="ts">
import {reactive, ref} from "@vue/reactivity";
import {localStorageGetItem, localStorageSetItem} from "~/helpers/useLocalstorage";
import {onMounted} from "@vue/runtime-core";
import {useMaxDate} from "~/composables/useMaxDate";


interface List {
  id: number;
  creationDate: Date;
  text: string;
  checked: boolean;
}

const input = ref<string>("");
const date = ref<Date>(new Date());
const hasInputValue = ref<boolean>(true);
const items = ref<List[]>([]);
const inputDate = ref();

onMounted(() => {
  inputDate.value.setAttribute("min", useMaxDate());
});

if (process.client && localStorageGetItem("ITEMS") !== null) {
  items.value = localStorageGetItem("ITEMS");
}

const onAddItem = () => {
  if (!input.value || !date.value) {
    hasInputValue.value = false;
    return;
  }

  const newItem = reactive<List>({
    id: Date.now(),
    creationDate: date.value,
    text: input.value,
    checked: false
  });

  items.value.push(newItem);
  mutateStorage();

  input.value = "";
  date.value = new Date();
}

const onCheckedItem = (id: number) => {
  const index = items.value.findIndex((item) => item.id === id);
  items.value[index].checked = !items.value[index].checked;
  mutateStorage();
}

const onDeleteItem = (id: number) => {
  const index = items.value.findIndex((item) => item.id === id);
  items.value.splice(index, 1);
  mutateStorage();
}

function mutateStorage() {
  process.client && localStorageSetItem("ITEMS", items.value);
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="todo-list border p-3 mx-auto">
        <h3 class="todo-list__title text-center text-uppercase mb-4">Todo List</h3>
        <div class="todo-list__body">
          <div class="row mb-5">
            <div class="col-md-5 pe-0">
              <input
                  v-model.trim="input"
                  @input="input ? (hasInputValue = true) : (hasInputValue = false)"
                  type="text"
                  class="form-control"
                  placeholder="Напишите что-нибудь"
              />
            </div>
            <div class="col-md-4 pe-0">
              <input
                  ref="inputDate"
                  v-model.trim="date"
                  @input="date ? (hasInputValue = true) : (hasInputValue = false)"
                  type="date"
                  placeholder="Дата"
                  class="form-control"
              />
            </div>
            <div class="col-md-3">
              <button
                  @click="onAddItem"
                  class="btn btn-outline-primary w-100"
                  type="button"
              >
                Добавить
              </button>
            </div>
            <span
                class="invalid-input"
                :class="hasInputValue ? 'd-none' : 'd-block'"
            >Требуется заполнение
            </span>
          </div>
          <template v-if="items.length">
            <ul v-for="item in items" :key="item.id" class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center mb-1">
                <list
                    @checkedItem="onCheckedItem"
                    @deleteItem="onDeleteItem"
                    :item="item"
                />
              </li>
            </ul>
          </template>
          <lazy-client-only v-else>
            <p class="text-center mb-4">Пока нет данных 🙂</p>
          </lazy-client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
.wrapper {
  height: 100vh;
}

.todo-list {
  margin-top: 200px;
  @media (min-width: 480px) {
    width: 600px;
  }
}

.invalid-input {
  display: none;
  color: #dc3545;
  font-size: 0.8rem;
  padding-left: 1rem;
}

.bi-trash3 {
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #dc3545;
  }
}
</style>
