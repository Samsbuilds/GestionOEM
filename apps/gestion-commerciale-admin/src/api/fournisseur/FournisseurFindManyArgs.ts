import { FournisseurWhereInput } from "./FournisseurWhereInput";
import { FournisseurOrderByInput } from "./FournisseurOrderByInput";

export type FournisseurFindManyArgs = {
  where?: FournisseurWhereInput;
  orderBy?: Array<FournisseurOrderByInput>;
  skip?: number;
  take?: number;
};
