"use client";

import React from "react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-sm text-gray-400">Effective Date: 1st November, 2025</p>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-xl p-6 sm:p-10">
          <div className="prose prose-invert max-w-none text-gray-300">
            <p className="mb-6">
              <strong>Entity:</strong> Deep Horizon Security Technologies Pvt. Ltd.<br />
              <strong>Registered Office:</strong> 1st Floor, Ashirwad Bhavan, Near Maligaon Overbridge, Guwahati 781012, Assam<br />
              <strong>Contact:</strong> support@deephorizon.io
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Deep Horizon ("App", "Platform", "we", "us", or "our"), operated by Deep Horizon Security Technologies Pvt. Ltd. By downloading, accessing, or using Deep Horizon, you ("User", "you", or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use or access the app.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">2. Nature of Services</h2>
            <p className="mb-4">Deep Horizon is a technology-driven safety companion platform that enables users to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access real-time safety features, such as emergency alerts, live location sharing, and threat detection;</li>
              <li>Connect with trusted contacts, emergency helplines, and — where available — licensed response partners;</li>
              <li>Receive digital assistance, guidance, and tracking support during distress situations.</li>
            </ul>
            <p className="mb-4">
              Deep Horizon does not provide or deploy private security personnel directly. Any physical security response is coordinated through state-licensed security agencies or public emergency responders (e.g., 112) as available.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">3. User Consent &amp; Acknowledgement</h2>
            <p className="mb-4">By using the App, you expressly acknowledge that:</p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Deep Horizon functions as a digital safety companion, not a private security agency.</li>
              <li>The platform is an assistive technology, meant to supplement — not replace — police, emergency, or professional security services.</li>
              <li>Any physical response (if provided) will be executed only by PSARA-licensed partners, and Deep Horizon's role is limited to coordination and communication.</li>
              <li>You are responsible for using the app safely and ensuring the accuracy of your profile, contacts, and emergency data.</li>
            </ol>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">4. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate registration details;</li>
              <li>Use the app lawfully and ethically;</li>
              <li>Not misuse emergency alert systems;</li>
              <li>Allow access to device permissions (e.g., location, notifications) for proper functioning.</li>
            </ul>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">5. Emergency &amp; Limitations</h2>
            <p className="mb-4">While Deep Horizon strives to offer reliable safety features:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>We do not guarantee immediate emergency response in every circumstance;</li>
              <li>The service may depend on network, device, and geographic availability;</li>
              <li>Deep Horizon is not liable for delays, failures, or outcomes of emergency interventions.</li>
            </ul>
            <p className="mb-4">
              Users are advised to always contact 112 (National ERSS) or local authorities in life-threatening situations.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">6. Payments &amp; Subscriptions</h2>
            <p className="mb-4">
              Certain premium features or subscriptions may be offered within the app. All in-app payments are governed by the Refund and Cancellation Policy available within the app and on our website.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">7. Privacy</h2>
            <p className="mb-4">
              Your personal data is handled in accordance with our Privacy Policy, available in the app and at <a href="http://www.deephorizon.io/" className="text-blue-400 hover:text-blue-300 underline">http://www.deephorizon.io/</a>.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">8. Partnerships &amp; Licensing</h2>
            <p className="mb-4">
              Deep Horizon may collaborate with state-licensed private security agencies, law enforcement bodies, and verified partners to provide on-ground support. Users acknowledge that any such services are rendered under the license of those partners, not directly by Deep Horizon Security Technologies Pvt. Ltd.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">9. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law, Deep Horizon shall not be liable for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Any indirect, incidental, or consequential damages arising from use of the app;</li>
              <li>Delays, communication errors, or non-availability of emergency response;</li>
              <li>Actions or omissions of third-party agencies or responders.</li>
            </ul>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">10. Termination</h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate user access for misuse, false reporting, unlawful conduct, or violation of these Terms.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">11. Governing Law &amp; Jurisdiction</h2>
            <p className="mb-4">
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Guwahati, Assam.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">12. Contact</h2>
            <p className="mb-4">
              For questions or support:<br />
              <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a><br />
              <a href="http://www.deephorizon.io/" className="text-blue-400 hover:text-blue-300 underline">http://www.deephorizon.io/</a>
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
