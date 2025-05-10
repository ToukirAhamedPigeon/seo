import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  // robots:{
  //   index:false, //google crawler won't scroll the page
  //   follow:true // But, it will follow the inside links
  // }
};
export default function PrivacyPage() {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          Your privacy is important to us. This privacy policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="text-gray-600">
          We may collect personal information such as your name, email address, and usage data when you use our services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="text-gray-600">
          We use your information to provide and improve our services, communicate with you, and ensure platform security.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal data. Contact us if you'd like to exercise these rights.
        </p>
        <p className="mt-8 text-gray-500 text-sm text-center">
          This policy was last updated on May 9, 2025.
        </p>
      </div>
    )
  }
  