export type LinkType = {
  id: string,
  shortUrl: string,
  longUrl: string,
  clicks: number,
  timeCreated: Date,
  lastAccessed: Date
};

export type NavProps = {
  data: LinkType[],
  ip: string
}