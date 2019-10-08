import { abs, add } from '@/count';
import { expect } from 'chai';



describe('abs函数', ()=> {
    it('abs' , () => {
        expect (abs(1 + 1)).to.be.equal(2);
        expect(abs('')).to.be.deep.equal(NaN);
    });
})