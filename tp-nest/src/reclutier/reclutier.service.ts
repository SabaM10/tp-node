import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ReclutierService {
  private readonly url = "https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json";

  async create(data: any) {
    
    data.name = this.capitalize(data.name);
    data.suraname = this.capitalize(data.suraname);

    
    if (!this.validDate(data.birthday)) {
      throw new Error("Fecha inválida: debe estar en formato YYYY/MM/DD y dentro del rango permitido.");
    }

    
    if (!Number.isInteger(data.age)) {
      throw new Error("La edad debe ser un número entero.");
    }

    
    if (!["CUIT", "DNI"].includes(data.documentType)) {
      throw new Error("documentType inválido (solo CUIT o DNI).");
    }

    
    if (!data.documentNumber || isNaN(Number(data.documentNumber))) {
      throw new Error("documentNumber debe ser un número válido.");
    }

    
    try {
      const response = await axios.post(this.url, data);
      return { status: "OK", firebaseResponse: response.data };
    } catch (err) {
      throw new Error("Error enviando los datos a Firebase.");
    }
  }

  private capitalize(word: string): string {
    if (!word || typeof word !== "string") return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  private validDate(dateStr: string): boolean {
    
    const regex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!regex.test(dateStr)) return false;

    const [year, month, day] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    
    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      return false;
    }

    const minDate = new Date("1900-01-01");
    const maxDate = new Date();

    return date >= minDate && date <= maxDate;
  }
}

