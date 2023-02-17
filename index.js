var navbar = document.getElementsByClassName("navbar");

var runOnScroll = function (evt) {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0) {
    navbar[0].classList.add("sticky");
  } else {
    navbar[0].classList.remove("sticky")
  }
};
var elements = document.querySelectorAll("body");
elements = Array.prototype.slice.call(elements);
elements.forEach(function (element) {
  window.addEventListener("scroll", runOnScroll, { passive: true });
});
// (function() {
//     var name = 'Ved Prakash';
//     var splittedName = name.split('')
//     var divData = document.getElementById('name')
//     for(var i = 0; i< splittedName.length; i++) {
//         // console.log('BHJDShj', divData)
//         // divData.innerHTML = (divData.innerHTML) ? '' : (divData.innerHTML)
//         // setTimeout(function(){
//         //     console.log(divData)
//             divData.innerHTML = divData.innerHTML +   splittedName[i];

//         // }, 300)

//     }


//  })();
// console.log(document.getElementsByClassName('name').innerHTML)

function sendData() {
  var name = document.getElementById("name").value.trim()
  var email = document.getElementById("email").value.trim()
  var message = document.getElementById("message").value.trim()

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // callback(xhr.responseText);
      console.log('xhr.responseText', xhr.responseText)
      makefromEmpty()
    }
  }
  var url = 'https://script.google.com/macros/s/AKfycbx6iDkpLB4p1NIYaH-vUIPCS24VE6o0fk7qc855j60/dev' + "?name=" + name + "&email=" + email + "&message=" + message
  xhr.open("POST", url, true);

  xhr.send()

}
function makefromEmpty() {
  document.getElementById("name").value = ''
  document.getElementById("email").value = ''
  document.getElementById("message").value = ''
  document.getElementById('sucess-txt').style.display = 'block';
  setTimeout(function () {
    document.getElementById('sucess-txt').style.display = 'none';

  }, 10000)
}
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
