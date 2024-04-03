import { RespostaDto } from "./respostaDto";

export interface PerguntaDto {
  id: string;
  titulo: string;
  description: string;
  respostas: RespostaDto[];
}
