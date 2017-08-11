<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li class="item">
        <router-link to="/one">one</router-link>
      </li>
      <li class="item">
        <router-link to="/two">two</router-link>
      </li>
      <li class="item">
        <router-link to="/three">three</router-link>
      </li>
    </ul>
    <router-view :style="{color:'orange'}"></router-view>
    <Btn></Btn>
    <button @click="commit">点我减1</button>
    <div>
      {{myNum}}
    </div>
    <div>
      <h2>渲染出来的数据</h2>
      {{msg}}
    </div>
    <ul>
      <h2>遍历来的数据</h2>
      <li v-for="(item,index) in lists" :key="item.id" :class="'list'+item.id">
        {{item.name}}
      </li>
    </ul>
    <div>
      <h2>条件循环</h2>
      <p v-if="seen">can you see me?</p>
    </div>
    <div>
      <h2>事件监听v-on</h2>
      <p>{{msg}}</p>
      <button @click="reverse">点击翻转</button>
    </div>
    <div>
      <h2>数据绑定</h2>
      <input type="text" v-model="inp">
      <p>{{inp}}</p>
    </div>
    <div>
      <h2>父子组件数据传递，父传子</h2>
      <!--容易产生误会的地方，在这里做一个记录  -->
      <!--首先，在组件中我绑定是childData，现在我想从父组件 中拿来数据进行对子组件的数据进行渲染，首先我要知道，我想渲染的是什么数据。我想渲染的是lists这个数组中的每一项的name  -->
      <!--首先，循环遍历这个数组，然后把每一项的item绑定给childData，还需要记住的是，给每一个组件绑定一个key  -->
      <Child v-for="item in lists" :childData="item" :key="item.id"></Child>
    </div>
    <div>
      <h2>原始html</h2>
      <div v-html="rawHTML"></div>
    </div>
    <div>
      <a :href="url" target="_blank">链接</a>
      <input type="text" v-model="url">
    </div>
    <div>
      <h2>按键修饰符</h2>
      <button @keyup.enter="submit" @click="submit">提交</button>
    </div>
    <div>
      <h2>过滤器</h2>
      <p>{{value | capitalize |filterA}}</p>
    </div>
    <div>
      <h2>计算属性</h2>
      <ul>
        <li>姓：{{firstName}}</li>
        <li>名字：{{lastName}}</li>
        <li>姓名：{{fullName}}</li>
      </ul>
    </div>
    <div>
      <h2>watch的一个简单的案例</h2>
      <p>
        写一个 yes/no 的问题：
        <input type="text" v-model="question">
      </p>
      <p style="height:20px;">{{answer}}</p>
      <img :src="imgUrl" alt="">
    </div>
    <div>
      <h2>引入外部js测试</h2>
      <button type="button" @click="test">测试</button>
    </div>
  </div>
</template>

<script>
import Btn from "./components/vuex.vue"
import Child from "./components/child.vue"
import { mapGetters } from "vuex"
import {mapState} from "vuex"
import store from "./store/index"
import util from "./util/index"
export default {
  name: 'app',
  data: function () {
    return {
      msg: "渲染出来的数据",
      lists: [
        { name: "钢琴", id: 1 },
        { name: "小提琴", id: 2 },
        { name: "大提琴", id: 3 },
        { name: "马头琴", id: 4 },
        { name: "胡琴", id: 5 },
      ],
      seen: false,
      inp: "哈哈哈",
      rawHTML: "<button type='button'>原始生成</button>",
      name: "active",
      url: "",
      value: "david",
      firstName: "John",
      lastName: "Wick",
      // 计算属性案例部分
      question: "",
      answer: "",
      imgUrl: ""
    }
  },
  components: {
    Btn,
    Child
  },
  computed: {
    // ...mapGetters([
    //   "show"
    // ]),
    ...mapState({
        myNum:'num'
    }),
    fullName: {
      get: function (params) {
        return this.firstName + " " + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  },
  methods: {
    reverse: function () {
      this.msg = this.msg.split("").reverse().join("")
    },
    submit: function () {
      alert("提交了！")
    },
    getAnswer:function () {
      var self = this;
      setTimeout(function () {
        if (self.question.indexOf("?") === -1) {
          self.answer = "问题需要带“?”号！"
          return
        }
        self.$http.get("https://yesno.wtf/api")
          .then(function (res) {
            console.log(res)
            self.answer = res.data.answer;
            self.imgUrl = res.data.image;
          })
          .catch(function (err) {
            console.log(err)
          })

      }, 1000)
    },
    test:function () {
      util.myTest();
    },
    commit:function () {
      store.commit("minus")
    }
  },
  // 这里，你就没有必要耍帅装酷，用可读性极差的箭头函数，因为watch它设定好了，绑定上下文的作用域
  watch: {
    inp: function (newValue, oldValue) {
      console.log(oldValue + "go," + newValue + "come");
    },
    question: function (newQuestion) {
      this.answer = "等待您停止输入。。。";
      this.getAnswer()
    }
  },
  // 自定义过滤器
  filters: {
    capitalize: function (value) {
      if (value == "") {
        return ""
      }
      else {
        value = value.toString();
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value;
      }
    },
    filterA: function (value) {
      if (value == "") {
        return value;
      } else {
        value = value.toString();
        var len = value.length;
        value = value.slice(0, len - 1) + value.charAt(len - 1).toUpperCase();
        return value;
      }
    }
  },
  beforeCreate: function () {
    console.log("beforeCreate")
  },
  created: function () {
    console.log("create");
    console.log("Time is" + this.$moment().format())
  },
  beforeMount: function () {
    console.log("beforeMount")
  },
  mounted: function () {
    console.log("mounted")
  },
  beforeUpdate: function () {
    console.log("beforeUpdate")
  },
  updated: function () {
    console.log("updated")
  },
  activated: function () {
    console.log("activated")
  },
  deactivated: function () {
    console.log("deactivated")
  },
  beforeDestroy: function () {
    console.log("beforeDestroy")
  },
  destroyed: function () {
    console.log("destroyed")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.item {
  width: 50px;
  height: 20px;
}

.item a {
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 20px;
  text-align: center;
}

.active {
  background: red;
}
</style>
