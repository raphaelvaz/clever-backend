import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMetric1632936812078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'metrics',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'account_id',
                    type: 'uuid',
                },
                {
                    name: 'date',
                    type: 'timestamp',
                },
                {
                    name: 'bpm',
                    type: 'integer',
                },
                {
                    name: 'pamin',
                    type: 'integer',
                },
                {
                    name: 'pamax',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'MetricAccount',
                    columnNames: ['account_id'],
                    referencedTableName: 'accounts',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('metrics');
    }

}
