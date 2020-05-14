import { Component } from '@angular/core';
import { ArchivoService } from './archivo/archivo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracodaFrontv2';
  selectedFile: File = null;
  mes: string;
  pdf: Uint8Array;
  _http: any;

  constructor(private archivoService:ArchivoService){}
  ngOnInit(){
    console.log("cargando pagina ---")
  }

  fileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    var reader = new FileReader();      
    reader.readAsDataURL(event.target.files[0]);
};

  subirArchivo() {
    const dr = new FormData();
      dr.append('dr', this.selectedFile);

      this.archivoService.guardarArchivo(dr).subscribe({
        next: respxSol => {
            /*this.msgs = [];
            this.msgs.push({severity:'success', summary:'Foto guardada', detail:''});
            this.alertService.success("Se ha guardado la foto");
            setTimeout(() => {}, 3000);
            this.onBack();*/
            console.log("se guardo? . .. . ");
        }
    });
}
consultarArchivoMes(){
  console.log("Consultando mes ..." + this.mes );
  this.archivoService.consultarArchivoMes(this.mes).subscribe({
    next: respxSol => {
      //this.pdf.push(respxSol.contenido);
      this.pdf = respxSol.contenido;

/*
      return this._http
      .get(fileUrl, { responseType: ResponseContentType.ArrayBuffer })
      .map((response: Response) => response.arrayBuffer())
      .map((arrayBuffer: ArrayBuffer) => new Uint8Array(arrayBuffer))
      .first();
  } */
        /*this.msgs = [];
        this.msgs.push({severity:'success', summary:'Foto guardada', detail:''});
        this.alertService.success("Se ha guardado la foto");
        setTimeout(() => {}, 3000);
        this.onBack();*/
        console.log("Consultamos los archivos ");
      }
  });
}



}