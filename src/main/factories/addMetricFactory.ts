import { DbAddMetrics } from "../../data/usecases/DbAddMetric";
import { TypeormAccountRepository } from "../../infra/orm/repositories/accountRepository";
import { TypeormMetricRepository } from "../../infra/orm/repositories/metricRepository";
import AddMetricsController from "../../presentation/controllers/addMetric";
import { Controller } from "../../presentation/protocols/controller";


export const addMetricFactory = (): Controller => {
    const metricRepository = new TypeormMetricRepository();
    const accountRepository = new TypeormAccountRepository();
    const dbAddMetric = new DbAddMetrics(metricRepository, accountRepository);

    const addMetricController = new AddMetricsController(dbAddMetric);

    return addMetricController;
}