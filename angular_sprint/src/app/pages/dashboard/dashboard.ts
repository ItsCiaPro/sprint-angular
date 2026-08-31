import { Component } from '@angular/core';
import { Navheader } from '../../components/navheader/navheader';
import { FormsModule } from '@angular/forms';
import { Veiculo, VeiculoData } from '../../../models/veiculo.model';
import { Fetch } from '../../services/fetch';

@Component({
  selector: 'app-dashboard',
  imports: [Navheader, FormsModule],
  providers: [Fetch],
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

  constructor(private fetchService: Fetch) {
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
    this.errorMessage = '';
    const res = await this.fetchService.get('http://localhost:3001/vehicles');


    if (res instanceof Error) {
      return this.errorMessage = res.message;
    }

    // Armazena cada JsonObject como um modelo de veiculo
    this.vehicleList = res.vehicles as Veiculo[];
    this.updateCards();
    return;
  }


  async fetchVehiclesData(code: string) {
    this.errorMessage = '';

    const res = await this.fetchService.post(
      'http://localhost:3001/vehicleData',
      JSON.stringify({ vin: code }));

    if (res instanceof Error) {
      return this.errorMessage = res.message;
    }

    const data = res as VeiculoData;
    this.updateTable(data);

    return;
  }

}

