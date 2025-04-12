import LoginForm from "./components/LoginForm";

function LoginPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
