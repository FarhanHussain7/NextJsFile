// Server-side redirect example
import { redirect } from 'next/navigation';

export default function ServerRedirectPage() {
  // This will redirect to the topics page
  redirect('/topics');
}
