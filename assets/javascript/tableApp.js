var tableDataNested = [
    {blank:'Cash/bank account', checkbox:"", date1:"79,273,859", date2:"18,708,562", date3:"14,901,976", date4:"58,176,883", date5:"56,345,298", date6:"12,897,444", date7:"34,897,334", _children:[
        
        {blank:"1000-AdvanSix Inc.", date1:"79,273,859", date2:"18,708,562", date3:"14,901,976", date4:"58,176,883", _children:[
            {blank:"Mellon Bank"},
            {blank:"First Chicago National Lockbox"},
            {blank:"Chase Manhattan Bank"},
            {blank:"Lockbox Mellon Bank"},
            {blank:"JP Morgan Chase Disbursement", date1:"79,273,859.58-", date2:"208,708,562.37-", date3:"214,901,976.97-", date4:"2,358,176,883.70"}
        ]},
    ]},
    {blank:"Add :Cash Inflow", date1:"21,129,008", date2:"45,535,400", date3:"74,013,670", date4:"34,876,445", date5:"98,365,178", date6:"72,347,455", date7:"39,937,364", _children:[
        
        {blank:"Open AR - Estimated", date1:"129,008", date2:"535,400", date3:"74,013,670", date4:"", _children:[
   
            {blank:"1000-AdvanSix Inc.", date1:"79,273,859", date2:"48,708,562", date3:"14,901,976", date4:"58,176,883"}
        ]},

        {blank:"Open Intercompany Receivable", },

        {blank:"Incoming Operating Cash",  _children:[
   
            {blank:"SETTLEMENT BUILDING", _children:[

                {blank:"1000-AdvanSix Inc.", _children: [

                    {blank:"Test"}

                ]},

            ]},

            {blank: "OTHER INCOMING PATIENTS"}
        ]},

        {blank: "- Incoming finance cash", _children:[]}
    ]},
    {blank: "Available Cash", date1:"79,144,850", date2:"38,173,162", date3:"59,111,693", date4:"58,176,883", date5:"6,392,568", date6:"197,324", date7:"3,397,674", _children:[]},
    {blank: "Less: Cash Outflow", date1:"29,563,711", date2:"6,728,814", date3:"934,809", date4:"1,119", date5:"5,397", date6:"12,997,374", date7:"7,894", _children:[

        {blank: "Open AP", date1:"24,352,406", date2:"1,865,420", date3:"622,905", date4:"1,119", _children:[

            {blank:"1000-AdvanSix Inc.",  date1:"24,352,406", date2:"1,865,420", date3:"622,905", date4:"1,119"}
        
        ]},

        {blank: "AP Payment Blocked Items", date1:"46,079,000", date2:"5,159,074", date3:"1,818,228", date4:"", _children:[

            {blank:"1000-AdvanSix Inc.",  date1:"46,079,000", date2:"5,159,074", date3:"1,818,228", date4:"",}
        
        ]},

        {blank: "Open GR/IR Resolution", date1:"59,130,804", date2:"295,680", date3:"1,506,323", date4:"", _children:[

            {blank:"1000-AdvanSix Inc.",  date1:"59,130,804", date2:"295,680", date3:"1,506,323", date4:""}
        
        ]},

        {blank: "- Outgoing Operating Cash", date1:"1,500", _children:[

            {blank:"Payroll", _children:[]}

        ]},

    ]}

];



// console.log(tableDataNested[0].checkbox);

var table = new Tabulator("#example-table", {
    height:"100%",
    data:tableDataNested,
    dataTree:true,
    // dataTreeStartExpanded:true,
    columns:[
    {title:"", field:"blank",  width:'18%'}, //never hide this column
    {title:"", field: "checkbox", align:"center",         
    
    formatter: (cell) => {
            const value = cell.getValue();
            if (value) {
                return `
                    <input class="checkBox" type="checkbox" />
                    <label>${value}</label>
                `;
            } else {
                return `
                    <input class="checkBox" type="checkbox" />
              
                `
            }
        },width:'6%' },
    {title:"Jun", field:"date1", align:"center", width:'11%'},
    {title:"Jul", field:"date2", align:"center", width:'11%'}, //hide this column first
    {title:"Aug", field:"date3", align:"center", width:'11%'},
    {title:"Sep", field:"date4", align:"center", width:'11%'},
    {title:"Oct", field:"date5", align:"center", width:'11%'},
    {title:"Nov", field:"date6", align:"center", width:'11%'},
    {title:"Dec", field:"date7", align:"center", width:'11%'},
    ],
});

