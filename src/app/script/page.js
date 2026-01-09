import Script from "next/script";

export default function ScriptPage() {
  return (
    <div>
      <h1>Script Page</h1>
      <p>This is the script page content.</p>
      <Script src="/location.js" strategy="afterInteractive" />
      <div id="location" style={{ marginTop: '20px', fontWeight: 'bold' }}></div>   
      
    </div>
  );
}   