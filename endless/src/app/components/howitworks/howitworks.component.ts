import { Component, OnInit } from '@angular/core';
import { HowitworksService } from '../../services/howitworks.service';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {

  result:any = {
    data: []
  };

  constructor(private howItWorksService:HowitworksService) { 

    
  }

  sortData(result) {
    this.result.data = result.sort((obj1, obj2) => {
      return obj1.stepNumber - obj2.stepNumber
    })

    console.log('after sort', this.result.data);

  }

  ngOnInit() {
    this.howItWorksService.getData().subscribe((result:any[]) => {
      console.log("line 18: ", result);

      this.sortData(result);
      
    })

    console.log('line 24: ', this.result);
  }

}
