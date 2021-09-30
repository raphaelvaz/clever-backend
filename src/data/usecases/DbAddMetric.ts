import { Metric } from "../../domain/entities/metric";
import { AddMetrics, RequestMetricData } from "../../domain/usecases/addMetric";
import { AccountRepository } from "../protocols/AccountRepository";
import { MetricRepository } from "../protocols/MetricRepository";



export class DbAddMetrics implements AddMetrics {
    constructor(
        private readonly metricRepository: MetricRepository,
        private readonly accountRepository: AccountRepository,
    ) {

    }
    async add({ account_id, metrics }: RequestMetricData): Promise<Metric[]> {

        const accountExists = await this.accountRepository.findById(account_id)
        if (!accountExists) {
            const error = new Error()
            error.name = 'not found'
            throw error;
        }

        const createdMetrics =
            await Promise.all(metrics.map(async metric => await this.metricRepository.add({ account_id, ...metric })));

        return createdMetrics;
    }
}