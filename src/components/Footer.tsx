import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const links = {
    services: [
      { name: "พยาบาลวิชาชีพ", href: "#services" },
      { name: "ผู้ดูแลผู้สูงอายุ", href: "#services" },
      { name: "ดูแลผู้ป่วยติดเตียง", href: "#services" },
      { name: "ดูแลหลังผ่าตัด", href: "#services" },
    ],
    company: [
      { name: "เกี่ยวกับเรา", href: "#about" },
      { name: "ทีมพยาบาล", href: "#nurses" },
      { name: "รีวิวลูกค้า", href: "#reviews" },
      { name: "ร่วมงานกับเรา", href: "#careers" },
    ],
    support: [
      { name: "วิธีการจอง", href: "#process" },
      { name: "คำถามที่พบบ่อย", href: "#faq" },
      { name: "นโยบายความเป็นส่วนตัว", href: "#privacy" },
      { name: "เงื่อนไขการใช้บริการ", href: "#terms" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">HealthHome</span>
                <span className="text-xs opacity-70">Home Nursing Care</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              บริการพยาบาลและผู้ดูแลถึงบ้าน ด้วยทีมงานมืออาชีพที่ผ่านการคัดกรอง
              พร้อมดูแลคุณและครอบครัวตลอด 24 ชั่วโมง
            </p>
            <div className="space-y-3">
              <a href="tel:021234567" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                02-123-4567
              </a>
              <a href="mailto:info@healthhome.co.th" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@healthhome.co.th
              </a>
              <p className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                อาคาร ABC ถ.สุขุมวิท กรุงเทพฯ
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">บริการ</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">เกี่ยวกับ</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">ช่วยเหลือ</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2025 HealthHome Care. สงวนลิขสิทธิ์
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#terms" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                เงื่อนไขการใช้บริการ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
