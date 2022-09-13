import MachineRepository from "./MachineRepository";
import DasboardRepository from "./DasboardRepository";
import LoginRepository from "./LoginRepository";
import LocationRepository from "./LocationRepository";
import CompanyRepository from "./CompanyRepository";
import TransactionRepository from "./TransactionRepository";
import DisposibleBottlePlastic from "./DisposibleBottlePlastic";

const repositories = {
  machine: MachineRepository,
  dashboard: DasboardRepository,
  login: LoginRepository,
  location: LocationRepository,
  company: CompanyRepository,
  transaction: TransactionRepository,
  disposibleBottle: DisposibleBottlePlastic,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
