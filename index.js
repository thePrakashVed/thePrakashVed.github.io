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
