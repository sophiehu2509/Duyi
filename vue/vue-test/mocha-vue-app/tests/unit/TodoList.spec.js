import TodoList from '@/components/TodoList';
import { mount } from '@vue/test-utils'
import { expect } from 'chai';
import { isIterable } from 'core-js';

describe('TodoList.vue', ()=>{
    it('初始时，mask为""',  () => {
        const wrapper = mount(TodoList);
        const maskVal = wrapper.find('input').text();
        const maskData = wrapper.vm.mask;
        expect(maskVal).to.be.equal('');
        expect(maskData).to.be.equal("");
    })
    it('数据mask跟随输入框内容改变', () => {
        const wrapper = mount(TodoList);
        const oInput = wrapper.find('input');
        // oInput.element.value = "yeye";
        // oInput.trigger('input');
        //上面两句话等同于下面这一句
        oInput.setValue('yeye');
        expect(wrapper.vm.mask).to.be.equal('yeye');
    })

    it('添加任务', () => {
        const wrapper = mount(TodoList);
        const oBtn = wrapper.find('button');
        const length = wrapper.vm.maskList.lenth;
        oBtn.trigger('click');
        expect(wrapper.vm.maskList).lengthOf(length + 1);
        expect(wrapper.findAll('li')).lengthOf(length + 1);
        expect(wrapper.vm.mask).to.be.equal('');
    })
})