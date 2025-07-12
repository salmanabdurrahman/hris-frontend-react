const HomeCTA = () => {
  return (
    <section className="bg-blue-600 py-24">
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">Transformasi Manajemen HR Anda Sekarang</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Coba demo gratis kami dan lihat bagaimana Sistem HR dapat membantu perusahaan Anda.
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="transform rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-100"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
