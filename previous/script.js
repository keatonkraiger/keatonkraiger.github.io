var words = docuemnt.getElementsByClassName('word');
var words = [];
var index = 0;

words[index].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function cycle() {
    var current = words[index];
    var next = current == words.length - 1 ? words[0] : words[index+1];
    for(var i = 0; i < current.length; i++){
        animateLetterOut(current, i);
    }

    for(var i = 0; i < next.length; i++){
        next[i].className = 'letter behind';
        next[0].parentElement.style.opacity = 1;
        animateLetterIn(next, i);
    }

    current = (current == words.length-1) ? 0 : current+1;
}

function animateLetterOut(current, i) {
    setTimeout(function() {
          current[i].className = 'letter out';
    }, i*80);
  }

  function animateLetterIn(next, i) {
      setTimeout(function() {
          next[i].className = 'letter in';
      }, 340+(i*80));
  }

function splitLetters(word){
 var content = word.innerHTML;
 word.innerHTML;
 var letters = [];
 for (var i = 0; i < content.length; i++) {
     var letter = document.createElement('span');
     letter.className = 'letter';
     letter.innerHTML = content.charAt(i);
     word.appendChild(letter);
     letters.push(letter);
 }
 wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 400);



