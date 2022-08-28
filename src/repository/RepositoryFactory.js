import MachineRepository from "./MachineRepository";
import DasboardRepository from "./DasboardRepository";
import LoginRepository from "./LoginRepository";
import LocationRepository from "./LocationRepository";
import CompanyRepository from "./CompanyRepository";
import TransactionRepository from "./TransactionRepository";

const repositories = {
  machine: MachineRepository,
  dashboard: DasboardRepository,
  login: LoginRepository,
  location: LocationRepository,
  company: CompanyRepository,
  transaction: TransactionRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
