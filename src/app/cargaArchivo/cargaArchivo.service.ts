import {Injectable} from '@angular/core';
import {HttpClientModule, HttpErrorResponse, HttpClient, HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

  export class CargaArchivoService{
    private solicitudUrlBase = 'https://codersservice.herokuapp.com/tracoda';

    constructor(private http: HttpClient){}

    guardarArchivo(dr:FormData){
        console.log("Almacenando la foto de la solicitud...");
        return this.http.put(this.solicitudUrlBase+'/rest/solicitud/archivo/save',dr).pipe(
            tap(data => console.log('Archivo guardado: ' +JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
  
    private handleError(err: HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
          errorMessage = `An error ocurred: ${err.error.message}`;
        }else{
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

  }