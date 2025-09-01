import * as graphql from "@nestjs/graphql";
import { LigneCommandeResolverBase } from "./base/ligneCommande.resolver.base";
import { LigneCommande } from "./base/LigneCommande";
import { LigneCommandeService } from "./ligneCommande.service";

@graphql.Resolver(() => LigneCommande)
export class LigneCommandeResolver extends LigneCommandeResolverBase {
  constructor(protected readonly service: LigneCommandeService) {
    super(service);
  }
}
