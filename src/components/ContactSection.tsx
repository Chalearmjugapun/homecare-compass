import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "โทรศัพท์",
    value: "02-123-4567",
    subValue: "สายด่วน 24 ชม.",
  },
  {
    icon: MessageCircle,
    title: "LINE Official",
    value: "@healthhomecare",
    subValue: "ตอบกลับภายใน 5 นาที",
  },
  {
    icon: Mail,
    title: "อีเมล",
    value: "info@healthhome.co.th",
    subValue: "ตอบกลับภายใน 1 ชม.",
  },
  {
    icon: MapPin,
    title: "สำนักงาน",
    value: "อาคาร ABC ถ.สุขุมวิท",
    subValue: "กรุงเทพมหานคร",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 gradient-trust">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            ติดต่อเรา
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            พร้อมให้คำปรึกษา
            <span className="text-gradient"> ตลอด 24 ชั่วโมง</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ไม่แน่ใจว่าต้องการบริการแบบไหน? ติดต่อเราได้เลย ปรึกษาฟรีไม่มีค่าใช้จ่าย
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              ช่องทางติดต่อ
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subValue}</p>
                </div>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">เวลาทำการ</h4>
              </div>
              <div className="space-y-2 text-foreground/80">
                <div className="flex justify-between">
                  <span>สำนักงาน</span>
                  <span>จ-ศ 08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>สายด่วนจองพยาบาล</span>
                  <span className="text-secondary font-medium">24 ชั่วโมง</span>
                </div>
                <div className="flex justify-between">
                  <span>LINE Official</span>
                  <span className="text-secondary font-medium">24 ชั่วโมง</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              ส่งข้อความถึงเรา
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ชื่อ-นามสกุล
                </label>
                <Input
                  type="text"
                  placeholder="กรอกชื่อของคุณ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    เบอร์โทรศัพท์
                  </label>
                  <Input
                    type="tel"
                    placeholder="0XX-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    อีเมล
                  </label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  ข้อความ
                </label>
                <Textarea
                  placeholder="บอกเราเกี่ยวกับความต้องการของคุณ..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                ส่งข้อความ
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                หรือโทรหาเราที่ <a href="tel:021234567" className="text-primary font-medium">02-123-4567</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
