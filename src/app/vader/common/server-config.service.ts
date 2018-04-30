import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import { FileUploadConfig } from "./model";

@Injectable()
export class ServerConfigService {

  private static FILE_UPLOAD = "/fileUpload"

  constructor(private http: Http) {
  }

  get fileUploadConfig(): Observable<FileUploadConfig> {
    return this.http.get(ServerConfigService.FILE_UPLOAD).map(_ => _.json())
  }
}
