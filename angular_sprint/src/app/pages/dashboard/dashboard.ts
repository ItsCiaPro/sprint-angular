import { Component } from '@angular/core';
import { Navheader } from '../../components/navheader/navheader';
import { FormsModule } from '@angular/forms';
import { Veiculo, VeiculoData } from '../../../models/veiculo.model';
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

  // Informação dos cards
  sellTotalAmount: string | Number = 0; // Total de Vendas
  connectedAmount: string | Number = 0; // Conectados
  updateSoftwareAmount: string | Number = 0; // Update Software
  carImage: string = ''; // Caminho da Imagem do Carro

  // Informação das tabelas
  odometroValue: number | string = 0;
  nivelCombustivelValue: number | string = 0;
  statusValue: string = '';
  latValue: number | string = 0;
  longValue: number | string = 0;

  constructor() {
    this.fetchVehicles();
  }

  // Atualiza as informações no cards
  updateCards() {
    if (this.vehicleList.length === 0) return;

    let carInfo!: Veiculo;

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

  updateTable(data: VeiculoData) {
    this.odometroValue = data.odometro;
    this.nivelCombustivelValue = data.nivelCombustivel;
    this.statusValue = data.status;
    this.latValue = data.lat;
    this.longValue = data.long;
  }

  // Faz requisição dos dados dos carros para os cards
  async fetchVehicles() {
    try {
      const res = await fetch('http://localhost:3001/vehicles');

      const returnData = await res.json();

      if (res.ok) {

        // Armazena cada JsonObject como um modelo de veiculo
        this.vehicleList = returnData.vehicles as Veiculo[];
        this.updateCards();

        this.errorMessage = '';
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


  async fetchVehiclesData(code: string) {
    try {
      const res = await fetch('http://localhost:3001/vehicleData', {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Informa ao Express que o corpo é JSON
        },
        body: JSON.stringify({ vin: code }) // Transforma o objeto em texto string
      });

      const returnData = await res.json();

      if (res.ok) {

        const data = returnData as VeiculoData;
        this.updateTable(data);

        this.errorMessage = '';
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

