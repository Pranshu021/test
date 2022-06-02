var csv = Papa.parse(document.getElementById('data').innerHTML);

// Importing this second csv from html file , udhr ek tag h <pre id="data2">
var csv2 = Papa.parse(document.getElementById('data2').innerHTML);


Highcharts.chart('container1', {
  xAxis: {
    type: 'category'
  },
  series: [{
    type: 'bar',
    name: 'People',
    data: [
      ['Nick', 35],
      ['Ann', 45],
      ['Joe', 29]
    ],
    keys: ['name', 'y']
  }],
});

Highcharts.chart('container2', {
  xAxis: {
    type: 'category'
  },
  series: [{
    type: 'pie',
    name: 'People',
    data: [
      ['Nick', 35],
      ['Ann', 45],
      ['Joe', 29]
    ],
    keys: ['name', 'y']
  }],
});

Highcharts.chart('container3', {
  xAxis: {
    type: 'category'
  },
  series: [{
    type: 'line',
    name: 'People',
    data: [
      ['Nick', 35],
      ['Ann', 45],
      ['Joe', 29]
    ],
    keys: ['name', 'y']
  }],
});

// Ye wala jo logic h in this logic middle chart will change


// select variable m select wale options. From html <select id="select"> tag
var select = document.getElementById('select');

select.addEventListener('change', (e) => {
  var month = e.target.value;    // If you choose January from options, then e.target.value be January
  var monthsArr = Highcharts.defaultOptions.lang.shortMonths; // Highcharts.defaultOptions.lang.shortMonths = ["Jan", "Feb", "Mar", "Apr"....] ek array, ye built in function h highcharts m jo ye months ki array return krta h
  var monthIndex = monthsArr.indexOf(month) + 1;
  var data = []; // empty array

  for (var j = 0; j < csv.data.length; j++) {  // loop pura csv ke end tk
    data.push([                                // loop chlake data empty array m push kr rhe
      csv.data[j][0], +csv.data[j][monthIndex] // for example in first loop data = [[Nick, 1]]
    ]); /// Ye wala part na itna dhyan mt de , data khud bhi bna skte, just say ki LOOP CHALAKE DATA CHANGE HO RHA H JB BHI HUM KOI MONTH SELECT KRTE H
  }
// Ye wala main part

// Pure document m 3 chart h, har chart ko Highcharts.charts[0 ya 1 ya 2] aise access kr skte,

// Yha pe maine middle chart select kra h Highcharts.charts[1], ye first line uske series wala jo option hota na har chart m series {} krke , usme data change kr rhi h
  Highcharts.charts[1].series[0].update({  
        data: data
    }, false);
    Highcharts.charts[1].redraw(); // Fir is wali line se middle chart ko redraw


    // Same way try kr ki 1st chart ko update krne ka. Hint: Highcharts.charts["X"]

  });




/// Ab 3rd chart ke liye alag options which is weekdays
var select2 = document.getElementById('select2');

select2.addEventListener('change', (e) => {
    var week = e.target.value;
    var weekArr = Highcharts.defaultOptions.lang.weekdays; // ye weekdays h , monday tuesday type
    var weekIndex = weekArr.indexOf(week) + 1;
    var data2 = []; // data2 array not data
  
    for (var j = 0; j < csv2.data.length; j++) { /// Using CSV2 now not csv, upar dekh 2 csv h
      data2.push([ 
        csv2.data[j][0], +csv2.data[j][weekIndex]  // SAME LOOP AS ABOVE
      ]);
    } 

    Highcharts.charts[2].series[0].update({ /// Ab ye dekh isme 3rd chart ko update kr rha
        data: data2
    }, false);
    Highcharts.charts[2].redraw();
  });


