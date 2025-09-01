import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { FactureTitle } from "../facture/FactureTitle";
import { LigneCommandeTitle } from "../ligneCommande/LigneCommandeTitle";

export const CommandeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="date_commande" source="ateCommande" />
        <ReferenceInput
          source="client_id.id"
          reference="Client"
          label="client_id"
        >
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <TextInput label="etat" source="etat" />
        <ReferenceArrayInput source="factures" reference="Facture">
          <SelectArrayInput
            optionText={FactureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="ligneCommandes" reference="LigneCommande">
          <SelectArrayInput
            optionText={LigneCommandeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="montant_total" source="montantTotal" />
        <TextInput label="numero_commande" source="numeroCommande" />
      </SimpleForm>
    </Edit>
  );
};
