export interface BtsEvent {
  id: number;
  date: string;
  startTime: string;
  venue: string;
  headliner: string;
  support1: string;
  support2: string;
  support3: string;
  headlinerImgLink: string;
  headlinerBio: string;
  meetsCriteria: boolean;
  isDenied: boolean;
  external: string;
}
