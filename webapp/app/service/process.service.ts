import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../AppConstants';

@Injectable()
export class ProcessService {
  
  
  public parameters = new Map();


  public httpOptions: any;

  constructor(private _http: HttpClient, private appConstant: AppConstants) {

  }



  getBase64Data(fileSelected: any) {
    let formData = new FormData();
    formData.append("file", fileSelected);
    return this._http.post(this.appConstant.baseAppUrl + "/uploadfile", formData);
  }

  doPDFToExcelFile(fileSelected: any, filePassword: string) {
    let formData = new FormData();
    formData.append("file", fileSelected);
    formData.append("password",filePassword);
    return this._http.post(this.appConstant.baseAppUrl + "/file/doPdfToExcelfile", formData);
  }

  doUploadPDFAndExcelFile(fileSelected: any, filePassword: string) {
    let formData = new FormData();
    formData.append("file", fileSelected);
    formData.append("password",filePassword);
    formData.append("userName",localStorage.getItem('userName'));
    return this._http.post(this.appConstant.baseAppUrl + "/file/extract-pdf", formData);
  }

  getAllFileMasterList() {
    return this._http.get(this.appConstant.baseAppUrl + "/api/dashboard/get-filemaster-list");
  }

  getExtractedDataByDocId(docId: any) {
    return this._http.get(this.appConstant.baseAppUrl + "/api/dashboard/get-Extracted-Data-by-DocId/"+docId);
  }
}