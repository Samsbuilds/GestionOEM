import { CommandeUpdateManyWithoutFacturesInput } from "./CommandeUpdateManyWithoutFacturesInput";

export type FactureUpdateInput = {
  commande_id?: CommandeUpdateManyWithoutFacturesInput;
  dateFacture?: Date;
  montantTotal?: string;
  numeroFacture?: string | null;
  statutPaiment?: string;
};
