//declare variabel based on the name of an object property
const myObject = {x: 2, y: 50, z: 600, a: 25, b: 68};
const {x,z,a,y} = myObject;
// console.log('myObject.p', myObject?.p?.q);

//destructuring array
const [p, q] = [10,20];
// console.log(p);

const [best, faltu] = ['momotaj', 'porshi'];
// console.log(best,faltu);

const {color,sky,money} = {sky: 'blue', soil: 'matti', color:'red', money: 500};


//chaining
const company = {name: 'GP',
 ceo: {id: 1, name: 'ajmol', food: 'fuchka'},
  web: {
      work: 'website development',
       employee: 22,
        framework: 'react',
    
    tech: {
        first: 'html',
        second: 'css',
        third: 'js'
    }
}
};
console.log(company?.web?.tech?.third);
console.log(company?.back?.tech.third);