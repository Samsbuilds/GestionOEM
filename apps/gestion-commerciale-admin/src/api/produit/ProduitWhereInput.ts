import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LigneCommandeListRelationFilter } from "../ligneCommande/LigneCommandeListRelationFilter";

export type ProduitWhereInput = {
  categorie?: StringFilter;
  dateDajout?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  ligneCommandes?: LigneCommandeListRelationFilter;
  nom?: StringFilter;
  prixAchat?: StringFilter;
  prixVente?: StringNullableFilter;
  quantitStock?: StringFilter;
  statut?: StringNullableFilter;
};
