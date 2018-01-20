 <template>
  <div class="nav">
      <router-link to="/" class="active" >资讯</router-link>
      <router-link to="/apps">应用</router-link>
      <router-link to="/investor">投资人</router-link>
      <router-link to="/navigation">导航</router-link>
      <router-link to="/activity">活动</router-link>
      <router-link to="/notes">小百科</router-link>
    </div>
 </template>

<style lang="scss" scoped>
.nav {
  color: #07727c;
  background: #28c9d8;
  height: 50px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
