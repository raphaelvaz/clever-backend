import { DbAddMetrics } from "../../data/usecases/DbAddMetric";
import { TypeormMetricRepository } from "../../infra/orm/repositories/metricRepository";
import AddMetricsController from "../../presentation/controllers/addMetric";
import { Controller } from "../../presentation/protocols/controller";


export const addMetricFactory = (): Controller => {
    const metricRepository = new TypeormMetricRepository();
    const dbAddMetric = new DbAddMetrics(metricRepository);

    const addMetricController = new AddMetricsController(dbAddMetric);

    return addMetricController;
}