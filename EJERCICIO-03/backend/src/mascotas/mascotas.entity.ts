import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('mascotas') export class Mascota {
 @PrimaryGeneratedColumn() id:number;
  @Column('varchar')
  nombre: string;
  @Column('varchar')
  especie: string;
  @Column('number')
  edad: number;
  @Column('number')
  nivelEnergia: number;
}
