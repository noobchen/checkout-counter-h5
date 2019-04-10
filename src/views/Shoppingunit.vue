<template>
  <div>
    <back-bar title="商户入驻"></back-bar>
    <steps :active="step" activeColor='#059ADC' :options="stepsTitle">
    </steps>
    <div class="content" v-show="step===0">
      <my-input :val='UserName' label="姓&emsp;&emsp;名: " placeholder="请输入真实姓名"></my-input>
      <my-input :val='UserName' label="联系电话: " placeholder="请输入手机号码"></my-input>
      <my-input :val='UserName' label="身份证号: " placeholder="请输入身份证号码"></my-input>
      <my-input :val='UserName' label="邮&emsp;&emsp;箱: " placeholder="请输入邮箱号码（选填）"></my-input>
      <my-input :val='UserName' label="客服电话: " placeholder="请输入客服电话（选填）"></my-input>
    </div>  
    <div class="content">
      <my-select :val='UserName' label="姓&emsp;&emsp;名: " placeholder="请输入真实姓名"></my-select>
    </div>
    <div class="next" @click="step++">下一步</div>
  </div>
</template>
<script>
import backBar from "../components/backBar/backBar";
import steps from "../components/uni-steps/uni-steps";
import myInput from "../components/myInput/myInput";
import mySelect from "../components/mySelect/mySelect";
export default {
  name: "shoppingunit",
  data() {
    return {
      step: 0,
      UserName: {value: ''},
      stepsTitle: [
        { title: "法人信息" },
        { title: "结算信息" },
        { title: "商户信息" },
        { title: "资料上传" }
      ]
    };
  },
  components: {
    backBar,
    steps,
    myInput,
    mySelect
  }
};
</script>
<style lang="scss" scoped>
.content{
  padding-top: 10px;
}
.next{
  margin-top: 325px;
  width: $gw;

height: 48px;
line-height: 48px;
background-color: rgba(5, 154, 220, 1);
color:#FFF;
font-size: 14px;
text-align: center;
font-family: Arial;
}
</style>

