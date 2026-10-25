import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('viajes') export class Viaje {
 @PrimaryGeneratedColumn() id:number;
  @Column('varchar')
  destino: string;
  @Column('varchar')
  fecha: string;
  @Column('number')
  presupuesto: number;
}
