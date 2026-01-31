"use client"
// Login page with navigation to student login
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push(`/login/${route}`);
  };

  return (
    <div style={{width: '100%'}}>
      <header className="">
        <h1 style={{margin:0}}> Login Routing page</h1>
      </header>
      <div>
        <button onClick={() => navigate("loginStudent")}>
          Go to Login Student (nested route)
        </button>
      </div>
    </div>
  );
};

export default Login;