<!--进度条-->
<template>
  <div class="slider">
    <div class="content">
      <div class="fill" :style="{width: `${percent}%`}"></div>
      <div class="block" :style="{left: `${percent}%`}" v-drag="{name:'slider'}"></div>
    </div>
  </div>
</template>

<script>
export default {
name: "slider",
  props: {
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 100,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    },
    disabled: {
      default: false,
      type: Boolean
    },
    value: {
      default: 0,
      type: Number
    },
    color: {
      default: '#e9e9e9',
      type: String
    },
    selectedColor: {
      default: '#1aad19',
      type: String
    },
    activeColor: {
      default: '#1aad19',
      type: String
    },
    backgroundColor: {
      default: '#e9e9e9',
      type: String
    },
    blockSize: {
      default: 28,
      type: Number
    },
    blockColor: {
      default: '#ffffff',
      type: String
    },
    showValue: {
      default: false,
      type: Boolean
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      percent: 0
    }
  },
  mounted() {
    this.percent = this.value
  },
  methods: {
    bindchange () {
      this.$emit('change', this.percent)
    },
    bindchanging (percent) {
      percent *= 100
      if (percent >= this.max) {
        percent = this.max
      }
      if (percent <= this.min) {
        percent = this.min
      }
      this.percent = percent
    }
  },
  watch: {
  },
  directives: {
    drag: {
      // 指令的定义
      inserted: function (el, binding, vnode) {
        let thisElement = el  //获取当前元素
        let parent = thisElement.parentNode
        let percent = 0
        let max = parent.clientWidth
        let min = 0
        thisElement.onmousedown = (e) => {
          //算出鼠标相对元素的位置
          let disX = e.clientX - thisElement.offsetLeft
          let disY = e.clientY - thisElement.offsetTop
          document.onmousemove = (e)=>{
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX
            let top = e.clientY - disY
            //绑定元素位置到positionX和positionY上面
            thisElement.positionX = top
            thisElement.positionY = left
            //移动当前元素
            if (left <= min) {
              left = min
            }
            if (left >= max) {
              left = max
            }
            percent = parseInt((left * 1000 / parent.clientWidth))
            percent = percent / 1000
            vnode.context.bindchanging(percent)
          }
          document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
            vnode.context.bindchange()
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.slider{
  position: relative;
}
.content,.fill{
  width: 100%;
  height: 10px;
  box-sizing: border-box;
  border:1px solid #ccc;
  border-radius: 20px;
  position: relative;
}
.fill{
  left: 0;
  width: 0%;
  background: red;
}
.block{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  cursor: pointer;
}
</style>