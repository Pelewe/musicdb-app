import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommunicationService } from 'src/app/services/utility/communication.service';

@Component({
  selector: 'app-common-shell',
  templateUrl: './common-shell.component.html',
  styleUrls: ['./common-shell.component.scss']
})
export class CommonShellComponent implements OnInit,AfterViewInit {


  searchControl = new FormControl();
  constructor(
    private commService: CommunicationService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      this.commService.searchTriggerFunction(value)
    })
  }

}
