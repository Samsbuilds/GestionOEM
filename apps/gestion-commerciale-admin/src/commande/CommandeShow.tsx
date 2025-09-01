import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMMANDE_TITLE_FIELD } from "./CommandeTitle";
import { PRODUIT_TITLE_FIELD } from "../produit/ProduitTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const CommandeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="date_commande" source="ateCommande" />
        <ReferenceField label="client_id" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="etat" source="etat" />
        <TextField label="ID" source="id" />
        <TextField label="montant_total" source="montantTotal" />
        <TextField label="numero_commande" source="numeroCommande" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LigneCommande"
          target="commande_idId"
          label="Ligne_Commandes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="commande_id"
              source="commande.id"
              reference="Commande"
            >
              <TextField source={COMMANDE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="prix_unitaire" source="prixUnitaire" />
            <ReferenceField
              label="produit_id"
              source="produit.id"
              reference="Produit"
            >
              <TextField source={PRODUIT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantité" source="quantit" />
            <TextField label="remise" source="remise" />
            <TextField label="total_lignes" source="totalLignes" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
