<template>
     <div class="bar" @click="$router.go(-1)">
        <icons color="#101010" type="fanhui" :size="16"></icons>
        {{title}}
    </div>
</template>
<script>
export default {
    name: 'backBar',
    props: {
        title: {
            type: String,
            default: '返回',

        }
    }
}
</script>

<style lang="scss" scoped>
.bar {
  width: 375px;
  height: 44px;
  font-size: 16px;
  color: #ffffff;
  line-height: 44px;
  background-color: rgba(5, 154, 220, 1);
  text-align: left;
  .iconfont.icon-fanhui{
  margin-left: 9px;
  color: #FFF !important;
  display: inline-block;
}
}
</style>
