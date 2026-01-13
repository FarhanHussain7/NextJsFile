// Permanent server-side redirect example
import { permanentRedirect } from 'next/navigation';

export default function ServerPermanentRedirectPage() {
  // This will permanently redirect to the about page
  permanentRedirect('/about');
}
