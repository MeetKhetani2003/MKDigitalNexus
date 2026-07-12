const fs = require('fs');
const files = [
  'src/app/page.tsx', 
  'src/app/about/page.tsx', 
  'src/app/services/page.tsx', 
  'src/app/portfolio/page.tsx', 
  'src/app/testimonials/page.tsx', 
  'src/app/contact/page.tsx'
];
for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  if (!content.includes('"use client"')) {
    fs.writeFileSync(f, '"use client";\n' + content);
  }
}
console.log("Done");
