// 送信完了画面の表示

let submit_btn = document.getElementById('contact-submit');
let close_btn = document.getElementById('close-button');
let thanks_img = document.getElementById('thanks-img');
let submit_msg = document.getElementById('container-submit');

let select_tel = document.getElementById('contact-tel');
let select_mail = document.getElementById('contact-mail');

// var setIntervalNum = "";
// var num = 0;

submit_btn.addEventListener('click', event => {
  scrollTo(0,0);
  submit_msg.style.visibility = "visible";
  // setIntervalNum = setInterval(imgFuluFulu, 1000);
});

close_btn.addEventListener('click', event => {
  submit_msg.style.visibility = "hidden";
  clearInterval(setIntervalNum);
});

select_tel.addEventListener('click', event => {
  if(select_mail.checked){
    select_mail.checked = false;
  }
});

select_mail.addEventListener('click', event => {
  if(select_tel.checked){
    select_tel.checked = false;
  }
});

// var num = 30;
// imgFuluFulu(num);
//
// let imgFuluFulu = rNum => {
//   if(rNum >= 0){
//     thanks_img.style.transform = "rotate(" + rNum "deg)";
//     num = rNum;
//   }else{
//     thanks_img.style.transform = "rotate(" + -rNum "deg)";
//     num = -rNum;
//   }
//
// }
