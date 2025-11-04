"use client";

import React from "react";
import Link from "next/link";

export default function RefundPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight">Refund and Cancellation Policy</h1>
          <p className="mt-3 text-sm text-gray-400">Effective Date: 1st November, 2025</p>
          <p className="mt-1 text-sm text-gray-400">Last Updated: 1st November, 2025</p>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-xl p-6 sm:p-10">
          <div className="prose prose-invert max-w-none text-gray-300">
            <p className="mb-6">
              This Refund and Cancellation Policy ("Policy") outlines the terms under which payments, subscriptions, and in-app purchases made through the Deep Horizon App are handled. The app and all related digital services are owned and operated by Deep Horizon Security Technologies Pvt. Ltd., a company incorporated under the laws of India ("Company", "we", "our", or "us").
            </p>
            <p className="mb-6">
              By purchasing or subscribing to any service or feature on the Deep Horizon App, you agree to the terms set out below.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">1. General Terms</h2>
            <p className="mb-4">
              All purchases made through the Deep Horizon App, including subscriptions, credits, and premium security features, are non-transferable and, except as provided herein, non-refundable once confirmed.
            </p>
            <p className="mb-4">
              We recommend that users carefully review service descriptions, pricing, and plan details before completing any transaction.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">2. Cancellation Policy</h2>
            
            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">2.1. Subscription Cancellations</h3>
            <p className="mb-4">
              Users may cancel their active subscriptions at any time through their respective app store accounts:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Google Play Store:</strong> Play Store → Subscriptions → Deep Horizon → Cancel</li>
              <li><strong>Apple App Store:</strong> Settings → Apple ID → Subscriptions → Deep Horizon → Cancel</li>
            </ul>
            <p className="mb-4">
              Cancellations will stop auto-renewal from the next billing cycle. Users will continue to have access to the purchased plan until the current billing period ends. Payments already processed for the ongoing cycle are non-refundable.
            </p>

            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">2.2. One-Time Purchases and Credits</h3>
            <p className="mb-4">
              For one-time in-app purchases or credit packs, cancellations are not applicable once the transaction has been successfully completed.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">3. Refund Eligibility</h2>
            <p className="mb-4">Refunds may be issued only under the following verified circumstances:</p>

            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">3.1. Technical Issues</h3>
            <p className="mb-4">
              If a payment is successfully processed but the corresponding service, plan, or feature is not activated or accessible due to a technical error on our platform, a full refund may be issued after verification.
            </p>

            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">3.2. Duplicate Transactions</h3>
            <p className="mb-4">
              In case of an accidental duplicate charge for the same purchase, the duplicate amount will be refunded after confirmation.
            </p>

            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">3.3. Service Unavailability</h3>
            <p className="mb-4">
              If a purchased feature or plan becomes unavailable before activation, the user will be entitled to a full refund.
            </p>

            <h3 className="text-xl font-light mt-6 mb-3 text-blue-300">3.4. Annual Subscription Grace Period</h3>
            <p className="mb-4">
              If an annual subscription is cancelled within 7 days of activation and no premium feature or emergency service has been used during that period, the user may receive a pro-rata refund.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">4. Non-Refundable Situations</h2>
            <p className="mb-4">Refunds will not be issued in the following cases:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The service or feature has been successfully activated or used.</li>
              <li>The user cancels a plan after a premium or emergency feature has been accessed.</li>
              <li>The refund request is based on subjective dissatisfaction (e.g., change of mind or perceived service quality).</li>
              <li>The user fails to use or access purchased plans or credits within the validity period.</li>
              <li>The refund request is made after the eligible time window has expired.</li>
            </ul>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">5. Refund Request Process</h2>
            <p className="mb-4">
              To request a refund, please email <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a> within 7 days of the transaction date.
            </p>
            <p className="mb-4">Your request should include the following:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Registered mobile number or account ID</li>
              <li>Transaction ID or payment receipt</li>
              <li>Brief description of the issue</li>
            </ul>
            <p className="mb-4">
              Once verified, approved refunds will be processed within 7–10 business days to the original payment method.
            </p>
            <p className="mb-4">
              If your purchase was made through the Google Play Store or Apple App Store, refunds are governed by their respective refund policies:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Google Play Refund Policy</li>
              <li>Apple App Store Refund Policy</li>
            </ul>
            <p className="mb-4">
              Deep Horizon Security Technologies Pvt. Ltd. cannot directly process refunds for transactions made through these platforms but will assist in facilitating communication where possible.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">6. Policy Modifications</h2>
            <p className="mb-4">
              Deep Horizon Security Technologies Pvt. Ltd. reserves the right to update, modify, or revise this Refund and Cancellation Policy at any time. Updates will be published on this page with the revised "Last Updated" date. Users are encouraged to review this page periodically to stay informed of any changes.
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">7. Contact Us</h2>
            <p className="mb-4">
              For refund, cancellation, or billing-related inquiries, please contact us at:
            </p>
            <p className="mb-4">
              Deep Horizon Security Technologies Pvt. Ltd.<br />
              <a href="mailto:support@deephorizon.io" className="text-blue-400 hover:text-blue-300 underline">support@deephorizon.io</a><br />
              <a href="http://www.deephorizon.io/" className="text-blue-400 hover:text-blue-300 underline">http://www.deephorizon.io/</a>
            </p>

            <h2 className="text-2xl font-light mt-8 mb-4 text-blue-400">8. Governing Law</h2>
            <p className="mb-4">
              This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to this Policy shall be subject to the exclusive jurisdiction of the courts located in Guwahati, Assam, India.
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

