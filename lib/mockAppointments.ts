
export interface Appointment {
  id: number;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  device: string;
  repairType: string;
  date: string;
  slot: number;
  startTime: string;
}


export const appointments: Appointment[] = Array.from({ length: 42 }).map(
  (_, i) => ({
    id: i + 1,
    clientName: "Jane D",
    clientPhone: "0196085765",
    clientEmail: "admin@gmail.com",
    device: "Apple iPhone 13 Pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: `${9 + (i % 6)}:00`,
  })
);
