import { Star, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import nurse1 from "@/assets/nurse-1.jpg";
import nurse2 from "@/assets/nurse-2.jpg";
import nurse3 from "@/assets/nurse-3.jpg";

const nurses = [
  {
    name: "พว. สมหญิง ใจดี",
    role: "พยาบาลวิชาชีพ",
    image: nurse1,
    experience: "8 ปี",
    rating: 4.9,
    reviews: 124,
    specialties: ["ดูแลผู้สูงอายุ", "โรคเรื้อรัง"],
    license: "RN-12345",
  },
  {
    name: "พว. สมชาย รักษ์สุข",
    role: "พยาบาลวิชาชีพ",
    image: nurse2,
    experience: "12 ปี",
    rating: 4.8,
    reviews: 98,
    specialties: ["ผู้ป่วยติดเตียง", "หลังผ่าตัด"],
    license: "RN-67890",
  },
  {
    name: "คุณมาลี อ่อนโยน",
    role: "ผู้ดูแลผู้สูงอายุ",
    image: nurse3,
    experience: "6 ปี",
    rating: 5.0,
    reviews: 87,
    specialties: ["ดูแลผู้สูงอายุ", "กายภาพบำบัด"],
    license: "CG-11111",
  },
];

const NursesSection = () => {
  return (
    <section id="nurses" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            ทีมผู้เชี่ยวชาญ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            พบกับทีม
            <span className="text-gradient"> พยาบาลมืออาชีพ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            พยาบาลทุกท่านผ่านการคัดกรองอย่างเข้มงวด มีใบอนุญาต และได้รับการอบรมอย่างต่อเนื่อง
          </p>
        </div>

        {/* Nurses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nurses.map((nurse, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={nurse.image}
                  alt={nurse.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-foreground">{nurse.rating}</span>
                  <span className="text-xs text-muted-foreground">({nurse.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {nurse.name}
                </h3>
                <p className="text-primary font-medium mb-4">{nurse.role}</p>

                {/* Info Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{nurse.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm">
                    <Award className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{nurse.license}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {nurse.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Button variant="outline" className="w-full">
                  ดูโปรไฟล์
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            ดูพยาบาลทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NursesSection;
