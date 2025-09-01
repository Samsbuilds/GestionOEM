import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FournisseurServiceBase } from "./base/fournisseur.service.base";

@Injectable()
export class FournisseurService extends FournisseurServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
