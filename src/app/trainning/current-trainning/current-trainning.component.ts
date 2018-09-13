import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material";
import { StopTrainingComponent } from "./stop-training.component";

@Component({
  selector: "app-current-trainning",
  templateUrl: "./current-trainning.component.html",
  styleUrls: ["./current-trainning.component.css"]
})
export class CurrentTrainningComponent implements OnInit {
  @Output()
  trainingexit = new EventEmitter();

  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.onStartOrResumeTimer();
  }
  onStartOrResumeTimer(){
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);

  }
  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingexit.emit();
      } else{
        this.onStartOrResumeTimer();
      }
    });
  }
}
