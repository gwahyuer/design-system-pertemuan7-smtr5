# Laporan Mini Design System STIKOM UI

## 1. Keputusan design token

Mini design system yang dibuat untuk website STIKOM UI disesuaikan dengan kebutuhan portal akademik modern. Warna utama menggunakan biru (`#2563EB`) agar memberikan kesan profesional, terpercaya, dan mudah diidentifikasi sebagai platform pendidikan. Latar halaman terang memakai `#F8FAFC`, permukaan kartu berwarna putih, teks utama `#0F172A`, serta teks sekunder `#64748B`. Pada tema gelap, tampilan diubah menjadi latar biru tua `#0B1220`, permukaan `#111C2E`, dan teks terang `#E5EDF8` agar tetap nyaman dibaca tanpa mengurangi kontras.

Tipografi menggunakan font sans-serif dengan fallback `system-ui`, karena gaya ini sederhana, modern, dan nyaman dibaca pada layar komputer maupun perangkat mobile. Hierarki visual didukung oleh penggunaan heading yang lebih tebal dan paragraf yang lebih ringan agar informasi mudah dibedakan secara cepat. Skala jarak yang dipakai mengikuti sistem 4, 8, 16, 24, dan 32 piksel untuk menjaga konsistensi antar komponen. Radius elemen juga dibagi ke dalam beberapa ukuran, yaitu 8 piksel untuk elemen kecil, 14 piksel untuk komponen umum, dan 20 piksel untuk panel utama.

## 2. Komponen yang dibangun

Komponen yang dibuat dalam design system ini mengikuti kebutuhan portal akademik, bukan hanya sekadar contoh UI umum. `Button` memiliki beberapa varian, yaitu primary untuk aksi utama, secondary untuk aksi pendamping, dan outline untuk opsi alternatif. Ukurannya terdiri dari small dan medium agar mudah disesuaikan dengan ruang layout dan hierarki tombol.

`Card` digunakan sebagai wadah utama untuk menampilkan informasi seperti profil mahasiswa, agenda hari ini, mata kuliah, dan rekap nilai. Selain itu, komponen `Badge` dipakai untuk menandai status seperti semester aktif, nilai, tugas, dan kategori tertentu. Semua komponen dibuat dengan `styled-components` dan mengambil nilai warna, radius, serta spacing dari theme sehingga perubahan visual dapat dilakukan secara konsisten dalam satu titik pengaturan.

## 3. Implementasi tema terang dan gelap

Sistem tema diatur dengan `AppThemeProvider` yang membungkus aplikasi menggunakan `ThemeProvider` dari styled-components. Objek tema terang dan gelap memiliki struktur yang sama, sehingga komponen dapat membaca token yang sama tanpa perlu mengubah banyak kode. Tombol toggle tema di header mengubah state `mode`, dan seluruh elemen seperti background, teks, border, button, serta badge akan mengikuti perubahan itu secara otomatis.

Cara ini efektif karena gaya visual tetap konsisten meskipun tema berpindah dari mode terang ke gelap. UI yang ditampilkan juga lebih nyaman dipakai dalam jangka panjang, terutama untuk aplikasi yang digunakan secara berkala seperti portal pembelajaran.

## 4. Halaman demo yang diperbarui

Website yang saat ini dibuat bukan lagi sekadar halaman demo alat desain, tetapi telah berkembang menjadi dashboard portal akademik STIKOM Banyuwangi. Halaman utama menampilkan hero section berisi sambutan digital kepada mahasiswa, dilanjutkan dengan ringkasan statistik seperti jumlah mata kuliah, tugas aktif, dan IPK semester.

Bagian kanan halaman menampilkan profil mahasiswa, ringkasan aktivitas, serta informasi penting yang berhubungan dengan pembelajaran. Selanjutnya, terdapat section mata kuliah yang menampilkan pembelajaran aktif, semester saat ini, serta progress per mata kuliah. Setiap kartu memuat nama mata kuliah, dosen pengampu, ruang kelas, dan persentase penyelesaian materi.

## 5. Modul jadwal, nilai, dan aktivitas

Website juga dilengkapi dengan area jadwal kuliah yang menampilkan kegiatan per hari, mulai dari kelas, diskusi, hingga pengumpulan tugas. Bagian ini dibuat agar mahasiswa dapat melihat agenda harian dengan cepat tanpa harus membuka banyak halaman. Selain itu, terdapat section rekap nilai yang menyajikan pencapaian akademik dalam bentuk kartu ringkas.

Detail yang ditampilkan mencakup data seperti nilai mata kuliah, status pembelajaran, serta pengumuman penting. Kombinasi elemen-elemen tersebut membuat halaman ini cukup representatif sebagai dashboard mahasiswa yang informatif dan mudah dipahami.

## 6. Kendala dan solusi App Router

Pada saat implementasi dengan Next.js App Router, ada kebutuhan khusus agar `styled-components` bisa berjalan dengan benar. Masalah umum yang sering muncul adalah style tidak terbaca pada render server atau komponen interaktif tidak merespons karena state tidak terhubung dengan provider yang tepat. Solusi yang digunakan adalah menyiapkan `StyledComponentsRegistry` agar style dapat di-compile dengan benar dan menempatkan `AppThemeProvider` di root layout.

Selain itu, komponen yang membutuhkan event handler seperti tombol pengganti tema dibuat sebagai client component. Dengan pendekatan ini, state tema dapat berubah tanpa mengganggu rendering keseluruhan aplikasi, sehingga UI tetap stabil dan responsif.

## 7. Kesimpulan

Website yang sudah diperbarui berhasil mengubah mini design system dari sekadar demonstrasi komponen menjadi antarmuka portal akademik yang lebih relevan dan fungsional. Desain token, komponen reusable, serta sistem tema bekerja bersama untuk menciptakan tampilan yang konsisten, modern, dan mudah dibaca.

Perubahan ini juga menunjukkan bahwa design system bukan hanya soal estetika, tetapi juga tentang struktur informasi, pengalaman pengguna, dan kemudahan dalam mengelola antarmuka pada aplikasi nyata. Dengan pendekatan seperti ini, pengembangan halaman berikutnya akan lebih cepat, konsisten, dan mudah dipelihara.
