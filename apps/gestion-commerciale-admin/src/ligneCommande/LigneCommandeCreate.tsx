import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CommandeTitle } from "../commande/CommandeTitle";
import { ProduitTitle } from "../produit/ProduitTitle";

export const LigneCommandeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="commande_id.id"
          reference="Commande"
          label="commande_id"
        >
          <SelectInput optionText={CommandeTitle} />
        </ReferenceInput>
        <TextInput label="prix_unitaire" source="prixUnitaire" />
        <ReferenceInput
          source="produit_id.id"
          reference="Produit"
          label="produit_id"
        >
          <SelectInput optionText={ProduitTitle} />
        </ReferenceInput>
        <TextInput label="quantité" source="quantit" />
        <TextInput label="remise" source="remise" />
        <TextInput label="total_lignes" source="totalLignes" />
      </SimpleForm>
    </Create>
  );
};
