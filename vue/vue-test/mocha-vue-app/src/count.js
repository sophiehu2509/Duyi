// import { nextTick } from "q";

export const abs = num => {
    let res = num;

    if(num < 0){
        return -num;
    }
    if(typeof num !== 'number'){
        return NaN;
    }

    return res;
}


// const add = (...rest) => {
//     return rest.reduce(() => {
//         return prev + nextTick;
//     })
// }

//等同于上面的函数
export const add = (...rest) => res.reduce((prev, next) => prev + next);

// console.log(abs(1));