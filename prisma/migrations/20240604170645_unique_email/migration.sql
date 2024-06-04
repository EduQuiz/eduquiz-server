/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Criador` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Criador_email_key" ON "Criador"("email");
