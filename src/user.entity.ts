import { Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { CreateDateColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 80 })
  public userName: string;

  @Column({ type: 'varchar', length: 120 })
  public firstName: string;

  @Column({ type: 'varchar', length: 120 })
  public lastName: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
