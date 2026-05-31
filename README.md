# Claude Code som parprogrammerare

Praktiskt instuderingsmaterial för utvecklare som vill använda Claude Code i riktig kodbas på ett säkert och strukturerat sätt.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS 3 · lucide-react

---

## Kom igång

### Förutsättningar

- Node.js 18 eller senare
- npm 9 eller senare

### Kör lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:5173](http://localhost:5173).

### Bygg för produktion

```bash
npm run build
npm run preview   # lokalt förhandsgranska dist/
```

Produktionsfiler hamnar i `dist/`.

---

## Använda materialet

### Reflektionsfrågor

Varje avsnitt avslutas med en reflektionsfråga. De är tänkta att:
- Användas för egen reflektion
- Diskuteras med kollegor
- Kopplas till externa omröstningsverktyg via `externalUrl` i `polls.ts`

### Frivillig labb (demo-bug-app)

Avsnitt 08 innehåller en praktisk labbövning. Den kräver att du kör `demo-bug-app/` lokalt:

```bash
cd demo-bug-app
npm install
npm run dev   # → http://localhost:5174
```

Öppna sedan `demo-bug-app/` som projekt i Claude Code och följ instruktionerna i avsnitt 08.
Fullständig labbguide finns i `demo-bug-app/README.md`.

---

## Publicering

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Lägg till i `package.json`:
```json
"homepage": "https://[ditt-användarnamn].github.io/[repo-namn]",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

```bash
npm run deploy
```

### Netlify

1. Koppla repot till Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Azure Static Web Apps

```bash
az staticwebapp create \
  --name claude-lunch \
  --resource-group [din-rg] \
  --source https://github.com/[org]/[repo] \
  --location westeurope \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Enkel filserver

Kopiera innehållet i `dist/` till valfri statisk webbserver — ingen backend krävs.

---

## Ändra innehåll

Allt innehåll finns i `src/data/`:

| Fil | Innehåll |
|-----|----------|
| `sections.ts` | Sektionsmetadata (id, titlar) |
| `prompts.ts` | Promptbiblioteket |
| `polls.ts` | Alla reflektionsfrågor |
| `checklist.ts` | Teamets checklista |
| `speakerNotes.ts` | Praktiska insikter per avsnitt |

Lägg till externa omröstningslänkar (Mentimeter, Slido, Microsoft Forms) i `polls.ts`:

```ts
intro: {
  question: '...',
  options: [...],
  type: 'singleChoice',
  externalUrl: 'https://mentimeter.com/...',
}
```

---

## Lägga till ett nytt avsnitt (utan att numreringen går sönder)

Numreringen är dynamisk och styrs av ordningen i `src/data/sections.ts`.

1. Skapa `src/components/sections/MinNyaSection.tsx`
2. Importera `getSectionPrefix` från `../../utils/sectionLabel`
3. Använd `{getSectionPrefix('mitt-id', 'Min titel')}` i sektionsrubriken
4. Lägg till `{ id: 'mitt-id', title: '...', shortTitle: '...' }` på rätt plats i `sections.ts`
5. Importera och rendera i `src/App.tsx`

Ordningen i `sections.ts` styr numreringen i navigationen och i alla sektionsrubriker — inga hårdkodade nummer behöver uppdateras.

---

## Projektstruktur

```
src/
├── components/
│   ├── layout/       Navigation, ProgressBar
│   ├── sections/     En komponent per avsnitt (12 st)
│   └── ui/           Återanvändbara UI-komponenter
├── contexts/         SpeakerModeContext (oanvänd, bevarad)
├── data/             Allt textinnehåll
├── hooks/            useActiveSection (nav-highlight)
├── types/            TypeScript-definitioner
└── utils/            sectionLabel — dynamisk numrering

demo-bug-app/         Separat Vite-app för labbövning (port 5174)
```
