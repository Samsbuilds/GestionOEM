import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FournisseurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adresse" source="adresse" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nom_fournisseur" source="nomFournisseur" />
        <TextInput label="produits_livres" source="produitsLivres" />
        <TextInput label="telephone" source="telephone" />
      </SimpleForm>
    </Create>
  );
};
