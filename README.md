ChinaBazaar – E-Commerce Homepage
This is a frontend-only e-commerce homepage built with Next.js (App Router), React, and Tailwind CSS. The project replicates the homepage of the provided Figma design and includes reusable UI components, responsive layout, and static product data. All content is frontend-based only, as required by the assignment.

#Project Links

Live Demo (Vercel):[[chinabazzar-rbevsh2wd-gautamdikshya55-langs-projects.vercel.app](https://chinabazzar.vercel.app/)](https://chinabazzar-rbevsh2wd-gautamdikshya55-langs-projects.vercel.app)

GitHub Repository: https://github.com/gautamdikshya55-lang/Chinabazzar

Technologies used

Next.js (App Router)
React
TailwindCSS
TypeScript
Lucide-React (icons)
Next/Image (image optimization)
Static JSON data for products

#Setup instructions
Clone the repository:
git clone https://github.com/gautamdikshya55-lang/Chinabazzar.git

#Navigate to the project folder:
cd Chinabazzar

#Install dependencies:
npm install

#Run the development server:
npm run dev

#Build for production:
npm run build

#Start the production server:
npm start

#Core features

Pixel-accurate homepage converted from Figma
Responsive design for desktop, tablet, and mobile
Reusable UI components (ProductCard, ProductStrip, SectionHeader, banners)
Header and category navigation bar
Hero section
Sale banner
Promo grid
Flash Deals section
Special Offers section
Multi-sale banner grid
Static/dummy product data stored locally
Footer with payment logos and app store buttons

#Bonus features
Consistent layout container using section-shell
Next.js image optimization with remotePatterns
Clean folder structure with separation of layout, UI, and home components
Spacing and grid breakpoints optimized for all device sizes

#Deployment notes (Vercel)
Connect the GitHub repository to Vercel.
Vercel will automatically detect the Next.js framework.
No environment variables are required.
Add external image domains in next.config.ts:

images: 
{
  remotePatterns: [
    { protocol: "https", hostname: "images.pexels.com" },
    { protocol: "https", hostname: "upload.wikimedia.org" },
    { protocol: "https", hostname: "i.ibb.co" },
    { protocol: "https", hostname: "play-lh.googleusercontent.com" }
  ]
}



II.Screenshots

Desktop View
<img width="1655" height="927" alt="image" src="https://github.com/user-attachments/assets/c33a936a-d14b-4630-becf-f0fe03ea176d" />


      Mobile View

<img width="525" height="923" alt="image" src="https://github.com/user-attachments/assets/f65a0f11-eba4-4039-8841-33dd56ed86ce" />


Header and Navigation

<img width="1338" height="514" alt="image" src="https://github.com/user-attachments/assets/ff3f296d-eec6-489d-b9d0-de8697e1eff7" />


Product Sections

<img width="993" height="742" alt="image" src="https://github.com/user-attachments/assets/a6a436cf-efbc-4380-bb8d-d85f2b1c58a9" />

<img width="1020" height="763" alt="image" src="https://github.com/user-attachments/assets/d3d9553b-10f1-422f-9339-3f48656f64c2" />

<img width="986" height="329" alt="image" src="https://github.com/user-attachments/assets/0a920281-d417-4491-a528-640d9707b20a" />


Footer Sections


<img width="1059" height="386" alt="image" src="https://github.com/user-attachments/assets/a7dfb6a0-8451-4b19-8835-c1abea4f7df4" />

III.Assumptions
Only the homepage was required for this assignment
All interactive actions such as search, wishlist, login, and cart are UI-only
Dummy product data is stored in src/data/homepage.ts
Some Figma images were replaced with suitable Pexels images
No backend or API integration was needed

#Project structure
Chinabazzar/
Frontend/ Next.js application
Chinabazzar/
  src/
    app/
      layout.tsx
      page.tsx
    components/
      layout/
        Header.tsx
        Footer.tsx
      home/
        MainHero.tsx
        PromoGrid.tsx
        SaleBanner.tsx
        LiveSell.tsx
        ProductStrip.tsx
        MultiSaleBanner.tsx
      ui/
        ProductCard.tsx
        SectionHeader.tsx
    data/
      homepage.ts
  next.config.ts
  package.json
  tailwind.config.js
#About
ChinaBazaar Homepage built with Next.js, React, and TailwindCSS as a conversion of the provided Figma design.
