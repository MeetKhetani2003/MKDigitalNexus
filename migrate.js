const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'mk-digital-nexus-website-design/src/pages');
const outDir = path.join(__dirname, 'src/app');

const map = {
  'Home.tsx': 'page.tsx',
  'About.tsx': 'about/page.tsx',
  'Services.tsx': 'services/page.tsx',
  'Portfolio.tsx': 'portfolio/page.tsx',
  'Testimonials.tsx': 'testimonials/page.tsx',
  'Contact.tsx': 'contact/page.tsx'
};

for (const [viteName, nextName] of Object.entries(map)) {
  const content = fs.readFileSync(path.join(srcDir, viteName), 'utf-8');
  let newContent = content.replace(/import \{ Link \} from "react-router-dom";/g, 'import Link from "next/link";');
  newContent = newContent.replace(/<Link([^>]*?) to=/g, '<Link$1 href=');
  
  // Update imports for components
  newContent = newContent.replace(/\.\.\/components\//g, '@/components/ui/');

  // Next.js pages must have default export
  newContent = newContent.replace(/export function (\w+)\(/, 'export default function $1(');

  fs.mkdirSync(path.dirname(path.join(outDir, nextName)), { recursive: true });
  fs.writeFileSync(path.join(outDir, nextName), newContent);
}
console.log("Migration complete!");
