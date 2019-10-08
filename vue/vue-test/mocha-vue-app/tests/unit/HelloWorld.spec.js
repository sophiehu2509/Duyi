import HelloWorld from '@/components/HelloWorld';
import Vue from 'vue';
import { expect } from 'chai';
import {mount} from '@vue/test-utils';


describe('HelloWorld.vue', () =>{
    it('测试能否正常渲染', () => {
        const msg = 'hello'
        const Constructor = Vue.extend(HelloWorld);
        const vm = new Constructor({
            propsData:{
                msg
            }
        }).$mount();
        const domInner = vm.$el.getElementsByTagName('h1')[0].innerHTML
        expect(domInner).to.be.include(msg);
    })

    it('测试msg属性，渲染，vue test util', ()=> {
        const msg = 'hello world';
        // const wrapper = mount(HelloWorld, {
        //     propsData:{msg}
        // }).$mount();
        const wrapper = mount(HelloWorld);
        wrapper.setProps({msg});
        
        const domInner = wrapper.find('h1').text();
        expect(domInner).to.be.include(msg);
    })
})