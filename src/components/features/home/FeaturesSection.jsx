import { features } from "../../../constants/homePageData";

const FeaturesSection = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-24 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Fitur Unggulan Kami</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Semua yang Anda butuhkan untuk manajemen HR yang modern dan efektif.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              className="group hover-elevate animate-on-scroll flex w-full flex-col items-center justify-start gap-4 rounded-2xl bg-white p-8 shadow-sm sm:w-64 dark:bg-gray-800"
              key={index}
            >
              <div
                className={`rounded-2xl ${feature.iconBg} p-5 ${feature.iconColor} transition-all duration-300 group-hover:scale-110 ${feature.iconDarkBg} ${feature.iconDarkColor}`}
              >
                <i className={`bx ${feature.icon} text-5xl`} />
              </div>
              <span className="text-center text-xl font-bold text-gray-900 dark:text-white">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
