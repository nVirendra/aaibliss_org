
import './globals.css'

export const metadata = {
  title: 'AI-Powered Backend & System Engineering | Scale • Secure • Revenue',
  description: 'Professional backend & system engineering services specializing in scalable SaaS products, AI-powered automation, and enterprise solutions. 5+ years of experience building production-ready systems.',
  keywords: 'backend engineering, system architecture, AI automation, SaaS development, microservices, API development, scalable systems, security, performance optimization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

