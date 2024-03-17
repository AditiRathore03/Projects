const AiChoice= document.getElementById('computer')
const AditiChoice= document.getElementById('user')
const verdict= document.getElementById('result')
const choices=document.querySelectorAll('button')
let Ai
let Aditi
let decision
choices.forEach(choices=>choices.addEventListener('click',(e)=>{
    Aditi=e.target.id
    AditiChoice.innerHTML=Aditi
    generator()
    Result()

}))
function generator(){
    const random=Math.floor(Math.random()*3)+1
    if (random===1){
        Ai='rock'
    }
    if (random===2){
        Ai='paper'
    }
    if (random===3){
        Ai='scissor'
    }
    AiChoice.innerHTML=Ai
}

function Result() {
    if (Ai === Aditi) {
      decision = 'its a draw!'
    }
    if (Ai === 'rock' && Aditi === 'paper') {
      decision = 'you win!'
    }
    if (Ai === 'rock' && Aditi === 'scissor') {
      decision = 'you lost!'
    }
    if (Ai === 'paper' && Aditi=== 'scissor') {
      decision = 'you win!'
    }
    if (Ai === 'paper' && Aditi === 'rock') {
      decision= 'you lose!'
    }
    if (Ai === 'scissor' && Aditi === 'rock') {
      decision= 'you win!'
    }
    if (Ai === 'scissor' && Aditi=== 'paper') {
      decision = 'you lose!'
    }
    verdict.innerHTML = decision
  }