import MachineRepository from "./MachineRepository";
import DasboardRepository from "./DasboardRepository";
import LoginRepository from "./LoginRepository";
import LocationRepository from "./LocationRepository";
import CompanyRepository from "./CompanyRepository";
import TransactionRepository from "./TransactionRepository";
import DisposibleBottlePlastic from "./DisposibleBottlePlastic";
import BottleDispenseByCompanyDate from "./BottleDispenseByCompanyDate";
const repositories = {
  machine: MachineRepository,
  dashboard: DasboardRepository,
  login: LoginRepository,
  location: LocationRepository,
  company: CompanyRepository,
  transaction: TransactionRepository,
  disposibleBottle: DisposibleBottlePlastic,
  dispensebottlebydate: BottleDispenseByCompanyDate,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
