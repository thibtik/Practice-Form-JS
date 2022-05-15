
// // ----------------------------------------------------------------------------
// // FUNCTIONS
// // ----------------------------------------------------------------------------
// function submitData() {
//   // 1- get values from forms
//   // TODO
//   let nameInput = document.querySelector('#username').value;
//   let mailInput = document.querySelector('#email').value;
//   let genderInput = document.querySelector('input[name="genderSelect"]:checked').value;
//   let friutSelector = document.querySelector('#fruit').value; 
  
//   let subjects = document.querySelectorAll('.subject');
//   let subject='';
//   for (s of subjects){
//     if (s.checked){
//       subject += s.value + " ,"
//     }
//   }
//   let message = document.querySelector('#sms').value;
 
//   // 2- change labels on right side
//   // TODO
//   document.querySelector('#getUsername').textContent =nameInput;
//   document.querySelector('#getEmail').textContent =mailInput;
//   document.querySelector('#getGender').textContent = genderInput;
//   document.querySelector('#getFruit').textContent = friutSelector;
//   document.querySelector('#getSubject').textContent = subject;
//   document.querySelector('#getMessage').textContent = message;
// }

// // ----------------------------------------------------------------------------
// // MAIN
// // ----------------------------------------------------------------------------
// let applyButton = document.getElementById("applyButton");
// applyButton.addEventListener("click", submitData);






// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  // TODO
  let nameInput = document.querySelector('#username').value;
  let mailInput = document.querySelector('#email').value;
  // let genderInput = document.querySelector('input[name="genderSelect"]:checked').value;
  let friutSelector = document.querySelector('#fruit').value; 
  
  let subjects = document.querySelectorAll('.subject');
  let subject='';
  for (s of subjects){
    if (s.checked){
      subject += s.value + " ,"
    }
  }
  let message = document.querySelector('#sms').value;
 
  // 2- change labels on right side
  // TODO
  document.querySelector('#getUsername').textContent =nameInput;
  document.querySelector('#getEmail').textContent =mailInput;
  // document.querySelector('#getGender').textContent = genderInput;
  document.querySelector('#getFruit').textContent = friutSelector;
  document.querySelector('#getSubject').textContent = subject;
  document.querySelector('#getMessage').textContent = message;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);

