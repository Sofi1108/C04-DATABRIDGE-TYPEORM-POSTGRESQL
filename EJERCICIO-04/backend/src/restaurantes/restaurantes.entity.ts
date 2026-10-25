import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('restaurantes') export class Restaurante {
 @PrimaryGeneratedColumn() id:number;
  @Column('varchar')
  nombre: string;
  @Column('varchar')
  tipo: string;
  @Column('varchar')
  ciudad: string;
  @Column('number')
  precioMedio: number;
}
