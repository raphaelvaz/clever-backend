import { Metric } from "../entities/metric";

export interface RequestMetricData {
    account_id: string;
    metrics: MetricRequest[];
}

export interface MetricRequest {
    date: Date;
    bpm: number;
    pamin: number;
    pamax: number;
}


export interface AddMetrics {
    add(metricData: RequestMetricData): Promise<Metric[]>
}