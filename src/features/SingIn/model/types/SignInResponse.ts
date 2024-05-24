export interface SignInResponse {
  success: boolean;
  reason: string;
  user: {
    phone: string;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    city: string;
  };
  token: string;
}
