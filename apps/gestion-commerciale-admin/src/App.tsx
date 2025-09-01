import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ProduitList } from "./produit/ProduitList";
import { ProduitCreate } from "./produit/ProduitCreate";
import { ProduitEdit } from "./produit/ProduitEdit";
import { ProduitShow } from "./produit/ProduitShow";
import { CommandeList } from "./commande/CommandeList";
import { CommandeCreate } from "./commande/CommandeCreate";
import { CommandeEdit } from "./commande/CommandeEdit";
import { CommandeShow } from "./commande/CommandeShow";
import { LigneCommandeList } from "./ligneCommande/LigneCommandeList";
import { LigneCommandeCreate } from "./ligneCommande/LigneCommandeCreate";
import { LigneCommandeEdit } from "./ligneCommande/LigneCommandeEdit";
import { LigneCommandeShow } from "./ligneCommande/LigneCommandeShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { FactureList } from "./facture/FactureList";
import { FactureCreate } from "./facture/FactureCreate";
import { FactureEdit } from "./facture/FactureEdit";
import { FactureShow } from "./facture/FactureShow";
import { FournisseurList } from "./fournisseur/FournisseurList";
import { FournisseurCreate } from "./fournisseur/FournisseurCreate";
import { FournisseurEdit } from "./fournisseur/FournisseurEdit";
import { FournisseurShow } from "./fournisseur/FournisseurShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Gestion commerciale"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Produit"
          list={ProduitList}
          edit={ProduitEdit}
          create={ProduitCreate}
          show={ProduitShow}
        />
        <Resource
          name="Commande"
          list={CommandeList}
          edit={CommandeEdit}
          create={CommandeCreate}
          show={CommandeShow}
        />
        <Resource
          name="LigneCommande"
          list={LigneCommandeList}
          edit={LigneCommandeEdit}
          create={LigneCommandeCreate}
          show={LigneCommandeShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Facture"
          list={FactureList}
          edit={FactureEdit}
          create={FactureCreate}
          show={FactureShow}
        />
        <Resource
          name="Fournisseur"
          list={FournisseurList}
          edit={FournisseurEdit}
          create={FournisseurCreate}
          show={FournisseurShow}
        />
      </Admin>
    </div>
  );
};

export default App;
