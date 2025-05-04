
import { Button } from "@/components/ui/button";

const LoginSection = () => {
  return (
    <section id="login" className="py-16 md:py-24 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LOGIN <span className="text-primary">-অ্যাকাউন্ট এক্সেস করুন</span>
          </h2>
          <p className="text-lg text-gray-700">সহজেই লগইন করুন</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <div className="md:w-1/3">
            <div className="phone-mockup mx-auto">
              <div className="phone-screen flex justify-center items-center bg-primary">
                <div className="text-center">
                  <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                    <div className="bg-primary p-2 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48" height="48">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 w-full max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/placeholder.svg"
                  alt="Login Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <form className="login-form">
                <div className="mb-4">
                  <input type="text" placeholder="ইউজার নাম" />
                </div>
                <div className="mb-6">
                  <input type="password" placeholder="পাসওয়ার্ড" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">লগইন করুন</Button>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-primary hover:underline text-sm">পাসওয়ার্ড ভুলে গেছেন?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
