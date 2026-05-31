# demo-bug-app

Liten React/TypeScript-app avsedd för live-demo under kompetenslunchen "Claude Code som parprogrammerare".

Appen simulerar en intern portal med behörighetsstyrd navigering. Den innehåller **en avsiktlig bugg** — se nedan.

---

## Kör appen

```bash
npm install
npm run dev
```

Öppna [http://localhost:5174](http://localhost:5174).

(Port 5174 för att inte krocka med workshop-appen på 5173.)

---

## Vad appen visar

En intern portal med:
- Användarväljare (dropdown i headern)
- Sidopanel med navigering — låsta och tillgängliga menyval
- Användarens capability-badges
- Kort för varje sektion användaren har tillgång till

### Testanvändare

| Användare | Capabilities |
|---|---|
| Anna Rapport | `canAccessReports` |
| Bertil Admin | `canAccessAdmin`, `canAccessReports` |
| Cecilia Läs | `canReadDashboard` |
| David Superuser | `canReadDashboard`, `canAccessReports`, `canAccessAdmin`, `canImportData` |

---

## Buggen

### Symptom

**Anna Rapport** (capabilities: `canAccessReports`) ser menyvalet **"Importera data"** i sidopanelen och som kort på dashboarden — trots att hon inte ska ha tillgång till import-funktionen.

**Cecilia Läs** ser det inte.  
**David Superuser** ser det (korrekt, men av fel anledning).

### Förväntad beteende

"Importera data" ska bara visas för användare med `canImportData`.

### Var buggen finns

`src/data/menuItems.ts` — det sista menyvalet har fel `requiredCapability`:

```typescript
// FEL (nuläget):
{ id: 'import', label: 'Importera data', requiredCapability: 'canAccessReports', ... }

// RÄTT (fix):
{ id: 'import', label: 'Importera data', requiredCapability: 'canImportData', ... }
```

Buggen är en klassisk copy-paste-miss — någon kopierade "Rapporter"-raden och glömde uppdatera capability-värdet. TypeScript fångar inte felet eftersom `'canAccessReports'` är en giltig `Capability`-typ.

---

## Demo-instruktioner

Öppna `demo-bug-app/` som projekt i Claude Code. Kör appen i en separat terminal.

### Prompt 1 — Utforska, ändra inget

```
Analysera appen. Hitta var behörighetskontroll sker för menyval. Förklara hur det fungerar och vilka filer som är inblandade. Ändra inget ännu.
```

**Vad Claude ska hitta:** `permissions.ts`, `menuItems.ts`, `App.tsx` och sambandet dem emellan.

---

### Prompt 2 — Identifiera buggen

```
Användaren Anna Rapport har capabilities: ['canAccessReports']. Hon ser menyvalet "Importera data" trots att hon inte ska ha tillgång till det. Identifiera exakt var i koden felet uppstår. Ändra inget.
```

**Vad Claude ska hitta:** I `menuItems.ts` är `requiredCapability` för "Importera data" satt till `'canAccessReports'` i stället för `'canImportData'`.

---

### Prompt 3 — Plan

```
Föreslå minsta möjliga fix. Visa vilken fil och rad som ändras, varför, och hur jag verifierar att det fungerar korrekt efteråt.
```

**Förväntad plan:** Ändra ett enda fältvärde i `menuItems.ts`.

---

### Prompt 4 — Implementera

```
Implementera ändringen enligt planen. Håll diffen minimal.
```

**Förväntad diff:** En rad i `menuItems.ts` — `canAccessReports` → `canImportData`.

---

### Prompt 5 — Verifiera

```
Granska diffen. Beskriv hur jag verifierar manuellt att Anna Rapport inte längre ser "Importera data" och att David Superuser fortfarande ser det.
```

---

### Vad publiken ska lägga märke till

1. Claude hittar rätt filer utan att du pekar ut dem
2. Buggen sitter i DATA (menuItems.ts), inte i logiken (permissions.ts)
3. TypeScript hjälper inte — `'canAccessReports'` är ett giltigt värde
4. Diffen är minimal: en rad
5. Du reviewar diffen innan du accepterar

---

## Backup om livedemon strular

Om Claude Code krånglar eller terminalen inte fungerar:

**Visa facit direkt:**

Öppna `src/data/menuItems.ts` i editorn och peka på det sista objektet:

```typescript
// Rad ~22 i menuItems.ts
{
  id: 'import',
  label: 'Importera data',
  description: 'Ladda upp och validera datafiler för systemimport.',
  requiredCapability: 'canAccessReports',  // ← HÄR ÄR BUGGEN
  icon: '📥',
},
```

Ändra till `'canImportData'` och visa att Anna Rapport försvinner från Importera data.

**Diskussionspunkter om livedemon strular:**
- Fråga publiken: "Var hade ni letat efter den här buggen?"
- Visa hur man i Claude Code skulle ha skrivit prompt 2 — identifiera utan att ändra
- Betona att en code review av menuItems.ts hade kunnat hitta det

---

## Projektstruktur

```
src/
├── data/
│   ├── users.ts        Testanvändare med capabilities
│   └── menuItems.ts    Menyval med requiredCapability (BUGGEN FINNS HÄR)
├── utils/
│   └── permissions.ts  hasCapability och getAccessibleMenuItems (korrekt logik)
├── types.ts            Capability, User, MenuItem
├── App.tsx             UI — header, sidebar, cards
├── main.tsx
└── index.css
```
