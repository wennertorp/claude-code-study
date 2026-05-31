export interface SpeakerNote {
  sectionId: string
  purpose: string
  talkingPoints: string[]
  pollHint?: string
  demoHint?: string
}

export const speakerNotes: Record<string, SpeakerNote> = {
  intro: {
    sectionId: 'intro',
    purpose:
      'Förstå vad Claude Code faktiskt är — och varför det kräver ett annat tänkesätt än vanlig AI-chatt.',
    talkingPoints: [
      'Skillnaden mot ChatGPT eller Copilot: Claude Code har terminalåtkomst och kan läsa hela repot. Det är den avgörande skillnaden som gör det till ett verktyg med mer kraft — och mer ansvar.',
      'Det handlar inte om AI-magi. Det handlar om ett kontrollerat arbetssätt där du fortfarande äger design, review och beslut.',
      'Tänk "parprogrammerare" — någon som ser all din kod, kan föreslå och genomföra ändringar, men som du fortfarande styr och granskar.',
      'Om du är van vid Copilot: Claude Code kompletterar inte bara kod, det navigerar hela kodbasen och kan agera på den.',
    ],
    pollHint:
      'Den här frågan hjälper dig att förstå var du befinner dig och vilket avsnitt som är mest relevant för dig just nu.',
  },
  'getting-started': {
    sectionId: 'getting-started',
    purpose: 'Förstå vad som faktiskt händer när Claude Code startas — och varför repo-hygien spelar roll redan från dag ett.',
    talkingPoints: [
      'Det viktigaste är inte installationen i sig — det är att förstå att Claude Code får arbetskontext från din projektmapp.',
      'Börja alltid med ett litet projekt. Kör inte direkt i det mest kritiska eller känsliga repot.',
      'Windows-användare: kör Claude Code nativt i PowerShell eller via WSL. Git for Windows underlättar.',
      'Flytta hemligheter ur repo INNAN du börjar använda verktyget brett. Det är en förutsättning, inte en bonus.',
    ],
    pollHint:
      'Vanligaste oron är hemligheter och secrets — bra ingång till säkerhetssektionen om du hoppar vidare.',
  },
  'mental-model': {
    sectionId: 'mental-model',
    purpose: 'Installera rätt mental modell: Claude Code som en väldigt kompetent men något junior kollega med lite för gott självförtroende.',
    talkingPoints: [
      'Grundflödet är det viktigaste att internalisera: förstå → hitta filer → plan → ändra lite → test → review → commit. Inte snabbare, inte hoppa steg.',
      '"Ändra inget ännu" är kanske den viktigaste enstaka prompten. Den bromsar reflexen att börja ändra direkt och tvingar Claude att presentera en plan.',
      'Plan-steget är där du lär dig mest om Claude verkligen förstår uppgiften — eller om den gissar.',
      'Claude kan granska sin egen kod, men det ersätter aldrig din review. Du äger ändringen.',
    ],
    pollHint:
      'Att förstå gammal kod är ofta det enklaste och säkraste stället att börja — nollrisk och direkt värde.',
  },
  'prompt-library': {
    sectionId: 'prompt-library',
    purpose: 'Konkreta, återanvändbara prompts att använda direkt — strukturerade för ett kontrollerat flöde.',
    talkingPoints: [
      'Dessa är inte magiska ord — de är strukturerade instruktioner som tvingar fram ett kontrollerat flöde.',
      'Kategori A (Utforska) och B (Plan) är de viktigaste att börja med. De är nollrisk och ger direkt värde.',
      'Domänregel-prompten (F) är undervärderard: den tvingar dig att faktiskt formulera regeln tydligt — det är ofta mer värdefullt än Claudes svar.',
      'Legacykod-prompten (G) är ett bra sätt att komma igång med äldre kod utan att riskera att bryta något.',
      'Kopiera och anpassa fritt. De är utgångspunkter, inte exakta mallar.',
    ],
    pollHint:
      '"Utforska utan att ändra" är det säkraste första steget — det kostar ingenting och ger direkt värde.',
  },
  context: {
    sectionId: 'context',
    purpose: 'Förstå varför smalt fokus ger bättre resultat och hur du hanterar långa sessioner utan att tappa precision.',
    talkingPoints: [
      'Context-fönstret är begränsat. Fyller du det med brus sjunker precisionen — som ett kort arbetsminne.',
      'Det vanligaste misstaget: be Claude "läs hela projektet". Då fyller du context med irrelevant info och Claude tappar fokus.',
      'Separera frontend och backend i olika sessioner — det är enkel och effektiv hygien.',
      '/compact är din vän när sessionen blivit lång, men ge alltid ett tydligt direktiv om vad som ska bevaras.',
      'Handover-filen (docs/ai-notes/current-task.md) är ett praktiskt knep för att återuppta arbete utan att förlora kontext.',
    ],
    pollHint:
      'Ofta är det en kombination av flera faktorer — men smalt fokus från start är den enskilt viktigaste vanan att bygga.',
  },
  security: {
    sectionId: 'security',
    purpose: 'Förstå att säkerhet är ett reellt ämne i sammanhanget — inte bara en generell varning.',
    talkingPoints: [
      'Claude Code läser filer. Hemligheter i repo = hemligheter i context. Konsekvensen är enkel att förstå.',
      'Det vanligaste problemet i riktiga projekt: connection strings i appsettings eller .env-filer som checkats in.',
      'CLAUDE.md-reglerna är en instruktion till Claude, inte en säkerhetsspärr. Poängen är att hemligheter inte ska finnas i repot alls.',
      'Rotera alltid hemligheter som råkat hamna i repo — git history-rewrite räcker inte.',
    ],
    pollHint:
      'Inga rätt eller fel svar — men om appsettings eller .env är vanligast finns det en konkret förbättringsyta att ta tag i.',
  },
  'project-memory': {
    sectionId: 'project-memory',
    purpose: 'Förstå hur du gör Claude Code bättre och mer konsekvent i just ditt repo — och varför det lönar sig att investera i det.',
    talkingPoints: [
      'CLAUDE.md är din repos personlighet för Claude — en orienteringskarta, inte ett uppslagsverk. Håll den kort och låt den peka vidare till docs/.',
      'Domänordlistan är undervärderard: i komplexa affärssystem gissar Claude på terminologi om du inte definierar den.',
      'Handover-filen är praktisk när context börjar bli full — spara den i .gitignore om den innehåller intern info.',
      'Exemplet på CLAUDE.md är ett förslag. Ta det och anpassa till er kodbas, era konventioner och era egna säkerhetsregler.',
    ],
    pollHint:
      'CLAUDE.md är den naturliga startpunkten — kort fil som pekar vidare. Det är enklast att komma igång med och underhålla.',
  },
  demo: {
    sectionId: 'demo',
    purpose: 'Testa grundflödet i praktiken på ett kontrollerat exempel — med en avsiktlig bugg som ska hittas och fixas.',
    talkingPoints: [
      'Övningen visar arbetsflödet från analys till fix: förstå → identifiera → plan → ändra → verifiera.',
      'Kör steg-för-steg och ge Claude tid att analysera. Pausa och läs svaret innan du går vidare.',
      'Lägg märke till att Claude hittar rätt filer utan att du pekar ut dem — det är poängen med att ha terminalåtkomst.',
      'Var noga med att granska diffen: den ska vara minimal. En rad. Det är ett bra tecken på rätt avgränsad uppgift.',
    ],
    demoHint:
      'Alla prompts finns utskrivna med kopieringsknapp. Kör dem i ordning i Claude Code med demo-bug-app som aktiv mapp.',
    pollHint:
      'Fundera på vilken typ av problem du möter mest i din vardag — det är där Claude Code kan ge mest värde.',
  },
  pitfalls: {
    sectionId: 'pitfalls',
    purpose: 'Känna igen de vanligaste riskerna och veta hur man hanterar dem — inte undvika verktyget utan använda det bättre.',
    talkingPoints: [
      'De flesta problem med Claude Code beror inte på Claude — de beror på hur vi styr det.',
      'Röda flaggor är mönster att känna igen i realtid. Ser du dem: bromsa, backa och formulera om.',
      'Grundregeln som hanterar alla risker: reviewa alltid, jobba i små steg, starta från clean git status.',
      'Claude kräver aktiv styrning, inte passiv delegation. Det är en annan relation än med ett traditionellt verktyg.',
    ],
    pollHint:
      'Alla risker är reella. Den viktigaste insikten är att de alla hanteras med samma grundläggande disciplin.',
  },
  workflow: {
    sectionId: 'workflow',
    purpose: 'En konkret checklista som teamet kan börja använda direkt — och en startpunkt för er egen CLAUDE.md.',
    talkingPoints: [
      'Det här är ett förslag, inte ett absolut krav. Anpassa till ert team, era projekt och er kodbas.',
      'Punkt 1 (clean git status) och reviewa alltid är de allra viktigaste. De kostar ingenting och är nollrisk.',
      'Lägg gärna in checklistan i teamets CLAUDE.md som default workflow — då följer den med varje session.',
      'Tipset om att använda fler AI-assistenter är ett optionellt lager: en som arbetar i koden, en som hjälper dig tänka och granska.',
    ],
  },
  'next-level': {
    sectionId: 'next-level',
    purpose: 'Förstå vart Claude Code kan ta dig när grundarbetssättet sitter — och vilket område som är mest relevant för dig näst.',
    talkingPoints: [
      'Skills, subagents, hooks och MCP är fördjupningsämnen — inte förutsättningar för att komma igång.',
      'Hooks är ett kraftfullt men relativt okänt verktyg. Det kan automatisera säkerhetsspärrar utan att lita på rätt prompt.',
      'MCP öppnar upp för integrationer mot era egna system — det är det stora skalsteget för team.',
      'Testa grundflödet under ett par veckor innan du går vidare. Det lönar sig mer än att hoppa direkt till avancerade funktioner.',
    ],
    pollHint:
      'Svaren hjälper dig prioritera vilket område som är mest relevant att utforska härnäst.',
  },
}
