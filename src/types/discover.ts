export interface DiscoverItem {
  id: string;
  title: string;
}

export interface DiscoverSectionData {
  id: string;
  title: string;
  items: DiscoverItem[];
}