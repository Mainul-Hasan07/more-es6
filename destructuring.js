const fish = {id: 58,name: 'king Hilsha',price: 9000, phone: '01744545454', address: 'chandpur', dress: 'silver'};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const {phone, price, dress, id, name} = fish;

// console.log(phone, price);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, name);



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

// const work = company.web.work;
// const framework = company.web.framework;
// console.log(work);
// console.log(framework);
const {work,framework} = company.web;
const {food} = company.ceo;
const {second,third} = company.web.tech;
console.log(work,framework,food,second,third);
 