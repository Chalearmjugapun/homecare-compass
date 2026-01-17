import { ClipboardList, Search, UserCheck, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "กรอกข้อมูลผู้ป่วย",
    description: "บอกเราเกี่ยวกับสภาพของผู้ป่วย โรคประจำตัว และความต้องการการดูแลเฉพาะ",
  },
  {
    icon: Search,
    step: "02",
    title: "เลือกประเภทการดูแล",
    description: "เลือกประเภทพยาบาล ระยะเวลา และแพ็คเกจที่เหมาะกับความต้องการ",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "จับคู่พยาบาล",
    description: "ระบบของเราจะจับคู่กับพยาบาลที่มีความเชี่ยวชาญตรงกับเคสของคุณ",
  },
  {
    icon: PlayCircle,
    step: "04",
    title: "เริ่มให้บริการ",
    description: "พยาบาลจะเดินทางไปยังบ้านของคุณตามวันและเวลาที่นัดหมาย",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-4">
            ขั้นตอนง่าย ๆ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            เริ่มต้นใช้บริการ
            <span className="text-gradient"> ง่ายใน 4 ขั้นตอน</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            กระบวนการที่ออกแบบมาให้ง่าย รวดเร็ว และสะดวกสำหรับทุกคน
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center shadow-hover group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
