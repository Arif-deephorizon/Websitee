"use client";

import React from "react";
import Link from "next/link";

export default function AccountDeletionPage() {
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
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight">Account Deletion Request</h1>
          <p className="mt-3 text-sm text-gray-400">Deep Horizon Security</p>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-xl p-6 sm:p-10">
          <div className="prose prose-invert max-w-none text-gray-300">
            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">How to Request Account Deletion</h2>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Send an email to <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a> with the subject "Account Deletion Request"</li>
              <li>Include your registered email address or phone number</li>
              <li>We will verify your identity and process your request within 30 days</li>
            </ol>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">What Data Will Be Deleted</h2>
            <p className="mb-4">Upon account deletion, the following data will be permanently removed from our systems:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Personal information (name, email, phone)</li>
              <li>Location history</li>
              <li>Chat messages</li>
              <li>Emergency contacts</li>
              <li>Medical information</li>
              <li>App usage data</li>
            </ul>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">What Data Will Be Retained</h2>
            <p className="mb-4">Due to legal and regulatory requirements, the following data must be retained:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Transaction records</strong> - Required for financial compliance (retained for 7 years)</li>
              <li><strong>Incident logs</strong> - Required for legal compliance (retained for 5 years)</li>
            </ul>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">Data Retention Period</h2>
            <div className="mb-4 space-y-3">
              <p><strong>Most data:</strong> Deleted within 30 days of request</p>
              <p><strong>Financial records:</strong> Retained for 7 years (legal requirement)</p>
              <p><strong>Incident logs:</strong> Retained for 5 years (legal requirement)</p>
            </div>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">Contact</h2>
            <p className="mb-4">
              For account deletion requests or questions about data retention, please contact us:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a><br />
              <strong>Website:</strong> <a href="http://www.deephorizon.io/" className="text-blue-400 hover:text-blue-300 underline">www.deephorizon.io</a>
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

