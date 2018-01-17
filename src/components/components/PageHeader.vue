<template>
   <div class="header">
      链世界
    </div>
</template>

<style lang="scss" scoped>
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
</style>
