function Bar(BarTitle, BarSubtitle, XAxisTitle, YAxisTitle, YAxisTitlePosition, YAxisTitlePosition, LegendLayout, LegendAlign, LegendVerticalAlign, LegendXpoint, LegendYpoint, SeriesData) {

    Highcharts.chart('containerbar', {
        chart: {

            type: 'bar'
        },
        title: {
            text: BarTitle
        },
        subtitle: {
            text: BarSubtitle
        },
        xAxis: {
            categories: XAxisTitle,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: YAxisTitle,
                align: YAxisTitlePosition
            },

        },

        tooltip: {
            valueSuffix: ' millions'
        },


        legend: {
            layout: LegendLayout,
            align: LegendAlign,
            verticalAlign: LegendVerticalAlign,
            x: LegendXpoint,
            y: LegendYpoint,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true

        },

        credits: {
            enabled: true
        },

        series: SeriesData
    });


}

function Line(LineTitle, LineSubTitle, YText, range, LineLayout, LineAlign, LineVerticalAlign, LineData, LineWidth, LegendLayout, LegendAlign, LegendverticalAlign, Linedataclassname, Linedatacolor, LineColorIndex, Linedatalabelenable, Linedatalabelinside, Linedatalabelsalign, Linedatalabelsformat, LineDraggableXaxis, LineDraggableYaxis, LinesortEnable, LinematchbyName, LinesortKey) {

    
    Highcharts.chart('containerLine', {

        title: {
            text: LineTitle
        },

        subtitle: {
            text: LineSubTitle
        },

        yAxis: {
            title: {
                text: YText
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: range
            }
        },

        legend: {
            layout: LineLayout,
            align: LineAlign,
            verticalAlign: LineVerticalAlign
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: Linedatalabelenable,
                    inside: Linedatalabelinside,
                    alignTo: Linedatalabelsalign,
                    format: Linedatalabelsformat,
                },
                dragDrop: {
                    draggableX: LineDraggableXaxis,
                    draggableY: LineDraggableYaxis,
                },
                dataSorting: {
                    enabled: LinesortEnable,
                    matchByName: LinematchbyName,
                    sortKey: LinesortKey,
                },
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

    series: LineData,
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

}

var valuePrefixsign = '%'

function Pie(PieTitle, PieData, BackgroundColour, Borderwidth, ShadowPlot, ToolTipbackgroundColor, ToolTipBorderColor, ToolTipBorderRadius, ToolTipBorderWidth, ToolTipPointFormat, ToolTipClassName, valueSuffixsign, valueDecimalsno, allowpointselectV, deferV, datalabelenable, datalabelinside, datalabelsalign, datalabelsformat, clipPie, centerpie, piecolor, PieAnimationLimit, Piedataclassname, Piedatacolor, PieColorIndex, PieSeriesanimation, DraggableXaxis, DraggableYaxis, durationV, easingfunc) {
    

    
    Highcharts.chart('containerPie', {
        chart: {
            type: 'pie',
            plotBackgroundColor: BackgroundColour,
            plotBorderWidth: Borderwidth,
            plotShadow: ShadowPlot,
        },
        colorAxis: [{
            clasName: Piedataclassname,
        }],

        title: {
            text: PieTitle
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: datalabelenable,
                    inside: datalabelinside,
                    alignTo: datalabelsalign,
                    format: datalabelsformat
                },
                dragDrop: {
                    draggableX: DraggableXaxis,
                    draggableY: DraggableYaxis,
                },
                colorIndex: PieColorIndex,
                color: Piedatacolor,
                colorByPoint: true,
                animation: PieSeriesanimation,
                defer: deferV,
                duration: durationV,
                easing: easingfunc,
                allowPointSelect: allowpointselectV,
                clip: clipPie,
                // borderWidth: 10,
                center: centerpie,
                color: piecolor,
                animationLimit: PieAnimationLimit,
            },
            
            
        },
    
        tooltip: {
            animation: true,
            backgroundColor: ToolTipbackgroundColor,
            borderColor: ToolTipBorderColor,
            borderRadius: ToolTipBorderRadius,
            borderWidth: ToolTipBorderWidth,
            className: ToolTipClassName,
            pointFormat: ToolTipPointFormat,
        },

        accessibility: {
            point: {
                valueSuffix: valueSuffixsign,
                valuePrefix: valuePrefixsign,
                valueDecimals: valueDecimalsno,
            },
            description: {

            },
            enabled: {

            },
            exposeAsGroupOnly: {

            },
            keyboardNavigation: {
                enabled: true // check to use
            },
        },

        series: [{
            
            data: PieData,
           


        }]



    });

}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


// data: { //PieData
//     colorAxis: {},
//     clasName: Piedataclassname,
//     color: Piedatacolor,
//     colorIndex: PieColorIndex,

// }
