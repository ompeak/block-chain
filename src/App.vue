<template>
  <div id="app">
    <div class="header">
      链世界
    </div>
    <div class="nav">
      <router-link to="/" class="active" >资讯</router-link>
      <router-link to="/informationdetail/1">应用</router-link>
      <router-link to="/investor">投资人</router-link>
      <router-link to="/navigation">导航</router-link>
      <router-link to="/activity">活动</router-link>
      <router-link to="/repository">知识库</router-link>
    </div>
<router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./css/common.scss";

.header {
  font-size: 1rem;
  color: #fff;
  background: #28c9d8;
  height: 3rem;
  display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box; /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox; /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法： Chrome 21+ */
  display: flex; /* 新版本语法： Opera 12.1, Firefox 22+ */ /*垂直居中*/ /*老版本语法*/
  -webkit-box-align: center;
  -moz-box-align: center; /*混合版本语法*/
  -ms-flex-align: center; /*新版本语法*/
  -webkit-align-items: center;
  align-items: center; /*水平居中*/ /*老版本语法*/
  -webkit-box-pack: center;
  -moz-box-pack: center; /*混合版本语法*/
  -ms-flex-pack: center; /*新版本语法*/
  -webkit-justify-content: center;
  justify-content: center;
}
.nav {
  color: #07727c;
  background: #28c9d8;
  height: 50px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: #07727c;
    text-decoration: none;
    cursor: pointer;

  }
  .router-link-exact-active {
    color: #fff;
  }
}
</style>
