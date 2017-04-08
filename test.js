$( document ).ready(function() {
    console.log("TEST!");
    $("#click").click(function(){
         var somearray = [0,2];
         console.log(somearray);
    });
});
function handleClick(cb) {
  var food = document.getElementsByName('food[]');
  for (var i = 0, iLen = food.length; i < iLen; i++){
    if (food[i].checked){
      console.log("at index: " + i);
    }
  }
}

/*
can append here:
function handleClick(cb) {
  display("Clicked, new value = " + cb.checked);
}
function display(msg) {
  var p = document.createElement('p');
  p.innerHTML = msg;
  document.body.appendChild(p);
}*/
