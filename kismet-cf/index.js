const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Pure JS MD5 function for computing body_md5 required by Pusher REST API.
 */
function md5(string) {
  function rotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }
  function addUnsigned(lX, lY) {
    const lX8 = (lX & 0x80000000);
    const lY8 = (lY & 0x80000000);
    const lX4 = (lX & 0x40000000);
    const lY4 = (lY & 0x40000000);
    const lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    } else return (lResult ^ lX8 ^ lY8);
  }
  function F(x, y, z) { return (x & y) | ((~x) & z); }
  function G(x, y, z) { return (x & z) | (y & (~z)); }
  function H(x, y, z) { return (x ^ y ^ z); }
  function I(x, y, z) { return y ^ (x | (~z)); }

  function FF(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function GG(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function HH(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }
  function II(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  }

  function convertToWordArray(str) {
    const utf8 = unescape(encodeURIComponent(str));
    const wordCount = (utf8.length + 8 + 64 - ((utf8.length + 8) % 64)) / 4;
    const wordArray = Array(wordCount - 1);
    let bytePosition = 0;
    let byteCount = 0;
    while (byteCount < utf8.length) {
      const wordPosition = (byteCount - (byteCount % 4)) / 4;
      bytePosition = (byteCount % 4) * 8;
      wordArray[wordPosition] = (wordArray[wordPosition] | (utf8.charCodeAt(byteCount) << bytePosition));
      byteCount++;
    }
    const wordPosition = (byteCount - (byteCount % 4)) / 4;
    bytePosition = (byteCount % 4) * 8;
    wordArray[wordPosition] = wordArray[wordPosition] | (0x80 << bytePosition);
    wordArray[wordCount - 2] = utf8.length * 8;
    wordArray[wordCount - 1] = utf8.length >>> 29;
    return wordArray;
  }

  function wordToHex(lValue) {
    let wordToHexValue = '', wordToHexValueTemp = '', lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      wordToHexValueTemp = '0' + lByte.toString(16);
      wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
    }
    return wordToHexValue;
  }

  const x = convertToWordArray(string);
  let k, AA, BB, CC, DD, a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;
  const S11=7, S12=12, S13=17, S14=22, S21=5, S22=9, S23=14, S24=20, S31=4, S32=11, S33=16, S34=23, S41=6, S42=10, S43=15, S44=21;

  for (k = 0; k < x.length; k += 16) {
    AA = a; BB = b; CC = c; DD = d;
    a = FF(a, b, c, d, x[k+0], S11, 0xD76AA478); d = FF(d, a, b, c, x[k+1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k+2], S13, 0x242070DB); b = FF(b, c, d, a, x[k+3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k+4], S11, 0xF57C0FAF); d = FF(d, a, b, c, x[k+5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k+6], S13, 0xA8304613); b = FF(b, c, d, a, x[k+7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k+8], S11, 0x698098D8); d = FF(d, a, b, c, x[k+9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1); b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k+12], S11, 0x6B901122); d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k+14], S13, 0xA679438E); b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k+1], S21, 0xF61E2562); d = GG(d, a, b, c, x[k+6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51); b = GG(b, c, d, a, x[k+0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k+5], S21, 0xD62F105D); d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681); b = GG(b, c, d, a, x[k+4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k+9], S21, 0x21E1CDE6); d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k+3], S23, 0xF4D50D87); b = GG(b, c, d, a, x[k+8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905); d = GG(d, a, b, c, x[k+2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k+7], S23, 0x676F02D9); b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k+5], S31, 0xFFFA3942); d = HH(d, a, b, c, x[k+8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122); b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k+1], S31, 0xA4BEEA44); d = HH(d, a, b, c, x[k+4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k+7], S33, 0xF6BB4B60); b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6); d = HH(d, a, b, c, x[k+0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k+3], S33, 0xD4EF3085); b = HH(b, c, d, a, x[k+6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k+9], S31, 0xD9D4D039); d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8); b = HH(b, c, d, a, x[k+2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k+0], S41, 0xF4292244); d = II(d, a, b, c, x[k+7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7); b = II(b, c, d, a, x[k+5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k+12], S41, 0x655B59C3); d = II(d, a, b, c, x[k+3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D); b = II(b, c, d, a, x[k+1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k+8], S41, 0x6FA87E4F); d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k+6], S43, 0xA3014314); b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k+4], S41, 0xF7537E82); d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k+2], S43, 0x2AD7D2BB); b = II(b, c, d, a, x[k+9], S44, 0xEB86D391);
    a = addUnsigned(a, AA); b = addUnsigned(b, BB); c = addUnsigned(c, CC); d = addUnsigned(d, DD);
  }
  return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

/**
 * Computes HMAC-SHA256 hex string using Web Crypto API.
 */
async function hmacSha256(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === 'POST') {
      try {
        const body = await request.json();
        // Webhook Secret verification removed for demo simplicity
        const state = body.state;
        const payload = body.payload || body;

        const eventPayload = JSON.stringify({
          name: 'state-change',
          channels: ['kismet-provider-state'],
          data: JSON.stringify({ state, payload }),
        });

        const bodyMd5 = md5(eventPayload);
        const timestamp = Math.floor(Date.now() / 1000);
        const appId = env.PUSHER_APP_ID;
        const key = env.PUSHER_KEY;
        const secret = env.PUSHER_SECRET;
        const cluster = env.PUSHER_CLUSTER || 'ap4';

        const stringToSign = `POST\n/apps/${appId}/events\nauth_key=${key}&auth_timestamp=${timestamp}&auth_version=1.0&body_md5=${bodyMd5}`;
        const signature = await hmacSha256(secret, stringToSign);

        const pusherUrl = `https://api-${cluster}.pusher.com/apps/${appId}/events?auth_key=${key}&auth_timestamp=${timestamp}&auth_version=1.0&body_md5=${bodyMd5}&auth_signature=${signature}`;

        const pusherRes = await fetch(pusherUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: eventPayload,
        });

        const resText = await pusherRes.text();
        return new Response(JSON.stringify({ success: pusherRes.ok, detail: resText }), {
          status: pusherRes.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Kismet Provider Portal Webhook Relay Active', {
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  },
};
