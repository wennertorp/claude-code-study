import type { PollQuestion } from '../types'

export const polls: Record<string, PollQuestion> = {
  intro: {
    id: 'intro',
    question: 'Vad använder du AI mest till i dag?',
    options: [
      'Förklara kod',
      'Skriva ny kod',
      'Felsöka buggar',
      'Skriva tester',
      'Dokumentation',
      'Jag använder AI ganska lite',
    ],
    type: 'singleChoice',
    speakerNote:
      'Använd svaren för att anpassa tempot i resten av passet. Hög andel "skriva ny kod" → betona review och ansvar. Hög andel "förklara kod" → fokusera på utforskarmönstret.',
  },
  gettingStarted: {
    id: 'gettingStarted',
    question: 'Vad känns viktigast att ha koll på innan man börjar?',
    options: [
      'Installation',
      'Vad Claude får läsa',
      'Hur man godkänner ändringar',
      'Secrets/hemligheter',
      'Git-status',
      'Hur man börjar med rätt prompt',
    ],
    type: 'singleChoice',
    speakerNote:
      'Vanligaste svaret är "Secrets/hemligheter" — bra övergång till säkerhetssektionen.',
  },
  mentalModel: {
    id: 'mentalModel',
    question: 'Vilken del av utvecklingsflödet tror du Claude Code skulle hjälpa dig mest med?',
    options: [
      'Förstå gammal kod',
      'Hitta rätt filer',
      'Implementera ändringar',
      'Skriva tester',
      'Refaktorera',
      'Reviewa kod',
    ],
    type: 'singleChoice',
    speakerNote:
      'Vanligt svar är "förstå gammal kod" — det är också det enklaste och säkraste stället att börja.',
  },
  prompts: {
    id: 'prompts',
    question: 'Vilken promptkategori vill du testa först?',
    options: [
      'Utforska utan att ändra',
      'Plan först',
      'Review-läge',
      'Test/felsökning',
      'Legacykod',
      'SQL-analys',
    ],
    type: 'singleChoice',
    speakerNote:
      '"Utforska utan att ändra" är det säkraste första steget — det kostar ingenting och ger direkt värde.',
  },
  context: {
    id: 'context',
    question: 'Vad tror du oftast fyller upp context i onödan?',
    options: [
      'För stora filer',
      'För breda uppgifter',
      'För långa felsökningssessioner',
      'För mycket terminaloutput',
      'Otydliga mål',
      'Vet inte än',
    ],
    type: 'singleChoice',
    speakerNote:
      'Ofta är det en kombination. Poängen är att smalt fokus från start sparar mycket kontext.',
  },
  security: {
    id: 'security',
    question: 'Var ligger oftast hemligheter i våra projekt i dag?',
    options: [
      'appsettings',
      '.env-filer',
      'Pipeline variables',
      'User Secrets',
      'Key Vault',
      'Vet ej / varierar',
    ],
    type: 'singleChoice',
    speakerNote:
      'Inga rätt eller fel svar — men om appsettings/env är vanligast finns en konkret förbättringsyta.',
  },
  projectMemory: {
    id: 'projectMemory',
    question: 'Vilken markdownfil borde vi skapa först i våra repo?',
    options: [
      'CLAUDE.md',
      'Architecture',
      'Coding standards',
      'Security',
      'Testing',
      'Domain glossary',
    ],
    type: 'singleChoice',
    speakerNote:
      'CLAUDE.md är naturlig startpunkt — den kan peka vidare till de andra filerna.',
  },
  demo: {
    id: 'demo',
    question: 'Vilken demo vore mest relevant för dig?',
    options: [
      'Behörighetsstyrt menyval',
      'Valideringsregel',
      'Bugganalys',
      'Testgenerering',
      'SQL/stored procedure-analys',
      'Refaktorering',
    ],
    type: 'singleChoice',
    speakerNote: 'Välj demo baserat på majoritetssvaret — eller kör båda om tid finns.',
  },
  pitfalls: {
    id: 'pitfalls',
    question: 'Vilken risk oroar dig mest?',
    options: [
      'Säkerhet/hemligheter',
      'Felaktig kod',
      'För stora ändringar',
      'Att man slutar förstå koden',
      'Context blir fullt',
      'Otydligt ansvar',
    ],
    type: 'singleChoice',
    speakerNote:
      'Alla dessa risker är reella. Poängen är att de alla hanteras med samma grundregel: reviewer alltid, jobba i små steg.',
  },
  nextLevel: {
    id: 'nextLevel',
    question: 'Vad vill du helst fördjupa dig i på en lunch 2?',
    options: [
      'Skills',
      'Agenter/subagents',
      'Hooks och säkerhetsspärrar',
      'MCP/integrationer',
      'Testgenerering',
      'Teamets Claude Code-standard',
    ],
    type: 'singleChoice',
    speakerNote: 'Svaren styr innehållet på en eventuell lunch 2 — notera dem.',
  },
}
