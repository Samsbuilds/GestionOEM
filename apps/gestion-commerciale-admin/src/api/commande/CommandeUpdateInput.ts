import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FactureUpdateManyWithoutCommandesInput } from "./FactureUpdateManyWithoutCommandesInput";
import { LigneCommandeUpdateManyWithoutCommandesInput } from "./LigneCommandeUpdateManyWithoutCommandesInput";

export type CommandeUpdateInput = {
  ateCommande?: string;
  client_id?: ClientWhereUniqueInput | null;
  etat?: string;
  factures?: FactureUpdateManyWithoutCommandesInput;
  ligneCommandes?: LigneCommandeUpdateManyWithoutCommandesInput;
  montantTotal?: string;
  numeroCommande?: string;
};
