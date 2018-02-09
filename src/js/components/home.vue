<template>
  <div class="main-box">
    <P>ホームはまだきちんと作っていないので、これから作ります。</P>
    <h3>C言語</h3>
    <ul>
      <li>
        <router-link to="/video/111">C言語</router-link>
      </li>
      </ul>
    <h3>PacScript</h3>
    <ul>
      <li>
        <router-link to="/video/333">コマンドの利用</router-link>
      </li>
      <li>
        <router-link to="/video/444">制御方法</router-link>
      </li>
      <li>
        <router-link to="/video/555">JNIの利用</router-link>
      </li>
  </ul>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        message: 'hello'
      }
    },
    computed: {
      isVisible: function() {
        if (this.message) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

</script>

<style lang="scss">
  .main-box {
    padding-left: 40px;
    ul {
      a {
        text-decoration: none;
        color: green;
        &:visited {
          color: green;
        }
      }
    }
  }

</style>
