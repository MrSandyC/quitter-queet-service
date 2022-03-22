import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Queet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  userId: number;

  @CreateDateColumn()
  created_at: Date;
}
