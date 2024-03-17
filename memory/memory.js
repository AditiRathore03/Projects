
const cardArray = [
    {
        name: 'butterfly',
        img:'images/butterfly.jpg',

    },
    {
        name: 'cupcake',
        img:'images/cupcake.jpg',

    },
    {
        name: 'donut',
        img:'images/donut.jpg',

    },
    {
        name: 'pizza',
        img:'images/pizza.jpg',

    },
    {
        name: 'strawberry',
        img:'images/strawberry.jpg',

    },
    {
        name: 'watermelon',
        img:'images/watermelon.jpg',

    },
    {
        name: 'butterfly',
        img:'images/butterfly.jpg',

    },
    {
        name: 'cupcake',
        img:'images/cupcake.jpg',

    },
    {
        name: 'donut',
        img:'images/donut.jpg',

    },
    {
        name: 'pizza',
        img:'images/pizza.jpg',

    },
    {
        name: 'strawberry',
        img:'images/strawberry.jpg',

    },
    {
        name: 'watermelon',
        img:'images/watermelon.jpg',

    },
]
cardArray.sort(()=>0.5-Math.random())
const gridD=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon = []
function create(){
    for(let i = 0 ; i<12;i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/background.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click' , flipCard)
       gridD.appendChild(card)
    }
}
create()


    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const FirstCard= cardsChosenIds[0]
        const SecondCard = cardsChosenIds[1]
        // console.log('check for match!')
        if (FirstCard == SecondCard){
            cards[FirstCard].setAttribute('src','images/background.jpg')
            cards[SecondCard].setAttribute('src','images/background.jpg')
            alert('You have clicked the same image !')
        }
        if(cardsChosen[0] === cardsChosen[1]) {
            
            alert('You found a match!')
            cards[FirstCard].setAttribute('src','images/grey.jpg')
            cards[SecondCard].setAttribute('src','images/grey.jpg')
            cards[FirstCard].removeEventListener('click',flipCard)
            cards[SecondCard].removeEventListener('click',flipCard)
            
            cardsWon.push(cardsChosen)

        } else {
            cards[FirstCard].setAttribute('src','images/background.jpg')
            cards[SecondCard].setAttribute('src','images/background.jpg')
            

        }
        resultDisplay.innerHTML = cardsWon.length
        cardsChosen = []
        cardsChosenIds= []

        if (cardsWon.length == cardArray.length/2){
             resultDisplay.innerHTML = cardsWon.length.toString();
             resultDisplay.innerHTML = ('Congratulation! you did it');
        }

    }
    function flipCard() {
        const cardId = parseInt(this.getAttribute('data-id'));
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId)
       this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length ===2) {
            setTimeout(checkMatch,500)
        }
    }
    
