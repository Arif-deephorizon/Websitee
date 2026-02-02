# Android App Links Setup for deephorizon.io Website

Copy and paste these files into your **website directory** (the one deployed to Vercel for deephorizon.io):

---

## 1. Create `public/.well-known/assetlinks.json`

Create this file in your website's `public` folder:

```json
[
  {
    "relation": [
      "delegate_permission/common.handle_all_urls"
    ],
    "target": {
      "namespace": "android_app",
      "package_name": "com.deephorizon.security",
      "sha256_cert_fingerprints": [
        "0F:59:76:77:80:DA:DA:50:DE:96:12:86:B5:B9:4D:9A:13:E5:00:7C:75:47:46:89:08:BA:23:16:FB:97:C7:A0"
      ]
    }
  }
]
```

---

## 2. Update `vercel.json`

Add these configurations to your existing `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/.well-known/assetlinks.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/json"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/.well-known/assetlinks.json",
      "destination": "/api/assetlinks"
    }
  ]
}
```

**Note:** Merge this with your existing `vercel.json` configuration. Don't replace the entire file, just add these sections.

---

## 3. Create API Route (Next.js App Router)

If you're using Next.js App Router, create this file:

**File:** `src/app/api/assetlinks/route.ts`

```typescript
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
```

---

## 4. Alternative: API Route (Next.js Pages Router)

If you're using Next.js Pages Router, create this file instead:

**File:** `pages/api/assetlinks.ts`

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

// Digital Asset Links JSON for Android App Links
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).json(assetLinks);
}
```

---

## 5. Update Middleware (if you have one)

If you have a `middleware.ts` file, add this check at the beginning to skip authentication for `.well-known` paths:

```typescript
// Add this check early in your middleware function
const pathname = url.pathname;

// Skip middleware for .well-known paths (required for Android App Links)
if (pathname.startsWith('/.well-known/')) {
  return res;
}
```

And update the matcher config:

```typescript
export const config = {
  matcher: [
    // Exclude .well-known from middleware
    '/((?!_next/static|_next/image|favicon.ico|images|public|\\.well-known).*)',
  ],
};
```

---

## 6. Alternative: Static File Only (Simplest)

If you don't want to use an API route, you can just:

1. Create `public/.well-known/assetlinks.json` with the JSON content above
2. Update `vercel.json` to add only the headers section (remove the rewrite):

```json
{
  "headers": [
    {
      "source": "/.well-known/assetlinks.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/json"
        }
      ]
    }
  ]
}
```

---

## Testing After Deployment

After deploying to Vercel:

```bash
# Test the endpoint
curl -I https://deephorizon.io/.well-known/assetlinks.json

# Should return:
# HTTP/2 200
# content-type: application/json

# Test content
curl https://deephorizon.io/.well-known/assetlinks.json
```

---

## What This Fixes

1. ✅ **No Redirects**: API route serves file directly
2. ✅ **Correct Content-Type**: Set to `application/json`
3. ✅ **Accessible**: Works without authentication
4. ✅ **Cached**: Includes cache headers for performance

