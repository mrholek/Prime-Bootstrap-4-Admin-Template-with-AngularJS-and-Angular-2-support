$(function(){
    'use strict';

    //convert Hex to RGBA
    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        var r = parseInt(hex.substring(0,2), 16);
        var g = parseInt(hex.substring(2,4), 16);
        var b = parseInt(hex.substring(4,6), 16);

        var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }

    function shadeColor2(color, percent) {
        var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }

    //Main Chart
    var data1 = [100, 200, 180, 250, 220, 190, 210, 215];
    var data2 = [180, 280, 260, 330, 300, 270, 290, 295];
    var data3 = [260, 360, 340, 410, 380, 350, 370, 375];

    var data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: shadeColor2($.brandInfo,0),
                borderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data1
            },
            {
                label: 'My Second dataset',
                backgroundColor: shadeColor2($.brandInfo,0.25),
                borderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data2
            },
            {
                label: 'My Third dataset',
                backgroundColor: shadeColor2($.brandInfo,0.5),
                borderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data3
            }
        ]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {

                }
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(400 / 5),
                    max: 500
                }
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    };
    var ctx = $('#main-chart');
    var mainChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });


    //Social Box Charts
    var labels = ['January','February','March','April','May','June','July'];

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        }
    };

    var data1 = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: [65, 59, 84, 84, 51, 55, 40]
        }]
    };
    var ctx = $('#social-box-chart-1');
    var socialBoxChart1 = new Chart(ctx, {
        type: 'line',
        data: data1,
        options: options
    });

    var data2 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [1, 13, 9, 17, 34, 41, 38]
            }
        ]
    };
    var ctx = $('#social-box-chart-2').get(0).getContext('2d');
    var socialBoxChart2 = new Chart(ctx, {
        type: 'line',
        data: data2,
        options: options
    });

    var data3 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#social-box-chart-3').get(0).getContext('2d');
    var socialBoxChart3 = new Chart(ctx, {
        type: 'line',
        data: data3,
        options: options
    });

    var data4 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#social-box-chart-4').get(0).getContext('2d');
    var socialBoxChart4 = new Chart(ctx, {
        type: 'line',
        data: data4,
        options: options
    });



    //Sparkline Charts
    var labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    var options = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    };

    var data1 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandPrimary,
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-1');
    var sparklineChart1 = new Chart(ctx, {
        type: 'line',
        data: data1,
        options: options
    });

    var data2 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandDanger,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-2');
    var sparklineChart2 = new Chart(ctx, {
        type: 'line',
        data: data2,
        options: options
    });

    var data3 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandWarning,
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-3');
    var sparklineChart3 = new Chart(ctx, {
        type: 'line',
        data: data3,
        options: options
    });

    var data4 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-4');
    var sparklineChart4 = new Chart(ctx, {
        type: 'line',
        data: data4,
        options: options
    });

    var data5 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-5');
    var sparklineChart5 = new Chart(ctx, {
        type: 'line',
        data: data5,
        options: options
    });

    var data6 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandInfo,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-6');
    var sparklineChart6= new Chart(ctx, {
        type: 'line',
        data: data6,
        options: options
    });

});
