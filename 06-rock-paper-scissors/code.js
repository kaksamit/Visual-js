const computerArray = ['rock','paper','scissors']
function rps(p) {
  c=computerArray[Math.floor(Math.random() * (3))]
  if(p==='rock' && c==='paper') {
    alert('You picked '+p+ '. Computer picked '+c+'. You lose.');
  } else
  if(p==='rock' && c==='scissors') {
    alert('You picked '+p+ '. Computer picked '+c+'. You win.');         
  } else
  if(p==='paper' && c==='rock') {
    alert('You picked '+p+ '. Computer picked '+c+'. You win.');
  } else
  if(p==='paper' && c==='scissors') {
    alert('You picked '+p+ '. Computer picked '+c+'. You lose.');
  } else
  if(p==='scissors' && c==='rock') {
    alert('You picked '+p+ '. Computer picked '+c+'. You lose.');    
  } else
  if(p==='scissors' && c==='paper') {
    alert('You picked '+p+ '. Computer picked '+c+'. You win.'); 
  } else{
    alert('You picked '+p+ '. Computer picked '+c+'. It\'s a draw.');
  }
}