export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  image: string;
  alt: string;
  badge?: string;
  accent: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type OfferItem = {
  title: string;
  detail: string;
};

export type BeforeAfterItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const navItems = [
  "Home",
  "Dịch vụ",
  "Khách hàng thực tế",
  "Blog",
  "Bảng giá",
  "Liên hệ",
] as const;

export const heroSlides: HeroSlide[] = [
  {
    id: "natural-beauty",
    title: "Làm đẹp tự nhiên, vừa đủ để vẫn là mình",
    subtitle:
      "Chòi của Uyn tư vấn theo từng gương mặt, nền môi, dáng mày và tình trạng da thật của mỗi khách.",
    primaryCta: "Đặt lịch tư vấn",
    secondaryCta: "Xem dịch vụ",
    image: "/images/placeholder-hero-editorial.svg",
    alt: "Người mẫu với lớp trang điểm nhẹ, tông da sáng và ánh sáng ấm dịu",
    accent: "Tư vấn theo gương mặt thật",
  },
  {
    id: "lip-brow-offer",
    title: "Ưu đãi phun môi & chân mày tháng này",
    subtitle:
      "Kiểm tra nền môi, dáng mày và tư vấn màu hoặc dáng phù hợp trước khi làm.",
    primaryCta: "Xem ưu đãi",
    image: "/images/placeholder-service-soft.svg",
    alt: "Cận cảnh gương mặt nữ với đôi môi mềm và chân mày gọn gàng",
    badge: "Limited slots",
    accent: "Ưu đãi cho lịch hẹn sớm",
  },
  {
    id: "meso",
    title: "Meso căng bóng cấp ẩm",
    subtitle:
      "Phù hợp với làn da thiếu ẩm, xỉn màu, cần phục hồi độ mịn và độ căng nhẹ.",
    primaryCta: "Tìm hiểu Meso",
    image: "/images/placeholder-clinic-soft.svg",
    alt: "Người mẫu với làn da căng mịn, ánh sáng tự nhiên và bảng màu pastel",
    accent: "Da thiếu ẩm, xỉn màu, kém mịn",
  },
  {
    id: "filler-botox",
    title: "Filler / Botox / Gọn hàm",
    subtitle:
      "Ưu tiên gương mặt hài hòa, tự nhiên, không làm quá tay.",
    primaryCta: "Tư vấn trước khi làm",
    image: "/images/placeholder-hero-editorial.svg",
    alt: "Chân dung nữ với góc nghiêng mềm mại và tổng thể chỉn chu",
    accent: "Ưu tiên kết quả hài hòa",
  },
];

export const trustHighlights = [
  "Tư vấn kỹ trước khi làm",
  "Dáng tự nhiên, hợp mặt",
  "Theo dõi sau dịch vụ",
] as const;

export const services: ServiceItem[] = [
  {
    title: "Phun xăm chân mày",
    description: "Dáng mày mềm, tự nhiên, cân với gương mặt.",
    image: "/images/placeholder-service-soft.svg",
    alt: "Khách nữ với dáng mày mềm và gương mặt sáng",
  },
  {
    title: "Phun môi",
    description: "Màu môi tươi hơn, xử lý nền môi nhợt hoặc thâm nhẹ.",
    image: "/images/placeholder-service-soft.svg",
    alt: "Khách nữ với đôi môi tự nhiên và lớp nền nhẹ nhàng",
  },
  {
    title: "Filler",
    description: "Tạo điểm nhấn vừa đủ cho môi, cằm hoặc vùng cần cân chỉnh.",
    image: "/images/placeholder-service-soft.svg",
    alt: "Chân dung nữ với tổng thể gương mặt cân đối",
  },
  {
    title: "Botox / Gọn hàm",
    description: "Hỗ trợ gương mặt thon gọn hơn theo hướng tự nhiên.",
    image: "/images/placeholder-service-soft.svg",
    alt: "Người mẫu nữ với gương mặt thanh thoát trong nền sáng",
  },
  {
    title: "Meso căng bóng",
    description: "Cấp ẩm, phục hồi độ mịn và độ căng bóng nhẹ cho da.",
    image: "/images/placeholder-clinic-soft.svg",
    alt: "Khách nữ với làn da căng mịn và ánh sáng mềm",
  },
  {
    title: "Chăm sóc da mụn",
    description: "Lấy nhân mụn, làm sạch, phục hồi da theo tình trạng.",
    image: "/images/placeholder-clinic-soft.svg",
    alt: "Khách nữ với làn da được chăm sóc theo hướng sạch và tối giản",
  },
];

