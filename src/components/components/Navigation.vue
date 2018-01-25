 <template>
 <div class="header">
    <div class="logo">
      <div class="icon-logo">

      </div>
    </div>
    <div class="nav">
      <router-link to="/" class="active" >资讯</router-link>
      <router-link to="/apps">应用</router-link>
      <router-link to="/investor">投资人</router-link>
      <router-link to="/navigation">工具</router-link>
      <router-link to="/activity">活动</router-link>
      <router-link to="/notes">小百科</router-link>
    </div>
 </div>

 </template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: column;

  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #28c9d8;
    color: #fff;
    font-size: 20px;

    .icon-logo{
width:96px;
          height: 25px;
          background-image: url("../../assets/logo.png");
          background-repeat: no-repeat;
          background-size: 96px 25px;
      }
  }


  .nav {
    color: #07727c;
    background: #28c9d8;
    height: 40px;
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
			font-size: 20px;
    }
  }
}
</style>
