-- DropForeignKey
ALTER TABLE "Questionario" DROP CONSTRAINT "Questionario_criadorId_fkey";

-- AddForeignKey
ALTER TABLE "Questionario" ADD CONSTRAINT "Questionario_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Criador"("id") ON DELETE CASCADE ON UPDATE CASCADE;
