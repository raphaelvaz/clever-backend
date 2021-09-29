import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./account";

@Entity('metrics')
export class Metric {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    date!: Date;

    @Column()
    bpm!: Number;

    @Column()
    pamin!: Number;

    @Column()
    pamax!: Number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @ManyToOne(() => Account, account => account.metrics)
    account!: Account;
}