document.querySelector('.b1').addEventListener("click", property);

function property() {

  if (document.querySelector('.i1').checked === true) {
    document.querySelector('.i1').checked = false;
    document.querySelector('.p1').innerHTML = 'Click the button to enter your answer';
    document.querySelector('.p2').innerHTML = '';
    document.querySelector('.b1').style.backgroundColor = 'lightgreen';

  } else {
    document.querySelector('.i1').checked = true;
    document.querySelector('.p1').innerHTML = 'Remove selection using the same button';
    document.querySelector('.p2').innerHTML = 'THANK YOU FOR CLICKING';
    document.querySelector('.b1').style.backgroundColor = 'cyan';

  }

}
