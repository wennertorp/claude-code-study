import type { PromptCard } from '../types'

export const prompts: PromptCard[] = [
  {
    id: 'explore',
    category: 'A',
    categoryLabel: 'Utforska utan att ändra',
    description: 'Förstå ett problem innan du rör koden.',
    prompt: `Analysera den här buggen. Läs relevanta filer, men ändra inget. Sammanfatta trolig orsak och vilka filer som påverkas.`,
  },
  {
    id: 'plan-first',
    category: 'B',
    categoryLabel: 'Plan först',
    description: 'Kräv en plan innan implementation börjar.',
    prompt: `Föreslå en minimal lösning. Jag vill se vilka filer som ändras, varför, risker och hur jag testar. Ändra inget förrän jag säger till.`,
  },
  {
    id: 'small-steps',
    category: 'C',
    categoryLabel: 'Små steg',
    description: 'Håll varje ändring granskningsbar.',
    prompt: `Implementera bara steg 1 i planen. Håll ändringen så liten som möjligt.`,
  },
  {
    id: 'review-mode',
    category: 'D',
    categoryLabel: 'Review-läge',
    description: 'Låt Claude granska sin egen ändring.',
    prompt: `Granska denna ändring som om det vore en pull request. Fokusera på buggar, edge cases och om lösningen följer befintliga mönster.`,
  },
  {
    id: 'test-debug',
    category: 'E',
    categoryLabel: 'Test och felsökning',
    description: 'Kör test och hantera fel kontrollerat.',
    prompt: `Kör relevanta tester eller build om möjligt. Om något fallerar: förklara felet, föreslå fix, men gör inga ändringar utan att fråga.`,
  },
  {
    id: 'domain-rule',
    category: 'F',
    categoryLabel: 'Domänregel',
    description: 'Ge verksamhetslogik tydligt och exakt.',
    prompt: `Här är verksamhetsregeln: [regel]. Här är undantagen: [undantag]. Hitta relevant kod och föreslå minsta ändring. Ändra inget ännu.`,
  },
  {
    id: 'legacy',
    category: 'G',
    categoryLabel: 'Legacykod',
    description: 'Förstå gammal kod utan att störa den.',
    prompt: `Förklara den här legacykoden steg för steg. Fokusera på faktisk logik, sidoeffekter, databasändringar och risker. Föreslå ingen refaktorering än.`,
  },
  {
    id: 'sql',
    category: 'H',
    categoryLabel: 'SQL / Stored procedure',
    description: 'Sammanfatta komplex SQL utan brus.',
    prompt: `Sammanfatta exakt vilka texter som skapas, vilka villkor som styr dem och vilka parametrar som skickas vidare. Ta bort brus som felhantering och tekniska detaljer.`,
  },
]
