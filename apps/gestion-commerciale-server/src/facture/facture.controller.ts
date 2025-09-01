import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FactureService } from "./facture.service";
import { FactureControllerBase } from "./base/facture.controller.base";

@swagger.ApiTags("factures")
@common.Controller("factures")
export class FactureController extends FactureControllerBase {
  constructor(protected readonly service: FactureService) {
    super(service);
  }
}
