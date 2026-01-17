import { 
  Stethoscope, 
  Heart, 
  UserCheck, 
  Bed, 
  Clock, 
  Activity,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "พยาบาลวิชาชีพ (RN)",
    description: "พยาบาลจบปริญญาตรี มีใบอนุญาตประกอบวิชาชีพ ให้การดูแลระดับโรงพยาบาล",
    features: ["วัดสัญญาณชีพ", "ให้ยาตามแพทย์สั่ง", "ทำแผล", "ดูแลสายสวน"],
  },
  {
    icon: UserCheck,
    title: "ผู้ช่วยพยาบาล / Caregiver",
    description: "ผู้ดูแลผ่านการอบรมเฉพาะทาง ดูแลกิจวัตรประจำวันอย่างใกล้ชิด",
    features: ["อาบน้ำ แต่งตัว", "ป้อนอาหาร", "พลิกตัว", "เป็นเพื่อนคุย"],
  },
  {
    icon: Bed,
    title: "ดูแลผู้ป่วยติดเตียง",
    description: "การดูแลเฉพาะทางสำหรับผู้ป่วยที่ต้องนอนพักบนเตียงเป็นเวลานาน",
    features: ["ป้องกันแผลกดทับ", "กายภาพบำบัดเบื้องต้น", "ดูแลสุขอนามัย", "ดูดเสมหะ"],
  },
  {
    icon: Heart,
    title: "ดูแลผู้สูงอายุ",
    description: "ดูแลผู้สูงวัยด้วยความรัก ความอดทน และความเข้าใจ",
    features: ["ดูแลโรคประจำตัว", "เตือนทานยา", "พาไปพบแพทย์", "ฟื้นฟูความจำ"],
  },
  {
    icon: Activity,
    title: "ดูแลหลังผ่าตัด",
    description: "ช่วยเหลือการพักฟื้นหลังการผ่าตัดให้กลับมาแข็งแรงเร็วขึ้น",
    features: ["ดูแลแผลผ่าตัด", "กายภาพบำบัด", "ติดตามอาการ", "ประสานงานแพทย์"],
  },
  {
    icon: Clock,
    title: "บริการรายวัน / รายเดือน",
    description: "เลือกแพ็คเกจที่เหมาะกับความต้องการ ทั้งระยะสั้นและระยะยาว",
    features: ["รายวัน 8-24 ชม.", "รายสัปดาห์", "รายเดือน", "เคสพิเศษ"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            บริการของเรา
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            บริการดูแลครบวงจร
            <span className="text-gradient"> เลือกได้ตามความต้องการ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ไม่ว่าจะต้องการการดูแลแบบใด เรามีทีมผู้เชี่ยวชาญพร้อมให้บริการ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                เรียนรู้เพิ่มเติม
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
