import ShortLinkCard from '@/components/ShortLinkCard';
import { getLinkFromId } from '@/app/actions'
import { LinkType } from '@/app/lib/types';

export default async function ViewLink({
  params,
}: {
  params: { linkId: number };
}) {
  const id = params.linkId
  const link : LinkType = await getLinkFromId(id)
  return (
    <ShortLinkCard props={link} />
  );
}
