import Son from '@/components/Son';
//只关心自己 不关心其余的子组件 用 shallowMount
import { mount } from '@vue/test-utils'; 
import { expect } from 'chai';
import sinon from 'sinon';

describe('son.vue', () => {
    it('测试name,age属性是否正确显示', () => {
        const name = 'yeye';
        const age = 18;
        const wrapper = mount(Son);
        wrapper.setProps({name, age});
        expect(wrapper.findAll('h4').at(0).text()).to.be.include(name);
        expect(wrapper.findAll('h4').at(1).text()).to.be.include(age);
    })
    it('点击button有没有正确执行传递的函数属性', () => {
        const wrapper = mount(Son);
        const spy = sinon.spy();
        wrapper.setProps({ fn: spy })
        wrapper.findAll('button').at(1).trigger('click');
        expect(spy.called).to.be.true;
    })
})