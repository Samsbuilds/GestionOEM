import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LigneCommandeService } from "./ligneCommande.service";
import { LigneCommandeControllerBase } from "./base/ligneCommande.controller.base";

@swagger.ApiTags("ligneCommandes")
@common.Controller("ligneCommandes")
export class LigneCommandeController extends LigneCommandeControllerBase {
  constructor(protected readonly service: LigneCommandeService) {
    super(service);
  }
}
