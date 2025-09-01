import { CommandeWhereUniqueInput } from "../commande/CommandeWhereUniqueInput";
import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";

export type LigneCommandeUpdateInput = {
  commande_id?: CommandeWhereUniqueInput;
  prixUnitaire?: string;
  produit_id?: ProduitWhereUniqueInput;
  quantit?: string;
  remise?: string | null;
  totalLignes?: string;
};
