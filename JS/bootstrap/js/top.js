// プルダウンのメニューアイテム
$('.dropdown').hover(function(){
  $(this).find('.hover-item').show();
},
function(){
  $(this).find('.hover-item').hide();
});

// グラフ描画
(function(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
     type: 'line',

     data: {
       labels: ['4月19日', '4月20日', '4月21日', '4月22日', '4月23日'],
       datasets: [{
         label: '達成率',
         data: [60, 50, 70, 90, 120],
         borderColor: "rgba(255,0,0,1)",
         backgroundColor: "rgba(0,0,0,0)",
       }]
     },
     options: {
       title: {
         display: false,
         text: '日ごとのタスク達成率'
       },
       scales: {
         yAxes: [{
           ticks: {
             suggestedMax: 120,
             suggestedMin: 0,
             stepSize: 10
           }
         }]
       }
     }
   });
})();
