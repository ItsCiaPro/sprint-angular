export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
  img: string // Obs: Tive que adicionar essa variavel para guardar a string da imagem
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
