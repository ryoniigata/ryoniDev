
// 移動ボタンの処理
$('#go').click(function(){
  $('#target').css('bottom','+=20');
});

$('#left').click(function(){
  $('#target').css('left','-=20');
});

$('#right').click(function(){
  $('#target').css('left','+=20');
});

$('#back').click(function(){
  $('#target').css('bottom','-=20');
});

// 障害物1の処理
var stopinterval = setInterval(function(){
  // 20pxずつ下に移動する
  $('#kishi1').css('top','+=20');

  var target = $('#target').offset();
  var t_hei = target.top + $('#target').height();

  var kishi = $('#kishi1').offset();
  var k_wid = kishi.left + $('#kishi1').width();
  var k_hei = kishi.top + $('#kishi1').height();

  // 当たり判定
  if(target.top <= k_hei && kishi.top <= t_hei && target.left >= kishi.left && target.left <= k_wid){
    $('#modal_wrapper').show();
    clearInterval(stopinterval);
  }

  // 障害物が画面外に出た場合、初期位置に戻る
  if(kishi.top >= innerHeight){
    $('#kishi1').css('top','0')
    .css('left','20%');
    // .css('width','100%')
    // .css('height','60%');
  }

},250);

var count = 0;

// 障害物2の処理
var stopinterval = setInterval(function(){

  if(count <= 10){
    // 20pxずつ左下に移動する
    $('#kishi2').css('top','+=20')
    .css('left','+=20');
    count++;

  }else if (count <= 25) {
    // 20pxずつ右下に移動する
    $('#kishi2').css('top','+=20')
    .css('left','-=20');
    count++;
  }else{
    count = 0;
  }

  var target = $('#target').offset();
  var t_hei = target.top + $('#target').height();

  var kishi = $('#kishi2').offset();
  var k_wid = kishi.left + $('#kishi2').width();
  var k_hei = kishi.top + $('#kishi2').height();

  // 当たり判定
  if(target.top <= k_hei && kishi.top <= t_hei && target.left >= kishi.left && target.left <= k_wid){
    $('#modal_wrapper').show();
    clearInterval(stopinterval);
  }

  // 障害物が画面外に出た場合、初期位置に戻る
  if(kishi.top >= innerHeight){
    $('#kishi2').css('top','0')
    .css('left','10%');
    // .css('width','100%')
    // .css('height','60%');
  }

},400);

// 障害物3の処理
var stopinterval = setInterval(function(){

  if(count <= 10){
    // 20pxずつ左下に移動する
    $('#kohi1').css('top','+=40')
    .css('left','-=20');
    count++;

  }else if (count <= 25) {
    // 20pxずつ右下に移動する
    $('#kohi1').css('top','+=50')
    .css('left','+=20');
    count++;
  }else{
    count = 0;
  }

  var target = $('#target').offset();
  var t_hei = target.top + $('#target').height();

  var kishi = $('#kohi1').offset();
  var k_wid = kishi.left + $('#kohi1').width();
  var k_hei = kishi.top + $('#kohi1').height();

  // 当たり判定
  if(target.top <= k_hei && kishi.top <= t_hei && target.left >= kishi.left && target.left <= k_wid){
    $('#modal_wrapper').show();
    clearInterval(stopinterval);
  }

  // 障害物が画面外に出た場合、初期位置に戻る
  if(kishi.top >= innerHeight){
    $('#kohi1').css('top','0')
    .css('left','60%');
    // .css('width','100%')
    // .css('height','60%');
  }

},400);
