import { Component } from '@angular/core';
import { CargaArchivoService } from './cargaArchivo/cargaArchivo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracodaFrontv2';
  selectedFile: File = null;


  constructor(private carga:CargaArchivoService){}
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

      this.carga.guardarArchivo(dr).subscribe({
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
}