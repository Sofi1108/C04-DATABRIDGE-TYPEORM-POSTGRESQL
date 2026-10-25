import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('eventos') export class Evento {
 @PrimaryGeneratedColumn() id:number;
  @Column('varchar')
  nombre: string;
  @Column('varchar')
  ciudad: string;
  @Column('varchar')
  categoria: string;
  @Column('varchar')
  fecha: string;
}
