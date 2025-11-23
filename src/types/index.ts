export type DateType = "Kahve" | "Akşam Yemeği" | "Sinema" | "Müze/Sergi" | "Doğa Yürüyüşü" | "Oyun Gecesi";
export type LocationType = "Senin favori mekanın" | "Benim favori mekanım" | "Bana sürpriz yap!" | "Beraber karar verelim";

export interface ProposalData {
  dateType?: DateType;
  location?: LocationType;
  contact?: string;
}
