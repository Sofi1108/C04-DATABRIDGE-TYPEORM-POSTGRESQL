import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('libros') export class Libro {
 @PrimaryGeneratedColumn() id:number;
  @Column('varchar')
  titulo: string;
  @Column('varchar')
  autor: string;
  @Column('number')
  anio: number;
  @Column('boolean')
  leido: boolean;
}
