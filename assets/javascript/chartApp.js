$("#bar1").css("display", "none");
$("#bar2").css("display", "none");
$("#myChart2").css("display", "none");
$("#myChart3").css("display", "none");
$("#myChart4").css("display", "none");

$("#B1").click(function() {

    $("#bar1").show();
    $("#B1").hide();

});

$("#B2").click(function() {

    $("#bar2").show();
    $("#B2").hide();

});

$("#B3").click(function(){

    $("#myChart2").show();
    $("#B3").hide();

});

$("#B4").click(function(){

    $("#myChart3").show();
    $("#B4").hide();

});

$("#B5").click(function(){

    $("#myChart4").show();
    $("#B5").hide();

});

var ctx2 = $('#myChart2');

var myPieChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['$95,719 Payroll Expenses', '$39,314 CCM Service Costs', 
        '$11,784 Hardware-Tablets', '$21, 363 Everything else'],
        datasets: [{
            label: '# of Votes',
            data: [95719, 39314, 11784, 21363],
            backgroundColor: [
                '#3A817F',
                '#4CA3A3',
                '#59BEBE',
                '#72EBE8'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    }
});

var expenses = 16056;
var income = 10001

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

$("#number2").html("$" + commaSeparateNumber(expenses));

var pr3= (income/expenses) * 100;

var two = 2

console.log(pr3);

var pr3Per = pr3 + "%"

var twoPer = two + "%"

$("#PR3").css("width", pr3Per);

var ctx3 = $('#myChart3');



var myLineChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["Aug 1", " ", " ", " ", "Aug 31"],
        datasets: [
            {
                // label: 'none',
                backgroundColor: 'green',
                borderColor: 'green',
                pointBorderColor: 'green',
                pointBackgroundColor: 'transparent',
                fill: false,
                data: [0, 0, 0, 0, 10000]
            }
        ]
    },
    
    options: {
        title: {
        
            text: 'Custom Chart Title'
        },
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {

                        value = value/1000;

                        value = value + "K";

                        return '$' + value;

                    },
                    maxTicksLimit: 6
                }
            }]
        },
        legend: {
            display: false
        },

    }
});


var ctx4 = $('#myChart4');

var myChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['NET INCOME FOR AUGUST'],
    datasets: [
      {
        label: 'Income',
        data: [10001],
        backgroundColor: '#71B337',
      },
      {
        label: 'Expenses',
        data: [16506],
        backgroundColor: '#4BA2B2',
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [
        {ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {

                value = value/1000;

                value = value + "K";
              
                return '$' + value;

            },
            beginAtZero: true
            // maxTicksLimit: 6
        }, stacked: true}
    
    ]
      
    }
  }
});