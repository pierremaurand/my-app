export interface Employee {
  fullName: string;
  email: string;
  phone: string;
  sexe: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  hobbies: string[];
}
