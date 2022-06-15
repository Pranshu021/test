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

    var Linedataclassname = undefined
    var Linedatacolor = undefined
    var LineColorIndex = undefined
    var Linedatalabelenable = true
    var Linedatalabelinside = true
    var Linedatalabelsalign = 'enabled'
    var Linedatalabelsformat = undefined
    var LineDraggableXaxis = undefined
    var LineDraggableYaxis = undefined
    var LinesortEnable = false
    var LinematchbyName = undefined
    var LinesortKey = 'y'
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

function Pie(PieTitle, PieData, BackgroundColour, Borderwidth, ShadowPlot, ToolTipbackgroundColor, ToolTipBorderColor, ToolTipBorderRadius, ToolTipBorderWidth, ToolTipPointFormat, ToolTipClassName, valueSuffixsign, valueDecimalsno, allowpointselectV, deferV, datalabelenable, datalabelinside, datalabelsalign, datalabelsformat, clipPie, centerpie, piecolor, PieAnimationLimit, Piedataclassname, Piedatacolor, PieColorIndex, PieSeriesanimation, DraggableXaxis, DraggableYaxis) {
    var BackgroundColour = '#FFFFF8'
    var Borderwidth = null
    var ShadowPlot = false
    var ToolTipbackgroundColor = '#FCFFC5'
    // var ToolTipBorderColor = '#000000'
    var ToolTipBorderRadius = 1
    var ToolTipBorderWidth = null
    var ToolTipPointFormat = '{series.name}: <b>{point.percentage:.1f}%</b>'
    var ToolTipClassName = undefined
    var valueSuffixsign = '%'
    var valuePrefixsign = '%'
    var valueDecimalsno = 'undefined'
    var allowpointselectV = true
    var deferV = 0
    var durationV = 100
    var easingfunc = 'easeOutBounce'
    var datalabelenable = true
    var datalabelinside = true
    var datalabelsalign = undefined
    var clipPie = false
    var centerpie = ["50%", "50%"]
    var piecolor = '#c0ffee'
    var PieAnimationLimit = Infinity
    var Piedataclassname = undefined
    var Piedatacolor = '#BF0B2'
    var PieColorIndex = undefined
    var PieSeriesanimation = undefined
    var DraggableXaxis = undefined
    var DraggableYaxis = undefined

    var datalabelsformat = undefined
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

// data: { //PieData
//     colorAxis: {},
//     clasName: Piedataclassname,
//     color: Piedatacolor,
//     colorIndex: PieColorIndex,

// }