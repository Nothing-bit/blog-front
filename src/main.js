import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import vueCookie from 'vue-cookies'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from "highlight.js"
import 'highlight.js/styles/atom-one-light.css'
import {lineNumbersBlock} from "@/assets/js/highlight-line-number"
import { Message } from 'element-ui';
import copy from 'copy-to-clipboard';
Vue.use(ElementUI)
Vue.use(vueCookie)

Vue.directive('highlight', {
    update(el){
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
            if(block.getAttribute("highlighted")=="true"){
                return
            }
            block.setAttribute("highlighted","true")
            let code = block.innerHTML// block.innerHTML="<div><span style='margin-right: 10px;padding: 3px;border: #107ded solid 1px;color:#107ded;border-radius: 5px'>"+ "test"+"</span><button>复制</button>"+block.innerHTML+"</div>"
            hljs.highlightElement(block)
            lineNumbersBlock(block)
            block.innerHTML="<div><div style='padding: 5px 0px 10px 20px'><span style='margin-right: 10px;padding: 5px;border: rgba(16, 125, 237,0.5) solid 1px;color:#107ded;border-radius: 5px'>"+ block.className.match(/(?<=language-).*(?= hljs)/).toString()+"</span><button class='el-button el-button--default el-button--mini' style='border-radius: 5px'>复制</button></div>"+block.innerHTML+"</div>"
            let copyButton = block.querySelector('button')
            if(copyButton!=null){
                copyButton.onclick = function (){
                    copy(code)
                    Message.success({message:"复制成功！", offset:100})
                }
            }
        })
    }
})

import router from "./router.js";
// Vue.config.devtools = true;
Vue.prototype.baseUrl="https://www.zhoujianguo.ltd:8080"
new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount("#app")
