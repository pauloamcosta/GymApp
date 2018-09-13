import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-new-trainning",
  templateUrl: "./new-trainning.component.html",
  styleUrls: ["./new-trainning.component.css"]
})
export class NewTrainningComponent implements OnInit {
  @Output()
  trainingStart = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
  onStartTraining() {
    this.trainingStart.emit();
  }
}
