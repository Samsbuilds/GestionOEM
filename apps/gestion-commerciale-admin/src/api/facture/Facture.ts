import { Commande } from "../commande/Commande";

export type Facture = {
  commande_id?: Array<Commande>;
  createdAt: Date;
  dateFacture: Date;
  id: string;
  montantTotal: string;
  numeroFacture: string | null;
  statutPaiment: string;
  updatedAt: Date;
};
