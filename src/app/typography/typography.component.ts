import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

declare var $: any;

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent {

  constructor(private dataService: DataService,) { }
  fileoneAnalysis: string = "No file Attached"
  fileoneAnalysis2: string = "No file Attached"
  fileonePrediction: string = "No file Attached"
  fileoneAnalysis2Bool: boolean = false;
  fileonePredictionBool: boolean = false;
  fileoneAnalysisBool: boolean = false;


  onGoToPage2() {
    alert()
  }

  DeleteFile(filename) {
    this.dataService.DeleteFile(filename).subscribe(result => {
      console.log(result);
      this.showNotification('top', 'right', "File Successfully Deleted")
    });
  }


  ngOnInit() {

    this.dataService.GetDataFileExsist().subscribe(result => {

      for (var i = 0; i <= 2; i++) {

        if (result[i] == "Analysis File 2") {

          this.fileoneAnalysis2 = result[i];
          this.fileoneAnalysis2Bool=true;

        }
        if (result[i] == "Prediction File") {
          this.fileonePrediction = result[i];
          this.fileonePredictionBool=true;
        }
        if (result[i] == "Analysis File 1") {
          this.fileoneAnalysis = result[i];
          this.fileoneAnalysisBool=true;
        }

      }

    });
  }


  showNotification(from, align, param) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "notifications",
      message: param

    }, {
      type: type[color],
      timer: 500,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }

}
