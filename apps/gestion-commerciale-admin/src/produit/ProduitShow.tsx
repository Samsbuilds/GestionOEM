import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMANDE_TITLE_FIELD } from "../commande/CommandeTitle";
import { PRODUIT_TITLE_FIELD } from "./ProduitTitle";

export const ProduitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Categorie" source="categorie" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_dajout" source="dateDajout" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="prix_achat" source="prixAchat" />
        <TextField label="prix_vente" source="prixVente" />
        <TextField label="quantité_stock" source="quantitStock" />
        <TextField label="Reference" source="reference" />
        <TextField label="statut" source="statut" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="LigneCommande"
          target="produit_idId"
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
