import Father from '@/components/Father';
import Son from '@/components/Son';
//只关心自己 不关心其余的子组件 用 shallowMount
import { shallowMount } from '@vue/test-utils'; 
import { expect } from 'chai';
import { isIterable } from 'core-js';

describe('Father.vue', () => {
    it('测试show事件', () => {
        const wrapper = shallowMount(Father);
        //exist 判断一个元素是否存在
        expect(wrapper.find('.info').exists()).to.be.false;
        wrapper.find(Son).vm.$emit('show');
        expect(wrapper.find('.info').exists()).to.be.true;
    })
    it('执行changeAge函数', () => {
        const wrapper = shallowMount(Father);
        wrapper.vm.changeAge();
        expect(wrapper.vm.age).to.be.equal(16);
    })
})