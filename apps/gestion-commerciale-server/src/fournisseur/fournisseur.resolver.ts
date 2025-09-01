import * as graphql from "@nestjs/graphql";
import { FournisseurResolverBase } from "./base/fournisseur.resolver.base";
import { Fournisseur } from "./base/Fournisseur";
import { FournisseurService } from "./fournisseur.service";

@graphql.Resolver(() => Fournisseur)
export class FournisseurResolver extends FournisseurResolverBase {
  constructor(protected readonly service: FournisseurService) {
    super(service);
  }
}
