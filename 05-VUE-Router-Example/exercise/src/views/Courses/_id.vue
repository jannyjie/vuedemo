<script>
import axios from "axios";
//useRoute 包含網址上所有的參數資料
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    // 需要再加上這個方法才能取得這些參數資料
    const route = useRoute();

    // 給打回來的資料存取的地方
    const courses = reactive({ data: {} });

    const isError = ref(false);

    const router = useRouter();

    let timer = null;
     
    onMounted(() => {
      console.log(route.params.id);
      axios.get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
      .then((res) => {
        courses.data = res.data.data[0];
        console.log(courses.data);
      }).catch((error) => {
        isError.value = true;
        courses.data['error_message'] = error.response.data.error_message;
        timer = setTimeout(() => {
          //router.push 轉導到指定頁面
          //router.push({ push: '/Courses' });
          //回到上一頁
          router.go(-1);
        }, 3000);
        console.log(error.response.data);
      });
    });
    
    // 透過生命週期把轉導的"setTimeout" 給清除
    onUnmounted(() => {
      clearTimeout(timer);
    })

    return { courses, isError };
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{courses.data.name}}</h1>
      <h2>NTD: {{ courses.data.money}}</h2>
      <img :src="courses.data.photo" alt="" />
      <div v-if="Object.keys(courses.data).length !== 0">
        <img :src="courses.data.teacher.img" alt="" />
          <p>{{ courses.data.teacher.name }}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{ courses.data.error_message }}</h1>
  </div>
</template>

<style></style>

