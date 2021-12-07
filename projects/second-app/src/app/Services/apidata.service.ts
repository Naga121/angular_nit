import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { IProduct} from '../Contracts/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http:HttpClient) { }
  productGetUrl = "http://127.0.0.1:8181/getproducts";
  productPostUrl= "http://127.0.0.1:8181/addproducts";
  productDeleteUrl = "http://127.0.0.1:8181/deleteproduct/:id";

  GetProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productGetUrl);
  }

  AddProducts(data:any){
    return this.http.post<any>(this.productPostUrl,data).pipe(catchError(this.CatchError));
  }

  DeleteProducts(data:any){
    return this.http.delete(this.productDeleteUrl+data);

  }

  CatchError(error:HttpErrorResponse){
    return throwError(error.statusText);
  }

}
