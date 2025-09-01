import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { FactureCreateNestedManyWithoutCommandesInput } from "./FactureCreateNestedManyWithoutCommandesInput";
import { LigneCommandeCreateNestedManyWithoutCommandesInput } from "./LigneCommandeCreateNestedManyWithoutCommandesInput";

export type CommandeCreateInput = {
  ateCommande: string;
  client_id?: ClientWhereUniqueInput | null;
  etat: string;
  factures?: FactureCreateNestedManyWithoutCommandesInput;
  ligneCommandes?: LigneCommandeCreateNestedManyWithoutCommandesInput;
  montantTotal: string;
  numeroCommande: string;
};
