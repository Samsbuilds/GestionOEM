import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FournisseurController } from "../fournisseur.controller";
import { FournisseurService } from "../fournisseur.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adresse: "exampleAdresse",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  nomFournisseur: "exampleNomFournisseur",
  produitsLivres: "exampleProduitsLivres",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  adresse: "exampleAdresse",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  nomFournisseur: "exampleNomFournisseur",
  produitsLivres: "exampleProduitsLivres",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    adresse: "exampleAdresse",
    createdAt: new Date(),
    email: "exampleEmail",
    id: "exampleId",
    nomFournisseur: "exampleNomFournisseur",
    produitsLivres: "exampleProduitsLivres",
    telephone: "exampleTelephone",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  adresse: "exampleAdresse",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  nomFournisseur: "exampleNomFournisseur",
  produitsLivres: "exampleProduitsLivres",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
};

const service = {
  createFournisseur() {
    return CREATE_RESULT;
  },
  fournisseurs: () => FIND_MANY_RESULT,
  fournisseur: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Fournisseur", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FournisseurService,
          useValue: service,
        },
      ],
      controllers: [FournisseurController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /fournisseurs", async () => {
    await request(app.getHttpServer())
      .post("/fournisseurs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /fournisseurs", async () => {
    await request(app.getHttpServer())
      .get("/fournisseurs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /fournisseurs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fournisseurs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /fournisseurs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/fournisseurs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /fournisseurs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/fournisseurs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/fournisseurs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
