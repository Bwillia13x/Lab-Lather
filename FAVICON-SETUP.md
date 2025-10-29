# Favicon Generation Instructions

## Current Status

The favicon placeholder file exists but needs to be replaced with actual icons.

## How to Generate Icons

### Option 1: Using Favicon.io (Recommended)

1. Visit <https://favicon.io/favicon-converter/>
2. Upload the `/public/lab-lather-logo.jpg` file
3. Download the generated package
4. Replace `/public/favicon.ico` with the generated file
5. Optionally add the PNG files for better quality

### Option 2: Using Figma/Photoshop

1. Open the logo in your design tool
2. Export as:
   - `favicon.ico` (16x16, 32x32, 48x48 multi-size)
   - `icon.png` (32x32)
   - `apple-icon.png` (180x180)
3. Place files in:
   - `/public/favicon.ico`
   - `/app/icon.png` (optional, requires updating metadata)
   - `/app/apple-icon.png` (optional, requires updating metadata)

### Option 3: Using CLI Tools

\`\`\`bash
# Install ImageMagick if needed
brew install imagemagick

# Convert logo to favicon
convert public/lab-lather-logo.jpg -resize 32x32 public/favicon.ico
\`\`\`

## After Generation

Run `pnpm build` to verify the icons work correctly.
