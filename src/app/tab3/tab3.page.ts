import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  reservaForm!: FormGroup;
  paqueteSeleccionado: any; // Variable para almacenar la información del paquete seleccionado

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) {
    // Inicializa el formulario
    this.reservaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fecha: ['', Validators.required],
      personas: ['', [Validators.required, Validators.min(1)]],
      comentarios: ['']
    });
  }

  ngOnInit() {
    // Obtener el paquete seleccionado de los parámetros
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['paquete']) {
        this.paqueteSeleccionado = JSON.parse(params['paquete']);
      }
    });
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Reserva Exitosa',
      message: 'Tu reserva ha sido realizada con éxito.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      console.log('Formulario válido', this.reservaForm.value);
      this.mostrarAlerta();
    } else {
      console.log('Formulario inválido');
    }
  }

  volver() {
    this.navController.navigateBack('/tabs/tab2'); // Navegar de vuelta a tab2
  }
}
