const firstName='Azad';
const lastName='Hossain';
const fullName=firstName+ ' ' +lastName;
console.log(fullName);
const fullName2=`My name is ${firstName} ${lastName}`
console.log(fullName2);

const giveMe=`give me money ${10+20}`;
console.log(giveMe);

function getCardHTML(name,description,price){

    const div=`
    
       <div class="card">
       
         <h2>${name.toUpperCase()}</h2>
         <p>Price: $ ${price}</p>
         <p>${description}</p>

       
       </div>
    
    
    
    `;

    console.log(div);


}

getCardHTML('iPhone 17','This is the latest iPhone model',999);