var cousin2 = 45535400;
var cousin4 = 0;
var cousin6 = 0;
var cousin8 = 0;
var cousin10 = 0;
var cousin12 = 0;
var cousin14 = 0;

$(".checkBox").on("click", function(){

   var cousin =  $(this).parent().siblings()[1];
//    console.log(cousin);

    cousin2 = $( cousin ).find(".tabulator-cell").prevObject[0].innerText;
   console.log(cousin2);


});


var ctx3 = $('#myChart3');

console.log(cousin2);

console.log(typeof tableDataNested[0].date1)

var point1 = parseInt(tableDataNested[0].date1.replace(/,/g, ''));
console.log(point1);
var point2 = parseInt(tableDataNested[0].date2.replace(/,/g, ''));
var point3 = parseInt(tableDataNested[0].date3.replace(/,/g, ''));
var point4 = parseInt(tableDataNested[0].date4.replace(/,/g, ''));
var point5 = parseInt(tableDataNested[0].date5.replace(/,/g, ''));
var point6 = parseInt(tableDataNested[0].date6.replace(/,/g, ''));
var point7 = parseInt(tableDataNested[0].date7.replace(/,/g, ''));

var point8 = parseInt(tableDataNested[1].date1.replace(/,/g, ''));
var point9 = parseInt(tableDataNested[1].date2.replace(/,/g, ''));
var point10 = parseInt(tableDataNested[1].date3.replace(/,/g, ''));
var point11 = parseInt(tableDataNested[1].date4.replace(/,/g, ''));
var point12 = parseInt(tableDataNested[1].date5.replace(/,/g, ''));
var point13 = parseInt(tableDataNested[1].date6.replace(/,/g, ''));
var point14 = parseInt(tableDataNested[1].date7.replace(/,/g, ''));

var point15 = parseInt(tableDataNested[2].date1.replace(/,/g, ''));
var point16 = parseInt(tableDataNested[2].date2.replace(/,/g, ''));
var point17 = parseInt(tableDataNested[2].date3.replace(/,/g, ''));
var point18 = parseInt(tableDataNested[2].date4.replace(/,/g, ''));
var point19 = parseInt(tableDataNested[2].date5.replace(/,/g, ''));
var point20 = parseInt(tableDataNested[2].date6.replace(/,/g, ''));
var point21 = parseInt(tableDataNested[2].date7.replace(/,/g, ''));

var point22 = parseInt(tableDataNested[3].date1.replace(/,/g, ''));
var point23 = parseInt(tableDataNested[3].date2.replace(/,/g, ''));
var point24 = parseInt(tableDataNested[3].date3.replace(/,/g, ''));
var point25 = parseInt(tableDataNested[3].date4.replace(/,/g, ''));
var point26 = parseInt(tableDataNested[3].date5.replace(/,/g, ''));
var point27 = parseInt(tableDataNested[3].date6.replace(/,/g, ''));
var point28 = parseInt(tableDataNested[3].date7.replace(/,/g, ''));



var myLineChart = new Chart(ctx3, {
    
    type: 'line',
    data: {
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: 'Cash/bank account',
                backgroundColor: 'green',
                borderColor: 'green',
                pointBorderColor: 'green',
                pointBackgroundColor: 'transparent',
                fill: false,
                data: [point1, point2, point3, point4, point5, point6, point7],
                // hidden: true
            },
            {
                label: 'Add :Cash Inflow',
                backgroundColor: 'blue',
                borderColor: 'blue',
                pointBorderColor: 'blue',
                pointBackgroundColor: 'transparent',
                fill: false,
                data: [point8, point9, point10, point11, point12, point13, point14]
            },
            {
                label: 'Available Cash',
                backgroundColor: 'yellow',
                borderColor: 'yellow',
                pointBorderColor: 'yellow',
                pointBackgroundColor: 'transparent',
                fill: false,
                data: [point15, point16, point17, point18, point19, point20, point21]
            },
            {
                label: 'Less: Cash Outflow',
                backgroundColor: 'red',
                borderColor: 'red',
                pointBorderColor: 'red',
                pointBackgroundColor: 'transparent',
                fill: false,
                data: [point22, point23, point24, point25, point26, point27, point28]
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

                        value = value/1000000;

                        value = value + "M";

                        return '$' + value;

                    },
                    maxTicksLimit: 6
                }
            }]
        },
        legend: {
            // display: false
        },

    }
});

var cell = $("#example-table");
console.log(cell);
