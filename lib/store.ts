export type Identity = {
  id: number;
  name?: string;
  nationality?: string;
  residence?: string;
  ageGroup?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
};

export const identities: Identity[] = [];
export const endorsements: Record<number, number[]> = {};

export function createIdentity(data: Omit<Identity, "id">) {
  const id = identities.length + 1;
  identities.push({ id, ...data });
  endorsements[id] = [];
  return id;
}

export function endorse(fromId: number, toId: number) {
  if (!endorsements[toId]) endorsements[toId] = [];
  if (!endorsements[toId].includes(fromId)) {
    endorsements[toId].push(fromId);
  }
}
