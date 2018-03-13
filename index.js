// API CALL TO DOTA API

// var container = document.getElementById('main');
// var list = document.createElement('ul');
// container.appendChild(list);
//
// fetch('https://api.opendota.com/api/proPlayers')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     var i;
//
//     for(i = 0; i < 10; i++) {
//       appendPlayer(data[i].name);
//     }
//
//   })
//
// var appendPlayer = function(player) {
//   var item = document.createElement('li');
//
//   item.textContent = player;
//
//   list.appendChild(item);
// }

var lists = document.querySelectorAll('ul');
var button = document.querySelector('button');
var wasClicked = false;

button.addEventListener('click', function() {
  if (!wasClicked) {
    lists[0].style.display = "none";
    lists[1].style.display = "none";
    lists[2].style.display = "block";

    wasClicked = true;
  } else {
    lists[0].style.display = "block";
    lists[1].style.display = "block";
    lists[2].style.display = "none";

    wasClicked = false;
  }
});

console.log(lists[0]);
console.log(button);
