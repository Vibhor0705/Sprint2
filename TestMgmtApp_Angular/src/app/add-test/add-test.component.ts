import { Component, OnInit } from '@angular/core';
import { Test } from '../model/Test';
import { TestService } from '../services/testservice';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  service:TestService;
  constructor(service:TestService) {
    this.service=service;
   }

  addedTest:Test=null;

  
  ngOnInit(): void {
  }

  register(form:any){
   let data= form.value;
   let testTitle= data.testTitle;
   let testTotalMarks= data.testTotalMarks;
   let testDuration = data.testDuration;
  this.addedTest = new Test();
  this.addedTest.testTitle=testTitle;
  this.addedTest.testTotalMarks=testTotalMarks;
 
 
  let result=this.service.addTest(this.addedTest); // adding to the store
    result.subscribe((test:Test)=>{
        this.addedTest=test;
    },
    err=>{
    console.log("err="+err);
    } );
  form.reset();
  
  }
}
