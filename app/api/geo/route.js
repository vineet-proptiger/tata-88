export async function GET(request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const loopback = new Set(['::1', '127.0.0.1', '::ffff:127.0.0.1'])

    let clientIp = ''
    if (forwarded) {
      const ip = forwarded.split(',')[0].trim()
      if (!loopback.has(ip)) clientIp = ip
    }
    if (!clientIp && realIp && !loopback.has(realIp)) clientIp = realIp

    const url = clientIp
      ? `http://ip-api.com/json/${clientIp}?fields=city,regionName,zip,country,query`
      : `http://ip-api.com/json/?fields=city,regionName,zip,country,query`

    // Cache ip-api response for 24 hours on the server side
    const res = await fetch(url, { next: { revalidate: 86400 } })
    const d = await res.json()

    return Response.json(
      {
        ip: d.query || '',
        city: (d.city || '').toLowerCase(),
        region: (d.regionName || '').toLowerCase(),
        postal_code: d.zip || '',
        country: d.country || '',
      },
      {
        // Browser caches this result for 24 hours — same user won't re-hit this API
        headers: { 'Cache-Control': 'private, max-age=86400' },
      }
    )
  } catch {
    return Response.json(
      { ip: '', city: '', region: '', postal_code: '', country: '' },
      { headers: { 'Cache-Control': 'private, max-age=3600' } }
    )
  }
}
