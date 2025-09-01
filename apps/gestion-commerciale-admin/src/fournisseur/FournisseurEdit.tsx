import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FournisseurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adresse" source="adresse" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nom_fournisseur" source="nomFournisseur" />
        <TextInput label="produits_livres" source="produitsLivres" />
        <TextInput label="telephone" source="telephone" />
      </SimpleForm>
    </Edit>
  );
};
