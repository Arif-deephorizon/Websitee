"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-black" />
        <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full blur-3xl bg-blue-500/20" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl bg-purple-500/10" />
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-28 pb-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-gray-400">Effective Date: 1st November, 2025</p>
          <p className="mt-1 text-sm text-gray-400">Last Updated: 1st November, 2025</p>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-xl p-6 sm:p-10">
          <div className="prose prose-invert max-w-none text-gray-300">
            <p className="mb-6">
              This Privacy Policy describes how Deep Horizon Security Technologies Pvt. Ltd. ("Company", "we", "our", or "us") collects, uses, stores, and protects the personal information of users ("you" or "your") who visit our website www.deephorizon.io and use the Deep Horizon App or related digital services.
            </p>
            <p className="mb-6">
              We are committed to safeguarding your privacy and ensuring transparency in how your data is handled.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information when you use our website, app, or services:</p>
            
            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">1.1. Personal Information</h3>
            <p className="mb-4">Information that can identify you, such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Full name</li>
              <li>Mobile number and email address</li>
              <li>Location data (when using security or emergency features)</li>
              <li>Payment details (processed via secure third-party gateways)</li>
              <li>Device and app usage information</li>
            </ul>

            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">1.2. Non-Personal Information</h3>
            <p className="mb-4">Technical and analytical data that does not identify you directly, such as:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device type, operating system, and browser type</li>
              <li>IP address and general geographic location</li>
              <li>App usage metrics, crash logs, and performance data</li>
            </ul>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, operate, and improve the Deep Horizon App and related services</li>
              <li>Enable core features such as live protection, emergency response, and real-time tracking</li>
              <li>Process payments, subscriptions, and in-app transactions securely</li>
              <li>Communicate service updates, alerts, or critical safety notifications</li>
              <li>Personalize user experience and enhance app performance</li>
              <li>Comply with legal, safety, and regulatory obligations</li>
            </ul>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information to any third parties.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information only under the following limited circumstances:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>With Authorized Service Partners:</strong> To deliver emergency response, protection, or support services.</li>
              <li><strong>With Payment Gateways:</strong> To securely process your transactions.</li>
              <li><strong>With Law Enforcement or Authorities:</strong> When required by law, for safety, or in emergencies.</li>
              <li><strong>With Analytics or Cloud Providers:</strong> For performance monitoring or data storage under strict confidentiality agreements.</li>
            </ul>
            <p className="mb-4">
              All third parties handling user data are bound by data protection obligations consistent with this Privacy Policy and applicable laws.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">4. Data Retention</h2>
            <p className="mb-4">We retain personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide services you have requested or subscribed to,</li>
              <li>Comply with legal requirements,</li>
              <li>Resolve disputes or enforce our agreements, and</li>
              <li>Assist in legal requirements or ongoing investigations.</li>
            </ul>
            <p className="mb-4">
              Data may be securely deleted or anonymized after its retention purpose has been fulfilled.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">5. Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect user data against unauthorized access, alteration, disclosure, or destruction. These include encryption, access control, secure servers, and periodic security audits.
            </p>
            <p className="mb-4">
              However, no system is completely immune to breaches. By using our services, you acknowledge and accept this inherent risk.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">6. Your Rights</h2>
            <p className="mb-4">
              Subject to applicable laws (including the Digital Personal Data Protection Act, 2023), you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and request a copy of your personal data</li>
              <li>Request correction or deletion of inaccurate or outdated information</li>
              <li>Withdraw consent for processing (where applicable)</li>
              <li>Request data portability, if supported</li>
            </ul>
            <p className="mb-4">
              However, we reserve the right to retain data where retention is mandated by law, regulatory requirements, ongoing investigations or in the interest of public safety and national security.
            </p>
            <p className="mb-4">
              To exercise these rights, please contact us at <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a>.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">7. Cookies and Tracking</h2>
            <p className="mb-4">
              Our website may use cookies and similar technologies to enhance user experience and analyze site performance. You can choose to disable cookies through your browser settings; however, some website features may not function properly as a result.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">8. Children's Privacy</h2>
            <p className="mb-4">
              Our services are intended for individuals aged 18 years and above. We do not knowingly collect or process personal data from minors. If we become aware of any such data, we will delete it promptly.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">9. Third-Party Links</h2>
            <p className="mb-4">
              Our website and app may contain links to external websites or services not operated by us. We are not responsible for the content, security, or privacy practices of those third-party platforms.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">10. Policy Updates</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal obligations. The updated version will be posted on this page with a revised "Last Updated" date. Continued use of our services after such updates constitutes acceptance of the revised policy.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact:
            </p>
            <p className="mb-4">
              Deep Horizon Security Technologies Pvt. Ltd.<br />
              <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a><br />
              <a href="http://www.deephorizon.io/" className="text-blue-400 hover:text-blue-300 underline">www.deephorizon.io</a><br />
              Registered Office: 1st Floor, Ashirwad Bhavan, Near Maligaon Overbridge, Guwahati 781012, Assam
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">12. Governing Law</h2>
            <p className="mb-4">
              This Privacy Policy and any disputes arising out of it shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction vested in the courts of Guwahati, Assam.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="inline-block px-5 py-2 rounded-xl border border-blue-400/20 bg-white/5 hover:bg-white/10 text-blue-300 hover:text-blue-200 transition">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
