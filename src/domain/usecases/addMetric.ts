import { Metric } from "../entities/metric";

export interface RequestMetricData {
    account_id: string;
    metrics: metric[];
}

export interface metric {
    date: Date;
    bpm: number;
    pamin: number;
    pamax: number;
}


export interface AddMetrics {
    add(metricData: RequestMetricData): Promise<Metric[]>
}