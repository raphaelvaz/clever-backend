import { Metric } from "../../domain/entities/metric";
import { MetricRequest } from "../../domain/usecases/addMetric";

export type MetricData = MetricRequest & { account_id: string }

export interface MetricRepository {
    add: (metricData: MetricData) => Promise<Metric>
}