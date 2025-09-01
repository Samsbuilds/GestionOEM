import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CommandeTitle } from "../commande/CommandeTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adresse" source="adresse" />
        <ReferenceArrayInput source="commandes" reference="Commande">
          <SelectArrayInput
            optionText={CommandeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="date_dinscription" source="dateDinscription" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="entreprise" source="entreprise" />
        <TextInput label="Nom" source="nom" />
        <TextInput label="Prenom" source="prenom" />
        <TextInput label="Telephone" source="telephone" />
      </SimpleForm>
    </Create>
  );
};
