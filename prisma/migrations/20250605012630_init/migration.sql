-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,
    "email" VARCHAR NOT NULL,
    "descricao" VARCHAR(45) NOT NULL,
    "foto" VARCHAR(45) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluna" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,
    "linkedin" VARCHAR(100) NOT NULL,
    "foto" BYTEA NOT NULL,
    "relato" VARCHAR(150) NOT NULL,

    CONSTRAINT "Aluna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "professorId" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foto" (
    "id" SERIAL NOT NULL,
    "foto" BYTEA NOT NULL,
    "idEvento" INTEGER NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imprensa" (
    "id" SERIAL NOT NULL,
    "nome_materia" VARCHAR(100) NOT NULL,
    "link" VARCHAR(150) NOT NULL,
    "midia" VARCHAR(45) NOT NULL,
    "foto" BYTEA NOT NULL,

    CONSTRAINT "Imprensa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Escola" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Escola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patrocinador" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,
    "descricao" VARCHAR(150) NOT NULL,
    "foto" BYTEA NOT NULL,
    "link" VARCHAR(150) NOT NULL,

    CONSTRAINT "Patrocinador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "localizacao" VARCHAR(150) NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactoProjeto" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "idProfessor" INTEGER NOT NULL,
    "idAluna" INTEGER NOT NULL,

    CONSTRAINT "ImpactoProjeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historia" (
    "id" SERIAL NOT NULL,
    "data" DATE NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "idProfessor" INTEGER NOT NULL,

    CONSTRAINT "Historia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publicacao" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "link" VARCHAR(300) NOT NULL,
    "autor" VARCHAR(150) NOT NULL,
    "ano" DATE NOT NULL,
    "idioma" VARCHAR(45) NOT NULL,

    CONSTRAINT "Publicacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessorHasPublicacao" (
    "idPublicacao" INTEGER NOT NULL,
    "idProfessor" INTEGER NOT NULL,

    CONSTRAINT "ProfessorHasPublicacao_pkey" PRIMARY KEY ("idProfessor","idPublicacao")
);

-- CreateTable
CREATE TABLE "AlunaHasPublicacao" (
    "idPublicacao" INTEGER NOT NULL,
    "idAluna" INTEGER NOT NULL,

    CONSTRAINT "AlunaHasPublicacao_pkey" PRIMARY KEY ("idAluna","idPublicacao")
);

-- CreateTable
CREATE TABLE "AreaAtuacao" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(45) NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,
    "idProfessor" INTEGER NOT NULL,

    CONSTRAINT "AreaAtuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlunaHasAreaAtuacao" (
    "idAluna" INTEGER NOT NULL,
    "idAreaAtuacao" INTEGER NOT NULL,

    CONSTRAINT "AlunaHasAreaAtuacao_pkey" PRIMARY KEY ("idAluna","idAreaAtuacao")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImpactoProjeto_idProfessor_key" ON "ImpactoProjeto"("idProfessor");

-- CreateIndex
CREATE UNIQUE INDEX "ImpactoProjeto_idAluna_key" ON "ImpactoProjeto"("idAluna");

-- CreateIndex
CREATE UNIQUE INDEX "Historia_idProfessor_key" ON "Historia"("idProfessor");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_idEvento_fkey" FOREIGN KEY ("idEvento") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpactoProjeto" ADD CONSTRAINT "ImpactoProjeto_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpactoProjeto" ADD CONSTRAINT "ImpactoProjeto_idAluna_fkey" FOREIGN KEY ("idAluna") REFERENCES "Aluna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historia" ADD CONSTRAINT "Historia_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorHasPublicacao" ADD CONSTRAINT "ProfessorHasPublicacao_idPublicacao_fkey" FOREIGN KEY ("idPublicacao") REFERENCES "Publicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessorHasPublicacao" ADD CONSTRAINT "ProfessorHasPublicacao_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunaHasPublicacao" ADD CONSTRAINT "AlunaHasPublicacao_idPublicacao_fkey" FOREIGN KEY ("idPublicacao") REFERENCES "Publicacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunaHasPublicacao" ADD CONSTRAINT "AlunaHasPublicacao_idAluna_fkey" FOREIGN KEY ("idAluna") REFERENCES "Aluna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AreaAtuacao" ADD CONSTRAINT "AreaAtuacao_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunaHasAreaAtuacao" ADD CONSTRAINT "AlunaHasAreaAtuacao_idAluna_fkey" FOREIGN KEY ("idAluna") REFERENCES "Aluna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunaHasAreaAtuacao" ADD CONSTRAINT "AlunaHasAreaAtuacao_idAreaAtuacao_fkey" FOREIGN KEY ("idAreaAtuacao") REFERENCES "AreaAtuacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
