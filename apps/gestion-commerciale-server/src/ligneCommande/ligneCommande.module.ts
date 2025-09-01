import { Module } from "@nestjs/common";
import { LigneCommandeModuleBase } from "./base/ligneCommande.module.base";
import { LigneCommandeService } from "./ligneCommande.service";
import { LigneCommandeController } from "./ligneCommande.controller";
import { LigneCommandeResolver } from "./ligneCommande.resolver";

@Module({
  imports: [LigneCommandeModuleBase],
  controllers: [LigneCommandeController],
  providers: [LigneCommandeService, LigneCommandeResolver],
  exports: [LigneCommandeService],
})
export class LigneCommandeModule {}
