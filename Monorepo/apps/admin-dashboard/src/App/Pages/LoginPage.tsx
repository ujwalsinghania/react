// hooks
import { useLogin } from '../Hooks/useLogin';

// components
import { TextInput, Card } from '@local/common/components';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const { loading, handleLogin } = useLogin(onLogin);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-100 to-blue-50">
      <Card className="max-w-md w-full p-8 space-y-8 bg-white/80 backdrop-blur-md">
        <div className="text-center">
          <h1 className="text-3xl font-black text-slate-800">Owner Portal</h1>
          <p className="text-slate-500 text-sm mt-2">
            Manage your listings with ease
          </p>
        </div>

        <div className="space-y-6">
          <TextInput
            label="Email"
            placeholder="owner@example.com"
            type="email"
          />
          <TextInput
            label="Password"
            placeholder="••••••••"
            type="password"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-black transition-colors disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400">
            © 2026 HotelExplore Partner Network
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
