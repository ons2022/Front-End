import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {
  @ViewChild('chartCanvas') chartCanvas : ElementRef;
  data : any = [];
  canvasChart : Chart;
  //getvoiture:any = 80;
//types de grphes
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('Radarchart') private RadarCanvas: ElementRef;


  barChart: any;
  doughnutChart: any;
  lineChart: any;
  RadarChart : any ; 
  
constructor(
  private http :HttpClient ,
  private storage: Storage,
  ) {
  //this.getData()

 }


 





 





 barChartMethod() {
  // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
  this.barChart = new Chart(this.barCanvas.nativeElement, {
    type: 'bar',
    data: {
      labels: ['REAL ESTATE AFFER','JOBS',  'COMPUTER EQUIPMENT', 'CARS ',],
      datasets: [{
        label: 'LA REPARTION DES CATEGORIES SELON LE NOMBRE D NNONCES',
        data: [28000, 11457, 11650, 500],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

doughnutChartMethod() {
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['AUDI', 'BMW', 'FORD', 'FIAT', 'JEEP','TOYOTA','AUTRE'],
      datasets: [{
        label: 'LES MARQUES DE VOITURE DANS NOTRE APPLICATION ',
        data: [150, 85, 75, 100, 98,78,62],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        hoverBackgroundColor: [
          '#FFCE56',
          '#DEB887',
          '#36A2EB',
          '#FF7F50',
          '#FF6384'
        ]
      }]
    }
  });
}

lineChartMethod() {
  this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
      datasets: [
        {
          label: 'VISITEUR PAR MOIS ',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
          spanGaps: false,
        }
      ]
    }
  });
}

/*getData(){
  this.http.get('http://127.0.0.1:8000/getMaterielleInformatique/').subscribe(res =>{
    console.log('Res',res);
  })

}*/
ngOnInit(){
  
  //this.showChart();
  
}





//json data 
async ngAfterViewInit() {
//les types de graphe 
  this.barChartMethod();
  this.doughnutChartMethod();
  this.lineChartMethod();
  this.regionChart();
  let stocks = await fetch("assets/data/stocks.json ").then(resp => resp.json());//declaration de variable stock 
  stocks = stocks[0];
  let opens = [];
  let closes = [];
  let highs = [];
  let lows = [];
  let volumes = [];
  let labels = [];
  Object.keys(stocks).forEach((key, index, array) => {
    if (index > 2) {
      return true;
    }
    labels.push(key);
    opens.push( this.addRandom(stocks[key].open) );
    closes.push( this.addRandom(stocks[key].close) );
    highs.push( this.addRandom(stocks[key].high) );
    lows.push( this.addRandom(stocks[key].low) );
    volumes.push(stocks[key].volume);
  });
  
  this.data = {
    labels: labels,
    datasets: [{
      label: 'Open',
      data: opens,
      backgroundColor: 'rgba(255, 199, 132, 0.2)',
      borderColor: 'rgba(255, 99, 32, 0.8)',
      borderWidth: 2
    },{
      label: 'High',
      data: highs,
      backgroundColor: 'rgba(55, 99, 132, 0.4)',
      borderColor: 'rgba(55, 99, 132, 0.8)',
      borderWidth: 2
    }, {
      label: 'Low',
      data: lows,
      backgroundColor: 'rgba(155, 99, 132, 0.4)',
      borderColor: 'rgba(155, 99, 132, 0.8)',
      borderWidth: 2
    }, {
      label: 'Close',
      data: closes,
      backgroundColor: 'rgba(55, 99, 232, 0.4)',
      borderColor: 'rgba(55, 99, 132, 0.8)',
      borderWidth: 2
    }]
  };
  this.changeChart({detail: {
    value : 'bar'
  }});
}
regionChart(){
  new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Tunisie", "", "Sousse", "Monastir", "sfaxe"],
      datasets: [
        {
          label: "11587",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, 
        
        {
          label: "1578",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [30,22.11,1.89,6.72,6.72]
        }, 
        {
          label: "24587",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [25.48,54.16,7.61,8.06,4.45]
        },
        
      ]
    },
    options: {
      title: {
        display: true,
        text: 'les annonces immobiliéres selon les villes'
      }
    }
});
}
changeChart( event: any ) {
  const type = event.detail.value || 'bar';
  if ( this.canvasChart ) {
    this.canvasChart.destroy();
  }
  this.canvasChart = new Chart(this.chartCanvas.nativeElement, {
    type: type,
    data: this.data,
    options: {
      indexAxis: 'x'
    }
  });
}
addRandom( points: any ) : number {
  return Number(points) - Number( Math.floor((Math.random() * 100) + 1) );
}














/*showChart() {
  var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
  var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
      labels: ["VB 6", "PHP", "Delphi", ".Net", "TypeScript"],
      datasets: [{
            label: "This is chart",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            data: [this.getvoiyure, 5, 10, 25, 45],
            borderWidth: 1
      }]
     }
  });
}*/

















}