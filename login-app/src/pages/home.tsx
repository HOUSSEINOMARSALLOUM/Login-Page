import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaFlag, FaCode, FaCircle, FaEllipsisH } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      router.push("/auth/login");
    } else {
      const storedUserData = localStorage.getItem("user_data");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Unstop
          </h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/api/placeholder/40/40"
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-white">
                S
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <Image
                src="/api/placeholder/48/48"
                alt="User profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{userData.username}</h2>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ask to edit
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FaEllipsisH />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaFlag />
              <span>Flag</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <FaCircle className="text-gray-400" />
              <span>Circle</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <FaCode />
              <span>Code</span>
            </button>
          </div>

          {/* Additional User Profiles */}
          <div className="mt-8 flex justify-center">
            <div className="flex -space-x-2">
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-yellow-500 flex items-center justify-center text-white">
                M
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
