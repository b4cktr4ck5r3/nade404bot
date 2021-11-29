import { PrismaClient as PrismaLink} from "../../prisma/generated/linkClient";
import { PrismaClient as PrismaLobbies} from "../../prisma/generated/lobbiesClient";


export const prismaLink: PrismaLink = new PrismaLink();
export const prismaLobbies: PrismaLobbies = new PrismaLobbies();