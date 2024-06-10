/*
  Warnings:

  - Added the required column `identificador` to the `Resposta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resposta" ADD COLUMN     "identificador" TEXT NOT NULL;
