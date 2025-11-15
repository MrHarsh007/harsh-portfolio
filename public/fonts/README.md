# Bebas Neue Regular Font

## Installation Instructions

To use the Bebas Neue Regular font, you need to add the font files to this directory.

### Required Files:
- `BebasNeue-Regular.woff2` (preferred, smaller file size)
- `BebasNeue-Regular.woff` (fallback)
- `BebasNeue-Regular.ttf` (alternative)

### Where to Get the Font:
Bebas Neue is a **free font**! Download it from:
- Google Fonts: https://fonts.google.com/specimen/Bebas+Neue
- FontSquirrel: https://www.fontsquirrel.com/fonts/bebas-neue
- Official: https://www.dafont.com/bebas-neue.font

### After Adding the Font Files:
1. Place the font files in this directory (`public/fonts/`)
2. Restart your development server
3. The font will automatically be applied to your entire site

### Alternative: Use Google Fonts CDN
Instead of self-hosting, you can use Google Fonts by adding this to your layout:
```tsx
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});
```
