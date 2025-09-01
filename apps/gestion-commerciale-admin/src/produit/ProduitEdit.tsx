import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LigneCommandeTitle } from "../ligneCommande/LigneCommandeTitle";

export const ProduitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Categorie" source="categorie" />
        <DateTimeInput label="date_dajout" source="dateDajout" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="ligneCommandes" reference="LigneCommande">
          <SelectArrayInput
            optionText={LigneCommandeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Nom" source="nom" />
        <TextInput label="prix_achat" source="prixAchat" />
        <TextInput label="prix_vente" source="prixVente" />
        <TextInput label="quantité_stock" source="quantitStock" />
        <TextInput label="Reference" source="reference" />
        <TextInput label="statut" source="statut" />
      </SimpleForm>
    </Edit>
  );
};
