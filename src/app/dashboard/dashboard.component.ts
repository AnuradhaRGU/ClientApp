import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as Highcharts from 'highcharts';
import { TimeSeriesModel } from '../models/time.series';
import { DataService } from '../services/data-service.service';
import HC_no_data from "highcharts/modules/no-data-to-display";
import { Options } from "highcharts";
import { catchError, retry } from 'rxjs/operators';

HC_no_data(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  // chartOptions = null;
  //Highcharts: typeof Highcharts = Highcharts;
  //Highcharts = Highcharts;
  // chartOptions=null;



  Highcharts: typeof Highcharts = Highcharts;
  xAxis_arry = [];
  xAxis_arry2 = [];
  yAxis_array = [];
  xAxis_arry_l = [];
  xAxis_arry2_l = [];
  yAxis_array_l = [];

  chartOptions = {
    chart: {
      type: "spline",
      backgroundColor: '#FFFFFF',
      borderColor: '#335cad'
    },
    title: {
      text: "2020 Prediction of Sales"
    },
    subtitle: {
      text: "Phamasave Canada Saskation"
    },
    maxColor: '#003399',
    // xAxis: {
    //   categories: yAxis_array
    // },
    xAxis: {
      type: 'datetime',
      categories: this.yAxis_array,
      pointIntervalUnit: 'month',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%d-%b', this.value);
        }
      }
    },
    yAxis: {
      title: {
        text: "Sales"
      }
    },
    tooltip: {
      valueSuffix: "#"
    },
    series: [
      {
        name: 'Original',
        data: this.xAxis_arry,
        color: '#492970'
      },
      {
        name: 'Predicted',
        data: this.xAxis_arry2,
        color: '#c42525'
      },

    ]
  };



  Highcharts1: typeof Highcharts = Highcharts;
  //chartOptions1 = null;
  chartOptions1 = {
    chart: {
      type: "spline",
      backgroundColor: '#FFFFFF',
      borderColor: '#335cad'
    },
    title: {
      text: "2019 Prediction of Sales"
    },
    subtitle: {
      text: "Phamasave Canada Saskation"
    },
    maxColor: '#003399',
    // xAxis: {
    //   categories: yAxis_array
    // },
    xAxis: {
      type: 'datetime',
      categories: this.yAxis_array_l,
      pointIntervalUnit: 'month',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%d-%b', this.value);
        }
      }
    },
    yAxis: {
      title: {
        text: "Sales"
      }
    },
    tooltip: {
      valueSuffix: "#"
    },
    series: [
      {
        name: 'Original',
        data: this.xAxis_arry_l,
        color: '#492970'
      },
      {
        name: 'Predicted',
        data: this.xAxis_arry2_l,
        color: '#c42525'
      },

    ]
  };





  constructor(private dataService: DataService,) { }

  ngOnInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */


    this.dataService.GetDataService().subscribe(result => {
      var entities = result.entities;
      var xAxis_arry = [];
      var xAxis_arry2 = [];
      var yAxis_array = [];


      for (var i = 1; i <= result.length; i++) {
        var object = new TimeSeriesModel()
        object = result[i]
        if (typeof (object) != "undefined") {
          xAxis_arry.push(object.Units);
          xAxis_arry2.push(object.MW_Prediction);
          yAxis_array.push(new Date(object.Date))
        }


      }

      this.Highcharts = Highcharts;

      this.chartOptions = {
        chart: {
          type: "spline",
          backgroundColor: '#FFFFFF',
          borderColor: '#335cad'
        },
        title: {
          text: "2020 Prediction of Sales"
        },
        subtitle: {
          text: "Phamasave Canada Saskation"
        },
        maxColor: '#003399',
       
        xAxis: {
          type: 'datetime',
          categories: yAxis_array,
          pointIntervalUnit: 'month',
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%d-%b', this.value);
            }
          }
        },
        yAxis: {
          title: {
            text: "Sales"
          }
        },
        tooltip: {
          valueSuffix: "#"
        },
        series: [
          {
            name: 'Original',
            data: xAxis_arry,
            color: '#492970'
          },
          {
            name: 'Predicted',
            data: xAxis_arry2,
            color: '#c42525'
          },

        ]
      };



    });


    this.dataService.GetDataServiceLearned().subscribe(result => {
      var entities = result.entities;
      var xAxis_arry_l = [];
      var xAxis_arry2_l = [];
      var yAxis_array_l = [];

      for (var i = 1; i <= result.length; i++) {
        var object = new TimeSeriesModel()
        object = result[i]
        if (typeof (object) != "undefined") {
          xAxis_arry_l.push(object.Units);
          xAxis_arry2_l.push(object.MW_Prediction);
          yAxis_array_l.push(new Date(object.Date))
        }


      }


      this.Highcharts1 = Highcharts;

      this.chartOptions1 = {
        chart: {
          type: "spline",
          backgroundColor: '#FFFFFF',
          borderColor: '#335cad'
        },
        title: {
          text: "2019 Prediction of Sales"
        },
        subtitle: {
          text: "Phamasave Canada Saskation"
        },
        maxColor: '#003399',
    
        xAxis: {
          type: 'datetime',
          categories: yAxis_array_l,
          pointIntervalUnit: 'month',
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%d-%b', this.value);
            }
          }
        },
        yAxis: {
          title: {
            text: "Sales"
          }
        },
        tooltip: {
          valueSuffix: "#"
        },
        series: [
          {
            name: 'Original',
            data: xAxis_arry_l,
            color: '#492970'
          },
          {
            name: 'Predicted',
            data: xAxis_arry2_l,
            color: '#c42525'
          },

        ]
      };



    });



  }

}
