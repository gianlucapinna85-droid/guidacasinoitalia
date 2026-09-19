import { defineMcp } from "@lovable.dev/mcp-js";
import listOperatorsTool from "./tools/list-operators";
import getOperatorTool from "./tools/get-operator";
import listGuidesTool from "./tools/list-guides";

export default defineMcp({
  name: "guidacasinoitalia",
  title: "Guidacasinoitalia",
  version: "0.1.0",
  instructions:
    "Strumenti pubblici di GuidaCasinò.IT, portale informativo indipendente sui casinò online con concessione ADM in Italia. " +
    "Usa list_operators per l'elenco dei concessionari recensiti, get_operator per la scheda di un singolo operatore e list_guides per le guide editoriali. " +
    "Tutti i dati sono editoriali e pubblici; gli importi dei bonus sono massimali dichiarati dagli operatori e soggetti a T&C. Il gioco è riservato ai maggiorenni (+18).",
  tools: [listOperatorsTool, getOperatorTool, listGuidesTool],
});
