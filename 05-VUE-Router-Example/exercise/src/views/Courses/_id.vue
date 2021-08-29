<script>
//useRoute 包含網址上所有的參數資料
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
  setup() {
    // 需要再加上這個方法才能取得這些參數資料
    const route = useRoute();

    const courses = reactive({ data: {} });
    onMounted(() => {
      console.log(route.params.id);
      axios.get(`https://vue-lessons-api.herokuapp.com/courses/${id}`)
      .then((res) => {
        courses.data = res.data.data[0];
        console.log(courses.data);
      });
    });

    return {};
  },
};
</script>
<template>
  <div>
    <div>
      <h1></h1>
      <h2>NTD:</h2>
      <img src="" alt="" />
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
    </div>
    <!-- error_message -->
    <h1></h1>
  </div>
</template>

<style></style>
