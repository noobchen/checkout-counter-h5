<template>
  <div class="home">
    <div class="checkout-info">
      <div class="checkout-text-wrap">你有一笔支付宝进账   <span class="_text_right">20.00元</span></div>
    </div>
    <div class="qr-wrap">
      <div class="qr-content">
        <div class="qr-title">在此扫码付款</div>
        <div class="qr-icon-wrap">
          <div class="qe-icon-wrap-content">
            <span class="icon-left"></span><span>支付宝</span>
          </div>
          <div class="qe-icon-wrap-content">
            <span class="icon-left"></span><span>微信支付</span>
          </div>
        </div>
        <div class="qr-img-wrap">
          <div class="qr-img"></div>
        </div>
        <div class="tool-wrap">
          <div><span>设置金额</span></div>
          <div class="_text_right" ><span class="_text_right" >保存图片</span></div>
        </div>
      </div>
    </div>
    <div class="bottm-content-wrap">
      <div class="checkout-log"><span class="iocn"></span>收款记录</div>
      <div class="uoser-info"><span class="iocn"></span>用户信息</div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 375px;
  .checkout-info{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 33px;
    line-height: 33px;
    opacity: 0.7;
    background-color: rgba(5, 154, 220, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    .checkout-text-wrap{
      width: 192px;
      height: 33px;
      color: rgba(255, 255, 255, 1);
      font-size: 14px;
      text-align: left;
      font-family: PingFangSC-regular;
      span{
        color: white;
      }
    }
  }
  .qr-wrap{
    box-sizing: border-box;
    width: 375px;
    padding: 40px;
    .qr-content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /*width: 334px;*/
      /*width: 100%;*/
      /*padding: 0px;*/
      .qr-title{
        padding: 8px 0;
        color: rgba(16, 16, 16, 1);
        font-size: 28px;

        text-align: center;
        font-family: PingFangSC-regular;
      }
      .qr-icon-wrap{
        width: 214px;
        display: flex;
        justify-content: space-between;
        span{
          /*visibility: visible;*/
          padding-left: 7px;
          vertical-align: middle;
        }
        .icon-left,.icon-right{
          display: inline-block;
          width: 30px;
          height: 30px;
          background-color: red;

        }
      }
    }
  }
  .qr-img-wrap{
    padding-top: 36px;
    .qr-img{
      width: 214px;
      height: 220px;
      background-color: darkred;
    }
  }
  .tool-wrap{
    display: flex;
    justify-content: space-between;
    width: 214px;
    padding-top: 23px;
    div{
      width: 50%;
      span{

        color: rgba(5, 154, 220, 1);
        font-size: 16px;
        font-family: PingFangSC-regular;
      }
    };
    &:first-child{
      border-right: 1px solid  rgba(187, 187, 198,1);
    }
  }
}
</style>
