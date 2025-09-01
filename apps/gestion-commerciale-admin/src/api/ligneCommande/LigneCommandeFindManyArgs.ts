import { LigneCommandeWhereInput } from "./LigneCommandeWhereInput";
import { LigneCommandeOrderByInput } from "./LigneCommandeOrderByInput";

export type LigneCommandeFindManyArgs = {
  where?: LigneCommandeWhereInput;
  orderBy?: Array<LigneCommandeOrderByInput>;
  skip?: number;
  take?: number;
};
