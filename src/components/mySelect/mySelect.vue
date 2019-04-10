<template>
  <div class="wrap">
    <div class="content">
      <label v-html="label"></label>
      <!-- <input v-model="val.value" type="text" name id :placeholder="placeholder"> -->
      <div class="select">
        <span class="placeholder">dsfdsafsd</span>
      </div>
    </div>
    <ul>
        <li>dsfdsaf</li>
        <li>dsfdsaf</li>
        <li>dsfdsaf</li>
        <li>dsfdsaf</li>
        <li>dsfdsaf</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "myInput",
  props: ["label", "placeholder", "val"],
  data() {
    return {
      test: "姓&emsp;&emsp;名: "
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
  width: $gw;
  position: relative;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid transparent;

  .content {
    display: flex;
    box-sizing: border-box;
    margin: 0 12px;
    border-bottom: 1px solid $hui;
  }
}
label {
  width: 70px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}

.select {
  .placeholder {
    padding: 6px;

    flex: 3;
  }
}
ul{
    padding: 0px;
        margin: 0 12px;
    margin-top: 5px;


        border: 1px solid $hui;

    li{
        box-sizing: border-box;
        margin: 0 12px;
        border-bottom: 1px solid $hui;

        // border: 1px solid $hui;
        list-style: none;
    }
}
</style>
