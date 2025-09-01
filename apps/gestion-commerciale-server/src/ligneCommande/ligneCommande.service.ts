import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LigneCommandeServiceBase } from "./base/ligneCommande.service.base";

@Injectable()
export class LigneCommandeService extends LigneCommandeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
