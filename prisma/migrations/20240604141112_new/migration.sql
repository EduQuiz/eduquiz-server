-- CreateTable
CREATE TABLE "Questionario" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "criadorId" TEXT NOT NULL,

    CONSTRAINT "Questionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta" (
    "id" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,

    CONSTRAINT "Pergunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alternativa" (
    "id" TEXT NOT NULL,
    "alternativa" TEXT NOT NULL,
    "perguntaId" TEXT NOT NULL,
    "correta" BOOLEAN NOT NULL,

    CONSTRAINT "Alternativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resposta" (
    "id" TEXT NOT NULL,
    "questionarioId" TEXT NOT NULL,
    "perguntaId" TEXT NOT NULL,
    "alternativaId" TEXT NOT NULL,

    CONSTRAINT "Resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Criador" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Criador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PerguntaToQuestionario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PerguntaToQuestionario_AB_unique" ON "_PerguntaToQuestionario"("A", "B");

-- CreateIndex
CREATE INDEX "_PerguntaToQuestionario_B_index" ON "_PerguntaToQuestionario"("B");

-- AddForeignKey
ALTER TABLE "Questionario" ADD CONSTRAINT "Questionario_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Criador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alternativa" ADD CONSTRAINT "Alternativa_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_questionarioId_fkey" FOREIGN KEY ("questionarioId") REFERENCES "Questionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "Pergunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_alternativaId_fkey" FOREIGN KEY ("alternativaId") REFERENCES "Alternativa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PerguntaToQuestionario" ADD CONSTRAINT "_PerguntaToQuestionario_A_fkey" FOREIGN KEY ("A") REFERENCES "Pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PerguntaToQuestionario" ADD CONSTRAINT "_PerguntaToQuestionario_B_fkey" FOREIGN KEY ("B") REFERENCES "Questionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
