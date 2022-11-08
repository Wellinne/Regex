export const nameMask = (value: string): string => value
  .replace(/[^a-zA-ZáàâãéèêẽíïóôõöúçñÁÀÂÃÉÈẼÍÏÓÔÕÖÚÇÑ'-]/, '')
  .slice(0, 100);

export const phoneMask = (value: string): string => value
  .replace(/\D+/g, '') //excluindo tudo o que NÃO for número e o "g" diz para ele continuar se ele tiver, caso não tivesse ele iria para assim que encontrasse a ocorrência
  .replace(/(\d{2})(\d)/, '($1) $2') //pegar sequencia de 2 digitos e pegar o restante. "()" é o conjunto de coisas. "($1)" primeiro argumento e coloca os parenteses.
  .replace(/(\d{4})(\d)/, '$1-$2')
  .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
  .replace(/(-\d{4})\d+?$/, '$1');

export const cpfMask = (value: string): string => value
  .replace(/\D/g, '')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1');
