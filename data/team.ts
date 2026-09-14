export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Head of Investigations',
    department: 'Investigation Team',
    bio: 'Certified Fraud Examiner (CFE) specializing in tracing complex asset movements and international scam syndicates.',
  },
  {
    id: '2',
    name: 'David Miller',
    role: 'Cyber Forensics Lead',
    department: 'Cyber Team',
    bio: 'Blockchain intelligence expert analyzing distributed ledger transactions and crypto recovery pathways.',
  },
  {
    id: '3',
    name: 'Michael Chang',
    role: 'Senior Case Assessment Manager',
    department: 'Case Assessment',
    bio: 'Guides clients through case viability, loss verification, and tailored restitution strategies.',
  },
  {
    id: '4',
    name: 'Elena Rostova',
    role: 'Senior Dispute Analyst',
    department: 'Service Team',
    bio: 'Specialist in Alternative Dispute Resolution (ADR) and cross-border banking fraud protocols.',
  },
  {
    id: '5',
    name: 'James Wilson',
    role: 'Regulatory & Compliance Counsel',
    department: 'Legal & Compliance',
    bio: 'Oversees international anti-money laundering (AML) protocols and regulatory jurisdiction filings.',
  },
  {
    id: '6',
    name: 'Rebecca Taylor',
    role: 'Client Support Director',
    department: 'Service Team',
    bio: 'Ensures clear communication, rapid case updates, and empathetic support throughout recovery.',
  },
];
