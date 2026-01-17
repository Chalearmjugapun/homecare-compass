import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Users } from "lucide-react";
import heroNurse from "@/assets/hero-nurse.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "พยาบาลที่ผ่านการคัดเลือก" },
    { icon: Shield, value: "100%", label: "มีใบอนุญาตประกอบวิชาชีพ" },
    { icon: Clock, value: "24/7", label: "พร้อมให้บริการ" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNurse}
          alt="พยาบาลดูแลผู้สูงอายุ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-fade-up">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">บริการดูแลมาตรฐานโรงพยาบาล</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            บริการ
            <span className="text-gradient"> พยาบาลดูแล</span>
            <br />
            ผู้ป่วยที่บ้าน
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            ทีมพยาบาลวิชาชีพและผู้ดูแลที่ผ่านการอบรม พร้อมดูแลคุณและคนที่คุณรักอย่างใกล้ชิด
            ด้วยความใส่ใจและมาตรฐานระดับโรงพยาบาล
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              จองพยาบาลตอนนี้
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              ปรึกษาฟรี
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-primary hidden md:block" />
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
