export interface Usuario {
  id: number | string
  nome: string
  senha: string // Salvar a senha do usuário no navegador é perigoso!
  email: string
}
