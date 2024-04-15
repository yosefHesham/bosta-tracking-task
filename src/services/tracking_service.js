
const baseUrl = 'https://tracking.bosta.co/shipments/track'
export default async function trackServiceWithId(id = 7234258) {
    const reqUrl = `${baseUrl}/${id}`
    const resp = await fetch(reqUrl)
    const data = await resp.json()
    console.log(data)
    return data
}