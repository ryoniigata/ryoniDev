
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

// 障害物の処理
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
    .css('left','0')
    .css('width','100%')
    .css('height','60%');
  }

},250);
