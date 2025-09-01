import { CommandeCreateNestedManyWithoutFacturesInput } from "./CommandeCreateNestedManyWithoutFacturesInput";

export type FactureCreateInput = {
  commande_id?: CommandeCreateNestedManyWithoutFacturesInput;
  dateFacture: Date;
  montantTotal: string;
  numeroFacture?: string | null;
  statutPaiment: string;
};
