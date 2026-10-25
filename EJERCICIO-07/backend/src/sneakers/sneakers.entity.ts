import {AfterLoad,Column,Entity,PrimaryGeneratedColumn}from'typeorm';
@Entity('sneakers') export class Sneaker {
 @PrimaryGeneratedColumn() id:number;
 estado:string;
  @Column('varchar')
  marca: string;
  @Column('varchar')
  modelo: string;
  @Column('number')
  talla: number;
  @Column('number')
  stock: number;
  @Column('number')
  precio: number;
  @AfterLoad() actualizarEstado(){this.estado=this.stock<=0?'AGOTADO':'DISPONIBLE';}
}
