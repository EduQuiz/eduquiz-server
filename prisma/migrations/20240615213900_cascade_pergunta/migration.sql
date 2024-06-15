-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_perguntaId_fkey";

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
