# Rapid Rush Randomizer

Aplikasi Next.js sederhana untuk mengarahkan pemain secara acak ke salah satu URL quiz.

## Fitur

- Mendukung 15 URL atau lebih.
- URL disimpan di environment variable `QUIZ_URLS`.
- Mode `sticky` mempertahankan set yang sama pada browser yang sama selama 8 jam.
- Mode `random` mengacak ulang setiap akses.
- Endpoint `/reset` menghapus assignment pada browser untuk pengujian panitia.

## Menjalankan secara lokal

1. Instal Node.js versi LTS.
2. Salin `.env.example` menjadi `.env.local`.
3. Isi seluruh URL quiz pada `QUIZ_URLS`.
4. Jalankan:

```bash
npm install
npm run dev
```

5. Buka `http://localhost:3000`.

## Format QUIZ_URLS

Boleh dipisahkan dengan koma:

```env
QUIZ_URLS=https://quiz-1.example,https://quiz-2.example,https://quiz-3.example
```

Atau menggunakan baris baru melalui editor Environment Variables di Vercel.

## Deploy melalui GitHub dan Vercel

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder project ini ke repository tersebut.
3. Masuk ke Vercel dan pilih **Add New > Project**.
4. Import repository GitHub tadi.
5. Pada bagian **Environment Variables**, tambahkan:
   - Name: `QUIZ_URLS`
   - Value: kelima belas URL quiz, dipisahkan dengan koma.
   - Environment: Production, Preview, dan Development bila diperlukan.
6. Tambahkan `ASSIGNMENT_MODE` dengan nilai `sticky`.
7. Klik **Deploy**.
8. Setelah selesai, buka URL `https://nama-project.vercel.app`.

Setelah mengubah environment variable, lakukan redeploy agar konfigurasi deployment menggunakan nilai terbaru.

## Catatan distribusi

Versi ini menggunakan random biasa. Dengan jumlah pemain besar, distribusi setiap set akan cenderung mendekati rata, tetapi tidak dijamin sama persis. Distribusi yang benar-benar seimbang membutuhkan database atau penyimpanan counter terpusat.
