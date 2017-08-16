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
    <div :style="style">
      {{myNum}}
    </div>
    <div :style="style">
      <h2>渲染出来的数据</h2>
      {{msg}}
    </div>
    <ul :style="style">
      <h2>遍历来的数据</h2>
      <li v-for="(item,index) in lists" :key="item.id" :class="'list'+item.id">
        {{item.name}}
      </li>
    </ul>
    <div :style="style">
      <h2>条件循环</h2>
      <p v-if="seen">can you see me?</p>
    </div>
    <div :style="style">
      <h2>事件监听v-on</h2>
      <p>{{msg}}</p>
      <button @click="reverse">点击翻转</button>
    </div>
    <div :style="style">
      <h2>数据绑定</h2>
      <input type="text" v-model="inp">
      <p>{{inp}}</p>
    </div>
    <div :style="style">
      <h2>父子组件数据传递，父传子</h2>
      <!--容易产生误会的地方，在这里做一个记录  -->
      <!--首先，在组件中我绑定是childData，现在我想从父组件 中拿来数据进行对子组件的数据进行渲染，首先我要知道，我想渲染的是什么数据。我想渲染的是lists这个数组中的每一项的name  -->
      <!--首先，循环遍历这个数组，然后把每一项的item绑定给childData，还需要记住的是，给每一个组件绑定一个key  -->
      <Child v-for="item in lists" :childData="item" :key="item.id"></Child>
      父子组件传递数据结束
    </div>
    <div :style="style">
      <h2>原始html，定义一个含有标签部分的字符串。然后v-html渲染</h2>
      <div v-html="rawHTML"></div>
      v-html部分结束
    </div>
    <div :style="style">
      <a :href="url" target="_blank">链接</a>
      <input type="text" v-model="url">
    </div>
    <div :style="style">
      <h2>按键修饰符</h2>
      <button @keyup.enter="submit" @click="submit">提交</button>
      按键修饰器部分结束
    </div>
    <div :style="style">
      <h2>过滤器</h2>
      <p>{{value | capitalize |filterA}}</p>
      过滤器部分结束
    </div>
    <div :style="style">
      <h2>计算属性</h2>
      <ul>
        <li>姓：{{firstName}}</li>
        <li>名字：{{lastName}}</li>
        <li>姓名：{{fullName}}</li>
      </ul>
      计算属性部分 结束
    </div>
    <div :style="style">
      <h2>watch的一个简单的案例</h2>
      <p>
        写一个 yes/no 的问题：
        <input type="text" v-model="question">
      </p>
      <p style="height:20px;">{{answer}}</p>
      <img :src="imgUrl" alt="">
      watch部分 结束
    </div>
    <div :style="style">
      <h2>引入外部js测试</h2>
      <button type="button" @click="test">测试</button>
      引入外部js测试 结束
    </div>
    <div :style="style">
      <h2>class与style的绑定</h2>
      <div :style="style">
        <h3>一、class的绑定，:class=""</h3>
        <h4>第一种：直接绑定类名:class="{'class1':true/false,'class2':true/false}",true/false可以用变量替代</h4>
        <div class="div" :class="{'ok':flag,'error':!flag}"></div>
        <div>
          <button type="button" @click="changeClass">动态切换ok-error类名</button>
        </div>
        <h4>第二种：直接绑定一个对象:class="classObject"</h4>
        <div class="div" :class="classObject1"></div>
        <h4>第二种：直接绑定一个对象，但是通过计算属性来做判断，这是非常棒的方式，在项目中会经常用的到的</h4>
        <div class="div" :class="classObject2"></div>
        <h4>第三种：数组的形式:class="[classA,classB]",classA与classB都是data中的数据，所以不是字符串的书写形式，并且在data中分别对应一个写好的类名</h4>
        <div class="div" :class="[classA,classB]"></div>
        <h4>第四种：数组中包含对象，一般添加类名较多的时候，并且有条件判断</h4>
        <div :class="[{'ok':flag},classC]"></div>
        <h5>上边的几种方式需要灵活运用，没有什么是死的。</h5>
      </div>
      <div :style="style">
        <h3>二、style的绑定:style=".."</h3>
        <h4>第一种，直接绑定属性和属性值,:style="{'attr1':'value1','attr2','value2'}"</h4>
        <div :style="{'width':'200px','height':'200px','border':'1px solid #ccc','margin-left':marginLeft+'px'}"></div>
        <!--这种方式一般用来动态改变一些属性值，比如轮播图之类的，直接这么定义绑定，显得麻烦，还很撒比  -->
        <div>
          <button type="button" @click="moveRight">点我让上方的div右移，每次10px</button>
        </div>
        <h4>第二种：直接绑定一个对象 :style="styleObj"</h4>
        <div :style="styleObj1"></div>
        <h4>第二种，直接绑定一个对象，但是是通过计算属性获得</h4>
        <div :style="styleObj2"></div>
        <h4>第三种：数组的方式:style="[styleObj1,styleObj2]",在数组中直接书写定义好的对象</h4>
        <div :style="[styleObj3,styleObj4]"></div>
      </div>
      class与style绑定部分结束
    </div>
    <div :style="style">
      <h2>条件判断：v-if,v-else,v-else-if,基本用法不演示。为了作用于一组标签，我们一般把这些标签放在template中</h2>
      <div>
        <template v-if="bover">
          <label for="">username</label>
          <input type="text">
        </template>
        <template v-else>
          <label for="">Email</label>
          <input type="text">
        </template>
        <button type="button" @click="toggle">toggle</button>
      </div>
      <div>
        这块明显会存在问题，就是切换的时候，input的内容没有改变
      </div>
      <div>
        <template v-if="loginType==='username'">
          <label for="">username</label>
          <input type="text" key="username">
        </template>
        <template v-else>
          <label for="">Email</label>
          <input type="text" key="email">
        </template>
        <button type="button" @click="toggleType">toggle</button>
      </div>
      v-if 部分结束
    </div>
    <div :style="style">
      <h2>关于v-for，循环遍历，基础语法不多做解释</h2>
      <div :style="style">
        <h3>v-for在对象中的使用:v-for="(value,key,index) in obj",注意顺序,value,key,index</h3>
        <ul>
          <li v-for="(value,key,index) in obj" :key="index">
            {{value}}-{{key}}--{{index}}
          </li>
        </ul>
      </div>
      <div :style="style">
        <h3>与template联用，将标签包裹在template中，把template当做容器</h3>
        <template v-for="(n,index) in 3">
          <button :key="index">{{n}}--按钮</button>
        </template>
      </div>
      <div :style="style">
        <h3>官网的一个案例</h3>
        <div>
          <input type="text" v-model="thing" @keyup.enter="addNewThing">
          <!--此处，直接用了组件替代li了，如果不想替代，那么就使用li  -->
          <!--但是有一个问题不得不提，常规的写法是这样，应该是遍历li，然后让在li属性中添加is属性等于组件 -->
          <ul>
            <!--被注释的是正确的方式，但是不规范的方式也没有报错。。。  -->
            <!-- <li is="Todo" v-for="(item,index) in things" :key="item.id" :title="item.title" @del="dele(index)"></li> -->
            <Todo v-for="(item,index) in things" :key="item.id" :title="item.title" @del="dele(index)"></Todo>
          </ul>
        </div>
      </div>
      <div :style="style">
        <h3>带有v-if的v-for，意味着v-if将会在每次遍历的时候触发</h3>
        <ul>
          <li v-for="item in things" :key="item.id" v-if="item.isCompleted">{{item.title}}</li>
        </ul>
      </div>
      <div :style="style">
        <h3>遍历的数组数据更新问题，其他的数组操作都会触发数据更新，唯独slice,concat,filter不会，处理这种情况需要返回一个数组然后替换原数组，concat和slice用法雷同，都是数组的替代。</h3>
        <!--先看一下，filter  -->
        <ul>
          <li v-for="(item,index) in testLists" :key="index">{{item}}</li>
        </ul>
        <button @click="changeArray">用filter变魔术</button>
      </div>
      <div :style="style">
        <h3>改变数组下标，看看会不会更新数据。经过测试确实不能改变数据</h3>
        <ul>
          <li v-for="(item,index) in anotherLists" :key="index">{{item}}</li>
        </ul>
        <button @click="changeThings">使用数组下标改变数据，测试能否将hello改为123</button>
      </div>
      <div :style="style">
        <h3>修改数组长度，直接vm.array.length = newLength,不生效。下边有两个栗子。第一个是直接修改数组长度，第二是使用splice方法。</h3>
        <ul>
          <li v-for="(item,index) in arr" :key="index">{{item}}</li>
        </ul>
        <button @click="changeLength_1">直接改变数组长度</button>
        <button @click="changeLength_2">splice方式</button>
      </div>
      <div :style="style">
        <h3>显示过滤结果/排序结果,要么是计算属性，要么是直接在遍历时候调用方法</h3>
        <ul>
          <li v-for="(n,index) in evenNum" :key="index">{{n}}</li>
        </ul>
        <ul>
          <li v-for="(m,index) in even(number)" :key="index">{{m}}</li>
        </ul>
      </div>
      v-for 部分结束
    </div>
    <div :style="style">
      <h2>事件监听器</h2>
      <div :style="style">
        <h3>基本用法</h3>
        <button @click="hello">Hello!</button>
      </div>
      <div>
        <h3>按键修饰符</h3>
        <button @click.ctrl="doSomeThing">鼠标click+ctrl联用</button>
      </div>
      事件监听结束
    </div>
    <div :style="style">
      <h2>表单控件绑定</h2>
      <div :style="style">
        <h3>文本</h3>
        <input type="text" v-model="inp" placeholder="输入内容">
        <p>输入的内容是：{{inp}}</p>
      </div>
      <div :style="style">
        <h3>多行文本</h3>
        <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
        <p>{{textarea}}</p>
      </div>
      <div :style="style">
        <h3>复选框-单个选项，绑定一个布尔值</h3>
        <input type="checkbox" v-model="checked">{{checked}}
      </div>
      <div :style="style">
        <h3>复选框-多个选项，绑定一个数组</h3>
        <input type="checkbox" v-model="checkedNames" value="Jack">Jack
        <input type="checkbox" v-model="checkedNames" value="Rose">Rose
        <input type="checkbox" v-model="checkedNames" value="Tom">Tom
        <span>checkedNames是:{{checkedNames}}</span>
      </div>
      <div :style="style">
        <h3>单选按钮</h3>
        <input type="radio" v-model="radio" value="one">one
        <input type="radio" v-model="radio" value="two">two
        <span>选择的是：{{radio}}</span>
      </div>
      <div :style="style">
        <h3>单选框</h3>
        <select name="" id="" v-model="select">
          <option disabled value="">尽情挑选</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <span>选择的是：{{select}}</span>
      </div>
      <div :style="style">
        <h3>多选框</h3>
        <select name="" id="" v-model="multiple" multiple>
          <option disabled value="">尽情挑选</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <span>选择的是：{{multiple}}</span>
      </div>
      <div>
        <h3>修饰符,lazy,number,trim</h3>
        <p>lazy表示触发事件的时机改了，v-model是oninput事件，而lazy是onchange事件</p>
        <p>number，将输入转化为number处理</p>
        <p>trim，去除输入的前后空白</p>
      </div>
      表单控件绑定 结束
    </div>
    <div :style="style">
      <h2>组件部分，基础语法不赘述。看看最精髓的地方，父子组件通信。</h2>
      <div :style="style">
        <p>父子组件的通信，用官网的话说就是，props down，events up</p>
        <p>写一个例子，子组件是一个按钮，点击+1，父组件显示总和</p>
        <p>{{total}}</p>
        <AddBtn @add="increase"></AddBtn>
        <AddBtn @add="increase"></AddBtn>
      </div>
      <div :style="style">
        <h3>v-model的组件，因为直接在组件中去定义v-model，并不会触发双向的数据绑定，所以在组件中定义的话有两点注意</h3>
        <p>在组件中接收一个value作为prop</p>
        <p>并且触发input事件，并传入新的值</p>
        <Price v-model="price"></Price>
        <p>{{price}}</p>
      </div>
      <div :style="style">
        <h3>定制组件，什么叫定制组件。</h3>
        <p>在一个组件中，v-model 默认使用 value 作为 prop，以及默认使用 input 作为监听事件，但是一些输入框类型，例如 checkbox 和 radio，可能会用到 value。在这种情况下，为了避免冲突，就会需要使用组件的 model 选项</p>
        <MyRadio v-model="foo" value="test1"></MyRadio>
        <MyRadio v-model="foo" value="test2"></MyRadio>
        <p>{{foo}}</p>
        此处存疑，案例不清晰。。。
      </div>
    </div>
  </div>
