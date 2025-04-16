const MOCKED_USER = {
  name: "Administrator",
  email: "admin@email.com",
  password: "admin.123!",
};

interface ValidateCredentialsProps {
  email: string;
  password: string;
}

function validateCredentials({
  email,
  password,
}: ValidateCredentialsProps): boolean {
  return email === MOCKED_USER.email && password === MOCKED_USER.password;
}

export default validateCredentials;
