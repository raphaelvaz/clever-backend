import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./account";

@Entity('metrics')
export class Metric {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    date!: Date;

    @Column()
    bpm!: number;

    @Column()
    pamin!: number;

    @Column()
    pamax!: number;

    @Column()
    account_id!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @ManyToOne(() => Account, account => account.metrics)
    @JoinColumn({ name: 'account_id' })
    account!: Account;
}