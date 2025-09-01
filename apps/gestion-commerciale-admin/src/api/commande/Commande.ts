import { Client } from "../client/Client";
import { Facture } from "../facture/Facture";
import { LigneCommande } from "../ligneCommande/LigneCommande";

export type Commande = {
  ateCommande: string;
  client_id?: Client | null;
  createdAt: Date;
  etat: string;
  factures?: Array<Facture>;
  id: string;
  ligneCommandes?: Array<LigneCommande>;
  montantTotal: string;
  numeroCommande: string;
  updatedAt: Date;
};
