import * as graphql from "@nestjs/graphql";
import { FactureResolverBase } from "./base/facture.resolver.base";
import { Facture } from "./base/Facture";
import { FactureService } from "./facture.service";

@graphql.Resolver(() => Facture)
export class FactureResolver extends FactureResolverBase {
  constructor(protected readonly service: FactureService) {
    super(service);
  }
}
