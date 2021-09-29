import { Metric } from "../../domain/entities/metric";
import { AddMetrics, RequestMetricData } from "../../domain/usecases/addMetric";
import { MetricRepository } from "../protocols/MetricRepository";



export class DbAddMetrics implements AddMetrics {
    constructor(
        private readonly metricRepository: MetricRepository,
    ) {

    }
    async add({ account_id, metrics }: RequestMetricData): Promise<Metric[]> {
        const createdMetrics =
            await Promise.all(metrics.map(async metric => await this.metricRepository.add({ account_id, ...metric })));

        return createdMetrics;
    }
}