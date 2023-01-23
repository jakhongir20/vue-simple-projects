<script setup lang="ts">
import {toRef} from "vue";

const props = defineProps({
  review: Object
});

toRef(props, 'review');
</script>

<template>
  <div class="review">
    <div class="review__name">{{review.name}}</div>
    <p class="review__email">{{review.email}}</p>
    <div class="review__date">{{new Date(review.date).toLocaleString()}}</div>
    <div class="review__rate">
      <p>
        <vue3-star-ratings
            v-model="review.rate"
            :showControl="false"
            :starColor="'#2a2a2a'"
            :inactiveColor="'rgba(190,182,182,0.78)'"
            :starSize="'12'"
            :disableClick="true"
        />
      </p>
    </div>
    <div class="review__comment">{{review.comment || 'no comment)'}}</div>
  </div>
</template>


<style scoped lang="scss">
.review {
  border: 1px solid #c2c2c2;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 4px;
  padding: 10px;
  &__name {
    font-weight: 600;
    font-size: 17px;
  }
  &__email {
    font-size: 13px;
  }
  &__date {
    font-size: 12px;
    font-weight: 500;
    margin-top: -15px;
    margin-bottom: 5px;
  }
  &__comment {
    margin-bottom: 10px;
  }
  &__rate {

  }
}
</style>
