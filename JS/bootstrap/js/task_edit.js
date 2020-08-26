// プルダウンのメニューアイテム
$('.dropdown').hover(function(){
  $(this).find('.hover-item').show();
},
function(){
  $(this).find('.hover-item').hide();
});

// タスク数と消化数の初期表示
(function(){

  var cnt = $('.container-left').length;
  cnt += $('.container-right').length;

  if(!cnt){
    $('#task-all').text(0);  
  }else{
    $('#task-all').text(cnt);
  }

  var cnt = 0;

  $('.task-area').find('.task-check').each(function(index, element){

    if($(element).prop('checked')){
      cnt++;
    }
  })

  $('#task-complete').text(cnt);

}());


// タスクの追加
$('#task-input-btn').click(function(){
  var task = $('#task-input').val();

  var cnt = $('.container-left').length;
  cnt += $('.container-right').length;

  if((cnt % 2) == 0){
    $('.task-content-left')
    .append('<div class="container-left"><div class="row"><div class="col-6">' + task + '</div><div class="col-6"><input class="task-check" type="checkbox" name="check"></div></div></div>');
  }else {
    $('.task-content-right')
    .append('<div class="container-right"><div class="row"><div class="col-6">' + task + '</div><div class="col-6"><input class="task-check" type="checkbox" name="check"></div></div></div>');
  }

  cnt++;
  // タスク数の表示
  $('#task-all').text(cnt);

  $('#task-input').val("");

});

// タスク消化の表示
$('.task-area').on('click', '.task-check', function(){
  var cnt = 0;

  $('.task-area').find('.task-check').each(function(index, element){

    if($(element).prop('checked')){
      cnt++;
    }
  })

  $('#task-complete').text(cnt);

});
