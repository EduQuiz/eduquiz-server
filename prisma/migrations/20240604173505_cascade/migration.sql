-- DropForeignKey
ALTER TABLE "Alternativa" DROP CONSTRAINT "Alternativa_perguntaId_fkey";

-- AddForeignKey
ALTER TABLE "Alternativa" ADD CONSTRAINT "Alternativa_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
