import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { LigneCommandeListRelationFilter } from "../ligneCommande/LigneCommandeListRelationFilter";

export type CommandeWhereInput = {
  client_id?: ClientWhereUniqueInput;
  etat?: StringFilter;
  factures?: FactureListRelationFilter;
  id?: StringFilter;
  ligneCommandes?: LigneCommandeListRelationFilter;
  montantTotal?: StringFilter;
  numeroCommande?: StringFilter;
};
