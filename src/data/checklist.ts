import type { ChecklistItem } from '../types'

export const teamChecklist: ChecklistItem[] = [
  { id: '1', text: 'Starta från clean git status', detail: 'Aldrig låta Claude arbeta på ocommittade ändringar du inte förstår.' },
  { id: '2', text: 'Ge inte Claude hemligheter', detail: 'Inga lösenord, tokens eller connection strings i prompts eller filer Claude läser.' },
  { id: '3', text: 'Be Claude analysera innan den ändrar', detail: 'Analysläge ger dig kontroll utan att riskera koden.' },
  { id: '4', text: 'Kräv plan för allt som är mer än trivialt', detail: 'En plan avslöjar antaganden och risker innan det är för sent.' },
  { id: '5', text: 'Jobba i små steg', detail: 'Varje ändring ska vara granskningsbar. Stora diff:ar är svåra att förstå.' },
  { id: '6', text: 'Håll frontend/backend separat när det går', detail: 'Blandad kontext fyller context-fönstret snabbt och minskar precisionen.' },
  { id: '7', text: 'Använd /context när sessionen växer', detail: 'Se vad som tar plats och avgör om sessionen behöver smalnare fokus.' },
  { id: '8', text: 'Använd /compact med tydligt fokus', detail: 'Komprimera historik med ett klart direktiv om vad som ska behållas.' },
  { id: '9', text: 'Håll CLAUDE.md kort — använd docs/*.md för detaljer', detail: 'CLAUDE.md ska vara en orienteringskarta, inte ett uppslagsverk.' },
  { id: '10', text: 'Reviewa alltid diffen själv', detail: 'Claude kan granska sin egen kod, men det ersätter aldrig din review.' },
  { id: '11', text: 'Kör relevanta tester', detail: 'Även om Claude säger att koden är korrekt — verifiera med faktiska tester.' },
  { id: '12', text: 'Commit först när du förstår ändringen', detail: 'Om du inte kan förklara vad som ändrades, är du inte klar.' },
]
