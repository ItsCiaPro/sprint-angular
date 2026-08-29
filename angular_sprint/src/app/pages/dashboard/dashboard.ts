import { Component } from '@angular/core';
import { Navheader } from '../../components/navheader/navheader';
import { FormsModule } from '@angular/forms';
import { Veiculo } from '../../../models/veiculo.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Navheader, FormsModule, JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  vehicleList: Veiculo[] = []; // Lista das informações dos carros

  currentCarChoice = 'Ranger';
  errorMessage = '';

  sellTotalAmount : string | Number = 0; // Total de Vendas
  connectedAmount : string | Number = 0; // Conectados
  updateSoftwareAmount : string | Number = 0; // Update Software
  carImage : string =  ''; // Caminho da Imagem do Carro

  constructor() {
    this.fetchVehiclesData();
  }

  // Atualiza as informações no cards
  updateCards() {
    if (this.vehicleList.length === 0) return;

    let carInfo! : Veiculo;

    this.vehicleList.forEach(car => {
      if (car.vehicle === this.currentCarChoice) {
        carInfo = car;
      }
    });

    this.sellTotalAmount = carInfo.volumetotal;
    this.connectedAmount = carInfo.connected;
    this.updateSoftwareAmount = carInfo.softwareUpdates;
    this.carImage = carInfo.img;

  }

  // Faz requisição dos dados dos carros para os cards
  async fetchVehiclesData() {
    try {
      const res = await fetch('http://localhost:3001/vehicles');

      const returnData = await res.json();

      if (res.ok) {

        // Armazena cada JsonObject como um modelo de veiculo
        this.vehicleList = returnData.vehicles as Veiculo[];
        this.updateCards();

        // Erro (Status 400 ou 401)
      } else {
        this.errorMessage = returnData.message;
      }
    }

    catch (error) {
      // Erro de Rede ou Servidor Caído (Status 500)
      this.errorMessage = 'Falha na comunicação com o servidor!';
    }
  }
}

