import { getRepository } from "typeorm";
import { MetricData, MetricRepository } from "../../../data/protocols/MetricRepository";
import { Metric } from "../../../domain/entities/metric";
import { Metric as ORMMetric } from "../models/metric";



export class TypeormMetricRepository implements MetricRepository {
    async add(metricData: MetricData): Promise<Metric> {
        const metricRepository = getRepository(ORMMetric)

        const metric = metricRepository.create(metricData)

        await metricRepository.save(metric)

        return metric
    }
}