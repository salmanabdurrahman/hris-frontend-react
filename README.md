# SimpleHRIS Frontend

<div align="center">
  <img src="/public/assets/icons/favicon.ico" alt="Logo SimpleHRIS" loading="lazy"/>
  <h1 align="center">SimpleHRIS</h1>
  <p align="center"><em>Antarmuka Modern untuk Manajemen Sumber Daya Manusia</em></p>
</div>

## 📝 Deskripsi

**SimpleHRIS** adalah sebuah antarmuka web (_frontend_) yang dirancang untuk sebuah Sistem Informasi Sumber Daya Manusia (HRIS). Proyek ini fokus pada pembuatan UI yang bersih, responsif, dan interaktif.

Aplikasi ini dibangun dari nol menggunakan **ReactJS (Vite)** dan di-styling dengan **TailwindCSS**, tanpa menggunakan library komponen UI eksternal. Semua fungsionalitas, mulai dari autentikasi hingga CRUD, diimplementasikan di sisi klien (_client-side_) dengan memanfaatkan _dummy data_ dan _local storage_ untuk persistensi.

## ✨ Fitur Utama

- **Sistem Autentikasi:** Fungsionalitas Login dan Logout yang aman berbasis _local storage_.
- **Protected Routes:** Halaman-halaman dashboard hanya bisa diakses setelah pengguna berhasil login.
- **Manajemen Pegawai (CRUD):**
  - **Create:** Menambah data pegawai baru melalui form.
  - **Read:** Menampilkan data semua pegawai dalam format tabel yang jelas.
  - **Update:** Mengedit data pegawai yang sudah ada.
  - **Delete:** Menghapus data pegawai (dengan konfirmasi).
- **Pencarian & Filter:** Memfilter data pegawai berdasarkan nama dan divisi.
- **Paginasi Manual:** Navigasi antar halaman data tabel yang dibuat secara manual tanpa library pihak ketiga.
- **Manajemen Profil:** Pengguna (admin) dapat mengedit data profilnya sendiri.
- **Dark/Light/System Mode:** Tiga pilihan tema yang bisa disesuaikan dan mengikuti preferensi OS.
- **Desain Responsif:** Tampilan yang optimal di berbagai perangkat (desktop, tablet, dan mobile).
- **Notifikasi Toast:** Umpan balik interaktif untuk setiap aksi pengguna (misalnya, login berhasil/gagal).

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