</template>

<script>
// vuex定义的按钮组件
import Btn from "./components/vuex.vue"
// 父子组件传递数据用的子组件
import Child from "./components/child.vue"
// vuex中的mapGetters
import {
  mapGetters
} from "vuex"
import {
  mapState
} from "vuex"
import store from "./store/index"
import util from "./util/index"
import Todo from "./components/todo.vue"
// 父子组件部分 子组件
import AddBtn from "./components/Button.vue"
// 组件部分内容 price组件
import Price from "./components/Price.vue"
import MyRadio from "./components/MyRadio.vue"
export default {
  name: 'app',
  data: function () {
    return {
      style: {
        "border": "1px solid #ccc",
        "margin": "10px 0 10px 0",
        "padding": "5px"
      },
      msg: "渲染出来的数据",
      lists: [{
        name: "钢琴",
        id: 1
      },
      {
        name: "小提琴",
        id: 2
      },
      {
        name: "大提琴",
        id: 3
      },
      {
        name: "马头琴",
        id: 4
      },
      {
        name: "胡琴",
        id: 5
      },
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
      imgUrl: "",
      // class与style绑定部分
      flag: true,
      classObject1: {
        ok: true,
        error: false
      },
      classA: "ok",
      classB: "error",
      classC: "div",
      marginLeft: 0,
      styleObj1: {
        "width": "200px",
        "height": "200px",
        "border": "1px solid #ccc"
      },
      styleObj3: {
        "width": "200px",
        "height": "200px"
      },
      // v-if相关部分数据
      bover: true,
      loginType: "username",
      // v-for相关部分数据
      obj: {
        name: "大卫·贝克汉姆",
        job: "足球运动员",
        age: 40,
        wife: "维多利亚"
      },
      thing: "",
      things: [
        {
          title: "写博客",
          id: 1,
          isCompleted: true
        },
        {
          title: "改代码",
          id: 2,
          isCompleted: false
        },
        {
          title: "打台球",
          id: 3,
          isCompleted: false
        },
        {
          title: "睡觉",
          id: 4,
          isCompleted: true
        },
      ],
      thingsId: 5,
      testLists: [
        "Football",
        "Basketball",
        "Netball",
        "Tableball"
      ],
      anotherLists: [
        "hello",
        "world",
        "hhhh"
      ],
      arr: [
        "nice",
        "beautiful",
        "cute",
        "pretty"
      ],
      number: [0, 1, 2, 3, 4, 5],
      // 表单控件绑定部分数据
      inp:"",
      textarea:"",
      // 直接绑定布尔值
      checked:false,
      checkedNames:[],
      radio:"",
      select:"",
      multiple:[],
      // 组件部分数据
      total:0,
      price:"",
      foo:""
    }
  },
  components: {
    Btn,
    Child,
    Todo,
    AddBtn,
    Price,
    MyRadio
  },
  computed: {
    // ...mapGetters([
    //   "show"
    // ]),
    ...mapState({
      myNum: 'num'
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
    },
    classObject2: function () {
      return {
        ok: this.flag,
        error: !this.flag
      }
    },
    styleObj2: function () {
      return {
        "width": "200px",
        "height": "200px",
        "border": "1px solid #ccc"
      }
    },
    styleObj4: function () {
      return {
        "border": "1px solid #ccc"
      }
    },
    evenNum: function () {
      return this.number.filter((item) => {
        return item % 2 === 0;
      })
    }
  },
  methods: {
    reverse: function () {
      this.msg = this.msg.split("").reverse().join("")
    },
    submit: function () {
      alert("提交了！")
    },
    getAnswer: function () {
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
    test: function () {
      util.myTest();
    },
    commit: function () {
      store.commit("minus")
    },
    changeClass: function () {
      this.flag = !this.flag;
    },
    moveRight: function () {
      this.marginLeft += 10;
    },
    toggle: function () {
      this.bover = !this.bover
    },
    toggleType: function () {
      if (this.loginType === 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = "username"
      }
    },
    addNewThing: function () {
      this.thingsId++;
      this.things.push({
        title: this.thing,
        id: this.thingsId,
        isCompleted: true
      })
      this.thing = ""
    },
    dele: function (index) {
      this.things.splice(index, 1)
    },
    // 使用数组filter方法，不能更新数组，而是返回一个新数组，那么需要心数组赋值给原数组
    changeArray: function () {
      this.testLists = this.testLists.filter(function (item) {
        // console.log(item)
        // console.log(item.match(/Football/g))
        return item.match(/Football/g);
      })
    },
    // 直接改变下标的方式，确实不能触发数据更新
    changeThings: function () {
      this.anotherLists[0] = "123";
      console.log(this.anotherLists)
    },
    // 直接改变数组length
    changeLength_1: function () {
      this.arr.length = 3;
    },
    changeLength_2: function () {
      this.arr.splice(3);
    },
    even: function (number) {
      return number.filter((item) => {
        return item % 2 !== 0;
      })
    },
    // 事件监听器示例
    hello:function (event) {
      alert("hello!");
      console.log(event)
    },
    doSomeThing:function () {
      alert("触发了！")
    },
    // 组件部分
    increase:function () {
      this.total+=1;
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
      } else {
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

.div {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}

.ok {
  background: lightgreen;
}

.error {
  background: red;
}
</style>
