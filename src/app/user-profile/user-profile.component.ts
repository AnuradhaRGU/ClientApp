import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TimeSeriesModel } from '../models/time.series';
import { DataService } from '../services/data-service.service';
import HC_no_data from "highcharts/modules/no-data-to-display";
import { Options } from "highcharts";
import { catchError, retry } from 'rxjs/operators';

HC_no_data(Highcharts);

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  Highcharts = Highcharts;
  // chartOptions = null;
  cat1: number = 0
  cat2: number = 0
  cat3: number = 0
  cat4: number = 0
  cat5: number = 0
  winterS_h: number = 0;
  winterS_m: number = 0;
  winterS_l: number = 0;

  xAxis_arry = [];
  xAxis_arry2 = [];
  yAxis_array = [];

  yAxis_units = [];
  XAxis_meantemp = [];
  yAxis_array2 = [];
  yAxis_units2 = [];


  chartOptions = {
    chart: {
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Phamasutical market shares at a specific Category, 2018-2019'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },

        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: 'Category share',
      data: [
        ['Cold & Allergy Medication', this.cat1],
        ['Eye & Ear Care', this.cat2],
        ['Internal Remedies', this.cat3],
        ['Vitamins/Herbals/Natural Supplements', this.cat4],
        ['Pain & Analgesic', this.cat5],


      ]
    }]
  };


  Highcharts1 = Highcharts;
  chartOptions1 = {
    chart: {
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Pharmaceutical market Sales at Given Tempreature, 2018-2019'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',

        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },

        showInLegend: true
      }
    },
    series: [{
      type: 'pie',
      name: 'Category share',
      data: [
        ['Coldest', this.winterS_h],
        ['Cold', this.winterS_m],
        ['Normal', this.winterS_l],



      ]
    }]
  };

  Highcharts2 = Highcharts;
  chartOptions2 = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Temperature Change in Saskatoon  from 2018 through 2019'
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Click and drag in the plot area to zoom in' :
        'Pinch the chart to zoom in'
    },
    xAxis: {
      type: 'datetime',
      categories: this.yAxis_array,
      pointIntervalUnit: 'month',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%d-%b-%Y', this.value);
        }
      }
    },
    yAxis: {
      title: {
        text: 'Tempreture'
      },
      Categories: this.XAxis_meantemp,
    },
    legand: {
      enabled: false
    },
    tooltip: {
      valueSuffix: " °C"
    },
    plotOptions: {
      area: {
        fillColor: {
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: [{
      type: 'area',
      name: "Temperature",
      data: this.XAxis_meantemp
    }]
  };

  Highcharts3 = Highcharts;
  chartOptions3 = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Unit Sold'
    },
    subtitle: {
      text: '2018-2019 unit sold'
    },
    xAxis: {
      type: 'datetime',
      categories: this.yAxis_array,
      pointIntervalUnit: 'month',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%b-%Y', this.value);
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Unit Sold'
      }
    },
    tooltip: {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
        '<td style = "padding:0"><b>{point.y:.1f} </b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          crop: false,
          rotation: '-90',
          verticalAlign: 'top',
          padding: 15,
          z: 25

          // overflow: 'none'
        }
      }
    },
    series: [{
      name: 'Units',
      data: this.yAxis_units2
    },
    {
      type: 'spline',
      name: 'TopPoint',
      data: this.yAxis_units2,
      marker: {
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[3],
        fillColor: 'white'
      },
    }]
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.GetDataServiceAnalysis().subscribe(result => {
      var entities = result.entities;
      var xAxis_arry = [];
      var xAxis_arry2 = [];
      var yAxis_array = [];

      var yAxis_units = [];
      var XAxis_meantemp = [];

      let cat1: number = 0
      let cat2: number = 0
      let cat3: number = 0
      let cat4: number = 0
      let cat5: number = 0

      let catAll: number

      let winterS_h: number = 0;
      let winterS_m: number = 0;
      let winterS_l: number = 0;


      //  console.log(dd)

      for (var i = 1; i <= result.length; i++) {
        var object = new TimeSeriesModel()
        object = result[i]
        if (typeof (object) != "undefined") {
          if (object.Cat.trim() == "Cold & Allergy Medications")
            cat1 = cat1 + object.Units
          else if (object.Cat.trim() == "Eye & Ear Care")
            cat2 = cat2 + object.Units
          else if (object.Cat.trim() == "Internal Remedies")
            cat3 = cat3 + object.Units
          else if (object.Cat.trim() == "Vitamins/Herbals/Natural Supplements")
            cat4 = cat4 + object.Units
          else if (object.Cat.trim() == "Pain & Analgesic")
            cat5 = cat5 + object.Units



          if (object.Winter_State == 3)
            winterS_h = winterS_h + object.Units
          else if (object.Winter_State == 2)
            winterS_m = winterS_m + object.Units
          else if (object.Winter_State == 1)
            winterS_l = winterS_l + object.Units

          yAxis_units.push(object.Units);
          XAxis_meantemp.push(object.MeanTemp)
          // xAxis_arry.push(object.Units);
          //xAxis_arry2.push(object.Cat);
          // yAxis_array.push(new Date(object.Date))
        }


      }

      catAll = cat1 + cat2 + cat4 + cat5;
      // console.log(catAll);


      this.Highcharts = Highcharts;
      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Phamasutical market shares at a specific Category, 2018-2019'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',

            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },

            showInLegend: true
          }
        },
        series: [{
          type: 'pie',
          name: 'Category share',
          data: [
            ['Cold & Allergy Medication', cat1],
            ['Eye & Ear Care', cat2],
            ['Internal Remedies', cat3],
            ['Vitamins/Herbals/Natural Supplements', cat4],
            ['Pain & Analgesic', cat5],


          ]
        }]
      };


      this.Highcharts1 = Highcharts;
      this.chartOptions1 = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Pharmaceutical market Sales at Given Tempreature, 2018-2019'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',

            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },

            showInLegend: true
          }
        },
        series: [{
          type: 'pie',
          name: 'Category share',
          data: [
            ['Coldest', winterS_h],
            ['Cold', winterS_m],
            ['Normal', winterS_l],



          ]
        }]
      };






    });


    this.dataService.GetDataServiceAnalysis2().subscribe(result => {
      var entities = result.entities;
      var xAxis_arry = [];
      var xAxis_arry2 = [];
      var yAxis_array = [];

      var yAxis_units = [];
      var XAxis_meantemp = [];


      for (var i = 1; i <= result.length; i++) {
        var object = new TimeSeriesModel()
        object = result[i]
        if (typeof (object) != "undefined") {

          yAxis_units.push(object.Units);
          yAxis_array.push(new Date(object.Date))
          XAxis_meantemp.push(object.MeanTemp)

          // xAxis_arry.push(object.Units);
          //xAxis_arry2.push(object.Cat);
          // yAxis_array.push(new Date(object.Date))
        }


      }


      this.Highcharts2 = Highcharts;
      this.chartOptions2 = {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'Temperature Change in Saskatoon  from 2018 through 2019'
        },
        subtitle: {
          text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' :
            'Pinch the chart to zoom in'
        },
        xAxis: {
          type: 'datetime',
          categories: yAxis_array,
          pointIntervalUnit: 'month',
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%d-%b-%Y', this.value);
            }
          }
        },
        yAxis: {
          title: {
            text: 'Tempreture'
          },
          Categories: XAxis_meantemp,
        },
        legand: {
          enabled: false
        },
        tooltip: {
          valueSuffix: " °C"
        },
        plotOptions: {
          area: {
            fillColor: {
              // linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
              // stops: [
              //    [0, Highcharts.getOptions().colors[0]],
              //    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              // ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
        series: [{
          type: 'area',
          name: "Temperature",
          data: XAxis_meantemp
        }]
      };

    });



    this.dataService.GetDataServiceAnalysis3().subscribe(result => {
      var entities = result.entities;
      var yAxis_array2 = [];

      var yAxis_units2 = [];
      var XAxis_meantemp2 = [];


      for (var i = 1; i <= result.length; i++) {
        var object = new TimeSeriesModel()
        object = result[i]
        if (typeof (object) != "undefined") {

          yAxis_units2.push(object.Units);
          yAxis_array2.push(new Date(object.Date))
          XAxis_meantemp2.push(object.MeanTemp)


        }

      }


      this.Highcharts3 = Highcharts;
      this.chartOptions3 = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Monthly Unit Sold'
        },
        subtitle: {
          text: '2018-2019 unit sold'
        },
        xAxis: {
          type: 'datetime',
          categories: yAxis_array2,
          pointIntervalUnit: 'month',
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%b-%Y', this.value);
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Unit Sold'
          }
        },
        tooltip: {
          headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
            '<td style = "padding:0"><b>{point.y:.1f} </b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: true,
              crop: false,
              rotation: '-90',
              verticalAlign: 'top',
              padding: 15,
              z: 25

              // overflow: 'none'
            }
          }
        },
        series: [{
          name: 'Units',
          data: yAxis_units2
        },
        {
          type: 'spline',
          name: 'TopPoint',
          data: yAxis_units2,
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
          },
        }]
      };

    });


  }








}
