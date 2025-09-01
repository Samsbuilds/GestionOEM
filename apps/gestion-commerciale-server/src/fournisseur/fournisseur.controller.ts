import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FournisseurService } from "./fournisseur.service";
import { FournisseurControllerBase } from "./base/fournisseur.controller.base";

@swagger.ApiTags("fournisseurs")
@common.Controller("fournisseurs")
export class FournisseurController extends FournisseurControllerBase {
  constructor(protected readonly service: FournisseurService) {
    super(service);
  }
}
