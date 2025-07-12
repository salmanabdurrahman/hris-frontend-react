import LoginIllustration from "../components/features/login/LoginIllustration";
import LoginForm from "../components/features/login/LoginForm";

const LoginPage = () => {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <LoginIllustration />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
