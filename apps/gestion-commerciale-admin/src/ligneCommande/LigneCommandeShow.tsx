import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMMANDE_TITLE_FIELD } from "../commande/CommandeTitle";
import { PRODUIT_TITLE_FIELD } from "../produit/ProduitTitle";

export const LigneCommandeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
