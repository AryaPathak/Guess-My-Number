// const msg = document.querySelector('.message');
// msg.textContent = 'Correct Number';
//
// document.querySelector('.guess').value=3;

let nmb = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore=0;
//document.querySelector('.number').textContent = nmb;


document.querySelector('.check').addEventListener('click', function(){
  const guess = document.querySelector('.guess').value;

  if(!guess){
    document.querySelector('.message').textContent = '⛔️No number!';
  }else if(guess == nmb){
    document.querySelector('.message').textContent = '🎉 You WON the game !!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = nmb;

    if(score > highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }

  }else if(guess > nmb){
    if(score>0){
      document.querySelector('.message').textContent = '📈The guess is High';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '💥You LOST the game !!!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }


  }else{
    if(score>0){
      document.querySelector('.message').textContent = '📉The guess is Low';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = '💥You LOST the game !!!';
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }



});



document.querySelector('.again').addEventListener('click', function(){
  score=20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value='';
  nmb = Math.trunc(Math.random()*20)+1;
});
