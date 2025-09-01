import { CommandeWhereUniqueInput } from "../commande/CommandeWhereUniqueInput";
import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";

export type LigneCommandeCreateInput = {
  commande_id: CommandeWhereUniqueInput;
  prixUnitaire: string;
  produit_id: ProduitWhereUniqueInput;
  quantit: string;
  remise?: string | null;
  totalLignes: string;
};
