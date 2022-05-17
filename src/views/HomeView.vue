<template>
  <div>
    <div>
      <hello-world />
    </div>
    <div>
      <test-com />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import TestCom from "../components/TestCom";
export default {
  name: "HomeView",

  components: {
    HelloWorld,
    TestCom,
  },
};
</script>
