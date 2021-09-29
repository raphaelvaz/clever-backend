import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Metric } from "./metric";

@Entity('accounts')
export class Account {
    [x: string]: any;
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    birth!: Date;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToMany(() => Metric, metric => metric.account)
    @JoinColumn({ name: 'account_id' })
    metrics!: Metric[];
}