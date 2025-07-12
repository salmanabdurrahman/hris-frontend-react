import { testimonials } from "../../../constants/homePageData";

const TestimonialsSection = () => {
  return (
    <section className="overflow-hidden bg-gray-50 py-24 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Apa Kata Mereka?</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Cerita sukses dari para manajer HR yang telah bertransformasi bersama kami.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              className="animate-on-scroll hover-elevate relative overflow-hidden rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800"
              key={index}
            >
              <i className="bx bxs-quote-right absolute -top-4 -right-4 -z-0 text-8xl text-gray-100 dark:text-gray-700" />
              <p className="relative z-10 text-slate-600 dark:text-slate-300">{testimonial.quote}</p>
              <div className="relative z-10 mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`Foto ${testimonial.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
