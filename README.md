# STIKOM UI — Mini Design System

Mini design system berbasis **Next.js App Router, React, TypeScript, dan styled-components**. Project ini memuat design token, Button, Card, Badge, pergantian tema terang/gelap, serta halaman demo profil dan katalog.

## 1. Menjalankan project

Pastikan Node.js versi 20 atau lebih baru sudah terpasang.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser. Untuk mengecek build produksi:

```bash
npm run build
npm start
```

## 2. Struktur folder

```text
stikom-mini-design-system/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── registry.tsx
├── components/
│   ├── ui/
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── styled.d.ts
│   ├── theme-provider.tsx
│   └── theme.ts
├── next.config.ts
├── package.json
└── README.md
```

## 3. Design token

Token disimpan dalam satu objek tema di `components/theme.ts`. Tema terang dan gelap memiliki struktur yang sama, sehingga komponen dapat menggunakan token yang sama tanpa menulis warna secara berulang.

- Warna: primary, page, surface, text, muted, border, success, warning, danger.
- Tipografi: Inter dengan fallback system-ui; heading tebal dan teks isi reguler.
- Spasi: 4, 8, 16, 24, dan 32 piksel.
- Radius: 8, 14, dan 20 piksel serta pill.

## 4. Komponen

- **Button:** varian primary, secondary, outline; ukuran small dan medium.
- **Card:** wadah konten dengan latar, border, radius, dan shadow.
- **Badge:** label default, success, warning, dan danger.

Semua komponen menggunakan `styled-components` dan membaca warna/radius dari theme token.

## 5. Tema terang dan gelap

`AppThemeProvider` menyimpan mode aktif dan membungkus aplikasi dengan `ThemeProvider` dari styled-components. Tombol di header mengubah mode; warna halaman, kartu, teks, border, tombol, dan badge mengikuti tema.

## 6. Halaman demo

Halaman utama memperlihatkan ringkasan design system, token, contoh komponen, dan katalog produk sederhana. Tombol filter katalog dapat digunakan untuk menyaring produk berdasarkan kategori.

## 7. Catatan App Router

`app/layout.tsx` membungkus halaman dengan `StyledComponentsRegistry` dan `AppThemeProvider`. Konfigurasi `compiler.styledComponents` di `next.config.ts` mengaktifkan dukungan styled-components pada compiler Next.js.
