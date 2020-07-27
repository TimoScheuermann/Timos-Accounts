export interface User {
  readonly _id?: string;
  readonly googleId?: number;
  readonly givenName: string;
  readonly familyName: string;
  readonly email: string;
  readonly avatar: string;
  readonly token: string;
  readonly date: number;
}
