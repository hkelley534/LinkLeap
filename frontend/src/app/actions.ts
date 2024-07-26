'use server'
import { redirect } from 'next/navigation';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const url = "https://localhost:7233/api/Links"

export async function getAllLinks() {
  let res = await fetch(url,{ next: { revalidate: 5 } });
  let links = res.json();
  return links;
}

export async function getLinkFromId(id: number) {
  let res = await fetch(`${url}/${id}`);  
  let link = res.json();
  return link;
}

export async function getLinkFromShortUrl(shortUrl: string) {
  // console.log(`${url}/${id}`)
  let res = await fetch(`https://localhost:7233/${shortUrl}`, { next: { revalidate: 5 } });
  let link = res.json();
  return link;
}

export async function postLink(formData: FormData) {

  let link = {
    "url": `${formData.get('longLink')}`,
  }

  let result = {
    id: '0',
  }

  try {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(link)
    })
    result = await res.json()
    console.log(result)
  } catch(e) {
    console.log("error")
    // redirect(`/error/${e}`)
  }
  result.id != '0' ? redirect(`/links/${result.id}`) : redirect('/error');
} 