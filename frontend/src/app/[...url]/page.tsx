import CardWrapper from "@/components/CardWrapper";
import Redirect from "@/components/Redirect";
import { getLinkFromShortUrl } from "../actions";
import { LinkType } from "../lib/types";

export default async function Profile({
  params,
}: {
  params: {url: string};
}) {
  const shortUrl = params.url;
  console.log(shortUrl)
  const link : LinkType = await getLinkFromShortUrl(shortUrl)
  console.log(link.longUrl)
  return (
  <CardWrapper>
    <Redirect props={link.longUrl} />
  </CardWrapper>);
}
