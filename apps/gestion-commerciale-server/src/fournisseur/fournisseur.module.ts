import { Module } from "@nestjs/common";
import { FournisseurModuleBase } from "./base/fournisseur.module.base";
import { FournisseurService } from "./fournisseur.service";
import { FournisseurController } from "./fournisseur.controller";
import { FournisseurResolver } from "./fournisseur.resolver";

@Module({
  imports: [FournisseurModuleBase],
  controllers: [FournisseurController],
  providers: [FournisseurService, FournisseurResolver],
  exports: [FournisseurService],
})
export class FournisseurModule {}
