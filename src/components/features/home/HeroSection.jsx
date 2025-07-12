const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-blue-50 py-20 dark:bg-gray-800/50">
      <div className="hero-pattern absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl lg:mb-4">
          <h1 className="text-5xl leading-tight font-black tracking-tight text-gray-900 md:text-7xl lg:mb-2 dark:text-white">
            Kelola <span className="text-blue-600 dark:text-blue-500">Sumber Daya Manusia</span> Anda dengan Efisien
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
            style={{ transitionDelay: "100ms" }}
          >
            Platform HR terintegrasi untuk manajemen data pegawai, absensi, penggajian, dan laporan analitik dalam satu
            tempat.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-sm" style={{ transitionDelay: "200ms" }}>
          <a
            href="/login"
            className="inline-block w-full rounded-lg bg-blue-600 px-8 py-4 text-center text-lg font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Mulai Kelola Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
