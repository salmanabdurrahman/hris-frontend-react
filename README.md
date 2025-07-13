# SimpleHRIS Frontend

## 📝 Deskripsi

**SimpleHRIS** adalah antarmuka web (_frontend_) untuk Sistem Informasi Sumber Daya Manusia (HRIS). Proyek ini menekankan desain UI yang sederhana, responsif, dan mudah digunakan.

Aplikasi dibangun menggunakan **ReactJS (Vite)** dan **TailwindCSS**, tanpa library komponen UI eksternal. Seluruh fungsionalitas utama, seperti autentikasi dan manajemen data, diimplementasikan di sisi klien dengan _dummy data_ dan _local storage_ untuk penyimpanan sementara.

## ✨ Fitur Utama

- **Autentikasi Pengguna:** Login dan logout berbasis _local storage_.
- **Akses Terproteksi:** Hanya pengguna yang sudah login dapat mengakses halaman tertentu.
- **Manajemen Data Pegawai:** Tambah, lihat, edit, dan hapus data pegawai.
- **Pencarian & Filter:** Cari dan filter data pegawai berdasarkan kriteria tertentu.
- **Paginasi:** Navigasi antar halaman data tabel secara manual.
- **Manajemen Profil:** Edit data profil pengguna.
- **Mode Tema:** Pilihan tema gelap, terang, dan mengikuti sistem.
- **Desain Responsif:** Tampilan optimal di berbagai perangkat.
- **Notifikasi Interaktif:** Umpan balik untuk aksi pengguna.

## 🚀 Teknologi yang Digunakan

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## ⚙️ Cara Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan pengembangan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repository ini:**

    ```bash
    git clone https://github.com/salmanabdurrahman/hris-frontend-react.git
    cd hris-frontend-react
    ```

2.  **Install semua dependencies** yang dibutuhkan menggunakan `npm` atau `yarn`:

    ```bash
    npm install
    ```

3.  **Jalankan development server**:

    ```bash
    npm run dev
    ```

4.  **Akses aplikasi di browser**:
    Buka browser Anda dan navigasi ke `http://localhost:5173` (atau port lain yang ditampilkan di terminal Anda).

    **Kredensial untuk Login:**
    - **Username:** `admin`
    - **Password:** `admin123`

## 🤝 Berkontribusi

Saat ini proyek ini dibuat untuk tujuan tes dan portofolio. Namun, jika Anda punya ide atau masukan untuk perbaikan, jangan ragu untuk membuka _issue_.
