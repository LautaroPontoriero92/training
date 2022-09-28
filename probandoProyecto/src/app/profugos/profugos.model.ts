import { Captura } from '../shared/captura.model';

export class Profugos {
  public name: string;
  public description: string;
  public imagePath: string;
  public capturas: Captura[];

  constructor(name: string, desc: string, imagePath: string, capturas: Captura[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.capturas = capturas;
  }
}
