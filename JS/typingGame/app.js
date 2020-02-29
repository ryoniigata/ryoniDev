var QUESTION = localStorage.QUESTION || 'shcoo WEB campus';

var types = [];
// タイマーの処理
var timer = null;
var startTime = 0;

//タイピングしたい文字列を１文字ずつ処理
function init(){
  document.querySelector('.container').innerHTML = '';

  types = QUESTION.split('').map(function(str){
  var type = document.createElement('span');
  type.className = 'type'; // <span class="type"></span>
  type.textContent = str;  // <span class="type">s</span> → strの要素全てに
  document.querySelector('.container').appendChild(type); // class="container"の子要素にする
  return type;
});
timerEnd();
document.querySelector('.timer').textContent = '0.000';


}
init();




function timeStart(){
  startTime = new Date().getTime();
  timer = setInterval(function(){
    var time = (new Date().getTime() - startTime) / 1000;
    document.querySelector('.timer').textContent = time.toFixed(3);
  },10)
}

function timerEnd(){
  clearInterval(timer);
  timer = null;
}



//キーボードのイベントを監視
document.addEventListener('keydown', function(event){
  var keyCode = event.keyCode;
  // console.log(keyCode);

  if (keyCode === 13){ // enter key
      init();
      return;
  }

  var key = '';
  if (keyCode === 32){ // space key
      key = ' ';
  }

  if (keyCode >= 65 && keyCode <= 90){ // a to z
    //keyCodeをキーに変換
    key = String.fromCharCode(keyCode);
    if (event.shiftKey){
      key = key.toUpperCase();
    }else{
      key = key.toLowerCase();
    }
  }

  //keyがnullでなければtrue
  if (key){
    if(timer === null){
      timeStart();
    }
    var next = types[0];
    if (next.textContent === key){
      next.classList.add('ok'); // <span class="type ok">s</span>
      types.shift(); //要素を次に移動し、前の要素は削除する
      if (types.length === 0){
        timerEnd();
      }
    }else{
      next.classList.add('ng');
    }
  }

});

document.querySelector('.container').addEventListener('click',function(event){
  var text = prompt('問題文を入力して下さい');
  if(text){
    QUESTION = text;
    //HTMLのストレージから何度も取り出せる
    localStorage.QUESTION = text;
    init();
  }
})
