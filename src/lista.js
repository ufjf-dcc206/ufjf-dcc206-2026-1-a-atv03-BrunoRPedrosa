let lista = [];

export function getLista() {
  return structuredClone(lista);
}

export function iniciaLista() {
  lista = ["um", "dois", "três"];
}

export function limpaLista() {
  lista.splice(0);
}
