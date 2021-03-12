<template>
  <div class="component1">
    <h1 @click="clickh1">{{ msg }}</h1>
    <p v-if="hShow" @click="clickh2">you clicked h1</p>
    <p>{{info}}</p>

    <p>{{name}}{{age}}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  reactive,
  toRefs,
  ref,
  onMounted
} from "vue";
//接口泛型
interface Data {
  hShow: Boolean;
}
export default defineComponent({
  name: "component1",
  props: {
    msg: String
  },
  data() {
    return {
      info: "sanly"
    };
  },
  methods: {
    clickh2() {
      this.info = "sanlyshi";
    }
  },
  // setUp函数
  // 使用Composition API 的入口
  // 在beforeCreate之前调用
  // 在setup中没有this
  // 返回对象中的属性刻在模板中使用
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      hShow: false
    });
    const name = ref("小四");
    const age = ref(18);
    const clickh1 = (): void => {
      data.hShow = true;
      age.value = 20; //想改变值或获取值 必须.value
    };
    onMounted(() => {
      //~~~~~~~~~~~~~~~~~~
      const app: string = "12";
      console.log(app);
      //~~~~~~~~~~~~~~~~~~
      interface ManInterface {
        name: string;
        age: number;
      }
      const man = (man: ManInterface): string => {
        return man.name + man.age.toString();
      };
      const app1 = man({ name: "xiong", age: 2 });
      console.log(app1);
      //~~~~~~~~~~~~~~~~~~
      const numberArra: number[] = [1, 2, 3];
      // 数组名：Array<元素类型> = [x,x,x]
      const numberArrb: Array<number> = [4, 5, 6];
      console.log(numberArra);
      //~~~~~~~~~~~~~~~~~~
      interface  Sconfig  {
        color?:string;
        width?:number;
      }
      //变量名  （参数名：参数类型）：返回的数据类型 =>{ 函数体 }
      const caculateSqure = (config:Sconfig):{color:string;area:number}=>{
        let newS = {color:'white',area:80}
        if(config.color){
          newS.color = config.color
        }
        if(config.width){
          newS.area = config.width*newS.area
        }
        return newS
      }
      const app3 = caculateSqure({color:'black',width:100})
      console.log(app3);
      //~~~~~~~~~~~~~~~~~~
    });
    return {
      ...toRefs(data),
      clickh1,
      name, //必须返回 模板中才能使用
      age
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 添加“scoped”属性以将CSS仅限于此组件 -->
<style scoped>
h1,
p {
  cursor: pointer;
}
</style>
