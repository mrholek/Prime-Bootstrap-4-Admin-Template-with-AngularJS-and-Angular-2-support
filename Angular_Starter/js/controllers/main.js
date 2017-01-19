//main.js
angular
    .module('app')
    .controller('trafficDemoCtrl', trafficDemoCtrl)
    .controller('socialBoxCtrl', socialBoxCtrl)
    .controller('sparklineChartCtrl', sparklineChartCtrl)
    .controller('barChartCtrl', barChartCtrl)
    .controller('horizontalBarsCtrl', horizontalBarsCtrl)
    .controller('horizontalBarsType2Ctrl', horizontalBarsType2Ctrl)
    .controller('usersTableCtrl', usersTableCtrl);

//convert Hex to RGBA
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

trafficDemoCtrl.$inject = ['$scope'];
function trafficDemoCtrl($scope){

    var data1 = [100, 200, 180, 250, 220, 190, 210, 215];
    var data2 = [180, 280, 260, 330, 300, 270, 290, 295];
    var data3 = [260, 360, 340, 410, 380, 350, 370, 375];


    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.series = ['Current', 'Previous', 'BEP'];
    $scope.data = [ data1, data2, data3];
    $scope.colors = [{
        backgroundColor: shadeColor2(brandInfo,0),
        borderColor: '#fff',
        pointHoverBackgroundColor: '#fff'

    }, {
        backgroundColor: shadeColor2(brandInfo,0.25),
        borderColor: '#fff',
        pointHoverBackgroundColor: '#fff'
    },{
        backgroundColor: shadeColor2(brandInfo,0.5),
        borderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
    }];
    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
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
    }
}

dateRangeCtrl.$inject = ['$scope'];
function dateRangeCtrl($scope) {
    $scope.date = {
       startDate: moment().subtract(5, 'days'),
       endDate: moment()
   };
   $scope.opts = {
        drops: 'down',
        opens: 'left',
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 days': [moment().subtract(7, 'days'), moment()],
            'Last 30 days': [moment().subtract(30, 'days'), moment()],
            'This month': [moment().startOf('month'), moment().endOf('month')]
        }
    };

    //Watch for date changes
    $scope.$watch('date', function(newDate) {
        //console.log('New date set: ', newDate);
    }, false);

    function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }
}

socialBoxCtrl.$inject = ['$scope'];
function socialBoxCtrl($scope) {

    $scope.labels = ['January','February','March','April','May','June','July'];
    $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.colors = [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff'
    }];
    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
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
    }
}

sparklineChartCtrl.$inject = ['$scope'];
function sparklineChartCtrl($scope) {
    $scope.labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
    ];
    $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
    ];
    $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
    ];
    $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
    ];
    $scope.default = [{
        backgroundColor: 'transparent',
        borderColor: '#d1d4d7',
    }];
    $scope.primary = [{
        backgroundColor: 'transparent',
        borderColor: brandPrimary,
    }];
    $scope.info = [{
        backgroundColor: 'transparent',
        borderColor: brandInfo,
    }];
    $scope.danger = [{
        backgroundColor: 'transparent',
        borderColor: brandDanger,
    }];
    $scope.warning = [{
        backgroundColor: 'transparent',
        borderColor: brandWarning,
    }];
    $scope.success = [{
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
    }];
    $scope.options = {
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
    }
}

horizontalBarsCtrl.$inject = ['$scope'];
function horizontalBarsCtrl($scope) {

    $scope.data = [
        {
            day: 'Monday',    new: 34, recurring: 78
        },
        {
            day: 'Tuesday',   new: 56, recurring: 94
        },
        {
            day: 'Wednesday', new: 12, recurring: 67
        },
        {
            day: 'Thursday',  new: 43, recurring: 91
        },
        {
            day: 'Friday',    new: 22, recurring: 73
        },
        {
            day: 'Saturday',  new: 53, recurring: 82
        },
        {
            day: 'Sunday',    new: 9,  recurring: 69
        }
    ];
}

horizontalBarsType2Ctrl.$inject = ['$scope'];
function horizontalBarsType2Ctrl($scope) {

    $scope.gender = [
        {
            title: 'Male',
            icon: 'icon-user',
            value: 43
        },
        {
            title: 'Female',
            icon: 'icon-user-female',
            value: 37
        },
    ];

    $scope.source = [
        {
            title: 'Organic Search',
            icon: 'icon-globe',
            value: 191235,
            percent: 56
        },
        {
            title: 'Facebook',
            icon: 'icon-social-facebook',
            value: 51223,
            percent: 15
        },
        {
            title: 'Twitter',
            icon: 'icon-social-twitter',
            value: 37564,
            percent: 11
        },
        {
            title: 'LinkedIn',
            icon: 'icon-social-linkedin',
            value: 27319,
            percent: 8
        }
    ];
}

usersTableCtrl.$inject = ['$scope', '$timeout'];
function usersTableCtrl($scope, $timeout) {

    $scope.users = [
        {
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'USA',
            flag: 'USA.png',
            usage: '50',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'mastercard',
            activity: '10 sec ago',
            satisfaction: '48'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'India',
            flag: 'India.png',
            usage: '74',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'stripe',
            activity: '1 hour ago',
            satisfaction: '33'
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'France',
            flag: 'France.png',
            usage: '98',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'paypal',
            activity: 'Last month',
            satisfaction: '23'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        }
    ]
}

clientsTableCtrl.$inject = ['$scope', '$timeout'];
function clientsTableCtrl($scope, $timeout) {

    $scope.users = [
        {
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            registered: 'Jan 1, 2015',
            activity: '10 sec ago',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            registered: 'Jan 1, 2015',
            activity: '5 minutes ago',
            transactions: 156,
            comments: 76
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            registered: 'Jan 1, 2015',
            activity: '1 hour ago',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            registered: 'Jan 1, 2015',
            activity: 'Last month',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            registered: 'Jan 1, 2015',
            activity: 'Last week',
            transactions: 189,
            comments: 72
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            registered: 'Jan 1, 2015',
            activity: 'Yesterday',
            transactions: 189,
            comments: 72
        }
    ]
}

function random(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

barChartCtrl.$inject = ['$scope'];
function barChartCtrl($scope) {

    var elements = 16;
    var labels = [];
    var data = [];
    var data1 = [];
    var data2 = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
        data1.push(random(20,100));
        data2.push(random(60,100));
    }

    $scope.labels = labels;

    $scope.data = [data];
    $scope.data1 = [data1];
    $scope.data2 = [data2];

    $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barStrokeWidth : 0,
        barBackground: 'rgba(221, 224, 229, 1)',

        // pointDot :false,
        // scaleLineColor: 'transparent',
    };

    $scope.colors = [{
        backgroundColor : brandInfo,
		borderColor : 'rgba(0,0,0,1)',
		highlightFill: '#818a91',
        pointborderColor: '#000'
    }];
}