export const offers: OfferItem[] = [
  {
    title: "Combo phun môi + tư vấn nền môi",
    detail: "Phù hợp khi bạn chưa rõ màu nào hợp với nền môi thật.",
  },
  {
    title: "Meso cấp ẩm cho da thiếu nước",
    detail: "Tư vấn theo nền da, không làm đại trà.",
  },
  {
    title: "Botox gọn hàm / xóa nhăn tư vấn riêng",
    detail: "Ưu tiên độ hài hòa và kết quả vừa đủ.",
  },
  {
    title: "Chăm sóc da mụn theo buổi",
    detail: "Theo dõi từng giai đoạn và điều chỉnh nhẹ nhàng.",
  },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    title: "Cân chỉnh môi - giữ form tự nhiên",
    description: "Ưu tiên sự mềm mại thay vì làm môi đầy quá tay.",
    image: "/images/placeholder-after.svg",
    alt: "Khách nữ sau khi cân chỉnh môi theo hướng tự nhiên",
  },
  {
    title: "Phun môi xử lý nền nhợt",
    description: "Làm tươi sắc môi nhưng vẫn giữ cảm giác mềm và thật.",
    image: "/images/placeholder-after.svg",
    alt: "Khách nữ với sắc môi tươi hơn sau khi xử lý nền môi",
  },
  {
    title: "Dáng mày mềm, không quá sắc",
    description: "Thiết kế dáng mày theo tỉ lệ gương mặt và thần thái riêng.",
    image: "/images/placeholder-after.svg",
    alt: "Khách nữ với dáng mày mềm và tổng thể gương mặt hài hòa",
  },
  {
    title: "Da sau chăm sóc phục hồi",
    description: "Ưu tiên làm sạch, phục hồi độ mịn và cảm giác thoáng da.",
    image: "/images/placeholder-after.svg",
    alt: "Khách nữ với làn da sáng và mịn hơn sau khi chăm sóc",
  },
];

export const blogPosts: BlogPost[] = [
  {
    category: "Phun môi",
    title: "Sau phun môi: dấu hiệu nào bình thường, dấu hiệu nào cần kiểm tra?",
    excerpt:
      "Những thay đổi thường gặp trong vài ngày đầu và khi nào nên nhắn Uyn để được xem lại.",
    image: "/images/placeholder-blog-soft.svg",
    alt: "Khách nữ ngồi cạnh sản phẩm chăm sóc và đồ dùng beauty",
  },
  {
    category: "Filler / Botox",
    title: "Botox gọn hàm bao lâu thấy hiệu quả?",
    excerpt:
      "Hiểu đúng mốc thời gian, cảm giác sau làm và vì sao mỗi người có thể khác nhau.",
    image: "/images/placeholder-blog-soft.svg",
    alt: "Chân dung nữ với thần thái nhẹ nhàng trong ánh sáng tự nhiên",
  },
  {
    category: "Chăm sóc da",
    title: "Meso căng bóng có phù hợp với da mụn không?",
    excerpt:
      "Không phải làn da nào cũng nên làm ngay. Điều quan trọng là xem nền da hiện tại cần gì trước.",
    image: "/images/placeholder-blog-soft.svg",
    alt: "Khách nữ với góc nghiêng mềm, phù hợp ngữ cảnh bài viết skincare",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Phun môi bao lâu thì bong?",
    answer:
      "Thường môi sẽ bong dần trong vài ngày đầu, nhưng nhanh hay chậm còn tùy nền môi và cách chăm sóc sau làm. Uyn sẽ hướng dẫn kỹ để bạn theo dõi dễ hơn.",
  },
  {
    question: "Phun mày có cần dặm lại không?",
    answer:
      "Nhiều trường hợp vẫn nên dặm để dáng và màu ổn định hơn. Thời điểm dặm sẽ được tư vấn theo nền da và cách mày lên màu thực tế.",
  },
  {
    question: "Filler/Botox có cần tư vấn trước không?",
    answer:
      "Có. Uyn luôn ưu tiên xem cấu trúc gương mặt, nhu cầu thật và mức độ phù hợp trước khi quyết định có nên làm hay chưa.",
  },
  {
    question: "Meso xong da đỏ có bình thường không?",
    answer:
      "Da có thể đỏ nhẹ sau làm tùy nền da. Mức độ đỏ và thời gian dịu lại khác nhau ở mỗi người, nên phần chăm sóc sau đó rất quan trọng.",
  },
  {
    question: "Có thể gửi hình để tư vấn trước không?",
    answer:
      "Có thể. Bạn có thể gửi hình mặt, môi, mày hoặc tình trạng da hiện tại để Uyn nhìn sơ bộ và tư vấn trước khi đặt lịch.",
  },
  {
    question: "Làm dịch vụ xong cần chăm sóc thế nào?",
    answer:
      "Mỗi dịch vụ sẽ có hướng dẫn riêng. Điểm chung là giữ vệ sinh đúng cách, tránh tác động mạnh và theo dõi phản ứng của da hoặc vùng làm trong những ngày đầu.",
  },
];

export const processSteps = [
  "Gửi tình trạng / đặt lịch",
  "Tư vấn trước khi làm",
  "Kiểm tra nền môi / da / dáng mày / gương mặt",
  "Thực hiện dịch vụ",
  "Hướng dẫn chăm sóc & theo dõi sau làm",
] as const;
