import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('destinos') export class Destino {
 @PrimaryGeneratedColumn() id:number;
  @Column('varchar')
  nombre: string;
  @Column('varchar')
  pais: string;
  @Column('varchar')
  descripcion: string;
  @Column('number')
  prioridad: number;
}
