import { NextResponse } from 'next/server';

// Digital Asset Links JSON for Android App Links
// This file is served at /.well-known/assetlinks.json via Vercel rewrite
const assetLinks = [
  {
    relation: [
      'delegate_permission/common.handle_all_urls',
    ],
    target: {
      namespace: 'android_app',
      package_name: 'com.deephorizon.security',
      sha256_cert_fingerprints: [
        '0F:59:76:77:80:DA:DA:50:DE:96:12:86:B5:B9:4D:9A:13:E5:00:7C:75:47:46:89:08:BA:23:16:FB:97:C7:A0',
      ],
    },
  },
];

export async function GET() {
  return NextResponse.json(assetLinks, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

