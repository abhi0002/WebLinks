import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {

  Math: any;
  // Pagination
  public totalPage: number;
  public limitTo = 10;
  public firstPage = 1;
  public lastPage: number;
  currentPage = 1;
  startLimit = 0;
  // endLimit = (this.limitTo - 1) + this.startLimit;

  prevFlag = false;
  nextFlag = false;

  constructor() {
  this.Math = Math;
  }

  public paginationInit(completeRecords) {
    this.lastPage = Math.ceil(completeRecords / this.limitTo);
    // this.lastPage = _.cloneDeep(this.totalPage);
    this.currentPage = 1;
    console.log(this.lastPage);
    console.log(this.currentPage);
  }

   searchFunc(model) {
    if (model.length) {
      this.lastPage = Math.ceil(model.length / this.limitTo);
      this.currentPage = 1;
      this.startLimit = (this.currentPage - 1) * this.limitTo;
    } else {
      this.lastPage = 0;
      this.currentPage = 0;
    }
  }


  public setLastPage(dataCount) {
    if (dataCount % this.limitTo === 0) {
      this.lastPage = dataCount / this.limitTo;
    } else {
      this.lastPage = (dataCount / this.limitTo) + 1 ;
    }
  }
  prevPage(prevParam) {
    this.lastPage = Math.ceil(prevParam.length / this.limitTo);
    // lastPage = angular.copy(totalPage);
    if (this.currentPage === this.firstPage) {
      this.prevFlag = true;
    }
    if (!this.prevFlag) {
      this.currentPage = this.currentPage - 1;
      this.startLimit = (this.currentPage - 1) * this.limitTo;
      this.nextFlag = false;
    }
  }

  nextPage(nextParam) {
    this.lastPage = Math.ceil(nextParam.length / this.limitTo);
    // lastPage = angular.copy(totalPage);
    if (this.currentPage === this.lastPage) {
      this.nextFlag = true;
    }
    if (!this.nextFlag) {
      this.currentPage = this.currentPage + 1;
      this.startLimit = (this.currentPage - 1) * this.limitTo;
      this.prevFlag = false;
    }
  }
}
