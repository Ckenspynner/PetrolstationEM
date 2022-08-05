import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Staff {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public phone: string,
    public email: string,
  ) {
  }
}

@Component({
  selector: 'app-modify-user-table',
  templateUrl: './modify-user-table.component.html',
  styleUrls: ['./modify-user-table.component.css']
})
export class ModifyUserTableComponent implements OnInit {

   //Holds array of records
   staffs!: Staff[];

  constructor(
     //FormBuilder, Http and NgbModal passed parameters
     private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    //Getfriend list
    this.getStaffs();
  }

  //Loads data to table on startup

  getStaffs(){
    this.httpClient.get<any>('http://localhost:9001/staffs').subscribe(
      response => {
        console.log(response);
        this.staffs = response;
      }
    );
  }

}
