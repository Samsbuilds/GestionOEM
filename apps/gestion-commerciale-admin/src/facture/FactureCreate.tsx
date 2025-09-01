import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CommandeTitle } from "../commande/CommandeTitle";

export const FactureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="commande_id" reference="Commande">
          <SelectArrayInput
            optionText={CommandeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="date_facture" source="dateFacture" />
        <TextInput label="montant_total" source="montantTotal" />
        <TextInput label="numero_facture" source="numeroFacture" />
        <TextInput label="statut_paiment" source="statutPaiment" />
      </SimpleForm>
    </Create>
  );
};
