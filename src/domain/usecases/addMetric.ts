import { Metric } from "../entities/metric";

interface RequestMetricData {
    date: Date;
    bpm: number;
    pamin: number;
    pamax: number;
}


export interface AddMetrics {
    add(metricData: RequestMetricData[]): Promise<Metric[]>
}