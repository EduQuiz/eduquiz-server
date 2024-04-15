import type { RespostaDto } from "./respostaDto.js";

export interface PerguntaDto {
  id: string;
  titulo: string;
  description: string;
  respostas: RespostaDto[];
}
