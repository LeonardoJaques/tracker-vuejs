export enum TipoNotificaco{
  SUCESSO,
  FALHA,
  ATENCAO
}
export interface INotificacoes {
  titulo: string;
  texto: string;
  tipo: TipoNotificaco;
  id: number;
}