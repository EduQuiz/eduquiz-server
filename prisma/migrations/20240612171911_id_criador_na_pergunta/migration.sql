/*
  Warnings:

  - Added the required column `criadorId` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pergunta" ADD COLUMN     "criadorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Pergunta" ADD CONSTRAINT "Pergunta_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
