import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "คุณวิภา ศรีสุข",
    relation: "ลูกสาวผู้ป่วย",
    content: "พยาบาลดูแลคุณแม่อย่างดีมาก ใจเย็น อดทน และเป็นมืออาชีพจริงๆ คุณแม่ชอบมาก แนะนำค่ะ",
    rating: 5,
    date: "2 สัปดาห์ที่แล้ว",
  },
  {
    name: "คุณสมชัย พงษ์เจริญ",
    relation: "ลูกชายผู้ป่วย",
    content: "ใช้บริการดูแลคุณพ่อหลังผ่าตัดสะโพก พยาบาลมาตรงเวลา ดูแลดี มีความรู้ ช่วยฟื้นฟูได้เร็วมาก",
    rating: 5,
    date: "1 เดือนที่แล้ว",
  },
  {
    name: "คุณนภา รักษ์ใจ",
    relation: "ภรรยาผู้ป่วย",
    content: "บริการดีมาก ตอบสนองเร็ว จัดหาพยาบาลให้ภายใน 24 ชั่วโมง สะดวกสบายมากค่ะ",
    rating: 5,
    date: "3 สัปดาห์ที่แล้ว",
  },
];

const partners = [
  "โรงพยาบาลกรุงเทพ",
  "โรงพยาบาลบำรุงราษฎร์",
  "โรงพยาบาลพญาไท",
  "โรงพยาบาลศิริราช",
  "สภาการพยาบาล",
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            รีวิวจากลูกค้า
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ความไว้วางใจจาก
            <span className="text-gradient"> ครอบครัวทั่วประเทศ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ดูแลมากกว่า 2,000 ครอบครัว ด้วยความใส่ใจและมาตรฐานระดับโรงพยาบาล
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.relation}</p>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">ได้รับความไว้วางใจจากสถาบันชั้นนำ</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-muted rounded-lg text-muted-foreground font-medium"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
