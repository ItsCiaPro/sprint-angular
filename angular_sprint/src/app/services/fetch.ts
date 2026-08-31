import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Fetch {

  async post(url: string, body: string) {
    try {

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      });

      const resData = await res.json();

      // Retorna os dados json dentro da resposta
      if (res.ok) {
        return resData;
      }

      // Se o servidor retornar um erro
      else {
        return new Error(resData.message);
      }

      // Se o fetch falhar de alguma maneira
    } catch (error) {

      return new Error('Falha na comunicação com o servidor!');

    }

  }

  async get(url: string) {
    try {

      const res = await fetch(url);
      const resData = await res.json();

      // Retorna os dados json dentro da resposta
      if (res.ok) {
        return resData;
      }

      // Se o servidor retornar um erro
      else {
        return new Error(resData.message);
      }

      // Se o fetch falhar de alguma maneira
    } catch (error) {

      return new Error('Falha na comunicação com o servidor!');

    }
  }

}