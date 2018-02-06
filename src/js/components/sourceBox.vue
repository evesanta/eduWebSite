<template>
  <div class="sourceBox">
    
    <pre><code><slot name="title"></slot><slot></slot></code></pre>
  </div>
</template>

<style>
  .sourceBox {}
  
  .hljs {
    padding-top: 25px;
    font-size: 16px;
    position: relative;
    border: 2px solid blue;
  }
  
  div.sourceBox div {
    color: white;
    position: absolute;
    padding: 1px 10px;
    top: 0;
    left: 0;
    height: 20px;
    background-color: blue;
  }

</style>
