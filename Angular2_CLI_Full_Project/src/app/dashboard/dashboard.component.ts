import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor( ) { }

    public brandPrimary:string =  '#20a8d8';
    public brandSuccess:string =  '#4dbd74';
    public brandInfo:string =     '#63c2de';
    public brandWarning:string =  '#f8cb00';
    public brandDanger:string =   '#f86c6b';

    // dropdown buttons
    public status: { isopen: boolean } = { isopen: false };
    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    //convert Hex to RGBA
    public convertHex(hex:string,opacity:number){
        hex = hex.replace('#','');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);

        let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return rgba;
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    // mainChart
    public shadeColor2(color:any, percent:number) {
        var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }

    public mainChartData1:Array<number> = [100, 200, 180, 250, 220, 190, 210, 215];
    public mainChartData2:Array<number> = [180, 280, 260, 330, 300, 270, 290, 295];
    public mainChartData3:Array<number> = [260, 360, 340, 410, 380, 350, 370, 375];

    public mainChartData:Array<any> = [
        {
            data: this.mainChartData1,
            label: 'Current'
        },
        {
            data: this.mainChartData2,
            label: 'Previous'
        },
        {
            data: this.mainChartData3,
            label: 'BEP'
        }
    ];
    public mainChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    public mainChartOptions:any = {
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
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public mainChartColours:Array<any> = [
        {
            backgroundColor: this.shadeColor2(this.brandInfo,0),
            borderColor: '#fff',
            pointHoverBackgroundColor: '#fff'
        },
        {
            backgroundColor: this.shadeColor2(this.brandInfo,0.25),
            borderColor: '#fff',
            pointHoverBackgroundColor: '#fff'
        },
        {
            backgroundColor: this.shadeColor2(this.brandInfo,0.5),
            borderColor: '#fff',
            pointHoverBackgroundColor: '#fff'
        }
    ];
    public mainChartLegend:boolean = false;
    public mainChartType:string = 'line';

    // social box charts

    public socialChartData1:Array<any> = [
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook'
        }
    ];
    public socialChartData2:Array<any> = [
        {
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter'
        }
    ];
    public socialChartData3:Array<any> = [
        {
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn'
        }
    ];
    public socialChartData4:Array<any> = [
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Google+'
        }
    ];

    public socialChartLabels:Array<any> = ['January','February','March','April','May','June','July'];
    public socialChartOptions:any = {
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
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public socialChartColours:Array<any> = [
        {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff'
        }
    ];
    public socialChartLegend:boolean = false;
    public socialChartType:string = 'line';

    // sparkline charts

    public sparklineChartData1:Array<any> = [
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Clients'
        }
    ];
    public sparklineChartData2:Array<any> = [
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Clients'
        }
    ];

    public sparklineChartLabels:Array<any> = ['January','February','March','April','May','June','July'];
    public sparklineChartOptions:any = {
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
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public sparklineChartDefault:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: '#d1d4d7',
        }
    ];
    public sparklineChartPrimary:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandPrimary,
        }
    ];
    public sparklineChartInfo:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandInfo,
        }
    ];
    public sparklineChartDanger:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandDanger,
        }
    ];
    public sparklineChartWarning:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandWarning,
        }
    ];
    public sparklineChartSuccess:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandSuccess,
        }
    ];


    public sparklineChartLegend:boolean = false;
    public sparklineChartType:string = 'line';


    ngOnInit(): void { }
}
