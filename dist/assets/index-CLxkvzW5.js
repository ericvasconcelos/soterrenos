import { e as s, h as a } from './index-CQTkdzCs.js';
const r = ({ size: e }) =>
  s({
    queryKey: ['landList'],
    queryFn: () => a(e),
    enabled: !0,
    staleTime: 1e3 * 60 * 5,
  });
export { r as u };
