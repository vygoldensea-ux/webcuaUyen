export type NavItem = {
  label: string;
  href: string;
};

export type BulletItem = {
  title: string;
  detail: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceSeed = {
  slug: string;
  groupSlug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  shortDescription: string;
  heroSubtitle: string;
  heroImage: string;
  locationLabel?: string;
  overviewAngle: string;
  concernContext: string;
  naturalDirection: string;
  suitableFor: BulletItem[];
  needConsult: string[];
  advisoryPoints: string[];
  processSteps: ProcessStep[];
  expectedResults: string[];
  aftercareChecklist: string[];
  pricingFactors: string[];
  faqQuestions: string[];
  priceFrom: string;
  priceNote: string;
  relatedServiceSlugs: string[];
};

export type ServiceRecord = ServiceSeed & {
  heroTitle: string;
  overviewParagraphs: string[];
  reasonsParagraphs: string[];
  suitableParagraphs: string[];
  consultParagraphs: string[];
  advisoryParagraphs: string[];
  expectedParagraphs: string[];
  aftercareParagraphs: string[];
  pricingParagraphs: string[];
  beforeAfterParagraphs: string[];
  ctaParagraphs: string[];
  faqs: FaqItem[];
};

export type ServiceGroupRecord = {
  slug: string;
  title: string;
  menuTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  description: string;
  overviewParagraphs: string[];
  suitableParagraphs: string[];
  suitableFor: BulletItem[];
  processParagraphs: string[];
  processSteps: ProcessStep[];
  pricingParagraphs: string[];
  faqs: FaqItem[];
};

export type PricingItem = {
  category: string;
  serviceName: string;
  priceFrom: string;
  description: string;
  slug?: string;
};

export type BeforeAfterItem = {
  slug: string;
  category: string;
  service: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  note: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  checklist?: string[];
  note?: string;
};

export type BlogPostRecord = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  image: string;
  tags: string[];
  introParagraphs: string[];
  sections: ArticleSection[];
  faqs: FaqItem[];
  relatedPosts: string[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Khách hàng thực tế", href: "/before-after" },
  { label: "Blog", href: "/blog" },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Liên hệ", href: "/lien-he" },
];

const groupSeeds: ServiceGroupRecord[] = [
  {
    slug: "phun-xam-tham-my",
    title: "Phun xăm thẩm mỹ tại Vũng Tàu",
    menuTitle: "Phun xăm thẩm mỹ",
    heroTitle: "Phun xăm thẩm mỹ tại Vũng Tàu",
    heroSubtitle:
      "Dáng mày, màu môi và đường nét nên hợp với gương mặt thật — không quá sắc, không quá đậm, không chạy theo trend nếu không phù hợp.",
    image: "/images/placeholder-service-soft.svg",
    description:
      "Nhóm dịch vụ dành cho khách muốn gương mặt tươi hơn, gọn gàng hơn nhưng vẫn giữ cảm giác mềm và tự nhiên.",
    overviewParagraphs: [
      "Ở Chòi của Uyn, phun xăm thẩm mỹ không được xem như một bước thay đổi quá mạnh gương mặt. Mục tiêu của nhóm dịch vụ này là làm cho môi, mày và các đường nét nhìn chỉn chu hơn, tươi hơn, dễ chăm hơn mỗi ngày, nhưng vẫn giữ cảm giác rất là mình khi nhìn gần. Chính vì vậy, việc tư vấn luôn bắt đầu bằng chuyện xem nền môi thật, dáng mày thật, tông da và thói quen makeup hằng ngày của khách trước khi nói về màu hoặc dáng.",
      "Nhiều khách đến mini spa với tâm lý vừa muốn đẹp hơn, vừa sợ làm xong nhìn cứng hoặc bị quá tay. Đây cũng là lý do Uyn đi theo hướng làm đẹp vừa đủ. Nếu một màu môi không hợp nền môi hiện tại, hoặc một dáng mày đang thịnh hành nhưng không hợp khung mặt, Uyn sẽ nói rõ để khách cân nhắc thay vì cố ép vào một kiểu chung cho tất cả mọi người. Cách làm này chậm hơn, nhưng tạo cảm giác tin và nhẹ đầu hơn cho khách trước khi quyết định.",
      "Nhóm dịch vụ phun xăm tại đây bao gồm phun xăm chân mày, phun môi, khử thâm môi, sửa chân mày cũ và dặm lại môi hoặc mày. Mỗi dịch vụ có mục tiêu khác nhau, nhưng đều chung một nguyên tắc: làm theo tình trạng thật, theo mức độ xử lý phù hợp và có hướng dẫn chăm sóc sau làm để khách biết giai đoạn nào là bình thường, giai đoạn nào nên nhắn lại để được xem kỹ hơn.",
    ],
    suitableParagraphs: [
      "Nhóm phun xăm thẩm mỹ thường phù hợp với những khách muốn tối giản thời gian makeup nhưng vẫn muốn gương mặt có điểm nhấn vừa phải. Có người thấy môi mình nhợt, có người thấy mày thưa hoặc lệch nhẹ, cũng có người từng làm cũ nhưng nay không còn hợp gương mặt hiện tại nữa. Không phải ai đến tư vấn cũng cần làm ngay, nhưng việc được nhìn và phân tích đúng tình trạng thật sẽ giúp khách chọn phương án nhẹ nhàng và ít rủi ro hơn.",
      "Điểm quan trọng là nhóm dịch vụ này không nên được chọn chỉ vì thấy người khác làm đẹp. Một dáng mày đẹp trên người này chưa chắc đẹp trên người khác. Một màu môi hợp tone da này cũng có thể không hợp nền môi kia. Bởi vậy, phần phù hợp hay không phù hợp luôn được đặt trước phần chốt dịch vụ.",
    ],
    suitableFor: [
      {
        title: "Khách muốn gương mặt gọn gàng hơn mỗi ngày",
        detail:
          "Những người không muốn makeup nhiều nhưng vẫn muốn nhìn tươi và chỉn chu hơn khi ra ngoài hoặc đi làm.",
      },
      {
        title: "Khách có nền môi nhợt, thâm nhẹ hoặc viền môi chưa rõ",
        detail:
          "Phun môi hoặc khử thâm có thể được cân nhắc nếu tình trạng nền môi thật phù hợp sau khi xem trực tiếp.",
      },
      {
        title: "Khách có chân mày thưa, dáng chưa cân hoặc mày cũ không còn hợp",
        detail:
          "Phun mày, sửa mày cũ hoặc dặm lại có thể giúp tổng thể nhìn gọn hơn mà không cần kẻ mỗi ngày.",
      },
    ],
    processParagraphs: [
      "Quy trình chung của nhóm phun xăm không dừng ở lúc thực hiện. Uyn thường dành thời gian khá kỹ ở phần đầu để xem nền, nghe mong muốn, chốt mức độ thay đổi mà khách thấy thoải mái, rồi mới vào phần chuẩn bị và thực hiện. Điều này giúp hạn chế chuyện làm xong mới thấy màu quá đậm hoặc dáng không hợp kỳ vọng ban đầu.",
      "Sau khi làm, khách sẽ được dặn cách vệ sinh, cách theo dõi giai đoạn bong hoặc ổn định màu, cùng với những mốc nên nhắn lại nếu có điều gì khiến khách thấy chưa yên tâm. Việc theo dõi sau dịch vụ là một phần rất quan trọng trong nhóm phun xăm, vì nhiều lo lắng của khách thường nằm ở giai đoạn vài ngày đầu chứ không phải ở lúc vừa làm xong.",
    ],
    processSteps: [
      {
        title: "Gửi hình hoặc mô tả tình trạng",
        description:
          "Khách có thể nhắn trước để Uyn nhìn sơ bộ nền môi, dáng mày hoặc tình trạng cũ trước khi hẹn lịch.",
      },
      {
        title: "Tư vấn trực tiếp",
        description:
          "Xem tone da, nền thật, thói quen sinh hoạt và mong muốn để xác định hướng làm phù hợp, vừa đủ.",
      },
      {
        title: "Chốt màu hoặc dáng",
        description:
          "Không chọn theo trend một cách máy móc mà cân với gương mặt, sắc tố nền và gu thẩm mỹ của khách.",
      },
      {
        title: "Chuẩn bị và thực hiện",
        description:
          "Làm sạch vùng thực hiện, chuẩn bị kỹ càng rồi tiến hành theo đúng phương án đã tư vấn.",
      },
      {
        title: "Hướng dẫn chăm sóc",
        description:
          "Khách được dặn kỹ chuyện theo dõi màu, vệ sinh và các điều nên hạn chế trong giai đoạn đầu.",
      },
      {
        title: "Theo dõi sau làm",
        description:
          "Có thể nhắn lại khi cần kiểm tra thêm để không phải đoán một mình trong giai đoạn ổn định màu hoặc dáng.",
      },
    ],
    pricingParagraphs: [
      "Giá trong nhóm phun xăm phụ thuộc vào tình trạng nền thật và mức độ xử lý. Ví dụ, nền môi thâm hoặc chân mày cũ cần sửa có thể cần xem kỹ hơn so với trường hợp nền tương đối thuận lợi. Vì vậy, bảng giá thường được để theo dạng “từ” hoặc “tư vấn theo tình trạng” thay vì một con số cứng cho tất cả.",
      "Nếu khách đang phân vân giữa làm một dịch vụ riêng lẻ hay đi theo combo môi và mày, Uyn sẽ tư vấn dựa trên nhu cầu thật và mức độ cần thiết. Không phải lúc nào combo cũng là lựa chọn nên chốt ngay. Có khách chỉ cần xử lý một điểm trước, rồi theo dõi cảm giác của mình sau khi làm.",
    ],
    faqs: [
      {
        question: "Có cần đặt lịch trước khi làm phun xăm không?",
        answer:
          "Nên đặt lịch trước để Uyn có thời gian xem tình trạng, tư vấn kỹ và chuẩn bị lịch phù hợp. Với nhóm dịch vụ cần chọn màu hoặc chỉnh dáng như phun môi, phun mày hay sửa mày cũ, phần tư vấn đầu vào khá quan trọng nên hẹn trước sẽ giúp buổi làm nhẹ nhàng hơn nhiều so với ghé đột xuất.",
      },
      {
        question: "Nếu chưa biết mình hợp màu môi hoặc dáng mày nào thì sao?",
        answer:
          "Bạn không cần tự chọn trước. Việc chọn màu và dáng nên dựa trên nền thật, tone da, tổng thể gương mặt và gu cá nhân. Uyn thường xem khá kỹ phần này rồi mới gợi ý một vài phương án vừa phải, để khách nhìn ra hướng nào hợp với mình hơn thay vì ép chốt theo mẫu có sẵn.",
      },
      {
        question: "Làm xong có được hướng dẫn chăm sóc kỹ không?",
        answer:
          "Có. Đây là phần gần như bắt buộc vì khách dễ lo nhất ở giai đoạn sau làm. Bạn sẽ được dặn cách vệ sinh, theo dõi màu hoặc giai đoạn bong, cùng với những lưu ý cơ bản để hạn chế việc tự chăm sai khiến kết quả bị ảnh hưởng. Nếu có gì khiến bạn không yên tâm, hoàn toàn có thể nhắn lại để được xem thêm.",
      },
      {
        question: "Phun xăm thẩm mỹ có phải lúc nào cũng cần dặm lại không?",
        answer:
          "Không phải trường hợp nào cũng giống nhau, nhưng nhiều dịch vụ vẫn có thể cần dặm để màu hoặc dáng ổn định đẹp hơn. Việc dặm hay không, và lúc nào nên dặm, còn phụ thuộc vào nền môi, nền da, cách lên màu và chăm sóc sau làm. Phần này thường chỉ có thể nói rõ hơn sau khi đã xem thực tế hoặc theo dõi giai đoạn đầu.",
      },
      {
        question: "Nếu đã từng làm cũ rồi thì có sửa được không?",
        answer:
          "Nhiều trường hợp có thể xử lý được, nhưng cần xem kỹ mức độ trổ màu, lệch dáng hoặc độ đậm hiện tại trước khi tư vấn. Uyn thường không trả lời quá nhanh ở phần này vì mày cũ hoặc môi cũ mỗi người rất khác nhau. Có ca chỉ cần chỉnh nhẹ, nhưng cũng có ca cần đi từng bước để kết quả nhìn tự nhiên hơn.",
      },
      {
        question: "Kết quả có giống hoàn toàn ảnh tham khảo không?",
        answer:
          "Không nên kỳ vọng giống hoàn toàn ảnh mẫu, vì nền môi, sắc tố, dáng mày và tốc độ ổn định ở mỗi người khác nhau. Ảnh tham khảo chỉ giúp hình dung phong cách hoặc mức độ tự nhiên mong muốn. Kết quả thực tế vẫn cần đi theo nền thật của bạn để nhìn hài hòa và bền cảm giác hơn trong sinh hoạt hằng ngày.",
      },
    ],
  },
  {
    slug: "filler-botox-vung-tau",
    title: "Filler / Botox / Gọn hàm tại Vũng Tàu",
    menuTitle: "Filler / Botox / Gọn hàm",
    heroTitle: "Filler / Botox / Gọn hàm tại Vũng Tàu",
    heroSubtitle:
      "Ưu tiên gương mặt hài hòa, mềm và tự nhiên. Không làm quá tay chỉ để chạy theo một gương mặt đang thịnh hành.",
    image: "/images/placeholder-hero-editorial.svg",
    description:
      "Nhóm dịch vụ tập trung vào chuyện cân chỉnh điểm nhỏ trên gương mặt theo hướng vừa phải và có tư vấn kỹ trước khi làm.",
    overviewParagraphs: [
      "Nhóm filler và botox thường được khách tìm đến khi muốn chỉnh một điểm nhỏ trên gương mặt nhưng chưa sẵn sàng cho những thay đổi quá lớn. Có người muốn môi đầy hơn một chút, có người thấy cằm hơi ngắn, có người lại muốn vùng hàm nhìn gọn hơn hoặc muốn nếp nhăn động trông mềm đi. Dù lý do là gì, điều quan trọng vẫn là xem đúng nguyên nhân thật rồi mới quyết định có nên làm, làm ở mức nào và có nên làm ngay hay chưa.",
      "Ở Chòi của Uyn, nhóm dịch vụ này được tư vấn theo hướng giữ nét tự nhiên. Nếu một khách có khuôn mặt đã mềm sẵn, việc làm thêm quá tay có thể khiến tổng thể mất cân đối. Nếu mặt to do xương hoặc mô mỡ chứ không phải do cơ hàm, botox gọn hàm cũng không phải câu trả lời chính. Nói cách khác, không phải cứ thích là nên làm. Cần hiểu đúng tình trạng của mình để tránh làm xong mà không giống điều mình thực sự cần.",
      "Nhóm này bao gồm filler môi, filler cằm, filler rãnh cười, filler má baby, botox gọn hàm, botox xóa nhăn và các phương án thon gọn vùng mặt theo mức độ phù hợp. Điểm chung là trước khi nói về hiệu quả, Uyn sẽ ưu tiên nói về tính phù hợp và mức độ vừa đủ. Điều đó nghe có vẻ chậm hơn, nhưng lại giúp khách đỡ áp lực phải “đẹp ngay” theo một khuôn chung.",
    ],
    suitableParagraphs: [
      "Nhóm filler và botox thường phù hợp với khách muốn chỉnh điểm nhỏ, thay đổi nhẹ nhưng nhìn gọn và hài hòa hơn. Đây không phải nhóm dịch vụ nên quyết định theo cảm hứng, vì mỗi vùng trên gương mặt có vai trò rất khác nhau về tỉ lệ và cảm giác tổng thể. Khi tư vấn, Uyn thường hỏi kỹ chuyện khách muốn thay đổi điều gì nhất và muốn giữ điều gì nhất để cân đối phương án.",
      "Nếu bạn chỉ muốn gương mặt đỡ mệt, môi đỡ mỏng, cằm nhìn cân hơn hoặc vùng hàm gọn nhẹ hơn, nhóm này có thể là một lựa chọn đáng cân nhắc. Nhưng nếu bạn đang kỳ vọng một thay đổi lớn hoặc muốn kết quả y hệt ảnh mẫu trên mạng, thì cần nói chuyện kỹ hơn trước khi quyết định.",
    ],
    suitableFor: [
      {
        title: "Khách muốn chỉnh điểm nhỏ thay vì thay đổi cả gương mặt",
        detail:
          "Phù hợp với người thích sự khác biệt nhẹ, đủ để gương mặt mềm và cân hơn chứ không muốn nhìn quá khác.",
      },
      {
        title: "Khách có cấu trúc gương mặt phù hợp với filler hoặc botox",
        detail:
          "Phần phù hợp này cần được xem trực tiếp để tránh chọn sai dịch vụ so với nguyên nhân thật của vấn đề.",
      },
      {
        title: "Khách ưu tiên sự hài hòa hơn là xu hướng",
        detail:
          "Những người muốn kết quả nhìn tự nhiên trong đời sống hằng ngày thường hợp với cách tư vấn vừa đủ của Uyn.",
      },
    ],
    processParagraphs: [
      "Quy trình chung của nhóm filler và botox thường bắt đầu bằng chuyện phân tích vùng khách muốn cải thiện. Uyn sẽ xem tổng thể gương mặt, tỉ lệ, độ đầy hiện tại, cơ hàm hay nếp nhăn động để nhận ra điều khách nghĩ là “vấn đề” có thật sự nên xử lý bằng dịch vụ đó hay không. Bước này rất quan trọng vì nếu chọn sai lý do, hiệu quả sẽ không đi đúng kỳ vọng.",
      "Sau khi thực hiện, khách vẫn cần được dặn về phản ứng thường gặp, mốc ổn định, thời điểm nên theo dõi thêm và những điều nên tránh trong giai đoạn đầu. Cách theo dõi sau làm giúp khách bớt hoảng vì hiểu điều gì là bình thường, điều gì cần nhắn lại để kiểm tra kỹ hơn.",
    ],
    processSteps: [
      {
        title: "Trao đổi mong muốn thật",
        description:
          "Không chỉ hỏi muốn làm gì mà còn hỏi muốn thay đổi ở mức nào và không muốn gương mặt bị biến đổi ra sao.",
      },
      {
        title: "Phân tích gương mặt",
        description:
          "Xem tỉ lệ, độ đầy, đường nét và nguyên nhân thật của vấn đề trước khi chọn phương án can thiệp phù hợp.",
      },
      {
        title: "Tư vấn phương án vừa đủ",
        description:
          "Có trường hợp nên làm, có trường hợp nên chờ, và cũng có trường hợp nên chọn dịch vụ khác để đúng mục tiêu hơn.",
      },
      {
        title: "Chuẩn bị trước khi thực hiện",
        description:
          "Làm sạch, kiểm tra lại vùng cần xử lý và nhắc lại điều khách cần biết trước khi bắt đầu.",
      },
      {
        title: "Thực hiện theo vùng",
        description:
          "Đi từng bước, theo sát định hướng đã thống nhất để giữ cảm giác hài hòa và không quá tay.",
      },
      {
        title: "Dặn chăm sóc và theo dõi",
        description:
          "Khách được giải thích mốc ổn định, phản ứng thường gặp và thời điểm nên nhắn lại nếu có điều gì khiến mình chưa yên tâm.",
      },
    ],
    pricingParagraphs: [
      "Giá của nhóm filler và botox không nên đọc như một bảng số cố định cho mọi người. Chi phí thường phụ thuộc vào vùng thực hiện, lượng sản phẩm, mức độ cần cân chỉnh và mục tiêu thật sự của khách. Có khách chỉ cần nhẹ, có khách lại cần xem kỹ hơn để tránh làm quá nhiều mà không cần thiết.",
      "Với các dịch vụ thuộc nhóm này, Uyn thường khuyên khách đừng chốt chỉ theo giá rẻ. Điều đáng quan tâm hơn là phương án có đúng với vấn đề thật hay không, mức độ xử lý có hợp với gương mặt hay không, và sau khi làm khách có thấy vẫn là mình không. Đây mới là phần quyết định sự hài lòng lâu dài.",
    ],
    faqs: [
      {
        question: "Có phải ai muốn mặt gọn hơn cũng nên botox gọn hàm không?",
        answer:
          "Không hẳn. Nếu mặt to chủ yếu do cấu trúc xương, mô mỡ hoặc độ chùng của da, botox gọn hàm có thể không phải lựa chọn chính. Phần quan trọng là phải nhìn đúng nguyên nhân trước. Uyn thường tư vấn kỹ chỗ này để khách không kỳ vọng sai ngay từ đầu rồi thất vọng vì kết quả không đi đúng điều mình mong muốn.",
      },
      {
        question: "Filler và botox có làm gương mặt bị đơ hoặc quá tay không?",
        answer:
          "Điều khách lo nhất thường là nhìn khác mình hoặc bị cứng. Chính vì vậy, hướng làm ở Chòi của Uyn là ưu tiên mức độ vừa đủ. Không phải lúc nào làm nhiều hơn cũng đẹp hơn. Khi tư vấn, Uyn thường nói rõ phần nào nên chỉnh nhẹ, phần nào nên giữ lại để tổng thể vẫn mềm và tự nhiên trong sinh hoạt hằng ngày.",
      },
      {
        question: "Có thể chỉ đến để tư vấn trước mà chưa quyết định làm không?",
        answer:
          "Hoàn toàn được. Với nhóm dịch vụ này, việc dành thời gian tư vấn trước rất có giá trị vì nó giúp bạn hiểu vấn đề thật của mình, hiểu dịch vụ nào phù hợp và dịch vụ nào không cần vội. Có những khách chỉ cần được giải thích rõ là đã nhẹ đầu hơn rất nhiều, thay vì phải chốt nhanh một phương án chưa chắc hợp.",
      },
      {
        question: "Sau khi làm có được hướng dẫn theo dõi không?",
        answer:
          "Có. Phần sau làm luôn cần được dặn kỹ để khách biết đâu là phản ứng thường gặp, khi nào vùng làm ổn định hơn và khi nào nên nhắn lại để được kiểm tra thêm. Cảm giác an tâm không đến từ việc không có phản ứng gì, mà đến từ việc bạn hiểu rõ cơ thể mình đang ở giai đoạn nào và nên chăm sóc ra sao.",
      },
      {
        question: "Nếu không phù hợp thì Uyn có nói thẳng không?",
        answer:
          "Có. Một trong những điều Uyn giữ khá rõ là không ép dịch vụ khi chưa phù hợp. Có khách đến vì nghĩ mình cần filler, nhưng sau khi xem lại thì chỉ cần thay đổi thói quen chăm sóc hoặc chọn phương án khác nhẹ hơn. Tư vấn đúng đôi khi đồng nghĩa với việc chưa cần làm ngay, và điều đó hoàn toàn bình thường.",
      },
      {
        question: "Kết quả có giống hoàn toàn ảnh tham khảo không?",
        answer:
          "Không nên lấy ảnh tham khảo làm chuẩn tuyệt đối. Ảnh chỉ giúp nhìn ra phong cách hoặc mức độ tự nhiên mong muốn. Cấu trúc gương mặt, độ đầy từng vùng, cơ địa và phản ứng sau làm ở mỗi người đều khác nhau. Mục tiêu hợp lý hơn là kết quả hài hòa với gương mặt thật của bạn, chứ không phải cố trở thành một khuôn mặt khác.",
      },
    ],
  },
  {
    slug: "cham-soc-da-vung-tau",
    title: "Chăm sóc da / Meso tại Vũng Tàu",
    menuTitle: "Chăm sóc da / Meso",
    heroTitle: "Chăm sóc da / Meso tại Vũng Tàu",
    heroSubtitle:
      "Từ da thiếu ẩm, da xỉn, da mụn đến nền da yếu — mỗi dịch vụ đều đi theo tình trạng thật thay vì một liệu trình đại trà.",
    image: "/images/placeholder-clinic-soft.svg",
    description:
      "Nhóm dịch vụ skincare dành cho khách muốn làn da được nhìn đúng vấn đề trước khi chọn treatment, meso hay phục hồi.",
    overviewParagraphs: [
      "Chăm sóc da là nhóm dịch vụ mà rất nhiều khách đến với tâm lý đã thử khá nhiều thứ ở nhà nhưng vẫn không biết da mình đang thật sự cần gì. Có người thấy da xỉn, có người cảm giác da thiếu ẩm nhưng lại dễ nổi mụn, có người da đang yếu sau một giai đoạn treatment sai cách. Nếu chỉ nhìn bề mặt và chọn đại một liệu trình đang hot, khả năng cao làn da sẽ tiếp tục bị quá tải.",
      "Ở Chòi của Uyn, nhóm chăm sóc da và meso được tư vấn theo hướng nhìn tình trạng thật của da trước. Da đang thiếu nước, bít tắc, nhạy cảm, dễ đỏ hay viêm nhẹ sẽ cần cách tiếp cận khác nhau. Có trường hợp nên phục hồi trước rồi mới tính đến meso. Có trường hợp chỉ cần làm sạch, lấy nhân mụn đúng cách và xây lại nhịp chăm da hợp lý. Nói cách khác, không phải cứ da xấu là phải treatment mạnh.",
      "Nhóm dịch vụ này bao gồm meso căng bóng cấp ẩm, meso phục hồi da, chăm sóc da mụn, lấy nhân mụn, phục hồi da yếu, peel da nhẹ và treatment da xỉn màu. Mỗi dịch vụ được đặt trong một bối cảnh rõ ràng để khách hiểu mình đang làm gì, vì sao làm bước đó trước, và sau khi làm cần theo dõi điều gì để kết quả đi đúng hướng.",
    ],
    suitableParagraphs: [
      "Khách thường phù hợp với nhóm chăm sóc da và meso khi có nhu cầu cải thiện bề mặt da, độ ẩm, độ mịn hoặc tình trạng bít tắc theo hướng có theo dõi. Những người từng thấy da mình không quá nặng nhưng cứ “lúc tốt lúc xấu”, skincare tại nhà mãi không vào guồng, cũng thường cần một buổi tư vấn để xác định lại nền da trước khi chọn liệu trình.",
      "Với Uyn, việc hiểu da đang yếu ở đâu và chịu được đến mức nào quan trọng hơn chuyện phải làm dịch vụ nào cho sang. Chọn đúng nhịp chăm da sẽ bền hơn nhiều so với cố thúc da đi nhanh hơn khả năng hồi phục thật của nó.",
    ],
    suitableFor: [
      {
        title: "Khách có da thiếu ẩm, xỉn màu hoặc kém mịn",
        detail:
          "Những trường hợp da không đều bề mặt, nhìn mệt và thiếu sức sống thường cần được xem lại nền da trước khi chọn meso hay treatment.",
      },
      {
        title: "Khách có da mụn, bít tắc hoặc cần làm sạch đúng cách",
        detail:
          "Lấy nhân mụn, chăm sóc da mụn và điều chỉnh nhịp làm sạch có thể hữu ích hơn việc tự nặn hoặc treatment quá mạnh.",
      },
      {
        title: "Khách có nền da yếu hoặc dễ kích ứng",
        detail:
          "Da yếu không nên bị đẩy nhanh chỉ vì muốn thấy thay đổi sớm. Phục hồi trước thường là bước cần thiết hơn.",
      },
    ],
    processParagraphs: [
      "Quy trình của nhóm chăm sóc da thường bắt đầu bằng việc nhìn kỹ nền da, hỏi thói quen chăm ở nhà, xem da đang chịu được gì và đang phản ứng ra sao. Nếu da còn yếu, Uyn sẽ ưu tiên các bước phục hồi trước thay vì đẩy nhanh bằng những can thiệp không phù hợp. Đây là điểm giúp khách yên tâm hơn, nhất là những người từng treatment sai nên khá sợ làm tiếp.",
      "Sau buổi làm, phần hướng dẫn chăm sóc ở nhà rất quan trọng. Nhiều kết quả không chỉ nằm ở một buổi dịch vụ, mà ở cách khách duy trì giữa các buổi. Vì vậy, Uyn thường nói rõ chuyện chống nắng, vệ sinh, giữ ẩm, nhịp treatment và thời điểm nên quay lại theo dõi để tránh da bị quá tải hoặc chậm hồi phục.",
    ],
    processSteps: [
      {
        title: "Xem nền da và trao đổi thói quen",
        description:
          "Hỏi kỹ tình trạng da hiện tại, sản phẩm đang dùng và giai đoạn gần đây da phản ứng như thế nào.",
      },
      {
        title: "Phân tích vấn đề chính",
        description:
          "Xác định da đang thiếu ẩm, bít tắc, nhạy cảm hay xỉn màu để không chọn sai hướng chăm sóc.",
      },
      {
        title: "Chọn dịch vụ phù hợp",
        description:
          "Có trường hợp nên phục hồi trước, có trường hợp phù hợp meso, và cũng có trường hợp chỉ cần làm sạch đúng nhịp.",
      },
      {
        title: "Làm sạch và chuẩn bị da",
        description:
          "Da được chuẩn bị theo đúng mục tiêu của buổi làm để hạn chế cảm giác quá tải không cần thiết.",
      },
      {
        title: "Thực hiện theo tình trạng",
        description:
          "Đi từng bước đúng với nền da hiện tại thay vì áp một quy trình giống nhau cho mọi khách.",
      },
      {
        title: "Dặn chăm sóc sau buổi",
        description:
          "Giải thích rõ phản ứng thường gặp, chuyện chống nắng, dưỡng phục hồi và thời điểm nên quay lại kiểm tra.",
      },
    ],
    pricingParagraphs: [
      "Giá của nhóm chăm sóc da và meso thường phụ thuộc vào loại dịch vụ, số buổi, nền da và mức độ cần xử lý. Ví dụ, một buổi meso cấp ẩm khác với một liệu trình da yếu cần hồi phục từng bước. Vì vậy, bảng giá nên được hiểu như mốc tham khảo ban đầu chứ không phải lời chốt cứng cho mọi trường hợp.",
      "Nếu khách chưa biết mình nên đi theo buổi lẻ hay liệu trình, Uyn thường tư vấn khá thẳng. Có người chỉ cần làm một bước đúng để da ổn hơn, nhưng cũng có người cần theo dõi vài buổi để kết quả bền hơn. Chọn vừa đủ luôn tốt hơn chạy theo cảm giác phải làm thật nhiều ngay từ đầu.",
    ],
    faqs: [
      {
        question: "Da yếu hoặc dễ kích ứng có làm dịch vụ được không?",
        answer:
          "Có thể, nhưng cần xem kỹ trước để chọn đúng nhịp. Không phải da yếu là không làm gì được, nhưng cũng không nên đẩy da quá nhanh. Với những nền da nhạy cảm, phần tư vấn và đánh giá hiện trạng rất quan trọng để biết nên phục hồi trước, làm sạch nhẹ, hay tạm thời tránh một số bước cho đến khi da ổn hơn.",
      },
      {
        question: "Da mụn có nên làm meso ngay không?",
        answer:
          "Không phải lúc nào cũng nên. Có nền da mụn vẫn có thể cân nhắc, nhưng cũng có trường hợp nên xử lý bít tắc, viêm nhẹ hoặc phục hồi hàng rào da trước. Điều quan trọng là hiểu da đang ở giai đoạn nào. Uyn thường không trả lời kiểu một câu cho tất cả, vì cùng là da mụn nhưng mức độ và nền da mỗi người khác nhau nhiều.",
      },
      {
        question: "Lấy nhân mụn có phải ai cũng nên làm định kỳ không?",
        answer:
          "Không nhất thiết theo đúng một mốc cố định cho mọi người. Tần suất phù hợp phụ thuộc vào mức độ bít tắc, tình trạng mụn và cách bạn chăm da ở nhà giữa các buổi. Có người cần theo dõi sát hơn trong giai đoạn đầu, nhưng có người chỉ cần làm đúng lúc và điều chỉnh routine là đã ổn hơn khá nhiều.",
      },
      {
        question: "Sau buổi làm có được hướng dẫn chăm sóc ở nhà không?",
        answer:
          "Có. Đây là phần rất quan trọng vì da sau dịch vụ thường cần được chăm đúng nhịp để hồi phục ổn. Uyn sẽ nói rõ điều nên ưu tiên, điều nên tạm giảm, chuyện chống nắng, giữ ẩm và cách quan sát phản ứng của da trong vài ngày đầu. Nhờ vậy, khách đỡ phải tự đoán và cũng ít hoảng hơn nếu có đỏ nhẹ hoặc khô nhẹ sau làm.",
      },
      {
        question: "Có thể kết hợp nhiều dịch vụ da trong một giai đoạn không?",
        answer:
          "Có thể, nhưng không nên kết hợp chỉ vì muốn nhanh hơn. Mỗi nền da có sức chịu đựng khác nhau. Có khách nên đi từng bước để da hồi phục bền, có khách thì có thể kết hợp nhẹ nếu nền da phù hợp. Việc này cần được tư vấn trực tiếp thay vì tự ghép dịch vụ theo cảm giác hoặc theo một routine của người khác.",
      },
      {
        question: "Kết quả chăm sóc da có thấy ngay sau một buổi không?",
        answer:
          "Một số khách có thể thấy da ẩm hơn, sáng hơn hoặc sạch hơn sau buổi làm, nhưng sự ổn định lâu dài thường cần theo dõi theo từng giai đoạn. Đặc biệt với da mụn, da yếu hoặc da treatment sai trước đó, việc da khỏe dần lên quan trọng hơn cảm giác đẹp ngay trong một ngày. Cách nhìn này giúp khách thực tế hơn và đỡ áp lực hơn với làn da của mình.",
      },
    ],
  },
  {
    slug: "giam-mo-vung-nho-vung-tau",
    title: "Giảm mỡ vùng nhỏ tại Vũng Tàu",
    menuTitle: "Body / Làm gọn vùng nhỏ",
    heroTitle: "Giảm mỡ vùng nhỏ tại Vũng Tàu",
    heroSubtitle:
      "Tập trung vào các vùng như cánh tay, nọng cằm, bụng dưới hoặc vai lưng khi phù hợp, theo hướng theo dõi từng buổi và không hứa hẹn quá đà.",
    image: "/images/placeholder-service-soft.svg",
    description:
      "Nhóm dịch vụ body dành cho khách muốn làm gọn các vùng nhỏ nhưng vẫn cần được tư vấn đúng nguyên nhân trước khi bắt đầu liệu trình.",
    overviewParagraphs: [
      "Không ít khách thấy cơ thể mình nhìn ổn tổng thể nhưng lại có một vài vùng nhỏ tích mỡ khiến cảm giác mặc đồ kém tự tin hơn, như cánh tay, nọng cằm, bụng dưới hoặc phần vai lưng. Những vùng này thường khiến khách muốn xử lý theo hướng nhẹ, không phẫu thuật và có thể theo dõi từng buổi. Tuy vậy, điều quan trọng là phải nhìn đúng nguyên nhân: có phải do mô mỡ thật, do cấu trúc, do tư thế hay do độ chùng của da.",
      "Ở Chòi của Uyn, nhóm giảm mỡ vùng nhỏ luôn được tư vấn với kỳ vọng thực tế. Không phải ai có nọng cằm cũng nên đi theo hướng giảm mỡ vùng nhỏ. Không phải ai muốn tay gọn hơn cũng sẽ có cùng một tốc độ thay đổi. Khi không hứa quá đà, khách lại dễ thấy yên tâm hơn vì hiểu rằng mình đang bắt đầu một quá trình có theo dõi, có điều chỉnh và cần đi theo tình trạng thật của cơ thể.",
      "Nhóm này bao gồm giảm mỡ cánh tay, giảm mỡ nọng cằm, giảm mỡ bụng dưới, làm gọn vùng vai lưng và chăm sóc body định hướng làm gọn nhẹ. Dù ở vùng nào, Uyn cũng ưu tiên giải thích rõ mục tiêu thực tế, mức độ có thể kỳ vọng và chuyện chăm sóc đi kèm để khách không bước vào liệu trình với một hình dung quá xa nền tảng của mình.",
    ],
    suitableParagraphs: [
      "Nhóm giảm mỡ vùng nhỏ thường phù hợp với khách có vùng tích mỡ nhẹ hoặc vừa, muốn cải thiện sự gọn gàng của một khu vực cụ thể chứ không tìm một thay đổi toàn thân trong thời gian ngắn. Đây cũng thường là nhóm khách đã thử chăm sóc ở nhà nhưng thấy vùng nhỏ đó vẫn khó xuống hoặc thay đổi chậm hơn phần còn lại.",
      "Phần phù hợp vẫn cần được xem kỹ, vì có những trường hợp nhìn như mỡ nhưng nguyên nhân chính lại là tư thế, cấu trúc hoặc độ chùng da. Khi hiểu điều này từ đầu, khách sẽ dễ chọn đúng hướng hơn và cũng đỡ thất vọng nếu biết một số vùng cần theo dõi lâu hơn hoặc cần kết hợp thêm thói quen chăm sóc phù hợp.",
    ],
    suitableFor: [
      {
        title: "Khách có vùng nhỏ tích mỡ nhẹ hoặc vừa",
        detail:
          "Những vùng như cánh tay, nọng cằm, bụng dưới hoặc vai lưng đôi khi cần được nhìn riêng thay vì chỉ chăm toàn thân.",
      },
      {
        title: "Khách muốn theo dõi theo từng buổi",
        detail:
          "Phù hợp với người muốn hiểu tiến trình rõ ràng, điều chỉnh nhịp theo phản ứng thật của cơ thể chứ không làm đại trà.",
      },
      {
        title: "Khách không muốn can thiệp phẫu thuật",
        detail:
          "Nhóm này thường được quan tâm bởi những người muốn bắt đầu bằng hướng nhẹ nhàng hơn và cần tư vấn kỹ trước.",
      },
    ],
    processParagraphs: [
      "Điểm khác của nhóm body là khách rất dễ mang kỳ vọng từ hình ảnh trước sau trên mạng. Bởi vậy, phần tư vấn phải bắt đầu bằng việc làm rõ nền thực tế của từng người. Vùng đó tích mỡ ở mức nào, có đi kèm độ chùng không, thói quen sinh hoạt có ảnh hưởng không, và liệu mục tiêu khách đặt ra có hợp với tình trạng hiện tại hay chưa. Khi nói rõ điều này, khách sẽ bước vào liệu trình với tâm lý bình tĩnh hơn.",
      "Sau mỗi buổi, việc theo dõi và duy trì cũng quan trọng không kém phần dịch vụ. Uyn thường nói rõ chuyện sinh hoạt, cảm giác của vùng làm, thời điểm nên xem lại và cách đánh giá tiến trình theo mốc hợp lý. Cách tiếp cận này giúp khách hiểu rằng sự thay đổi vùng nhỏ thường cần sự kiên nhẫn và không nên ép cơ thể phải biến đổi thật nhanh trong thời gian ngắn.",
    ],
    processSteps: [
      {
        title: "Xác định vùng cần cải thiện",
        description:
          "Nghe mong muốn của khách và khoanh đúng vùng gây mất tự tin nhất thay vì nói chung chung về body.",
      },
      {
        title: "Nhìn nguyên nhân thật",
        description:
          "Xem vùng đó chủ yếu do mô mỡ, do cấu trúc, do da chùng hay do thói quen để tránh kỳ vọng sai dịch vụ.",
      },
      {
        title: "Tư vấn liệu trình phù hợp",
        description:
          "Giải thích mục tiêu thực tế, số buổi dự kiến và những điều khách cần hiểu trước khi bắt đầu.",
      },
      {
        title: "Thực hiện theo vùng",
        description:
          "Đi theo từng khu vực cần cải thiện, ưu tiên sự theo dõi đều thay vì làm theo cảm giác vội.",
      },
      {
        title: "Dặn chăm sóc sau buổi",
        description:
          "Nói rõ những cảm giác có thể gặp, chuyện sinh hoạt và cách quan sát thay đổi theo từng mốc.",
      },
      {
        title: "Theo dõi tiến trình",
        description:
          "Đánh giá lại sau từng buổi để xem phản ứng của vùng làm và điều chỉnh nếu cần.",
      },
    ],
    pricingParagraphs: [
      "Giá của nhóm làm gọn vùng nhỏ thường không chỉ phụ thuộc vào tên dịch vụ mà còn phụ thuộc vào vùng, mức độ tích mỡ, số buổi và cách xây liệu trình. Vì vậy, nhiều dịch vụ trong nhóm này phù hợp hơn với dạng “tư vấn theo liệu trình” thay vì một con số cố định. Cách báo như vậy giúp sát thực tế hơn và không khiến khách hiểu lầm rằng ai cũng sẽ đi cùng một nhịp giống nhau.",
      "Nếu khách đang phân vân vì thấy nhiều nơi quảng cáo quá nhanh hoặc quá mạnh tay về kết quả, Uyn thường nhắc lại một điều khá đơn giản: vùng nhỏ vẫn là cơ thể thật của mình, nên cần được đi theo nhịp hợp lý. Càng hiểu điều này từ đầu, khách càng dễ theo dõi tiến trình và đánh giá kết quả theo hướng thực tế hơn.",
    ],
    faqs: [
      {
        question: "Có phải vùng nào nhiều mỡ nhìn thấy cũng phù hợp với dịch vụ làm gọn vùng nhỏ không?",
        answer:
          "Không phải lúc nào cũng vậy. Một số vùng nhìn tưởng là mỡ nhưng nguyên nhân chính có thể liên quan đến cấu trúc, độ chùng da hoặc thói quen sinh hoạt. Vì thế, phần nhìn và tư vấn trước khi làm rất quan trọng. Khi hiểu đúng nguyên nhân, khách sẽ chọn đúng hướng hơn và đỡ kỳ vọng sai vào một dịch vụ không phải lựa chọn chính cho tình trạng của mình.",
      },
      {
        question: "Bao lâu thì thấy thay đổi ở vùng nhỏ?",
        answer:
          "Mỗi người sẽ có tốc độ khác nhau tùy cơ địa, nền tảng cơ thể, vùng thực hiện và cách duy trì sau buổi làm. Với nhóm này, điều nên nhìn không chỉ là thay đổi ngay tức thì, mà là mức độ gọn dần theo từng mốc. Uyn thường tư vấn theo cách này để khách đỡ áp lực và theo dõi tiến trình bình tĩnh hơn.",
      },
      {
        question: "Có cần theo liệu trình hay làm một buổi là đủ?",
        answer:
          "Nhiều trường hợp cần được xem theo liệu trình, vì vùng nhỏ thường không thay đổi bền chỉ trong một lần. Tuy vậy, việc đi bao nhiêu buổi còn tùy nền thực tế của khách chứ không phải ai cũng giống nhau. Phần tư vấn trước sẽ giúp bạn hiểu mức độ phù hợp và khoảng theo dõi dự kiến để chủ động hơn khi bắt đầu.",
      },
      {
        question: "Sau buổi làm có cần chăm sóc hay kiêng gì không?",
        answer:
          "Có. Dù không phải lúc nào cũng cần kiêng theo kiểu quá căng, khách vẫn nên được dặn kỹ về sinh hoạt, cảm giác của vùng làm và những điều nên lưu ý trong giai đoạn đầu. Cách chăm sóc sau đó ảnh hưởng khá nhiều đến việc theo dõi tiến trình, nên Uyn luôn xem đây là phần không thể bỏ qua.",
      },
      {
        question: "Nếu vùng đó không phù hợp thì sao?",
        answer:
          "Nếu sau khi xem thấy không phù hợp hoặc không phải nguyên nhân chính là do mỡ, Uyn sẽ nói rõ để khách cân nhắc hướng khác. Việc chưa nên làm ngay không có nghĩa là thất vọng, mà là một cách giữ cho quyết định của khách hợp lý hơn. Tư vấn thật đôi khi bắt đầu bằng việc nói điều chưa nên làm trước khi nói điều có thể làm.",
      },
      {
        question: "Kết quả có giữ được lâu không?",
        answer:
          "Điều này phụ thuộc vào cơ địa, thói quen sinh hoạt, cách duy trì và tình trạng từng vùng. Với nhóm body, thay đổi thường cần được nhìn như một tiến trình có theo dõi chứ không nên xem là một kết quả đứng yên mãi. Khi giữ kỳ vọng thực tế như vậy, khách sẽ cảm thấy chủ động và dễ đi đường dài hơn.",
      },
    ],
  },
  {
    slug: "combo-lieu-trinh-vung-tau",
    title: "Combo / Liệu trình tại Vũng Tàu",
    menuTitle: "Combo / Liệu trình",
    heroTitle: "Combo / Liệu trình tại Vũng Tàu",
    heroSubtitle:
      "Những gói kết hợp được tư vấn theo nhu cầu thật, để khách không phải tự ráp dịch vụ khi chưa hiểu điều gì nên làm trước.",
    image: "/images/placeholder-clinic-soft.svg",
    description:
      "Nhóm dành cho khách muốn đi theo hướng có lộ trình rõ hơn, nhưng vẫn giữ nguyên tắc không ép dịch vụ và không làm đại trà.",
    overviewParagraphs: [
      "Không ít khách bước vào mini spa với nhiều vấn đề cùng lúc: môi nhợt nhưng mày cũng thưa, da thiếu ẩm nhưng lại có mụn ẩn, hoặc muốn tổng thể gương mặt nhìn sáng và gọn hơn chứ không chỉ cải thiện một điểm. Trong những trường hợp như vậy, combo hoặc liệu trình có thể là hướng đi hợp lý hơn so với việc tự chọn từng dịch vụ rời rạc. Tuy vậy, combo chỉ nên có giá trị khi nó thật sự đúng với nhu cầu, chứ không phải một gói đóng sẵn áp cho mọi người.",
      "Ở Chòi của Uyn, nhóm combo được tư vấn theo thứ tự ưu tiên và theo tình trạng thật. Có khách cần xử lý nền môi trước rồi mới nên tính màu. Có khách nên phục hồi da trước rồi mới tính đến meso. Có khách chỉ cần một dịch vụ đơn lẻ dù ban đầu nghĩ mình sẽ phải làm rất nhiều. Tư duy này giúp combo không trở thành áp lực mua nhiều hơn mức cần thiết, mà thành một lộ trình vừa phải để khách đỡ rối và đỡ tự đoán.",
      "Nhóm này bao gồm combo môi và mày, combo da căng bóng, combo da mụn, combo gọn mặt và gói chăm sóc định kỳ. Mỗi gói đều có thể được điều chỉnh theo tình trạng và mục tiêu thật, vì điều quan trọng không phải là số lượng dịch vụ trong một tên combo, mà là trật tự và mức độ phù hợp của từng bước trong hành trình làm đẹp của khách.",
    ],
    suitableParagraphs: [
      "Combo thường phù hợp với khách muốn có lộ trình rõ hơn, đặc biệt khi đang phân vân giữa nhiều vấn đề cùng lúc. Thay vì tự ráp một danh sách dài rồi làm dồn, khách có thể được tư vấn xem điều gì cần ưu tiên, điều gì có thể chờ và điều gì thực ra không cần làm. Cách này giúp tiết kiệm cả thời gian lẫn tâm lý lo lắng khi bước vào chăm sóc hoặc làm đẹp.",
      "Với Uyn, combo tốt không phải combo nhiều bước nhất, mà là combo khiến khách thấy dễ theo, dễ hiểu và đúng nhu cầu thật. Đó là lý do nhóm này luôn cần trao đổi kỹ trước khi chốt, để tránh việc khách mua một gói đẹp trên giấy nhưng không hợp với tình trạng hiện tại của mình.",
    ],
    suitableFor: [
      {
        title: "Khách có hơn một nhu cầu cùng lúc",
        detail:
          "Ví dụ muốn môi tươi hơn, mày gọn hơn hoặc vừa muốn da ổn định vừa muốn căng bóng nhẹ sau đó.",
      },
      {
        title: "Khách muốn có lộ trình rõ ràng",
        detail:
          "Combo giúp nhìn ra trình tự nên làm, nên chờ và cách theo dõi giữa các buổi thay vì tự ráp dịch vụ.",
      },
      {
        title: "Khách cần được tư vấn để không làm quá tay",
        detail:
          "Một số khách nghĩ mình cần rất nhiều bước, nhưng thực tế chỉ cần vài bước đúng thứ tự là đã nhẹ hơn nhiều.",
      },
    ],
    processParagraphs: [
      "Điểm đầu tiên khi tư vấn combo là xác định nhu cầu nào là ưu tiên thật và nền hiện tại có chịu được đến đâu. Combo không có nghĩa là gom nhiều thứ lại một lúc. Nhiều trường hợp, điều quan trọng lại là chia ra theo từng chặng để cơ thể hoặc làn da có thời gian đáp ứng. Cách chia nhịp này giúp khách vừa nhìn ra tiến trình, vừa không bị quá tải.",
      "Sau mỗi chặng trong combo, Uyn vẫn theo dõi cảm giác của khách và điều chỉnh nếu cần. Cách làm này tạo cảm giác gần hơn với một lộ trình chăm sóc thật, thay vì một gói cố định từ đầu đến cuối mà không xét lại tình trạng thực tế.",
    ],
    processSteps: [
      {
        title: "Xác định mục tiêu chính",
        description:
          "Nhìn ra điều khách muốn cải thiện nhất và điều nào có thể để sau chứ không cần làm dồn.",
      },
      {
        title: "Xem nền và mức độ phù hợp",
        description:
          "Kiểm tra tình trạng hiện tại của môi, mày, da hoặc gương mặt để sắp thứ tự cho hợp lý.",
      },
      {
        title: "Gợi ý combo hoặc liệu trình",
        description:
          "Không ép chọn gói cố định mà điều chỉnh theo nhu cầu thật của khách và khả năng đáp ứng hiện tại.",
      },
      {
        title: "Đi theo từng chặng",
        description:
          "Thực hiện theo từng bước cần thiết, có khoảng theo dõi thay vì làm dồn chỉ để nhanh hơn.",
      },
      {
        title: "Hướng dẫn chăm sóc và theo dõi",
        description:
          "Mỗi giai đoạn sẽ có lưu ý riêng để khách biết cách giữ kết quả và chuẩn bị cho bước tiếp theo.",
      },
    ],
    pricingParagraphs: [
      "Giá của combo hoặc liệu trình phụ thuộc vào những bước thật sự được tư vấn sau khi xem tình trạng. Có khách chỉ cần một lộ trình ngắn, có khách lại cần theo từng chặng với nhịp chậm hơn. Vì vậy, giá nên được hiểu là một cấu trúc mềm, để khách không bị áp vào một gói cố định khi cơ thể hoặc làn da của mình đang cần một hướng khác.",
      "Nếu sau khi tư vấn thấy khách chưa cần combo, Uyn cũng sẽ nói rõ. Mục tiêu không phải bán nhiều dịch vụ hơn, mà là giúp khách có đường đi phù hợp, vừa sức và đủ an tâm để bắt đầu.",
    ],
    faqs: [
      {
        question: "Combo có phải lúc nào cũng tiết kiệm hơn làm lẻ không?",
        answer:
          "Về chi phí, combo có thể là lựa chọn hợp lý trong một số trường hợp, nhưng điều quan trọng hơn là có thật sự phù hợp hay không. Nếu khách chưa cần làm nhiều bước, việc cố chốt combo chỉ để “tiết kiệm” đôi khi lại không hiệu quả bằng làm đúng một bước cần thiết trước. Uyn thường ưu tiên tư vấn đúng nhu cầu hơn là chốt nhiều.",
      },
      {
        question: "Nếu đang phân vân nhiều dịch vụ thì có nên đi theo combo không?",
        answer:
          "Có thể, vì combo giúp nhìn ra thứ tự ưu tiên. Nhưng trước khi chốt, vẫn cần xem cái nào cần làm trước, cái nào có thể chờ và cái nào chưa cần. Khi hiểu rõ điều này, khách sẽ thấy combo nhẹ đầu hơn chứ không phải một gói khiến mình áp lực phải làm hết trong thời gian ngắn.",
      },
      {
        question: "Combo có được điều chỉnh theo tình trạng thật không?",
        answer:
          "Có. Ở Chòi của Uyn, combo không được xem là một công thức cứng. Nó là một gợi ý lộ trình để khách dễ hình dung và thuận tiện theo dõi hơn. Nếu tình trạng hiện tại chưa phù hợp với một bước nào đó, Uyn sẽ điều chỉnh hoặc lùi bước đó lại để tổng thể an toàn và hợp lý hơn.",
      },
      {
        question: "Có thể dừng giữa liệu trình nếu muốn xem phản ứng trước không?",
        answer:
          "Hoàn toàn có thể. Nhiều khách thích đi từng bước để cảm nhận cơ thể hoặc làn da của mình trước khi quyết định chặng tiếp theo. Cách làm này rất bình thường và cũng phù hợp với tinh thần không ép dịch vụ của Chòi của Uyn. Một lộ trình tốt là lộ trình khách cảm thấy mình chủ động trong suốt quá trình.",
      },
      {
        question: "Nếu tư vấn xong thấy chỉ cần một dịch vụ thì sao?",
        answer:
          "Thì mình đi theo đúng một dịch vụ đó. Combo không phải đáp án mặc định. Có những khách đến với nhiều lo lắng nhưng sau khi xem kỹ thì chỉ cần xử lý một điểm là đủ. Phần tư vấn trung thực nằm ở chỗ đó: không phải cứ có nhiều lựa chọn là phải dùng nhiều lựa chọn cùng lúc.",
      },
      {
        question: "Làm sao biết combo nào hợp với mình?",
        answer:
          "Cách nhanh nhất là gửi hình hoặc mô tả tình trạng hiện tại để Uyn nhìn sơ bộ và hẹn tư vấn kỹ hơn nếu cần. Khi có đủ thông tin về nền môi, mày, da hoặc gương mặt, việc gợi ý combo sẽ sát thực tế hơn nhiều so với tự đoán dựa trên tên gói hoặc nhu cầu cảm tính ban đầu.",
      },
    ],
  },
];

const sharedServiceImages = {
  phunMoi: "/images/placeholder-service-soft.svg",
  phunMay: "/images/placeholder-service-soft.svg",
  filler: "/images/placeholder-service-soft.svg",
  botox: "/images/placeholder-service-soft.svg",
  meso: "/images/placeholder-clinic-soft.svg",
  da: "/images/placeholder-clinic-soft.svg",
  heroFiller: "/images/placeholder-hero-editorial.svg",
  heroMeso: "/images/placeholder-clinic-soft.svg",
  heroModel: "/images/placeholder-hero-editorial.svg",
} as const;

const serviceSeeds: ServiceSeed[] = [
  {
    slug: "phun-xam-chan-may-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Phun xăm chân mày Vũng Tàu",
    seoTitle: "Phun xăm chân mày Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Phun xăm chân mày Vũng Tàu tại Chòi của Uyn theo hướng tự nhiên, cân với gương mặt và tư vấn kỹ trước khi làm.",
    shortDescription:
      "Dáng mày mềm, tự nhiên, cân với gương mặt và không quá sắc.",
    heroSubtitle:
      "Phun chân mày theo hướng mềm, gọn và hợp với khung mặt thật, để gương mặt sáng hơn nhưng vẫn giữ cảm giác rất tự nhiên.",
    heroImage: sharedServiceImages.phunMay,
    overviewAngle:
      "Phun xăm chân mày thường được khách tìm đến khi muốn gương mặt có khung rõ hơn nhưng không muốn phụ thuộc vào việc kẻ mày mỗi ngày.",
    concernContext:
      "Nhiều khách có chân mày thưa, dáng chưa cân hoặc phần đuôi bị hụt nhẹ nên nhìn tổng thể thiếu gọn gàng dù da và makeup vẫn ổn.",
    naturalDirection:
      "Tại Chòi của Uyn, dáng mày luôn được tư vấn theo tỉ lệ gương mặt thật thay vì cố làm sắc để thấy rõ ngay lúc mới xong.",
    suitableFor: [
      { title: "Chân mày thưa", detail: "Phần lông mày mỏng hoặc thiếu ở đầu hay đuôi khiến gương mặt nhìn thiếu khung." },
      { title: "Dáng mày không đều", detail: "Hai bên mày lệch nhẹ hoặc khó kẻ cân mỗi ngày thường cần được nhìn lại dáng tổng thể." },
      { title: "Muốn tiết kiệm thời gian makeup", detail: "Phù hợp với người thích đi làm, đi học nhanh nhưng vẫn muốn gương mặt gọn gàng hơn." },
      { title: "Muốn mặt sáng và gọn hơn", detail: "Một dáng mày hợp mặt thường làm phần mắt và nửa trên gương mặt nhìn chỉn chu hơn." },
    ],
    needConsult: [
      "Vùng mày đang có kích ứng, trầy xước hoặc đang nhạy cảm bất thường cần được xem lại trước khi làm.",
      "Khách có chân mày cũ trổ màu, lệch dáng hoặc quá đậm cần tư vấn kỹ để chọn hướng sửa phù hợp.",
      "Những trường hợp da quá dầu hoặc đã từng lên màu không ổn định nên được giải thích rõ kỳ vọng trước khi quyết định.",
      "Nếu đang mang thai, cho con bú hoặc có tiền sử phản ứng đặc biệt, nên trao đổi trước để được hướng dẫn phù hợp hơn.",
    ],
    advisoryPoints: [
      "Uyn thường xem độ dày phần lông mày thật, khung xương chân mày và khoảng cách mắt để tránh làm một dáng mày đẹp trên giấy nhưng lạc khỏi gương mặt thật.",
      "Khách cũng được hỏi khá kỹ về thói quen makeup vì có người chỉ muốn mày gọn nhẹ, nhưng có người lại thích thần thái rõ hơn một chút khi ra ngoài.",
      "Nếu dáng khách chọn đang quá sắc so với đường nét thật, Uyn sẽ gợi ý điều chỉnh để tổng thể mềm hơn, giữ cảm giác tự nhiên lâu dài.",
    ],
    processSteps: [
      { title: "Trao đổi dáng mày mong muốn", description: "Khách nói rõ thích kiểu mềm, gọn hay rõ nét ở mức nào để buổi tư vấn đi đúng hướng." },
      { title: "Xem chân mày thật và tỉ lệ mặt", description: "Kiểm tra độ thưa, độ lệch, khung xương và thần thái để chọn dáng cân với gương mặt." },
      { title: "Phác thảo và chốt hướng làm", description: "Chỉ khi khách thấy ổn với dáng định hướng thì mới chuyển sang bước chuẩn bị thực hiện." },
      { title: "Làm sạch và chuẩn bị vùng mày", description: "Giữ vùng thực hiện gọn và sạch để quá trình làm diễn ra nhẹ nhàng hơn." },
      { title: "Thực hiện theo dáng đã chốt", description: "Đi theo từng phần của dáng mày để giữ sự cân đối và tránh làm quá tay ở một bên." },
      { title: "Hướng dẫn chăm sóc sau làm", description: "Dặn kỹ về giai đoạn đầu, chuyện vệ sinh, theo dõi màu và thời điểm nên nhắn lại khi cần." },
    ],
    expectedResults: [
      "Khi dáng mày đi đúng với khung mặt, tổng thể gương mặt thường nhìn sáng, gọn và có điểm tựa hơn mà không cần makeup quá nhiều.",
      "Một dáng mày đẹp không nên chỉ đẹp lúc mới làm xong, mà nên giữ được cảm giác mềm và hài hòa khi nhìn gần trong sinh hoạt hằng ngày.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ vùng mày sạch và khô theo hướng dẫn trong những ngày đầu để hạn chế chà xát không cần thiết.",
      "Không tự bóc phần bong nếu có, vì việc can thiệp sớm dễ làm màu lên không đều.",
      "Hạn chế makeup trực tiếp lên vùng mày mới làm cho đến khi ổn định hơn.",
      "Theo dõi mức độ lên màu và nhắn lại nếu có điều gì khiến bạn thấy không yên tâm thay vì tự đoán.",
    ],
    pricingFactors: [
      "Tình trạng chân mày thật đang thưa ở mức nào và cần xử lý bao nhiêu.",
      "Chân mày cũ có cần sửa hoặc điều chỉnh trước hay không.",
      "Mức độ chỉnh dáng và khối lượng xử lý thực tế sau khi tư vấn.",
    ],
    faqQuestions: [
      "Phun mày bao lâu bong?",
      "Có cần dặm lại không?",
      "Dáng mày có bị quá đậm không?",
      "Mày cũ có sửa được không?",
      "Sau phun mày cần kiêng gì?",
      "Nếu da dầu thì màu có lên ổn không?",
    ],
    priceFrom: "Từ 1.200.000đ",
    priceNote: "Giá tham khảo, có thể thay đổi nếu là trường hợp mày cũ cần xử lý thêm.",
    relatedServiceSlugs: ["sua-chan-may-cu-vung-tau", "dam-lai-moi-may-vung-tau", "phun-moi-vung-tau"],
  },
  {
    slug: "phun-moi-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Phun môi Vũng Tàu",
    seoTitle: "Phun môi Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Phun môi Vũng Tàu tại Chòi của Uyn theo hướng tự nhiên, tư vấn theo nền môi thật, màu da và mong muốn của từng khách.",
    shortDescription:
      "Màu môi tươi hơn, xử lý nền môi nhợt hoặc thâm nhẹ theo hướng tự nhiên.",
    heroSubtitle:
      "Phun môi theo nền môi thật, tông da và gu cá nhân để mặt tươi hơn nhưng vẫn mềm và không quá đậm.",
    heroImage: sharedServiceImages.phunMoi,
    locationLabel: "Vũng Tàu",
    overviewAngle:
      "Phun môi là dịch vụ được nhiều khách quan tâm khi muốn gương mặt tươi hơn mà không cần dùng son đậm hằng ngày.",
    concernContext:
      "Có người môi nhợt màu, có người thâm nhẹ, có người viền môi chưa rõ nên nhìn tổng thể khá mệt dù da mặt vẫn ổn.",
    naturalDirection:
      "Điều Uyn ưu tiên là màu môi lên vừa với nền thật và đúng gu của khách, thay vì cố làm màu quá rực để thấy thay đổi thật nhanh.",
    suitableFor: [
      { title: "Môi nhợt màu", detail: "Những nền môi thiếu sắc tự nhiên thường khiến cả gương mặt trông nhạt và thiếu sức sống." },
      { title: "Môi thâm nhẹ", detail: "Nếu nền môi không đều màu hoặc hơi xỉn, phun môi có thể được cân nhắc sau khi xem trực tiếp." },
      { title: "Viền môi chưa rõ", detail: "Đường viền môi mờ đôi khi làm môi nhìn thiếu nét dù không phải môi quá mỏng." },
      { title: "Muốn mặt tươi hơn không cần son đậm", detail: "Phù hợp với người thích cảm giác gọn và nhẹ trong sinh hoạt hằng ngày." },
    ],
    needConsult: [
      "Môi đang có vết thương, nhiệt miệng, kích ứng hoặc đang quá nhạy cần được xem lại trước khi làm.",
      "Nền môi thâm đậm, đã từng phun cũ hoặc màu cũ lên không trong thường cần tư vấn kỹ về kỳ vọng.",
      "Khách có cơ địa nhạy hoặc từng phản ứng đặc biệt nên trao đổi trước để được hướng dẫn phù hợp hơn.",
      "Nếu đang mang thai hoặc cho con bú, nên hỏi ý kiến chuyên môn trước với các dịch vụ có can thiệp vùng môi.",
    ],
    advisoryPoints: [
      "Uyn thường nhìn kỹ sắc tố nền môi thật, viền môi, độ khô và cả tone da tổng thể để gợi ý màu hợp nhất với gương mặt.",
      "Khách cũng được hỏi về thói quen dùng son, vì có người thích môi nhìn như vừa có sắc tự nhiên, có người lại muốn rõ hơn một chút nhưng vẫn phải mềm.",
      "Nếu nền môi hiện tại chưa thuận lợi để lên màu ngay theo mong muốn, Uyn sẽ nói rõ để khách hiểu vì sao nên đi từng bước hoặc điều chỉnh kỳ vọng.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn về sắc môi", description: "Hiểu xem khách muốn môi tươi nhẹ, mềm tự nhiên hay rõ hơn một chút để định hướng màu." },
      { title: "Xem nền môi thật", description: "Đánh giá độ thâm, độ nhợt, viền môi và sắc tố nền để tránh chọn màu không hợp." },
      { title: "Gợi ý màu và hướng xử lý", description: "Chốt màu theo tình trạng thực tế, không chốt theo ảnh mẫu một cách máy móc." },
      { title: "Chuẩn bị vùng môi", description: "Làm sạch, chuẩn bị nhẹ nhàng để khách bước vào buổi làm với tâm lý thoải mái hơn." },
      { title: "Thực hiện theo phương án đã tư vấn", description: "Đi theo mức độ vừa đủ để màu sau ổn định vẫn mềm và hài hòa." },
      { title: "Dặn chăm sóc sau làm", description: "Hướng dẫn chuyện vệ sinh, theo dõi giai đoạn bong và khi nào nên nhắn lại để được xem thêm." },
    ],
    expectedResults: [
      "Môi sau khi ổn định thường cho cảm giác tươi hơn, có sức sống hơn và giúp gương mặt đỡ nhợt khi không makeup nhiều.",
      "Điều được ưu tiên không phải là màu thật rực, mà là sắc môi nhìn có sức sống và hợp với nền thật của từng khách.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ môi sạch theo đúng hướng dẫn và hạn chế chạm tay nhiều vào vùng môi trong những ngày đầu.",
      "Không tự bóc phần bong dù cảm giác khô hay cộm, vì việc này dễ làm màu lên không đều.",
      "Uống nước, giữ ẩm và theo dõi môi theo từng giai đoạn thay vì quá lo nếu chưa lên đúng màu ngay lập tức.",
      "Nếu môi có dấu hiệu khiến bạn thấy chưa yên tâm, nên nhắn lại để được hướng dẫn thay vì tự tra cứu quá nhiều nguồn khác nhau.",
    ],
    pricingFactors: [
      "Nền môi đang nhợt hay thâm ở mức nào.",
      "Mức độ cần xử lý nền trước khi lên màu.",
      "Mục tiêu màu mong muốn và hướng tư vấn phù hợp sau khi xem trực tiếp.",
    ],
    faqQuestions: [
      "Phun môi bao lâu bong?",
      "Phun môi bao lâu lên màu?",
      "Môi thâm có phun được không?",
      "Sau phun môi nên kiêng gì?",
      "Có cần dặm lại không?",
      "Nếu muốn màu rất nhẹ thì có làm được không?",
    ],
    priceFrom: "Từ 1.500.000đ",
    priceNote: "Giá thay đổi theo nền môi và mức độ xử lý thực tế.",
    relatedServiceSlugs: ["khu-tham-moi-vung-tau", "combo-phun-moi-va-chan-may-vung-tau", "phun-xam-chan-may-vung-tau"],
  },
  {
    slug: "khu-tham-moi-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Khử thâm môi Vũng Tàu",
    seoTitle: "Khử thâm môi Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Khử thâm môi Vũng Tàu tại Chòi của Uyn giúp cải thiện nền môi thâm và tư vấn theo sắc tố môi thật của từng khách.",
    shortDescription:
      "Hỗ trợ cải thiện nền môi thâm, giúp môi đều màu hơn trước khi lên màu tự nhiên.",
    heroSubtitle:
      "Khử thâm môi theo mức độ nền môi thật, giúp môi đều màu hơn và tạo nền thuận lợi hơn cho hướng làm đẹp tự nhiên.",
    heroImage: sharedServiceImages.phunMoi,
    overviewAngle:
      "Khử thâm môi thường được quan tâm khi nền môi xỉn, thâm hoặc không đều màu làm khách khó đạt được sắc môi mong muốn.",
    concernContext:
      "Một số khách từng phun môi cũ nhưng màu không trong, một số khác có nền môi thâm bẩm sinh hoặc thâm dần theo thời gian nên thấy mặt luôn nhợt hơn mong muốn.",
    naturalDirection:
      "Uyn thường tư vấn khử thâm theo hướng đi từng bước, vì mục tiêu chính là cải thiện nền thật chứ không hứa một màu môi hoàn hảo thật nhanh.",
    suitableFor: [
      { title: "Nền môi thâm", detail: "Môi có sắc tố đậm hoặc xỉn khiến màu tự nhiên bị chìm và khó đều." },
      { title: "Môi không đều màu", detail: "Phần viền và lòng môi chênh sắc hoặc có vùng tối rõ hơn các vùng còn lại." },
      { title: "Đã từng phun cũ nhưng màu không trong", detail: "Một số nền môi từng làm trước đó cần được xem lại trước khi chọn bước tiếp theo." },
      { title: "Muốn cải thiện nền trước khi lên màu", detail: "Phù hợp với người muốn môi nhìn trong và sáng hơn theo hướng có lộ trình." },
    ],
    needConsult: [
      "Nền môi thâm đậm hoặc đã qua xử lý nhiều lần thường cần được giải thích kỹ về mức độ cải thiện thực tế.",
      "Môi đang khô rát, có vết thương hoặc kích ứng không nên làm vội khi chưa kiểm tra lại.",
      "Khách có tiền sử phản ứng đặc biệt ở vùng môi cần trao đổi trước để được tư vấn thận trọng hơn.",
      "Nếu đang trong giai đoạn cơ thể nhạy cảm, nên cân nhắc thời điểm phù hợp thay vì cố làm ngay.",
    ],
    advisoryPoints: [
      "Phần tư vấn khử thâm tập trung khá nhiều vào chuyện nhìn thật sắc tố nền môi hiện tại thay vì chỉ nhìn ảnh tham khảo.",
      "Uyn cũng thường nói rõ rằng môi thâm không phải lúc nào cũng chỉ cần một lần là đã đạt nền như mong muốn, vì tốc độ đáp ứng của mỗi môi khác nhau.",
      "Khách cần hiểu trước mục tiêu của từng bước để không bị hụt hẫng nếu môi chưa đẹp ngay trong giai đoạn đầu.",
    ],
    processSteps: [
      { title: "Xem mức độ thâm thực tế", description: "Quan sát sắc tố nền, độ không đều màu và lịch sử từng làm trước đó nếu có." },
      { title: "Giải thích kỳ vọng hợp lý", description: "Nói rõ mục tiêu của bước khử thâm là cải thiện nền và tạo hướng đi tiếp theo phù hợp." },
      { title: "Chọn phương án xử lý", description: "Đi theo tình trạng thật thay vì áp một kỳ vọng chung cho mọi nền môi." },
      { title: "Chuẩn bị vùng môi", description: "Giữ vùng môi ở trạng thái phù hợp nhất trước khi thực hiện." },
      { title: "Thực hiện và theo dõi", description: "Đi từng bước để khách hiểu đây là quá trình cải thiện nền hơn là thay đổi tức thì." },
      { title: "Dặn chăm sóc sau làm", description: "Nhắc kỹ cách theo dõi, giữ vệ sinh và thời điểm nên nhắn lại khi cần." },
    ],
    expectedResults: [
      "Môi có thể nhìn đều màu và sáng hơn dần theo từng giai đoạn, tùy nền thâm ban đầu và khả năng đáp ứng của từng khách.",
      "Điều quan trọng là nền môi đi đúng hướng, nhìn trong hơn và tạo điều kiện thuận lợi hơn nếu sau này muốn lên màu tự nhiên.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Chăm sóc môi đúng nhịp theo hướng dẫn để hạn chế khô, cọ xát hoặc tác động không cần thiết.",
      "Không tự bóc phần bong hoặc so màu môi từng ngày theo tâm lý quá sốt ruột.",
      "Giữ môi đủ ẩm và nhắn lại nếu có biểu hiện khiến bạn chưa yên tâm thay vì tự kết luận quá sớm.",
      "Nếu có kế hoạch lên màu môi tiếp theo, nên chờ và nghe tư vấn đúng thời điểm phù hợp hơn.",
    ],
    pricingFactors: [
      "Mức độ thâm của nền môi hiện tại.",
      "Lịch sử từng làm hoặc từng lên màu cũ ra sao.",
      "Số bước cần đi để môi đạt nền thuận lợi hơn.",
    ],
    faqQuestions: [
      "Khử thâm môi có cần làm nhiều buổi không?",
      "Khử thâm xong có phun màu được không?",
      "Môi thâm nặng có cải thiện được không?",
      "Sau khử thâm cần chăm sóc thế nào?",
      "Khử thâm có làm môi quá nhạy không?",
      "Bao lâu mới biết môi cải thiện đến đâu?",
    ],
    priceFrom: "Từ 1.000.000đ",
    priceNote: "Thường cần tư vấn theo nền môi thật để báo sát hơn.",
    relatedServiceSlugs: ["phun-moi-vung-tau", "dam-lai-moi-may-vung-tau", "combo-phun-moi-va-chan-may-vung-tau"],
  },
  {
    slug: "sua-chan-may-cu-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Sửa chân mày cũ Vũng Tàu",
    seoTitle: "Sửa chân mày cũ Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Sửa chân mày cũ Vũng Tàu tại Chòi của Uyn theo tình trạng dáng cũ, màu cũ và gương mặt hiện tại của khách.",
    shortDescription:
      "Tư vấn xử lý dáng mày cũ bị lệch, trổ màu hoặc không còn hợp gương mặt.",
    heroSubtitle:
      "Sửa chân mày cũ theo tình trạng thật của dáng cũ, sắc tố cũ và phong cách hiện tại để tổng thể mềm và hợp mặt hơn.",
    heroImage: sharedServiceImages.phunMay,
    overviewAngle:
      "Sửa chân mày cũ là dịch vụ khá cần tư vấn kỹ, vì mỗi nền mày cũ có mức độ trổ màu, lệch dáng và độ đậm rất khác nhau.",
    concernContext:
      "Khách thường tìm dịch vụ này khi mày cũ trổ xanh đỏ, quá sắc, hai bên không đều hoặc đơn giản là dáng cũ không còn hợp với gương mặt hiện tại nữa.",
    naturalDirection:
      "Điều Uyn ưu tiên là nhìn ra mày cũ có thể xử lý theo hướng nào để kết quả mới mềm hơn, hài hòa hơn và không tạo cảm giác chắp vá.",
    suitableFor: [
      { title: "Mày cũ trổ xanh hoặc đỏ", detail: "Sắc tố cũ khiến chân mày nhìn nặng, lộ hoặc không còn tự nhiên." },
      { title: "Dáng mày quá sắc", detail: "Đường mày cũ làm thần thái gương mặt căng hơn mong muốn." },
      { title: "Hai bên mày không đều", detail: "Lệch dáng nhẹ hoặc lệch cảm giác giữa hai bên khiến khách thấy khó nhìn thẳng." },
      { title: "Muốn đổi sang dáng mềm hơn", detail: "Phù hợp với người muốn gương mặt bớt gắt và hợp phong cách hiện tại hơn." },
    ],
    needConsult: [
      "Mày cũ đã qua nhiều lần xử lý cần được đánh giá kỹ trước khi quyết định hướng sửa.",
      "Sắc tố cũ quá đậm hoặc vùng da quanh mày nhạy cảm cần tư vấn thật rõ về kỳ vọng.",
      "Khách muốn đổi sang một dáng quá khác với khung cũ nên được xem kỹ hơn về khả năng thực hiện.",
      "Nếu vùng mày đang có kích ứng hoặc tổn thương, không nên làm khi chưa ổn định hơn.",
    ],
    advisoryPoints: [
      "Tư vấn sửa mày cũ luôn bắt đầu bằng chuyện nhìn thật kỹ dáng cũ, sắc tố cũ và độ bám màu hiện tại.",
      "Khách cũng được giải thích rõ đâu là phần có thể chỉnh, đâu là phần cần đi từ từ để tránh chồng quá nhiều xử lý lên cùng một vùng.",
      "Nếu phương án khách mong muốn chưa phù hợp với nền cũ, Uyn sẽ nói rõ để khách chọn hướng an toàn và tự nhiên hơn.",
    ],
    processSteps: [
      { title: "Xem nền mày cũ", description: "Đánh giá sắc tố trổ màu, độ lệch và mức độ đậm hiện tại của chân mày cũ." },
      { title: "Phân tích hướng sửa", description: "Nói rõ điều gì có thể xử lý được và mức độ thay đổi hợp lý nhất." },
      { title: "Chốt dáng mới", description: "Chọn một hướng mềm hơn, cân hơn với gương mặt hiện tại chứ không chỉ cố che đi mày cũ." },
      { title: "Chuẩn bị vùng mày", description: "Giữ vùng làm gọn và ổn định trước khi thực hiện phần chỉnh sửa." },
      { title: "Thực hiện theo mức độ phù hợp", description: "Đi từng bước, ưu tiên sự hài hòa tổng thể và cảm giác tự nhiên sau ổn định." },
      { title: "Dặn chăm sóc kỹ sau làm", description: "Giải thích rõ cách theo dõi giai đoạn đầu để khách yên tâm hơn." },
    ],
    expectedResults: [
      "Khi sửa đúng hướng, dáng mày thường nhìn bớt cứng, cân hơn và hợp với gương mặt hiện tại hơn mày cũ.",
      "Dịch vụ này không nên kỳ vọng biến mất hoàn toàn dấu vết cũ trong mọi trường hợp, mà nên nhìn theo hướng cải thiện tổng thể tự nhiên hơn.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ vùng mày sạch và hạn chế tác động mạnh trong giai đoạn đầu.",
      "Không bóc lớp bong nếu có để tránh ảnh hưởng đến cảm giác lên màu và độ đều.",
      "Theo dõi chân mày theo từng mốc thay vì đánh giá quá sớm khi màu chưa ổn định.",
      "Nhắn lại nếu có thắc mắc trong giai đoạn đầu để được hướng dẫn thay vì tự xử lý thêm ở nhà.",
    ],
    pricingFactors: [
      "Mức độ trổ màu và độ đậm của chân mày cũ.",
      "Khả năng chỉnh dáng dựa trên nền cũ hiện tại.",
      "Khối lượng xử lý thực tế sau khi xem trực tiếp.",
    ],
    faqQuestions: [
      "Mày cũ trổ xanh đỏ có sửa được không?",
      "Có thể đổi hẳn sang dáng mềm hơn không?",
      "Sửa mày cũ có cần nhiều bước không?",
      "Sau sửa mày cũ cần chăm sóc gì?",
      "Mày cũ quá đậm thì có xử lý nhẹ nhàng được không?",
      "Bao lâu thì nhìn ra dáng mới ổn định hơn?",
    ],
    priceFrom: "Tư vấn theo tình trạng",
    priceNote: "Với mày cũ, thường cần xem trực tiếp để báo đúng mức độ xử lý.",
    relatedServiceSlugs: ["phun-xam-chan-may-vung-tau", "dam-lai-moi-may-vung-tau", "phun-moi-vung-tau"],
  },
  {
    slug: "dam-lai-moi-may-vung-tau",
    groupSlug: "phun-xam-tham-my",
    title: "Dặm lại môi / mày Vũng Tàu",
    seoTitle: "Dặm lại môi mày Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Dặm lại môi mày Vũng Tàu tại Chòi của Uyn theo nền lên màu thực tế sau giai đoạn đầu của từng khách.",
    shortDescription:
      "Theo dõi và dặm lại môi hoặc mày khi cần để màu và dáng ổn định hơn.",
    heroSubtitle:
      "Dặm lại môi hoặc mày theo đúng tình trạng lên màu thực tế, không làm thêm chỉ vì thói quen mặc định.",
    heroImage: sharedServiceImages.heroModel,
    overviewAngle:
      "Dặm lại là bước nhiều khách nghe qua nhưng chưa hiểu rõ khi nào thực sự cần và mục tiêu của nó là gì.",
    concernContext:
      "Có người màu lên chưa đều, có người cần chỉnh nhẹ dáng hoặc làm phần màu ổn định hơn sau giai đoạn đầu.",
    naturalDirection:
      "Uyn thường chỉ tư vấn dặm khi nhìn thấy nó thật sự cần thiết cho kết quả cuối cùng, chứ không xem đó là bước bắt buộc cho mọi trường hợp.",
    suitableFor: [
      { title: "Màu lên chưa đều sau giai đoạn đầu", detail: "Một số nền môi hoặc nền da cần dặm nhẹ để cảm giác màu ổn định hơn." },
      { title: "Cần chỉnh nhẹ phần dáng", detail: "Thường là những điều chỉnh rất nhỏ để tổng thể gọn hơn sau khi nhìn thực tế." },
      { title: "Muốn kết quả cuối mềm và chỉn chu hơn", detail: "Dặm đúng lúc có thể giúp màu hoặc dáng nhìn hoàn thiện hơn mà vẫn tự nhiên." },
      { title: "Khách được tư vấn theo dõi sau làm", detail: "Phù hợp khi đã đi qua giai đoạn đầu và cần đánh giá dựa trên tình trạng lên màu thật." },
    ],
    needConsult: [
      "Chưa qua đủ thời gian theo dõi ban đầu thì không nên dặm quá sớm chỉ vì sốt ruột.",
      "Nếu vùng làm đang nhạy cảm hoặc có phản ứng chưa ổn định, cần kiểm tra kỹ hơn trước khi quyết định.",
      "Khách có kỳ vọng tăng màu quá nhiều sau một lần dặm nên được giải thích rõ về mức độ vừa đủ.",
      "Nếu đang phân vân giữa dặm hay sửa hướng cũ, nên tư vấn trực tiếp để tránh chọn sai bước.",
    ],
    advisoryPoints: [
      "Phần tư vấn dặm luôn dựa trên kết quả thực tế sau giai đoạn đầu, chứ không dựa trên cảm giác lo lắng trong vài ngày đầu sau làm.",
      "Uyn thường giải thích khá kỹ về chuyện màu hoặc dáng chưa ổn định ngay là bình thường để khách đỡ sốt ruột hơn.",
      "Chỉ khi nhìn ra phần nào thật sự cần hỗ trợ thêm, việc dặm mới có ý nghĩa và giữ được hướng tự nhiên đã chốt từ đầu.",
    ],
    processSteps: [
      { title: "Xem lại kết quả thực tế", description: "Đánh giá dáng hoặc màu sau giai đoạn đầu thay vì quyết định quá sớm." },
      { title: "Xác định phần cần dặm", description: "Chỉ tập trung vào phần thật sự cần ổn định thêm chứ không làm lại toàn bộ theo thói quen." },
      { title: "Chốt mức độ điều chỉnh", description: "Giữ hướng tự nhiên đã tư vấn từ đầu và tránh làm đậm hơn mức cần thiết." },
      { title: "Chuẩn bị vùng thực hiện", description: "Đảm bảo vùng làm ở trạng thái phù hợp cho bước dặm nhẹ." },
      { title: "Dặm theo nhu cầu thực tế", description: "Đi đúng phần cần hỗ trợ thêm để kết quả sau ổn định mềm và đều hơn." },
      { title: "Tiếp tục hướng dẫn theo dõi", description: "Nhắc lại cách chăm sóc và các mốc nên quan sát sau bước dặm." },
    ],
    expectedResults: [
      "Khi dặm đúng lúc, màu hoặc dáng thường ổn định và chỉn chu hơn mà không phá đi cảm giác tự nhiên ban đầu.",
      "Mục tiêu của bước dặm là hoàn thiện vừa đủ, không phải làm cho môi hay mày trở nên đậm hơn thật nhiều.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Tiếp tục giữ vùng làm sạch và theo hướng dẫn sau dặm như phần đầu đã được dặn.",
      "Không tự can thiệp vào phần bong hoặc màu đang thay đổi theo ngày.",
      "Theo dõi thật bình tĩnh vì sau dặm, màu vẫn cần thời gian để ổn định lại.",
      "Nhắn lại nếu có điều gì bất thường để được xem thêm thay vì tự đoán theo kinh nghiệm người khác.",
    ],
    pricingFactors: [
      "Phần cần dặm là môi hay mày và mức độ điều chỉnh thực tế.",
      "Kết quả lên màu sau giai đoạn đầu ra sao.",
      "Khách chỉ cần dặm nhẹ hay có thêm phần chỉnh hướng nhỏ.",
    ],
    faqQuestions: [
      "Bao lâu thì biết mình có cần dặm lại không?",
      "Dặm lại có làm màu quá đậm không?",
      "Nếu chỉ lệch nhẹ thì có cần dặm không?",
      "Sau dặm lại cần chăm sóc thế nào?",
      "Có phải ai phun môi hoặc phun mày cũng phải dặm không?",
      "Nếu chưa yên tâm thì có thể gửi hình để xem trước không?",
    ],
    priceFrom: "Tư vấn theo tình trạng",
    priceNote: "Phụ thuộc phần cần dặm và mức độ điều chỉnh sau khi xem thực tế.",
    relatedServiceSlugs: ["phun-moi-vung-tau", "phun-xam-chan-may-vung-tau", "sua-chan-may-cu-vung-tau"],
  },
  {
    slug: "filler-moi-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Filler môi Vũng Tàu",
    seoTitle: "Filler môi Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Filler môi Vũng Tàu tại Chòi của Uyn theo hướng mềm, cân và tự nhiên, không làm quá tay.",
    shortDescription:
      "Tạo độ đầy và đường nét môi theo hướng mềm, tự nhiên, không làm quá tay.",
    heroSubtitle:
      "Filler môi theo cấu trúc môi thật để tăng độ đầy hoặc cân chỉnh nhẹ mà vẫn giữ cảm giác mềm và hợp gương mặt.",
    heroImage: sharedServiceImages.filler,
    overviewAngle:
      "Filler môi thường được khách tìm đến khi muốn môi nhìn đầy đặn hơn một chút hoặc muốn viền môi rõ hơn theo hướng nhẹ nhàng.",
    concernContext:
      "Có người môi mỏng, có người môi thiếu cân đối, có người chỉ muốn môi nhìn căng mềm hơn mà không muốn phun môi hoặc son đậm hằng ngày.",
    naturalDirection:
      "Uyn ưu tiên hướng làm môi mềm, hợp cấu trúc thật và không cố đẩy môi quá mức chỉ để thấy khác biệt ngay lập tức.",
    suitableFor: [
      { title: "Môi mỏng", detail: "Khách muốn môi có độ đầy nhẹ hơn nhưng vẫn giữ cảm giác tự nhiên khi nhìn gần." },
      { title: "Môi thiếu cân đối", detail: "Một số trường hợp hai bên hoặc phần viền môi chưa hài hòa có thể cần cân chỉnh nhẹ." },
      { title: "Muốn viền môi rõ hơn", detail: "Phù hợp với người muốn môi có nét hơn nhưng không thích màu môi quá rõ." },
      { title: "Muốn môi căng nhẹ", detail: "Đây thường là nhu cầu của khách thích sự thay đổi tinh tế thay vì nhìn quá khác." },
    ],
    needConsult: [
      "Môi đang kích ứng, sưng viêm hoặc có tổn thương không nên làm khi chưa ổn định.",
      "Khách từng có phản ứng đặc biệt hoặc đã can thiệp ở môi trước đó cần trao đổi kỹ hơn.",
      "Nếu đang kỳ vọng môi giống hệt một ảnh mẫu, nên tư vấn trước để điều chỉnh kỳ vọng theo cấu trúc thật.",
      "Đang mang thai hoặc cho con bú nên hỏi ý kiến chuyên môn trước khi cân nhắc dịch vụ có can thiệp.",
    ],
    advisoryPoints: [
      "Tư vấn filler môi thường xoay quanh chuyện khách muốn môi nhìn khác ở điểm nào và muốn giữ lại điều gì ở môi hiện tại.",
      "Uyn cũng xem khá kỹ cấu trúc môi, độ dày môi trên dưới, viền môi và tương quan với cằm, mũi, tổng thể gương mặt.",
      "Nếu khách đang mong một kiểu môi không hợp cấu trúc thật, Uyn sẽ nói rõ để tránh làm xong nhìn nặng hoặc thiếu tự nhiên.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn về dáng môi", description: "Làm rõ khách muốn đầy nhẹ, rõ viền hay cân chỉnh phần nào nhiều hơn." },
      { title: "Phân tích cấu trúc môi thật", description: "Xem môi trên, môi dưới, độ cân và tổng thể gương mặt để tư vấn hướng phù hợp." },
      { title: "Chốt mức độ can thiệp", description: "Giữ ưu tiên cho sự mềm và hợp mặt thay vì làm quá để thấy khác biệt mạnh." },
      { title: "Chuẩn bị vùng môi", description: "Giữ vùng môi sạch và sẵn sàng cho quá trình thực hiện." },
      { title: "Thực hiện theo hướng đã thống nhất", description: "Đi từng bước để kiểm soát cảm giác tự nhiên của môi sau khi ổn định." },
      { title: "Dặn chăm sóc và theo dõi", description: "Nói rõ về giai đoạn đầu, chuyện sưng nhẹ và thời điểm môi nhìn ổn định hơn." },
    ],
    expectedResults: [
      "Khi phù hợp, filler môi có thể giúp môi nhìn căng hơn, mềm hơn và có điểm nhấn nhẹ mà không phá đi nét riêng của gương mặt.",
      "Điều quan trọng là môi sau làm vẫn nên nhìn hợp với gương mặt thật, chứ không phải cố giống một dáng môi mẫu nào đó.",
      "Kết quả có thể khác nhau tùy cơ địa, cấu trúc môi và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi cảm giác môi trong giai đoạn đầu và hạn chế sờ nắn nhiều khi chưa ổn định.",
      "Giữ sinh hoạt nhẹ nhàng theo hướng dẫn và tránh những tác động mạnh lên vùng môi vừa làm.",
      "Đừng vội đánh giá dáng cuối cùng quá sớm khi môi còn đang trong giai đoạn thay đổi ban đầu.",
      "Nếu có điều gì khiến bạn chưa yên tâm, nên nhắn lại để được hướng dẫn thay vì tự so với ảnh trên mạng.",
    ],
    pricingFactors: [
      "Lượng sản phẩm phù hợp với cấu trúc môi hiện tại.",
      "Mục tiêu là làm đầy nhẹ, rõ viền hay cân chỉnh dáng.",
      "Lịch sử can thiệp ở môi trước đó nếu có.",
    ],
    faqQuestions: [
      "Filler môi giữ được bao lâu?",
      "Sau tiêm filler môi cần kiêng gì?",
      "Tiêm filler môi có sưng không?",
      "Khi nào môi ổn định?",
      "Có thể tiêm rất tự nhiên không?",
      "Nếu môi lệch nhẹ thì có chỉnh được không?",
    ],
    priceFrom: "Tư vấn theo lượng cc",
    priceNote: "Không cam kết kết quả giống ảnh mẫu 100%, vì nền môi và cấu trúc mỗi người khác nhau.",
    relatedServiceSlugs: ["filler-cam-vung-tau", "filler-ranh-cuoi-vung-tau", "phun-moi-vung-tau"],
  },
  {
    slug: "filler-cam-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Filler cằm Vũng Tàu",
    seoTitle: "Filler cằm Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Filler cằm Vũng Tàu tại Chòi của Uyn hỗ trợ cân chỉnh dáng cằm và tỉ lệ gương mặt theo hướng hài hòa.",
    shortDescription:
      "Hỗ trợ cân chỉnh dáng cằm và tỉ lệ gương mặt theo hướng hài hòa.",
    heroSubtitle:
      "Filler cằm theo hướng cân tỉ lệ gương mặt, hỗ trợ góc nghiêng và cảm giác gọn hơn khi cấu trúc thật phù hợp.",
    heroImage: sharedServiceImages.heroFiller,
    overviewAngle:
      "Filler cằm thường được quan tâm khi khách muốn gương mặt nhìn cân hơn ở góc nghiêng hoặc phần cằm đang hơi ngắn so với tổng thể.",
    concernContext:
      "Một số gương mặt nhìn hiền nhưng thiếu điểm chốt ở phần cằm, khiến tổng thể chưa được cân theo mong muốn của khách.",
    naturalDirection:
      "Uyn ưu tiên làm theo hướng hài hòa với sống mũi, môi và đường viền hàm thay vì tạo một cằm quá nhọn hoặc tách rời gương mặt thật.",
    suitableFor: [
      { title: "Cằm hơi ngắn", detail: "Phù hợp với khách muốn cân lại cảm giác khuôn mặt ở góc nhìn thẳng và góc nghiêng." },
      { title: "Mặt thiếu điểm V-line nhẹ", detail: "Một số người chỉ cần chỉnh nhẹ phần cằm là tổng thể đã thanh hơn." },
      { title: "Muốn cân đối góc nghiêng", detail: "Khách quan tâm đến profile thường để ý khá rõ phần cằm trong tổng thể gương mặt." },
      { title: "Muốn thay đổi nhẹ, không phẫu thuật", detail: "Filler cằm thường được tìm đến bởi những người muốn bắt đầu từ mức độ vừa phải." },
    ],
    needConsult: [
      "Nếu mặt đang to do xương hoặc do mỡ nhiều, chỉ chỉnh cằm có thể không phải hướng chính.",
      "Khách có kỳ vọng cằm quá nhọn hoặc khác hẳn gương mặt thật cần trao đổi kỹ hơn trước khi quyết định.",
      "Vùng cằm đang có kích ứng hoặc từng can thiệp trước đó nên được xem kỹ thêm.",
      "Nếu bạn thích một dáng cằm trên ảnh mẫu, vẫn cần kiểm tra xem nó có hợp với tỷ lệ mặt thật hay không.",
    ],
    advisoryPoints: [
      "Uyn thường xem cằm trong mối liên hệ với môi, mũi và đường viền hàm để tránh chỉnh một điểm mà làm tổng thể mất mềm mại.",
      "Khách cũng được hỏi rõ là muốn mặt thanh hơn ở đâu, vì có người thực ra cần cân phần hàm hoặc má hơn là phần cằm.",
      "Khi tư vấn đúng vùng cần chỉnh, kết quả thường nhìn nhẹ nhưng lại đủ để gương mặt hài hòa hơn.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn về tỷ lệ mặt", description: "Hiểu xem khách muốn gọn góc nghiêng, cân phần cằm hay tạo cảm giác thanh hơn ở điểm nào." },
      { title: "Xem cấu trúc gương mặt", description: "Kiểm tra phần cằm hiện tại và mối liên hệ với môi, mũi, hàm." },
      { title: "Chọn phương án vừa đủ", description: "Mức độ can thiệp được chốt theo tổng thể thay vì tách riêng phần cằm." },
      { title: "Chuẩn bị vùng thực hiện", description: "Giữ vùng cằm ổn định và sạch trước khi bắt đầu." },
      { title: "Thực hiện theo tỷ lệ đã tư vấn", description: "Đi theo hướng cân tổng thể để sau ổn định vẫn mềm và tự nhiên." },
      { title: "Theo dõi sau làm", description: "Dặn kỹ về cảm giác ban đầu, mốc ổn định và cách quan sát gương mặt theo từng ngày đầu." },
    ],
    expectedResults: [
      "Nếu phù hợp, filler cằm có thể giúp góc nghiêng nhìn cân hơn và gương mặt có điểm chốt nhẹ nhàng hơn.",
      "Mục tiêu của Uyn không phải tạo cằm thật nhọn, mà là làm cho tổng thể hài hòa hơn so với cấu trúc thật.",
      "Kết quả có thể khác nhau tùy cơ địa, cấu trúc gương mặt và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Hạn chế tác động mạnh lên vùng cằm trong giai đoạn đầu để tránh làm mình lo lắng quá mức về dáng đang thay đổi.",
      "Theo dõi gương mặt ở trạng thái bình thường thay vì liên tục so với ảnh mẫu từng giờ.",
      "Nếu có thắc mắc về độ cân hoặc cảm giác vùng làm, nên nhắn lại để được hướng dẫn đúng hơn.",
      "Giữ sinh hoạt nhẹ nhàng theo những gì đã được dặn sau buổi thực hiện.",
    ],
    pricingFactors: [
      "Mức độ cần cân chỉnh của phần cằm hiện tại.",
      "Tổng thể gương mặt và mục tiêu mong muốn của khách.",
      "Lượng sản phẩm phù hợp sau khi tư vấn trực tiếp.",
    ],
    faqQuestions: [
      "Filler cằm giữ được bao lâu?",
      "Sau filler cằm có cần kiêng gì không?",
      "Bao lâu thì cằm nhìn tự nhiên hơn?",
      "Nếu cằm ngắn nhẹ thì có cần làm nhiều không?",
      "Filler cằm có làm gương mặt bị cứng không?",
      "Có thể chỉ chỉnh rất nhẹ không?",
    ],
    priceFrom: "Tư vấn theo lượng cc",
    priceNote: "Mức giá phụ thuộc vào hướng cân chỉnh thực tế sau tư vấn.",
    relatedServiceSlugs: ["filler-moi-vung-tau", "filler-ma-baby-vung-tau", "botox-gon-ham-vung-tau"],
  },
  {
    slug: "filler-ranh-cuoi-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Filler rãnh cười Vũng Tàu",
    seoTitle: "Filler rãnh cười Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Filler rãnh cười Vũng Tàu tại Chòi của Uyn hỗ trợ làm mềm vùng rãnh cười theo hướng tự nhiên và hài hòa.",
    shortDescription:
      "Hỗ trợ làm mềm vùng rãnh cười, giúp gương mặt trông tươi và đỡ mệt mỏi hơn.",
    heroSubtitle:
      "Filler rãnh cười theo hướng làm mềm cảm giác mệt ở vùng quanh miệng khi cấu trúc gương mặt phù hợp với dịch vụ này.",
    heroImage: sharedServiceImages.heroFiller,
    overviewAngle:
      "Filler rãnh cười thường được tìm khi khách thấy gương mặt trông mệt hoặc nặng ở vùng quanh miệng dù không hẳn đang mệt thật.",
    concernContext:
      "Rãnh cười rõ làm nhiều khách cảm giác mình nhìn đứng tuổi hoặc thiếu sức sống hơn trong ánh sáng bình thường và ảnh chụp gần.",
    naturalDirection:
      "Điều Uyn hướng tới là làm mềm cảm giác vùng đó, không làm gương mặt bị đầy quá mức hay thay đổi biểu cảm tự nhiên.",
    suitableFor: [
      { title: "Rãnh cười rõ", detail: "Phù hợp với khách thấy vùng quanh miệng tạo cảm giác mệt hoặc tối hơn mong muốn." },
      { title: "Mặt trông mệt dù ngủ đủ", detail: "Một số người cảm nhận rõ điều này nhất khi chụp ảnh hoặc nhìn nghiêng." },
      { title: "Vùng quanh miệng thiếu độ đầy", detail: "Khi cấu trúc phù hợp, việc cân chỉnh nhẹ có thể giúp vùng này mềm hơn." },
      { title: "Muốn cải thiện nhẹ nét mặt", detail: "Khách thích sự thay đổi kín đáo thường quan tâm nhiều đến dịch vụ này." },
    ],
    needConsult: [
      "Không phải rãnh cười nào cũng cùng một nguyên nhân, nên cần xem trực tiếp trước khi quyết định.",
      "Nếu nền gương mặt gầy hoặc có độ chùng khác vùng, cần tư vấn kỹ hơn để tránh đặt sai kỳ vọng.",
      "Khách muốn vùng quanh miệng đầy quá nhiều có thể khiến tổng thể mất tự nhiên, nên cần trao đổi trước.",
      "Đang trong giai đoạn vùng quanh miệng có kích ứng hoặc can thiệp gần đây thì nên kiểm tra kỹ hơn.",
    ],
    advisoryPoints: [
      "Uyn thường xem rãnh cười trong toàn bộ vùng má, khóe miệng và thần thái chung, chứ không chỉ nhìn mỗi đường rãnh.",
      "Khách được giải thích rõ rằng mục tiêu là làm mềm cảm giác mệt và nặng chứ không phải biến mất hoàn toàn mọi dấu vết ngay lập tức.",
      "Khi hiểu điều này, khách thường thấy dễ chịu hơn với kỳ vọng và cũng hợp với phong cách làm đẹp vừa đủ hơn.",
    ],
    processSteps: [
      { title: "Trao đổi điều khách đang thấy khó chịu nhất", description: "Có người khó chịu vì nhìn mệt, có người vì nếp rãnh lên ảnh rõ hơn ngoài đời." },
      { title: "Phân tích vùng rãnh cười và má", description: "Xem nguyên nhân thật nằm ở đâu để không chọn dịch vụ theo cảm giác." },
      { title: "Chốt mức độ chỉnh nhẹ", description: "Ưu tiên làm mềm tổng thể chứ không làm đầy quá tay." },
      { title: "Chuẩn bị vùng thực hiện", description: "Giữ vùng ổn định và sạch trước khi can thiệp." },
      { title: "Thực hiện theo hướng đã tư vấn", description: "Giữ trọng tâm ở sự hài hòa của biểu cảm sau ổn định." },
      { title: "Theo dõi sau làm", description: "Dặn kỹ cách quan sát gương mặt trong vài ngày đầu và khi nào nên xem lại." },
    ],
    expectedResults: [
      "Khi phù hợp, gương mặt có thể nhìn tươi hơn, đỡ mệt và nhẹ hơn ở vùng quanh miệng mà vẫn giữ biểu cảm tự nhiên.",
      "Hiệu quả đẹp nhất thường là khi người đối diện chỉ thấy bạn trông tươi hơn, chứ không nhận ra ngay bạn đã chỉnh một vùng cụ thể.",
      "Kết quả có thể khác nhau tùy cơ địa, cấu trúc gương mặt và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi cảm giác vùng quanh miệng theo hướng dẫn và tránh tác động mạnh trong giai đoạn đầu.",
      "Đừng vội đánh giá nét mặt cuối cùng khi vùng làm chưa ổn định hoàn toàn.",
      "Nếu thấy điều gì chưa yên tâm về biểu cảm hoặc độ cân, nên nhắn lại để được xem thêm.",
      "Giữ nhịp sinh hoạt nhẹ nhàng và tránh tự so quá nhiều với ảnh mẫu trên mạng.",
    ],
    pricingFactors: [
      "Mức độ rãnh cười hiện tại và nguyên nhân chính của vùng này.",
      "Tổng thể gương mặt và vùng má liên quan.",
      "Phương án cân chỉnh phù hợp sau khi xem trực tiếp.",
    ],
    faqQuestions: [
      "Filler rãnh cười giữ được bao lâu?",
      "Làm xong có bị đầy quá nhìn lạ không?",
      "Bao lâu vùng này nhìn mềm hơn?",
      "Nếu mặt gầy thì có phù hợp không?",
      "Sau làm cần chú ý điều gì?",
      "Có thể làm rất nhẹ để nhìn đỡ mệt thôi không?",
    ],
    priceFrom: "Tư vấn theo lượng cc",
    priceNote: "Giá nên được báo sau khi xem đúng nguyên nhân của vùng rãnh cười.",
    relatedServiceSlugs: ["filler-ma-baby-vung-tau", "filler-cam-vung-tau", "botox-xoa-nhan-vung-tau"],
  },
  {
    slug: "filler-ma-baby-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Filler má baby Vũng Tàu",
    seoTitle: "Filler má baby Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Filler má baby Vũng Tàu tại Chòi của Uyn hỗ trợ tạo cảm giác gương mặt đầy đặn và mềm mại hơn khi phù hợp.",
    shortDescription:
      "Hỗ trợ tạo cảm giác gương mặt đầy đặn, mềm mại và trẻ trung hơn khi phù hợp.",
    heroSubtitle:
      "Filler má baby theo hướng tạo độ đầy vừa phải để gương mặt mềm hơn, không làm phần má quá căng hoặc thiếu tự nhiên.",
    heroImage: sharedServiceImages.heroFiller,
    overviewAngle:
      "Filler má baby thường được khách để ý khi gương mặt có cảm giác hơi gầy, má hóp nhẹ hoặc thiếu độ mềm ở nửa giữa khuôn mặt.",
    concernContext:
      "Một số người dù còn trẻ nhưng nhìn gương mặt vẫn hơi mệt hoặc gầy vì phần má thiếu độ đầy khiến tổng thể bị khô nét hơn mong muốn.",
    naturalDirection:
      "Uyn ưu tiên hướng làm má mềm hơn một chút, giữ sự thanh thoát và tránh biến gương mặt thành quá đầy hoặc cứng ở vùng má.",
    suitableFor: [
      { title: "Má hóp nhẹ", detail: "Khách thấy gương mặt hơi gầy hoặc phần giữa mặt thiếu độ nâng đỡ nhẹ." },
      { title: "Mặt thiếu độ mềm", detail: "Phù hợp với người muốn tổng thể dịu và trẻ hơn nhưng không muốn thay đổi mạnh." },
      { title: "Gương mặt trông mệt", detail: "Khi phần má thiếu độ đầy, nét mặt đôi khi nhìn mệt hơn cả khi ngủ đủ." },
      { title: "Muốn tăng độ đầy vừa phải", detail: "Đây là nhóm khách hợp với phong cách làm đẹp kín đáo và có kiểm soát." },
    ],
    needConsult: [
      "Không phải gương mặt nào cũng cần làm đầy má. Có người chỉ cần chỉnh vùng khác là tổng thể đã cân hơn.",
      "Nếu mặt đã tròn hoặc phần má vốn đầy, cần tư vấn kỹ để tránh cảm giác nặng mặt sau làm.",
      "Khách kỳ vọng gương mặt thay đổi quá nhiều chỉ nhờ phần má cần được giải thích kỹ hơn.",
      "Nếu đã từng can thiệp ở vùng má trước đó, nên nói rõ để được xem phù hợp hơn.",
    ],
    advisoryPoints: [
      "Tư vấn má baby không tách riêng má khỏi phần còn lại của gương mặt. Uyn thường nhìn tổng thể từ thái dương, má đến rãnh cười để nhận ra vùng nào thật sự thiếu.",
      "Khách cũng được hỏi về kiểu gương mặt mình thích: mềm hơn, tươi hơn hay chỉ muốn đỡ hóp trong một vài góc nhìn.",
      "Khi chốt đúng mức độ vừa phải, vùng má có thể hỗ trợ nét mặt nhiều mà vẫn không để lộ cảm giác can thiệp quá tay.",
    ],
    processSteps: [
      { title: "Trao đổi cảm giác khách đang muốn cải thiện", description: "Tập trung vào chuyện khách thấy mặt mình gầy, mệt hay thiếu độ mềm ở đâu." },
      { title: "Xem cấu trúc vùng má", description: "Đánh giá độ đầy hiện tại và mối liên hệ với rãnh cười, cằm, hàm." },
      { title: "Chốt mức độ làm đầy vừa đủ", description: "Giữ mục tiêu mềm và trẻ trung hơn chứ không làm má quá căng." },
      { title: "Chuẩn bị vùng thực hiện", description: "Giữ vùng má sạch và sẵn sàng cho bước thực hiện." },
      { title: "Thực hiện theo hướng hài hòa", description: "Đi theo mức độ đã thống nhất để tổng thể sau ổn định vẫn tự nhiên." },
      { title: "Theo dõi sau làm", description: "Dặn khách cách quan sát vùng má trong những ngày đầu và khi nào nên liên hệ lại." },
    ],
    expectedResults: [
      "Nếu phù hợp, gương mặt có thể nhìn mềm hơn, bớt hốc hác và trẻ hơn ở cảm giác tổng thể.",
      "Kết quả đẹp nhất thường là khi vùng má hỗ trợ thần thái chung một cách kín đáo, không khiến người khác nhận ra ngay bạn đã làm gì.",
      "Kết quả có thể khác nhau tùy cơ địa, cấu trúc gương mặt và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi vùng má theo đúng hướng dẫn và tránh tác động mạnh lên vùng vừa làm.",
      "Không đánh giá quá sớm về độ đầy cuối cùng khi giai đoạn đầu còn đang thay đổi.",
      "Nhắn lại nếu thấy điều gì làm bạn chưa yên tâm về độ cân hoặc cảm giác gương mặt.",
      "Duy trì sinh hoạt nhẹ nhàng theo những lưu ý đã được dặn sau buổi làm.",
    ],
    pricingFactors: [
      "Độ hóp hoặc thiếu đầy của vùng má hiện tại.",
      "Mục tiêu mong muốn về thần thái và tổng thể gương mặt.",
      "Lượng sản phẩm thực tế sau khi tư vấn.",
    ],
    faqQuestions: [
      "Filler má baby có làm mặt bị tròn quá không?",
      "Bao lâu thì má nhìn tự nhiên hơn?",
      "Nếu má hóp nhẹ thôi thì có cần làm không?",
      "Sau làm có cần kiêng gì không?",
      "Hiệu quả giữ được bao lâu?",
      "Có thể làm rất nhẹ để chỉ đỡ hốc không?",
    ],
    priceFrom: "Tư vấn theo lượng cc",
    priceNote: "Nên xem trực tiếp để quyết định mức độ phù hợp của vùng má.",
    relatedServiceSlugs: ["filler-ranh-cuoi-vung-tau", "filler-cam-vung-tau", "botox-gon-ham-vung-tau"],
  },
  {
    slug: "botox-gon-ham-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Botox gọn hàm Vũng Tàu",
    seoTitle: "Botox gọn hàm Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Botox gọn hàm Vũng Tàu tại Chòi của Uyn hỗ trợ làm gọn vùng hàm khi cơ hàm phù hợp với dịch vụ.",
    shortDescription:
      "Hỗ trợ làm gọn vùng hàm trong trường hợp cơ hàm phù hợp, theo hướng tự nhiên.",
    heroSubtitle:
      "Botox gọn hàm được tư vấn theo đúng nguyên nhân của vùng mặt to hay vuông, để khách hiểu khi nào dịch vụ này hợp và khi nào không.",
    heroImage: sharedServiceImages.botox,
    overviewAngle:
      "Botox gọn hàm là dịch vụ nhiều khách biết tên, nhưng cũng là dịch vụ rất dễ bị hiểu sai nếu không phân biệt rõ mặt to do cơ, do xương hay do mỡ.",
    concernContext:
      "Khách thường tìm dịch vụ này khi thấy mặt vuông, cơ hàm nổi rõ hoặc muốn phần dưới gương mặt nhìn mềm hơn mà không can thiệp phẫu thuật.",
    naturalDirection:
      "Uyn chỉ tư vấn botox gọn hàm khi nhìn ra phần cơ hàm thực sự là yếu tố cần xử lý, để kết quả đi đúng với vấn đề thật.",
    suitableFor: [
      { title: "Cơ hàm to do nhai hoặc cắn mạnh", detail: "Đây là nhóm khách phù hợp nhất với hướng tư vấn botox gọn hàm." },
      { title: "Mặt vuông chủ yếu do phần cơ", detail: "Nếu độ vuông đến từ cơ nhiều hơn, botox có thể là lựa chọn đáng cân nhắc." },
      { title: "Muốn gọn hàm tự nhiên", detail: "Phù hợp với người thích thay đổi nhẹ, không muốn gương mặt bị khác quá nhanh." },
      { title: "Không muốn phẫu thuật", detail: "Đây là lý do nhiều khách bắt đầu tìm hiểu botox gọn hàm trước tiên." },
    ],
    needConsult: [
      "Nếu mặt to chủ yếu do xương hoặc mô mỡ, botox gọn hàm có thể không phải lựa chọn chính.",
      "Khách muốn thấy mặt thay đổi thật nhanh hoặc quá nhiều chỉ sau một bước cần được tư vấn lại kỳ vọng.",
      "Người có tiền sử phản ứng đặc biệt hoặc vùng hàm từng can thiệp trước đó nên trao đổi kỹ hơn.",
      "Nếu đang trong giai đoạn sức khỏe đặc biệt, nên hỏi ý kiến chuyên môn trước khi làm dịch vụ có can thiệp.",
    ],
    advisoryPoints: [
      "Phần tư vấn của botox gọn hàm tập trung khá nhiều vào việc sờ, nhìn và phân tích cơ hàm thật chứ không chỉ nhìn mỗi khuôn mặt trong ảnh.",
      "Uyn cũng thường giải thích rằng có nhiều nguyên nhân làm mặt trông to hơn, nên không phải ai cũng nên chọn cùng một dịch vụ.",
      "Sự trung thực ở phần này rất quan trọng vì nó giúp khách tránh được kỳ vọng sai và quyết định dựa trên nguyên nhân thật.",
    ],
    processSteps: [
      { title: "Trao đổi điều khách mong muốn", description: "Hiểu xem khách muốn mặt gọn hơn ở đâu và mức độ thay đổi nào khiến khách thấy thoải mái." },
      { title: "Xem cơ hàm thực tế", description: "Phân tích xem phần cơ có phải nguyên nhân chính tạo cảm giác mặt vuông hay không." },
      { title: "Tư vấn nếu phù hợp hoặc không phù hợp", description: "Nói rõ botox có phải lựa chọn chính hay cần hướng khác phù hợp hơn." },
      { title: "Chuẩn bị vùng hàm", description: "Giữ vùng thực hiện ổn định trước khi bắt đầu." },
      { title: "Thực hiện theo phương án đã chốt", description: "Đi theo mức độ vừa đủ để tổng thể gương mặt vẫn tự nhiên sau khi thay đổi." },
      { title: "Dặn theo dõi và chăm sóc", description: "Giải thích mốc thời gian, phản ứng có thể gặp và chuyện cần lưu ý sau làm." },
    ],
    expectedResults: [
      "Khi nguyên nhân thật nằm ở cơ hàm, botox gọn hàm có thể giúp phần dưới gương mặt nhìn gọn và mềm hơn theo thời gian.",
      "Kết quả đẹp thường là khi người khác thấy bạn trông thanh hơn một chút, chứ không phải thay đổi quá đột ngột.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng cơ hàm và cách theo dõi sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi cảm giác vùng hàm và giữ nhịp sinh hoạt theo đúng hướng dẫn sau buổi làm.",
      "Không tự đánh giá quá sớm khi hiệu quả của botox chưa đến đúng giai đoạn thể hiện rõ hơn.",
      "Nếu còn phân vân chuyện mặt mình to do xương hay do cơ, nên nhắn lại để được giải thích rõ hơn sau buổi tư vấn.",
      "Giữ kỳ vọng thực tế và quan sát thay đổi theo mốc thay vì so mỗi ngày.",
    ],
    pricingFactors: [
      "Tình trạng cơ hàm thực tế sau khi xem trực tiếp.",
      "Liều lượng phù hợp với mức độ cơ hàm của từng khách.",
      "Mục tiêu thay đổi nhẹ hay rõ hơn trong giới hạn tự nhiên.",
    ],
    faqQuestions: [
      "Botox gọn hàm bao lâu thấy hiệu quả?",
      "Hiệu quả giữ được bao lâu?",
      "Có cần tiêm lại không?",
      "Mặt to do xương có gọn được không?",
      "Sau tiêm cần lưu ý gì?",
      "Nếu chỉ muốn gọn rất nhẹ thì có phù hợp không?",
    ],
    priceFrom: "Tư vấn theo liều",
    priceNote: "Nếu mặt to do xương hoặc mỡ, botox gọn hàm có thể không phải lựa chọn chính.",
    relatedServiceSlugs: ["botox-xoa-nhan-vung-tau", "filler-cam-vung-tau", "combo-gon-mat-vung-tau"],
  },
  {
    slug: "botox-xoa-nhan-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Botox xóa nhăn Vũng Tàu",
    seoTitle: "Botox xóa nhăn Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Botox xóa nhăn Vũng Tàu tại Chòi của Uyn hỗ trợ làm mềm các nếp nhăn động theo hướng gương mặt thư giãn hơn.",
    shortDescription:
      "Hỗ trợ làm mềm các nếp nhăn động như trán, cau mày, đuôi mắt khi phù hợp.",
    heroSubtitle:
      "Botox xóa nhăn theo hướng làm gương mặt thư giãn hơn ở các vùng nhăn động như trán, cau mày hoặc đuôi mắt khi phù hợp.",
    heroImage: sharedServiceImages.botox,
    overviewAngle:
      "Botox xóa nhăn thường được tìm đến khi khách muốn gương mặt nhìn bớt căng và bớt mệt ở các vùng có nếp động.",
    concernContext:
      "Những nếp ở trán, cau mày hoặc đuôi mắt đôi khi khiến thần thái nhìn mệt hơn, kể cả khi khách chưa muốn can thiệp nhiều vào các đường nét khác.",
    naturalDirection:
      "Ở Chòi của Uyn, hướng làm luôn là làm mềm biểu cảm quá căng chứ không làm gương mặt mất hết cảm xúc tự nhiên.",
    suitableFor: [
      { title: "Nếp nhăn trán khi nhướng mày", detail: "Khách thấy vùng trán dễ hằn khi biểu cảm hoặc lên ảnh gần." },
      { title: "Nếp cau mày", detail: "Một số người trông luôn hơi căng mặt chỉ vì vùng này hoạt động rõ." },
      { title: "Nếp đuôi mắt khi cười", detail: "Khách muốn làm mềm nét này theo hướng giữ nụ cười tự nhiên." },
      { title: "Muốn gương mặt thư giãn hơn", detail: "Phù hợp với người muốn thay đổi nhẹ ở thần thái chứ không cần chỉnh quá nhiều điểm." },
    ],
    needConsult: [
      "Không phải mọi nếp đều cần xử lý, nên cần xem mức độ thực tế và mong muốn thật của khách.",
      "Khách muốn mặt “đơ hẳn” hoặc mất hoàn toàn mọi nếp biểu cảm cần được tư vấn lại để giữ hướng tự nhiên.",
      "Vùng cần làm đang nhạy cảm hoặc có can thiệp gần đây nên được kiểm tra kỹ thêm.",
      "Nếu đang trong giai đoạn sức khỏe đặc biệt, nên hỏi ý kiến chuyên môn trước.",
    ],
    advisoryPoints: [
      "Uyn thường xem biểu cảm gương mặt ở trạng thái bình thường và khi cười hoặc nhướng mày để hiểu phần nào đang tạo cảm giác căng nhất.",
      "Khách cũng được nói rõ rằng mục tiêu là làm mềm chứ không phải xóa sạch mọi dấu hiệu biểu cảm.",
      "Khi hiểu cách tiếp cận này, khách thường thấy yên tâm hơn vì vẫn muốn gương mặt giữ được sự linh hoạt tự nhiên.",
    ],
    processSteps: [
      { title: "Trao đổi vùng khiến khách thấy khó chịu", description: "Có người chỉ khó chịu với vùng cau mày, có người lại để ý nhất ở đuôi mắt khi cười." },
      { title: "Xem nếp nhăn động thực tế", description: "Quan sát vùng nhăn khi gương mặt biểu cảm thay vì chỉ nhìn ảnh tĩnh." },
      { title: "Chốt mức độ làm mềm", description: "Giữ mục tiêu thư giãn hơn nhưng vẫn có nét tự nhiên." },
      { title: "Chuẩn bị vùng thực hiện", description: "Giữ vùng làm sạch và ổn định trước khi bắt đầu." },
      { title: "Thực hiện theo hướng đã tư vấn", description: "Đi theo phương án vừa đủ để sau ổn định gương mặt vẫn mềm." },
      { title: "Dặn theo dõi sau làm", description: "Giải thích mốc thời gian và cách quan sát vùng nhăn theo từng giai đoạn." },
    ],
    expectedResults: [
      "Gương mặt có thể nhìn thư giãn hơn, nhẹ hơn ở những vùng biểu cảm đang tạo cảm giác căng hoặc mệt.",
      "Kết quả đẹp là khi người đối diện chỉ thấy bạn trông dịu hơn chứ không cảm giác gương mặt bị mất biểu cảm tự nhiên.",
      "Kết quả có thể khác nhau tùy cơ địa, vùng thực hiện và cách theo dõi sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi biểu cảm gương mặt theo mốc được dặn thay vì đánh giá ngay trong ngày đầu.",
      "Giữ sinh hoạt nhẹ nhàng theo hướng dẫn sau buổi làm.",
      "Nếu còn băn khoăn về độ thư giãn của vùng nhăn, nên nhắn lại để được giải thích thêm.",
      "Đừng so sánh quá cứng với ảnh mẫu vì biểu cảm tự nhiên của mỗi người rất khác nhau.",
    ],
    pricingFactors: [
      "Vùng cần làm là trán, cau mày, đuôi mắt hay kết hợp nhiều vùng.",
      "Mức độ nếp nhăn động thực tế khi kiểm tra.",
      "Liều lượng phù hợp sau buổi tư vấn.",
    ],
    faqQuestions: [
      "Botox xóa nhăn bao lâu thấy rõ hơn?",
      "Sau làm có bị mất tự nhiên không?",
      "Hiệu quả giữ được bao lâu?",
      "Nếu chỉ làm một vùng nhỏ thì có được không?",
      "Cần lưu ý gì sau khi làm?",
      "Có phải ai có nếp trán cũng nên làm không?",
    ],
    priceFrom: "Tư vấn theo vùng và liều",
    priceNote: "Cần xem nếp nhăn động thực tế trước khi chốt phương án.",
    relatedServiceSlugs: ["botox-gon-ham-vung-tau", "filler-ranh-cuoi-vung-tau", "meso-phuc-hoi-da-vung-tau"],
  },
  {
    slug: "meso-cang-bong-cap-am-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Meso căng bóng cấp ẩm Vũng Tàu",
    seoTitle: "Meso căng bóng cấp ẩm Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Meso căng bóng cấp ẩm Vũng Tàu tại Chòi của Uyn hỗ trợ cấp ẩm, làm da mịn và căng bóng nhẹ theo tình trạng da thật.",
    shortDescription:
      "Hỗ trợ cấp ẩm, làm da mịn và căng bóng nhẹ hơn theo tình trạng nền da.",
    heroSubtitle:
      "Meso căng bóng được tư vấn theo nền da thật để tăng độ ẩm, độ mịn và cảm giác da khỏe hơn theo hướng vừa phải.",
    heroImage: sharedServiceImages.meso,
    overviewAngle:
      "Meso căng bóng thường được quan tâm khi khách thấy da thiếu nước, xỉn màu hoặc thiếu độ mịn dù chăm ở nhà khá đều.",
    concernContext:
      "Da thiếu ẩm không chỉ khô mà còn dễ làm bề mặt nhìn xám, make up khó ăn và cảm giác da không có sức sống như mong muốn.",
    naturalDirection:
      "Uyn tư vấn meso theo hướng phục hồi độ ẩm và độ căng nhẹ, không quảng cáo theo kiểu da phải bóng gương ngay lập tức cho mọi nền da.",
    suitableFor: [
      { title: "Da thiếu ẩm", detail: "Da thiếu nước thường nhìn mệt, bề mặt không mịn và dễ thiếu độ bóng khỏe." },
      { title: "Da xỉn màu", detail: "Khi nền da thiếu sức sống, meso cấp ẩm có thể được cân nhắc nếu da phù hợp." },
      { title: "Da kém mịn", detail: "Bề mặt da không đều và thiếu cảm giác căng thường là lý do khách tìm đến dịch vụ này." },
      { title: "Da cần phục hồi nhẹ", detail: "Phù hợp với người muốn chăm theo hướng da khỏe hơn chứ không chỉ đẹp trong một ngày." },
    ],
    needConsult: [
      "Da đang quá yếu, kích ứng mạnh hoặc viêm nhiều nên được xem kỹ trước khi quyết định meso.",
      "Khách có da mụn cần tư vấn trước để biết mình có phù hợp làm ngay hay nên xử lý nền trước.",
      "Nếu đang kỳ vọng da phải đẹp tức thì ngay sau một buổi, nên điều chỉnh lại cách nhìn về tiến trình của da.",
      "Những nền da rất nhạy nên được giải thích kỹ hơn về phản ứng thường gặp sau buổi làm.",
    ],
    advisoryPoints: [
      "Phần tư vấn meso cấp ẩm thường không chỉ nhìn da có khô hay không mà còn xem hàng rào da, lịch sử treatment và cách chăm da hiện tại.",
      "Uyn sẽ nói rõ nếu da đang cần phục hồi trước, vì cấp ẩm chỉ hiệu quả bền khi nền da đủ ổn để tiếp nhận.",
      "Khi chọn đúng thời điểm và đúng nền da, meso mới đi theo hướng căng mịn nhẹ nhàng và giữ được cảm giác tự nhiên lâu hơn.",
    ],
    processSteps: [
      { title: "Xem nền da và thói quen chăm da", description: "Hiểu da đang thiếu ẩm ở mức nào và hiện tại routine ở nhà ra sao." },
      { title: "Kiểm tra mức độ phù hợp", description: "Xác định da có nên làm meso ngay hay cần ổn định nền trước." },
      { title: "Chốt hướng chăm da", description: "Giải thích mục tiêu của buổi làm là da ẩm và mịn hơn theo nền thật." },
      { title: "Làm sạch và chuẩn bị da", description: "Chuẩn bị bề mặt da phù hợp cho phần thực hiện." },
      { title: "Thực hiện theo nền da", description: "Đi đúng với tình trạng da chứ không áp mức can thiệp giống nhau cho mọi khách." },
      { title: "Dặn chăm sóc sau meso", description: "Hướng dẫn rõ chuyện đỏ nhẹ, chống nắng, dưỡng ẩm và mốc theo dõi." },
    ],
    expectedResults: [
      "Sau khi ổn định, da có thể nhìn ẩm hơn, mịn hơn và sáng khỏe hơn theo đúng nền da của từng khách.",
      "Cảm giác “căng bóng” nên được hiểu là da có sức sống và độ ẩm tốt hơn, không phải bóng kiểu quá mức hoặc giả cảm giác da khỏe.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Chống nắng kỹ và giữ da ẩm theo hướng dẫn để nền da hồi phục nhẹ nhàng hơn sau buổi meso.",
      "Không treatment mạnh ngay nếu chưa được dặn rõ, đặc biệt khi da còn hơi đỏ hoặc đang nhạy cảm hơn bình thường.",
      "Theo dõi phản ứng của da theo mốc được dặn và nhắn lại nếu có điều gì khiến bạn chưa yên tâm.",
      "Giữ kỳ vọng thực tế: da đẹp hơn khi được chăm đều sau buổi làm, không phải chỉ nhờ một bước can thiệp đơn lẻ.",
    ],
    pricingFactors: [
      "Tình trạng da thiếu ẩm ở mức nào và có đi kèm nền da yếu hay không.",
      "Khách làm theo buổi lẻ hay theo nhịp chăm da có theo dõi.",
      "Mức độ cần phục hồi và mục tiêu mong muốn sau tư vấn.",
    ],
    faqQuestions: [
      "Meso căng bóng có đau không?",
      "Làm xong da đỏ bao lâu?",
      "Da mụn có làm meso được không?",
      "Cần làm mấy buổi?",
      "Sau meso cần chăm sóc thế nào?",
      "Nếu da nhạy cảm thì có nên làm không?",
    ],
    priceFrom: "Từ 800.000đ/buổi",
    priceNote: "Tùy nền da và mục tiêu chăm da sau khi tư vấn.",
    relatedServiceSlugs: ["meso-phuc-hoi-da-vung-tau", "phuc-hoi-da-yeu-vung-tau", "cham-soc-da-mun-vung-tau"],
  },
  {
    slug: "meso-phuc-hoi-da-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Meso phục hồi da Vũng Tàu",
    seoTitle: "Meso phục hồi da Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Meso phục hồi da Vũng Tàu tại Chòi của Uyn hỗ trợ nền da yếu, thiếu ẩm, dễ kích ứng hoặc kém sức sống.",
    shortDescription:
      "Hỗ trợ phục hồi nền da yếu, thiếu ẩm, dễ kích ứng hoặc kém sức sống.",
    heroSubtitle:
      "Meso phục hồi da được tư vấn cho nền da đang mệt, dễ đỏ hoặc mất sức sống, theo hướng ổn định da trước khi nghĩ đến những bước mạnh hơn.",
    heroImage: sharedServiceImages.heroMeso,
    overviewAngle:
      "Meso phục hồi da thường phù hợp với những nền da đang yếu đi sau giai đoạn treatment sai, thiếu ẩm kéo dài hoặc dễ kích ứng lặp lại.",
    concernContext:
      "Khi da đang mệt, khách thường thấy da đỏ nhẹ, thiếu độ căng, skincare khó ổn định và càng cố treatment lại càng dễ xuống nền hơn.",
    naturalDirection:
      "Uyn xem đây là dịch vụ đi theo hướng da khỏe lại trước, chứ không phải ép da đẹp nhanh khi hàng rào da còn đang yếu.",
    suitableFor: [
      { title: "Da yếu sau treatment sai", detail: "Da từng bị đẩy nhanh quá mức thường cần thời gian và nhịp chăm đúng để hồi lại." },
      { title: "Da thiếu ẩm kéo dài", detail: "Nền da mất ẩm lâu ngày dễ nhìn xỉn, dễ căng rát hoặc khó giữ trạng thái ổn định." },
      { title: "Da dễ kích ứng", detail: "Phù hợp với khách cảm giác da hay phản ứng dù dùng sản phẩm không quá mạnh." },
      { title: "Da thiếu sức sống", detail: "Một số nền da không quá mụn nhưng nhìn mệt, mỏng và khó phục hồi khi chăm ở nhà." },
    ],
    needConsult: [
      "Nếu da đang viêm rõ hoặc có phản ứng mạnh bất thường, cần được đánh giá kỹ hơn trước khi làm.",
      "Da vừa treatment hoặc peel gần đây có thể cần chờ thêm để nền ổn hơn.",
      "Khách đang dùng nhiều hoạt chất mạnh nên nói rõ để được hướng dẫn nhịp nghỉ hợp lý.",
      "Nếu kỳ vọng da phải đẹp ngay sau một buổi, nên trao đổi trước để giữ góc nhìn thực tế hơn với nền da yếu.",
    ],
    advisoryPoints: [
      "Tư vấn của meso phục hồi tập trung vào chuyện da đang yếu ở đâu, vì sao yếu và hiện tại da đang chịu được đến mức nào.",
      "Uyn cũng thường chỉnh lại cách nhìn của khách: da yếu không nên bị thúc đi nhanh hơn khả năng phục hồi thật của nó.",
      "Khi chấp nhận đi đúng nhịp, khách thường thấy yên tâm hơn và cũng đỡ lặp lại vòng treatment sai khiến da càng yếu thêm.",
    ],
    processSteps: [
      { title: "Đánh giá nền da hiện tại", description: "Nhìn lại hàng rào da, độ nhạy, mức thiếu ẩm và lịch sử treatment gần đây." },
      { title: "Xác định mục tiêu phục hồi", description: "Làm rõ mục tiêu chính là ổn định nền da, giảm mệt da và tăng sức chịu đựng." },
      { title: "Chốt nhịp can thiệp phù hợp", description: "Đi theo mức độ nền da đang chịu được thay vì chạy theo tốc độ." },
      { title: "Chuẩn bị bề mặt da", description: "Làm sạch và giữ da ở trạng thái ổn định nhất trước khi thực hiện." },
      { title: "Thực hiện theo hướng phục hồi", description: "Ưu tiên sự nhẹ nhàng, đều nhịp và đúng với nền da yếu." },
      { title: "Dặn phục hồi tại nhà", description: "Hướng dẫn chuyện dưỡng, chống nắng và những gì nên giảm bớt trong routine." },
    ],
    expectedResults: [
      "Da có thể dần ổn định hơn, giảm cảm giác căng mệt, nhìn có sức sống hơn và dễ tiếp nhận chăm sóc sau này hơn.",
      "Đây là kiểu kết quả nên nhìn theo tiến trình, vì nền da yếu cần sự kiên nhẫn hơn những nền da đã khá ổn ngay từ đầu.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ routine nhẹ, dưỡng ẩm và chống nắng kỹ theo đúng hướng dẫn sau buổi làm.",
      "Không thêm treatment mạnh khi da chưa được dặn rõ, dù thấy da đang có vẻ ổn hơn.",
      "Theo dõi mức độ đỏ, căng hay khô của da theo từng ngày đầu để nhắn lại nếu cần.",
      "Nhìn da theo mốc tuần thay vì soi từng giờ để tránh áp lực không cần thiết lên chính mình.",
    ],
    pricingFactors: [
      "Mức độ yếu của nền da và lịch sử treatment trước đó.",
      "Mục tiêu là phục hồi theo buổi hay theo lộ trình có theo dõi.",
      "Khả năng đáp ứng của da sau tư vấn và kiểm tra nền.",
    ],
    faqQuestions: [
      "Da yếu có nên làm meso phục hồi không?",
      "Sau làm da đỏ bao lâu là bình thường?",
      "Có cần nghỉ treatment cũ trước không?",
      "Cần đi mấy buổi thì da đỡ mệt hơn?",
      "Routine ở nhà nên thay đổi như thế nào?",
      "Nếu da rất nhạy thì có thể làm rất nhẹ được không?",
    ],
    priceFrom: "Từ 900.000đ/buổi",
    priceNote: "Cần xem nền da thật để tư vấn nhịp phục hồi phù hợp.",
    relatedServiceSlugs: ["meso-cang-bong-cap-am-vung-tau", "phuc-hoi-da-yeu-vung-tau", "peel-da-vung-tau"],
  },
  {
    slug: "lay-nhan-mun-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Lấy nhân mụn Vũng Tàu",
    seoTitle: "Lấy nhân mụn Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Lấy nhân mụn Vũng Tàu tại Chòi của Uyn giúp làm sạch nhân mụn đúng cách và tư vấn chăm da theo nền da thật.",
    shortDescription:
      "Làm sạch nhân mụn đúng cách, hạn chế tự nặn sai khiến da dễ thâm và viêm hơn.",
    heroSubtitle:
      "Lấy nhân mụn theo tình trạng da thật, ưu tiên làm sạch đúng cách và giữ da bớt tổn thương hơn so với tự nặn không kiểm soát.",
    heroImage: sharedServiceImages.da,
    overviewAngle:
      "Lấy nhân mụn là bước nhiều khách nghĩ khá đơn giản, nhưng thực tế nếu làm sai lại dễ khiến da thâm, viêm hoặc kích ứng kéo dài hơn.",
    concernContext:
      "Khi da có mụn ẩn, đầu trắng, đầu đen hoặc bít tắc kéo dài, việc tự nặn ở nhà thường làm khách càng sốt ruột và da càng khó ổn.",
    naturalDirection:
      "Uyn đi theo hướng làm sạch đúng mức, đúng vùng và kết hợp nhìn nền da để khách không chỉ hết nhân tạm thời mà còn hiểu da mình cần gì tiếp theo.",
    suitableFor: [
      { title: "Mụn ẩn", detail: "Da có cảm giác sần, bề mặt không mịn và khó hấp thụ skincare." },
      { title: "Mụn đầu đen", detail: "Những vùng bít tắc rõ ở mũi hoặc quanh mặt thường khiến khách hay tự nặn sai." },
      { title: "Mụn đầu trắng", detail: "Khi xử lý không đúng cách, vùng này dễ viêm hoặc để lại thâm hơn mong muốn." },
      { title: "Da bít tắc", detail: "Lấy nhân mụn đúng lúc có thể là bước cần thiết trước khi nghĩ đến treatment khác." },
      { title: "Cần làm sạch trước treatment", detail: "Một số nền da cần được xử lý sạch hơn trước khi vào các bước chăm sâu hơn." },
    ],
    needConsult: [
      "Da đang viêm nhiều hoặc có phản ứng mạnh nên được xem kỹ hơn để chọn cách tiếp cận phù hợp.",
      "Khách có thói quen tự nặn thường cần được giải thích thêm để tránh tiếp tục làm da tổn thương.",
      "Nếu da quá nhạy hoặc đang treatment mạnh, cần điều chỉnh nhịp chăm sau buổi làm cho hợp lý.",
      "Mục tiêu không nên là lấy thật nhiều cho bằng sạch ngay, mà là đi theo nền da đang chịu được.",
    ],
    advisoryPoints: [
      "Uyn thường nhìn kỹ loại mụn, mức độ bít tắc và tình trạng hàng rào da trước khi quyết định cách làm sạch phù hợp.",
      "Khách cũng được tư vấn rõ rằng lấy nhân mụn là một bước trong cả quá trình chăm da, chứ không phải xong buổi đó là mọi thứ tự hết vấn đề.",
      "Khi hiểu điều này, khách sẽ dễ phối hợp hơn ở bước chăm da sau đó và tránh lặp lại vòng tự nặn rồi nổi lại.",
    ],
    processSteps: [
      { title: "Xem loại mụn và mức bít tắc", description: "Đánh giá da đang có mụn ẩn, đầu đen, đầu trắng hay viêm nhẹ để chọn hướng xử lý." },
      { title: "Tư vấn nhịp làm sạch", description: "Nói rõ mục tiêu của buổi làm là sạch đúng cách chứ không phải lấy càng nhiều càng tốt." },
      { title: "Làm sạch và chuẩn bị da", description: "Chuẩn bị da nhẹ nhàng để hạn chế kích ứng không cần thiết." },
      { title: "Lấy nhân mụn theo vùng", description: "Đi theo từng vùng phù hợp với nền da thay vì cố xử lý hết mọi điểm trong một lần." },
      { title: "Làm dịu và ổn da", description: "Sau bước làm sạch, da được chăm theo hướng dịu hơn để giảm cảm giác căng hoặc đỏ." },
      { title: "Dặn chăm da sau buổi", description: "Hướng dẫn cách giữ da sạch, hạn chế sờ nặn và theo dõi phản ứng trong vài ngày đầu." },
    ],
    expectedResults: [
      "Da có thể sạch hơn ở phần bít tắc, bề mặt thoáng hơn và dễ đi tiếp các bước chăm da đúng hơn.",
      "Việc làm sạch đúng cách giúp hạn chế vòng lặp tự nặn sai rồi để lại thâm hoặc viêm kéo dài hơn.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ da sạch nhẹ nhàng và hạn chế sờ hoặc tự nặn tiếp sau buổi làm.",
      "Không treatment mạnh ngay nếu da đang còn đỏ hoặc nhạy hơn bình thường.",
      "Dưỡng ẩm và chống nắng đều để hạn chế da xuống nền hoặc dễ thâm hơn.",
      "Nếu da viêm lại hoặc có điểm khiến bạn lo, nên nhắn lại để được hướng dẫn thay vì tự xử lý tiếp ở nhà.",
    ],
    pricingFactors: [
      "Mức độ bít tắc và số vùng cần làm sạch.",
      "Da đang mụn ẩn nhẹ hay cần theo dõi nhiều buổi hơn.",
      "Nền da hiện tại có đang nhạy hoặc treatment mạnh hay không.",
    ],
    faqQuestions: [
      "Lấy nhân mụn có đau không?",
      "Lấy xong da đỏ bao lâu?",
      "Có bị thâm không?",
      "Bao lâu nên lấy nhân mụn lại?",
      "Da viêm nhiều có lấy được không?",
      "Sau buổi làm có nên tiếp tục treatment mạnh không?",
    ],
    priceFrom: "Từ 300.000đ/buổi",
    priceNote: "Tần suất và giá phù hợp nên được tư vấn theo nền da thực tế.",
    relatedServiceSlugs: ["cham-soc-da-mun-vung-tau", "peel-da-vung-tau", "meso-phuc-hoi-da-vung-tau"],
  },
  {
    slug: "cham-soc-da-mun-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Chăm sóc da mụn Vũng Tàu",
    seoTitle: "Chăm sóc da mụn Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Chăm sóc da mụn Vũng Tàu tại Chòi của Uyn theo tình trạng bít tắc, dầu, viêm nhẹ và nền da hiện tại của từng khách.",
    shortDescription:
      "Chăm sóc da mụn theo tình trạng bít tắc, dầu, viêm nhẹ và nền da hiện tại.",
    heroSubtitle:
      "Chăm sóc da mụn theo nền da thật, không treatment quá tay và luôn xem mụn đang ở giai đoạn nào trước khi chọn liệu trình.",
    heroImage: sharedServiceImages.da,
    overviewAngle:
      "Chăm sóc da mụn không chỉ là làm dịu nốt mụn nhìn thấy, mà còn là hiểu da đang bít tắc, tăng dầu hay yếu ở điểm nào.",
    concernContext:
      "Nhiều khách da mụn đã thử khá nhiều sản phẩm nhưng da vẫn lúc lên lúc xuống vì chưa nhìn đúng vấn đề chính của nền da.",
    naturalDirection:
      "Uyn ưu tiên hướng chăm mụn bình tĩnh, có theo dõi và không làm quá tay khiến da vừa nổi mụn vừa yếu hơn.",
    suitableFor: [
      { title: "Da dễ bít tắc", detail: "Da có cảm giác sần, nổi mụn ẩn hoặc đầu trắng lặp đi lặp lại." },
      { title: "Da tiết dầu nhiều", detail: "Lượng dầu và bít tắc thường đi cùng khiến khách thấy da khó ổn định." },
      { title: "Mụn viêm nhẹ", detail: "Những nền mụn chưa quá nặng nhưng kéo dài và dễ tái đi tái lại." },
      { title: "Muốn chăm theo tình trạng thật", detail: "Phù hợp với người muốn hiểu da mình hơn thay vì chỉ đổi sản phẩm liên tục." },
    ],
    needConsult: [
      "Nếu da viêm nhiều, đang kích ứng mạnh hoặc treatment quá mức, cần xem kỹ thêm trước khi chọn bước chăm tiếp theo.",
      "Khách đang dùng nhiều hoạt chất mạnh nên trao đổi rõ để điều chỉnh nhịp chăm da.",
      "Không nên kỳ vọng mụn ổn ngay sau một buổi nếu nền da còn bít tắc và hàng rào da chưa cân.",
      "Những trường hợp thói quen sinh hoạt ảnh hưởng nhiều đến mụn cũng cần được nhắc rõ để đi đường dài hơn.",
    ],
    advisoryPoints: [
      "Tư vấn da mụn ở Chòi của Uyn thường bắt đầu bằng việc nhìn loại mụn, mức dầu, độ nhạy của nền da và chuyện khách đang chăm da thế nào ở nhà.",
      "Có khách cần làm sạch lại nhịp skincare trước, có khách cần xử lý bít tắc, nhưng cũng có khách phải phục hồi hàng rào da trước rồi mới tính đến bước sâu hơn.",
      "Khi da mụn được nhìn đúng, khách sẽ đỡ cảm giác phải thử hết mọi thứ và dễ đi một lộ trình gọn hơn rất nhiều.",
    ],
    processSteps: [
      { title: "Xem tình trạng mụn thực tế", description: "Phân biệt mụn ẩn, bít tắc, dầu nhiều hay viêm nhẹ để chọn hướng chăm đúng." },
      { title: "Hỏi routine hiện tại", description: "Hiểu sản phẩm khách đang dùng và điểm nào có thể đang làm da rối hơn." },
      { title: "Chọn bước ưu tiên", description: "Có thể là làm sạch, làm dịu, phục hồi hoặc điều chỉnh nhịp treatment." },
      { title: "Tiến hành chăm da theo nền hiện tại", description: "Đi theo mức độ da đang chịu được để không làm yếu thêm nền da." },
      { title: "Hướng dẫn chăm tiếp ở nhà", description: "Nói rõ những thứ nên giữ, nên giảm và cách quan sát da sau buổi làm." },
      { title: "Theo dõi theo giai đoạn", description: "Da mụn cần được nhìn theo tiến trình chứ không đánh giá chỉ qua một ngày." },
    ],
    expectedResults: [
      "Da có thể sạch hơn, bớt bít tắc hơn và ổn định hơn theo từng giai đoạn nếu đi đúng nhịp chăm phù hợp.",
      "Mục tiêu không phải chỉ giảm mụn trước mắt mà còn là giúp nền da đỡ rối và đỡ tái vòng xử lý sai sau đó.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ routine nhẹ và đúng theo hướng dẫn, không đổi sản phẩm liên tục sau buổi làm.",
      "Hạn chế sờ hoặc nặn mụn tại nhà nếu chưa được hướng dẫn đúng.",
      "Chống nắng đều và giữ da đủ ẩm vì da mụn vẫn cần hàng rào da ổn định.",
      "Theo dõi da theo tuần và nhắn lại nếu mụn lên khác thường hoặc có điều khiến bạn thấy lo.",
    ],
    pricingFactors: [
      "Tình trạng da mụn hiện tại ở mức bít tắc, dầu hay viêm nhẹ.",
      "Khách cần làm theo buổi hay theo lộ trình theo dõi nhiều giai đoạn.",
      "Nền da đang khỏe hay đang yếu sau treatment sai.",
    ],
    faqQuestions: [
      "Da mụn có nên chăm chuyên sâu ngay không?",
      "Bao lâu thì thấy da ổn hơn?",
      "Có cần kết hợp lấy nhân mụn không?",
      "Routine ở nhà nên thay đổi thế nào?",
      "Da mụn có làm meso được không?",
      "Khi nào nên quay lại buổi tiếp theo?",
    ],
    priceFrom: "Từ 500.000đ/buổi",
    priceNote: "Giá phù hợp hơn khi xem da thực tế và mức độ chăm cần thiết.",
    relatedServiceSlugs: ["lay-nhan-mun-vung-tau", "meso-cang-bong-cap-am-vung-tau", "phuc-hoi-da-yeu-vung-tau"],
  },
  {
    slug: "phuc-hoi-da-yeu-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Phục hồi da yếu Vũng Tàu",
    seoTitle: "Phục hồi da yếu Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Phục hồi da yếu Vũng Tàu tại Chòi của Uyn dành cho làn da dễ đỏ, thiếu ẩm, kích ứng hoặc đang yếu sau treatment sai.",
    shortDescription:
      "Dành cho làn da dễ đỏ, thiếu ẩm, kích ứng hoặc đang yếu sau treatment sai cách.",
    heroSubtitle:
      "Phục hồi da yếu theo hướng ổn định hàng rào da, giảm cảm giác căng mệt và giúp da đủ sức quay lại nhịp chăm phù hợp hơn.",
    heroImage: sharedServiceImages.heroMeso,
    overviewAngle:
      "Phục hồi da yếu là điều nhiều khách cần nhưng thường phát hiện khá muộn, khi da đã bắt đầu đỏ, căng, châm chích hoặc phản ứng với quá nhiều thứ.",
    concernContext:
      "Có người da yếu sau treatment quá mạnh, có người do skincare chồng chéo, có người lại thiếu ẩm lâu ngày nên hàng rào da xuống dần mà không để ý.",
    naturalDirection:
      "Uyn xem việc phục hồi da yếu là bước dừng lại đúng lúc, để da khỏe lên từng chút thay vì ép đẹp nhanh rồi lại mệt hơn.",
    suitableFor: [
      { title: "Da dễ đỏ", detail: "Nền da phản ứng nhanh với môi trường, sản phẩm hoặc thay đổi nhỏ trong routine." },
      { title: "Da thiếu ẩm", detail: "Da dễ căng, khô hoặc mất cảm giác êm sau khi rửa mặt hay treatment." },
      { title: "Da kích ứng", detail: "Khách thấy da thường xuyên châm chích, nóng nhẹ hoặc khó chịu khi dùng sản phẩm." },
      { title: "Da yếu sau treatment sai", detail: "Đây là nhóm cần được nhìn kỹ để tránh lặp lại nhịp chăm quá mạnh." },
    ],
    needConsult: [
      "Nếu da đang viêm mạnh hoặc có phản ứng khác thường, cần được đánh giá kỹ hơn trước khi can thiệp.",
      "Khách đang dùng nhiều hoạt chất mạnh nên trao đổi rõ để sắp lại routine hợp lý hơn.",
      "Không nên tiếp tục thay sản phẩm liên tục khi da đang yếu, vì điều này thường làm nền da khó ổn hơn.",
      "Những nền da quá sốt ruột muốn treatment mạnh lại sớm cần được tư vấn lại kỳ vọng để tránh tái yếu.",
    ],
    advisoryPoints: [
      "Phần tư vấn phục hồi da yếu thường xoay quanh chuyện tìm ra điều gì đang làm da mệt: thiếu ẩm, treatment quá nhiều, làm sạch quá tay hay routine chồng chéo.",
      "Uyn cũng thường nhấn mạnh rằng da yếu cần được xem như một nền đang cần nghỉ và hồi sức, chứ không phải cố đẩy sang thêm một liệu trình nặng hơn.",
      "Khi khách hiểu được nguyên nhân, việc quay lại nhịp chăm đơn giản và bền hơn sẽ trở nên dễ chấp nhận hơn rất nhiều.",
    ],
    processSteps: [
      { title: "Xem tình trạng yếu của da", description: "Đánh giá độ đỏ, độ căng, cảm giác nhạy và lịch sử skincare hoặc treatment gần đây." },
      { title: "Xác định nguyên nhân chính", description: "Tìm ra điều đang làm hàng rào da đi xuống thay vì chỉ nhìn bề mặt." },
      { title: "Chọn nhịp phục hồi phù hợp", description: "Ưu tiên làm ít nhưng đúng hơn là làm nhiều để yên tâm tạm thời." },
      { title: "Tiến hành theo hướng ổn định", description: "Đi theo mục tiêu da đỡ mệt, đỡ khô và dễ chịu hơn." },
      { title: "Sắp lại routine tại nhà", description: "Hướng dẫn khách giảm bớt những bước không cần thiết và giữ những bước nền tảng quan trọng." },
      { title: "Theo dõi da theo mốc", description: "Da yếu cần được nhìn theo giai đoạn để biết lúc nào đủ ổn cho bước tiếp theo." },
    ],
    expectedResults: [
      "Da có thể dịu hơn, bớt căng rát hơn và dần quay lại trạng thái ổn định hơn theo thời gian.",
      "Điều quan trọng là da khỏe lại để bạn không còn cảm giác cứ dùng gì cũng sợ, thay vì chỉ chăm để nhìn đẹp trong một hôm.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ routine tối giản, dưỡng ẩm đều và chống nắng kỹ theo hướng dẫn.",
      "Ngưng hoặc giảm những bước treatment mạnh nếu chưa được dặn tiếp tục.",
      "Theo dõi cảm giác da sau khi rửa mặt, dưỡng và tiếp xúc nắng để nhận ra da đang hồi như thế nào.",
      "Nhắn lại nếu da có phản ứng khác thường hoặc bạn không chắc nên giữ bước nào trong routine.",
    ],
    pricingFactors: [
      "Mức độ yếu của nền da và lịch sử treatment hoặc skincare trước đó.",
      "Da cần làm theo buổi hay theo nhịp phục hồi nhiều chặng hơn.",
      "Mức độ hướng dẫn và theo dõi cần thiết để da ổn lại.",
    ],
    faqQuestions: [
      "Da yếu có nên treatment tiếp không?",
      "Bao lâu thì da đỡ đỏ và đỡ căng hơn?",
      "Routine ở nhà nên bỏ bớt những gì?",
      "Có nên peel khi da đang yếu không?",
      "Làm sao biết da đã đủ ổn để quay lại treatment?",
      "Nếu da nhạy lâu năm thì có phục hồi dần được không?",
    ],
    priceFrom: "Từ 600.000đ/buổi",
    priceNote: "Tùy nền da và mức độ cần theo dõi trong giai đoạn phục hồi.",
    relatedServiceSlugs: ["meso-phuc-hoi-da-vung-tau", "meso-cang-bong-cap-am-vung-tau", "peel-da-vung-tau"],
  },
  {
    slug: "peel-da-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Peel da nhẹ Vũng Tàu",
    seoTitle: "Peel da nhẹ Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Peel da nhẹ Vũng Tàu tại Chòi của Uyn hỗ trợ cải thiện bề mặt da và da xỉn màu khi nền da phù hợp.",
    shortDescription:
      "Hỗ trợ cải thiện bề mặt da, da xỉn màu hoặc bít tắc nhẹ khi nền da phù hợp.",
    heroSubtitle:
      "Peel da nhẹ theo hướng chọn đúng nền da và đúng thời điểm, để cải thiện bề mặt da mà không làm da bị quá tải vì chạy theo treatment mạnh.",
    heroImage: sharedServiceImages.da,
    overviewAngle:
      "Peel da nhẹ là dịch vụ được nhiều khách quan tâm khi muốn da sáng hơn, bề mặt gọn hơn hoặc giảm cảm giác bít tắc nhẹ.",
    concernContext:
      "Tuy vậy, peel không phải dịch vụ phù hợp với mọi nền da. Nếu chọn sai thời điểm hoặc nền da đang yếu, da có thể xuống nền thay vì đẹp hơn.",
    naturalDirection:
      "Uyn luôn kiểm tra tình trạng da trước khi nói đến peel, vì mục tiêu là cải thiện bề mặt da đúng mức chứ không dùng peel như một bước mạnh mặc định.",
    suitableFor: [
      { title: "Da xỉn màu", detail: "Nền da thiếu tươi và bề mặt không đều có thể cân nhắc peel khi phù hợp." },
      { title: "Da bít tắc nhẹ", detail: "Một số trường hợp bề mặt sần và mụn ẩn nhẹ có thể cần hỗ trợ đúng nhịp." },
      { title: "Muốn da nhìn gọn hơn", detail: "Khách muốn cải thiện texture theo hướng có kiểm soát thường hợp với peel nhẹ." },
      { title: "Đã có nền da tương đối ổn", detail: "Peel thường hợp hơn khi da không quá yếu hoặc quá kích ứng ở thời điểm hiện tại." },
    ],
    needConsult: [
      "Peel không phù hợp với mọi nền da, đặc biệt khi da đang yếu, đỏ hoặc kích ứng nhiều.",
      "Khách đang treatment mạnh hoặc vừa làm các bước can thiệp khác nên được kiểm tra kỹ về thời điểm.",
      "Nếu kỳ vọng peel sẽ giải quyết mọi vấn đề da rất nhanh, nên điều chỉnh lại góc nhìn trước khi làm.",
      "Da mụn viêm hoặc quá nhạy không nên tự quyết định peel chỉ vì thấy người khác hợp.",
    ],
    advisoryPoints: [
      "Tư vấn peel da nhẹ luôn bắt đầu bằng việc xác định da có đủ ổn để peel hay chưa và mục tiêu của peel là gì.",
      "Không phải cứ da sần hay xỉn là nên peel ngay. Có nền da chỉ cần phục hồi hoặc làm sạch lại nhịp chăm là đã cải thiện tốt hơn.",
      "Khi hiểu đúng vai trò của peel, khách sẽ chọn nó như một bước hỗ trợ đúng lúc chứ không phải một giải pháp thần tốc.",
    ],
    processSteps: [
      { title: "Kiểm tra nền da hiện tại", description: "Đánh giá độ khỏe của da, mức nhạy và các vấn đề đang nổi bật nhất." },
      { title: "Xác định mục tiêu của peel", description: "Làm rõ peel để hỗ trợ bề mặt da, xỉn màu hay bít tắc nhẹ ở mức nào." },
      { title: "Chốt nếu nền da phù hợp", description: "Chỉ tiến hành khi da đang ở trạng thái đủ ổn cho bước này." },
      { title: "Chuẩn bị bề mặt da", description: "Giữ da sạch và ổn trước khi vào bước chính." },
      { title: "Thực hiện peel nhẹ", description: "Đi theo mức phù hợp với nền da thật thay vì chạy theo cảm giác mạnh tay." },
      { title: "Dặn phục hồi sau peel", description: "Giải thích chuyện chống nắng, dưỡng và các bước nên tạm tránh trong giai đoạn đầu." },
    ],
    expectedResults: [
      "Nếu nền da phù hợp, da có thể nhìn gọn hơn ở bề mặt, tươi hơn và đỡ xỉn hơn sau giai đoạn hồi phục đúng nhịp.",
      "Peel đẹp là peel khiến da đi đúng hướng mà không xuống nền, chứ không phải chỉ nhìn thay đổi mạnh trong một ngày.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Chống nắng kỹ và ưu tiên dưỡng phục hồi đúng theo hướng dẫn sau peel.",
      "Tạm giảm những hoạt chất mạnh nếu chưa được dặn tiếp tục sử dụng.",
      "Theo dõi độ đỏ, khô hoặc nhạy của da theo từng ngày đầu để xử lý nhẹ nhàng hơn.",
      "Nếu da phản ứng khác thường hoặc bạn không chắc bước nào nên giữ, nên nhắn lại để được hướng dẫn thêm.",
    ],
    pricingFactors: [
      "Nền da hiện tại có đủ ổn cho peel hay không.",
      "Mục tiêu peel ở mức cải thiện texture, xỉn màu hay bít tắc nhẹ.",
      "Nhịp theo dõi sau peel và mức phục hồi cần thiết.",
    ],
    faqQuestions: [
      "Peel da nhẹ có đau không?",
      "Sau peel da đỏ bao lâu?",
      "Da yếu có peel được không?",
      "Bao lâu nên peel lại?",
      "Sau peel có cần kiêng treatment khác không?",
      "Da mụn có nên peel ngay không?",
    ],
    priceFrom: "Từ 700.000đ/buổi",
    priceNote: "Peel không phù hợp với mọi nền da, cần kiểm tra tình trạng trước.",
    relatedServiceSlugs: ["phuc-hoi-da-yeu-vung-tau", "lay-nhan-mun-vung-tau", "cham-soc-da-mun-vung-tau"],
  },
  {
    slug: "giam-mo-canh-tay-vung-tau",
    groupSlug: "giam-mo-vung-nho-vung-tau",
    title: "Giảm mỡ cánh tay Vũng Tàu",
    seoTitle: "Giảm mỡ cánh tay Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Giảm mỡ cánh tay Vũng Tàu tại Chòi của Uyn hỗ trợ làm gọn vùng tay theo liệu trình phù hợp và theo dõi từng buổi.",
    shortDescription:
      "Hỗ trợ làm gọn vùng cánh tay khi phù hợp, kết hợp tư vấn chăm sóc và theo dõi.",
    heroSubtitle:
      "Giảm mỡ cánh tay theo hướng theo dõi từng buổi, ưu tiên nhìn đúng vùng tích mỡ thực tế và kỳ vọng vừa phải.",
    heroImage: sharedServiceImages.botox,
    overviewAngle:
      "Giảm mỡ cánh tay là nhu cầu khá phổ biến ở khách muốn vùng tay nhìn gọn hơn khi mặc áo ôm hoặc chụp ảnh.",
    concernContext:
      "Có người tổng thể cơ thể không quá to nhưng vùng tay vẫn tích mỡ nhẹ hoặc vừa, làm khách thấy khó chọn đồ hoặc thiếu tự tin khi mặc đồ sát tay.",
    naturalDirection:
      "Uyn tư vấn theo hướng nhìn đúng mức tích mỡ và theo dõi tiến trình đều, không hứa hẹn thay đổi quá mạnh chỉ trong thời gian rất ngắn.",
    suitableFor: [
      { title: "Cánh tay tích mỡ nhẹ hoặc vừa", detail: "Những trường hợp phần tay là vùng khách muốn làm gọn rõ nhất." },
      { title: "Muốn vùng tay gọn hơn", detail: "Khách thường để ý điều này khi mặc áo ôm, áo sát nách hoặc chụp ảnh." },
      { title: "Không muốn phẫu thuật", detail: "Phù hợp với người muốn bắt đầu từ hướng nhẹ nhàng hơn và có theo dõi." },
      { title: "Cần liệu trình theo vùng nhỏ", detail: "Dịch vụ này phù hợp với người chấp nhận đi theo tiến trình từng buổi." },
    ],
    needConsult: [
      "Nếu vùng tay to do cơ, da chùng hoặc tổng thể body hơn là mô mỡ tập trung, cần xem kỹ hơn trước khi chọn hướng làm.",
      "Khách muốn tay nhỏ thật nhanh cần được tư vấn lại để giữ kỳ vọng thực tế.",
      "Nếu đang có tình trạng sức khỏe đặc biệt, nên trao đổi trước để được hướng dẫn phù hợp hơn.",
      "Việc theo dõi sau buổi và duy trì sinh hoạt vẫn rất quan trọng với nhóm dịch vụ body này.",
    ],
    advisoryPoints: [
      "Uyn thường nhìn vùng tay trong tổng thể cơ thể chứ không chỉ nhìn riêng phần mỡ thấy bằng mắt thường.",
      "Khách cũng được hỏi về mục tiêu: muốn tay gọn nhẹ trong cảm giác mặc đồ hay muốn thay đổi mạnh hơn ở số đo.",
      "Khi hiểu rõ mục tiêu thật, việc chọn liệu trình và đánh giá kết quả sau đó sẽ thực tế hơn nhiều.",
    ],
    processSteps: [
      { title: "Xác định vùng tay khách thấy khó chịu nhất", description: "Nhìn ra phần tay nào làm khách thiếu tự tin nhất trong sinh hoạt và mặc đồ." },
      { title: "Đánh giá mức tích mỡ và yếu tố liên quan", description: "Xem mức độ mô mỡ, dáng tay và những yếu tố khác có thể ảnh hưởng." },
      { title: "Tư vấn liệu trình phù hợp", description: "Giải thích nhịp buổi, mốc theo dõi và kỳ vọng thực tế trước khi bắt đầu." },
      { title: "Thực hiện theo vùng", description: "Đi theo phần cần cải thiện thật sự thay vì làm theo cảm tính." },
      { title: "Dặn chăm sóc sau buổi", description: "Hướng dẫn cách quan sát vùng tay và những điều nên lưu ý trong sinh hoạt." },
      { title: "Theo dõi tiến trình", description: "Đánh giá theo mốc để xem vùng tay thay đổi ra sao và điều chỉnh nếu cần." },
    ],
    expectedResults: [
      "Vùng tay có thể nhìn gọn hơn dần theo tiến trình nếu phù hợp và được theo dõi đúng nhịp.",
      "Điều quan trọng là nhìn sự thay đổi theo từng giai đoạn, không ép cơ thể phải đổi khác thật nhanh vượt quá nền tảng hiện tại.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi cảm giác vùng tay sau buổi làm và giữ sinh hoạt theo hướng dẫn.",
      "Đừng so kết quả mỗi ngày mà nên nhìn theo mốc tuần hoặc buổi theo dõi.",
      "Nhắn lại nếu vùng tay có điều gì khiến bạn lo lắng hoặc không chắc cách chăm tiếp.",
      "Duy trì nếp sinh hoạt đều để hỗ trợ kết quả thay đổi vùng nhỏ ổn hơn về lâu dài.",
    ],
    pricingFactors: [
      "Mức độ tích mỡ của vùng tay.",
      "Số buổi và liệu trình phù hợp sau khi tư vấn.",
      "Mục tiêu mong muốn của khách ở vùng cánh tay.",
    ],
    faqQuestions: [
      "Giảm mỡ cánh tay bao lâu thấy thay đổi?",
      "Có cần làm theo liệu trình không?",
      "Sau buổi làm cần lưu ý gì?",
      "Nếu tay to do cơ thì có phù hợp không?",
      "Kết quả có giữ được lâu không?",
      "Có thể tư vấn trước bằng hình không?",
    ],
    priceFrom: "Tư vấn theo liệu trình",
    priceNote: "Nên xem thực tế để đánh giá mức độ phù hợp của vùng cánh tay.",
    relatedServiceSlugs: ["giam-mo-nong-cam-vung-tau", "giam-mo-bung-duoi-vung-tau", "goi-cham-soc-dinh-ky-vung-tau"],
  },
  {
    slug: "giam-mo-nong-cam-vung-tau",
    groupSlug: "giam-mo-vung-nho-vung-tau",
    title: "Giảm mỡ nọng cằm Vũng Tàu",
    seoTitle: "Giảm mỡ nọng cằm Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Giảm mỡ nọng cằm Vũng Tàu tại Chòi của Uyn hỗ trợ làm gọn vùng nọng cằm khi nguyên nhân liên quan đến mô mỡ vùng nhỏ.",
    shortDescription:
      "Hỗ trợ làm gọn vùng nọng cằm khi nguyên nhân liên quan đến mô mỡ vùng nhỏ.",
    heroSubtitle:
      "Giảm mỡ nọng cằm theo hướng nhìn đúng nguyên nhân, để khách hiểu khi nào là do mô mỡ và khi nào cần tư vấn kỹ hơn vì cấu trúc hoặc da chùng.",
    heroImage: sharedServiceImages.botox,
    overviewAngle:
      "Nọng cằm là vùng nhỏ nhưng ảnh hưởng khá nhiều đến cảm giác gương mặt, đặc biệt ở góc nghiêng hoặc khi chụp ảnh gần.",
    concernContext:
      "Nhiều khách nghĩ chỉ cần giảm mỡ là sẽ hết nọng, nhưng thực tế vùng này còn liên quan đến cấu trúc xương, da chùng hoặc tư thế sinh hoạt.",
    naturalDirection:
      "Uyn luôn tư vấn thẳng khi nọng cằm không thuần do mô mỡ, để khách không bắt đầu một liệu trình sai kỳ vọng.",
    suitableFor: [
      { title: "Nọng cằm do mô mỡ vùng nhỏ", detail: "Đây là nhóm phù hợp nhất với hướng dịch vụ làm gọn vùng nọng." },
      { title: "Muốn góc nghiêng gọn hơn", detail: "Khách thường quan tâm đến vùng này vì nó ảnh hưởng khá rõ khi nhìn nghiêng." },
      { title: "Không muốn phẫu thuật", detail: "Phù hợp với người muốn chọn hướng nhẹ nhàng hơn và có theo dõi." },
      { title: "Chấp nhận đi theo liệu trình", detail: "Vùng nọng thường cần được nhìn theo tiến trình chứ không nên sốt ruột quá nhanh." },
    ],
    needConsult: [
      "Nếu nọng do cấu trúc xương, da chùng hoặc tư thế, cần tư vấn kỹ hơn vì dịch vụ này có thể không phải hướng chính.",
      "Khách muốn thấy vùng cằm thay đổi quá lớn trong thời gian ngắn nên được giải thích lại kỳ vọng.",
      "Nếu vùng dưới cằm từng can thiệp trước đó, nên nói rõ để được tư vấn sát hơn.",
      "Việc theo dõi tiến trình và thói quen sinh hoạt vẫn ảnh hưởng nhiều đến cảm giác vùng cằm sau đó.",
    ],
    advisoryPoints: [
      "Uyn thường nhìn vùng nọng trong tương quan với góc cằm, hàm, da vùng cổ và cả tư thế cổ vai đầu để đọc đúng vấn đề.",
      "Nếu nguyên nhân chính không nằm ở mô mỡ, Uyn sẽ nói rõ để khách tránh mất thời gian vào một hướng không phải lựa chọn tốt nhất.",
      "Khi hiểu điều này, khách sẽ dễ tin vào lộ trình phù hợp hơn thay vì chỉ dựa vào quảng cáo “gọn ngay” quá nhanh.",
    ],
    processSteps: [
      { title: "Xem vùng dưới cằm thực tế", description: "Đánh giá xem nguyên nhân chủ yếu là mô mỡ, cấu trúc hay yếu tố khác." },
      { title: "Trao đổi mong muốn về góc mặt", description: "Hiểu xem khách muốn gọn hơn ở góc nghiêng hay chỉ muốn bớt cảm giác nọng nhẹ." },
      { title: "Tư vấn nếu phù hợp", description: "Chọn đúng hướng nếu vùng này thật sự phù hợp với làm gọn vùng nhỏ." },
      { title: "Thực hiện theo vùng", description: "Đi theo nhịp theo dõi thay vì vội đánh giá kết quả ngay." },
      { title: "Dặn theo dõi sau buổi", description: "Giải thích chuyện sinh hoạt, cảm giác vùng dưới cằm và mốc nhìn kết quả hợp lý." },
      { title: "Theo dõi tiến trình", description: "Quan sát theo mốc để biết vùng này thay đổi ra sao và cần điều chỉnh gì thêm." },
    ],
    expectedResults: [
      "Nếu nguyên nhân chính là mô mỡ vùng nhỏ, vùng nọng cằm có thể nhìn gọn hơn dần theo tiến trình phù hợp.",
      "Điều đáng giữ là kỳ vọng đúng: không phải mọi nọng cằm đều giống nhau và tốc độ đáp ứng ở mỗi người cũng khác nhau.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi vùng dưới cằm theo hướng dẫn và giữ sinh hoạt nhẹ nhàng ở giai đoạn đầu.",
      "Đừng đánh giá quá sớm chỉ sau một hoặc hai ngày khi vùng này còn cần thời gian theo dõi.",
      "Nếu còn phân vân nguyên nhân nọng cằm của mình, nên nhắn lại để được giải thích thêm sau tư vấn.",
      "Giữ kỳ vọng thực tế và theo dõi bằng ảnh hoặc mốc cụ thể thay vì soi hằng ngày.",
    ],
    pricingFactors: [
      "Mức độ mô mỡ ở vùng dưới cằm sau khi xem trực tiếp.",
      "Số buổi phù hợp với mục tiêu làm gọn.",
      "Việc vùng này có đi kèm yếu tố cấu trúc hoặc da chùng hay không.",
    ],
    faqQuestions: [
      "Giảm mỡ nọng cằm bao lâu thấy thay đổi?",
      "Nếu nọng do cấu trúc thì sao?",
      "Có cần làm theo liệu trình không?",
      "Sau buổi làm cần lưu ý gì?",
      "Kết quả giữ được bao lâu?",
      "Có thể gửi ảnh nghiêng để tư vấn trước không?",
    ],
    priceFrom: "Tư vấn theo liệu trình",
    priceNote: "Nếu nọng do cấu trúc hoặc da chùng, cần tư vấn kỹ hơn trước.",
    relatedServiceSlugs: ["giam-mo-canh-tay-vung-tau", "giam-mo-bung-duoi-vung-tau", "botox-gon-ham-vung-tau"],
  },
  {
    slug: "giam-mo-bung-duoi-vung-tau",
    groupSlug: "giam-mo-vung-nho-vung-tau",
    title: "Giảm mỡ bụng dưới Vũng Tàu",
    seoTitle: "Giảm mỡ bụng dưới Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Giảm mỡ bụng dưới Vũng Tàu tại Chòi của Uyn hỗ trợ cải thiện vùng bụng dưới tích mỡ nhẹ hoặc vừa theo liệu trình phù hợp.",
    shortDescription:
      "Hỗ trợ cải thiện vùng bụng dưới tích mỡ nhẹ hoặc vừa theo hướng theo dõi từng buổi.",
    heroSubtitle:
      "Giảm mỡ bụng dưới theo hướng nhìn đúng mức tích mỡ và xây liệu trình vừa sức, thay vì hứa hẹn một thay đổi quá nhanh vượt nền cơ thể thật.",
    heroImage: sharedServiceImages.botox,
    overviewAngle:
      "Bụng dưới là vùng rất nhiều khách thấy khó chịu vì dù tổng thể không tăng cân nhiều, phần này vẫn giữ cảm giác tích mỡ riêng.",
    concernContext:
      "Việc vùng bụng dưới thay đổi chậm hơn các vùng khác khiến nhiều khách dễ nôn nóng và tìm những quảng cáo quá mạnh tay hoặc quá hứa hẹn.",
    naturalDirection:
      "Uyn chọn cách tư vấn thực tế hơn: nhìn mức tích mỡ thật, nhịp buổi phù hợp và việc theo dõi từng giai đoạn của cơ thể.",
    suitableFor: [
      { title: "Bụng dưới tích mỡ nhẹ hoặc vừa", detail: "Khách cảm thấy vùng này khó gọn hơn dù sinh hoạt khá đều." },
      { title: "Muốn mặc đồ gọn hơn", detail: "Nhiều người quan tâm vì bụng dưới ảnh hưởng khá rõ đến cảm giác mặc đồ ôm." },
      { title: "Không muốn can thiệp phẫu thuật", detail: "Phù hợp với người muốn đi theo hướng nhẹ nhàng hơn trước." },
      { title: "Chấp nhận đi theo tiến trình", detail: "Vùng bụng dưới thường cần nhìn theo mốc thay vì đòi hỏi thay đổi tức thì." },
    ],
    needConsult: [
      "Nếu bụng dưới đi kèm da chùng hoặc thay đổi do nhiều yếu tố khác, cần được xem kỹ hơn trước khi chốt hướng làm.",
      "Khách muốn giảm số đo rất nhanh nên được giải thích lại về tiến trình thực tế của cơ thể.",
      "Sinh hoạt hằng ngày và nhịp duy trì ảnh hưởng nhiều đến kết quả vùng này, nên không thể tách rời hoàn toàn khỏi thói quen cá nhân.",
      "Nếu đang trong giai đoạn sức khỏe đặc biệt, nên trao đổi trước để chọn thời điểm phù hợp hơn.",
    ],
    advisoryPoints: [
      "Tư vấn vùng bụng dưới thường nói nhiều về kỳ vọng, vì đây là vùng khách rất dễ so với ảnh người khác hoặc với giai đoạn cơ thể trước đây.",
      "Uyn thường giải thích rằng mục tiêu trước tiên là đi đúng vùng và đúng tiến trình, chứ không đặt lời hứa quá xa so với nền hiện tại của khách.",
      "Khi khách chấp nhận nhìn kết quả như một lộ trình có theo dõi, tâm lý sẽ nhẹ hơn rất nhiều.",
    ],
    processSteps: [
      { title: "Xác định vùng bụng dưới thực tế", description: "Nhìn đúng khu vực khách đang thấy khó chịu nhất thay vì gom chung toàn bộ body." },
      { title: "Đánh giá mức tích mỡ và yếu tố kèm theo", description: "Xem vùng này chủ yếu do mô mỡ hay có thêm yếu tố khác cần lưu ý." },
      { title: "Tư vấn liệu trình phù hợp", description: "Chốt hướng theo dõi theo buổi với kỳ vọng thực tế hơn." },
      { title: "Thực hiện theo vùng", description: "Đi vào đúng vùng bụng dưới cần cải thiện theo nhịp đã thống nhất." },
      { title: "Dặn chăm sóc và theo dõi", description: "Nhắc chuyện sinh hoạt, quan sát vùng bụng và mốc nên đánh giá kết quả." },
      { title: "Theo dõi tiến trình", description: "Đánh giá lại theo từng buổi để điều chỉnh nếu cần." },
    ],
    expectedResults: [
      "Nếu phù hợp, vùng bụng dưới có thể nhìn gọn hơn dần theo tiến trình và kết hợp với nếp sinh hoạt phù hợp.",
      "Điều quan trọng là xem đây là một chặng chăm vùng nhỏ có theo dõi, chứ không phải lời hứa thay đổi mạnh tức thì.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi vùng bụng dưới theo mốc được dặn và đừng đánh giá quá sớm sau từng buổi.",
      "Giữ sinh hoạt đều để hỗ trợ cảm giác ổn định của tiến trình vùng nhỏ.",
      "Nếu có thắc mắc về phản ứng của vùng làm, nên nhắn lại để được hướng dẫn rõ hơn.",
      "Giữ kỳ vọng thực tế và chụp theo mốc nếu bạn muốn theo dõi thay đổi rõ ràng hơn.",
    ],
    pricingFactors: [
      "Mức tích mỡ của vùng bụng dưới.",
      "Mục tiêu mong muốn và số buổi phù hợp sau tư vấn.",
      "Những yếu tố đi kèm như da chùng hoặc lịch sử body trước đó.",
    ],
    faqQuestions: [
      "Giảm mỡ bụng dưới bao lâu thấy thay đổi?",
      "Có cần kết hợp sinh hoạt hay chế độ theo dõi gì không?",
      "Nếu bụng dưới khó xuống lâu năm thì sao?",
      "Sau buổi làm cần chú ý gì?",
      "Có phải ai cũng cần đi theo liệu trình không?",
      "Có thể gửi hình để tư vấn vùng bụng dưới trước không?",
    ],
    priceFrom: "Tư vấn theo liệu trình",
    priceNote: "Phù hợp hơn khi xem mức tích mỡ thực tế của vùng bụng dưới.",
    relatedServiceSlugs: ["giam-mo-canh-tay-vung-tau", "giam-mo-nong-cam-vung-tau", "goi-cham-soc-dinh-ky-vung-tau"],
  },
  {
    slug: "combo-phun-moi-va-chan-may-vung-tau",
    groupSlug: "combo-lieu-trinh-vung-tau",
    title: "Combo phun môi và chân mày Vũng Tàu",
    seoTitle: "Combo phun môi và chân mày Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Combo phun môi và chân mày Vũng Tàu tại Chòi của Uyn dành cho khách muốn gương mặt tươi và gọn hơn nhưng vẫn giữ nét tự nhiên.",
    shortDescription:
      "Dành cho khách muốn gương mặt tươi và gọn gàng hơn nhưng vẫn giữ nét tự nhiên.",
    heroSubtitle:
      "Combo môi và mày được tư vấn theo hướng tổng thể gương mặt, để môi tươi hơn, mày gọn hơn nhưng vẫn rất là mình trong sinh hoạt hằng ngày.",
    heroImage: sharedServiceImages.heroModel,
    overviewAngle:
      "Combo môi và mày thường phù hợp với khách muốn nhìn tươi và gọn hơn theo hướng tự nhiên, thay vì phải makeup nhiều mỗi ngày.",
    concernContext:
      "Nhiều khách môi nhợt nhưng mày cũng thưa, nên nếu chỉ làm một điểm thì tổng thể vẫn chưa đạt cảm giác mình mong muốn.",
    naturalDirection:
      "Uyn tư vấn combo này như một hướng giúp gương mặt sáng hơn và có khung hơn, nhưng vẫn ưu tiên vừa đủ và không làm cả hai điểm quá mạnh cùng lúc.",
    suitableFor: [
      { title: "Muốn mặt tươi hơn", detail: "Khi môi có sắc nhẹ và mày gọn hơn, tổng thể thường sáng hơn mà không cần makeup nhiều." },
      { title: "Muốn tiết kiệm thời gian hằng ngày", detail: "Combo này phù hợp với người thích ra ngoài nhanh nhưng vẫn muốn mặt có thần." },
      { title: "Môi nhợt và mày thưa cùng lúc", detail: "Đây là nhóm khách dễ cảm nhận sự thay đổi tổng thể rõ hơn sau khi làm đúng hướng." },
      { title: "Ưu tiên sự tự nhiên", detail: "Phù hợp với người không muốn thay đổi quá khác mà chỉ cần chỉn chu hơn." },
    ],
    needConsult: [
      "Nếu nền môi thâm hoặc mày cũ khó xử lý, combo vẫn cần chia nhịp phù hợp thay vì làm dồn.",
      "Khách thích màu môi hoặc dáng mày quá trend nên tư vấn kỹ để giữ sự hợp mặt lâu dài.",
      "Không phải ai cũng cần làm cùng lúc cả hai, nên tư vấn trước vẫn rất quan trọng.",
      "Nếu đang trong giai đoạn môi hoặc mày nhạy cảm, có thể cần đổi thứ tự hoặc chờ thêm thời điểm phù hợp.",
    ],
    advisoryPoints: [
      "Phần tư vấn combo môi và mày nhìn tổng thể gương mặt chứ không tách hai dịch vụ ra khỏi nhau.",
      "Uyn thường cân nhắc xem điểm nào nên đi trước, mức độ nào phù hợp để sau cùng gương mặt nhìn sáng nhưng vẫn mềm.",
      "Không ép combo nếu sau khi xem thấy khách chỉ cần làm một điểm trước là đủ.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn về tổng thể gương mặt", description: "Hiểu xem khách muốn sáng hơn, gọn hơn hay tươi hơn ở mức nào." },
      { title: "Xem nền môi và dáng mày thật", description: "Đánh giá từng phần để chọn thứ tự và mức độ phù hợp." },
      { title: "Chốt hướng combo hoặc chia chặng", description: "Có người phù hợp làm cùng giai đoạn, có người nên tách từng bước." },
      { title: "Chuẩn bị vùng thực hiện", description: "Giữ từng vùng ở trạng thái phù hợp nhất trước khi bắt đầu." },
      { title: "Thực hiện theo tổng thể đã tư vấn", description: "Giữ tinh thần vừa đủ để môi và mày hỗ trợ nhau hài hòa." },
      { title: "Hướng dẫn chăm sóc theo từng vùng", description: "Nói rõ cách theo dõi môi và mày để khách không bị rối sau buổi làm." },
    ],
    expectedResults: [
      "Khi đi đúng hướng, combo này thường giúp gương mặt tươi hơn, có khung hơn và đỡ tốn thời gian makeup mỗi ngày.",
      "Kết quả đẹp nhất là khi người đối diện thấy bạn chỉn chu hơn nhưng vẫn rất tự nhiên chứ không cảm giác làm quá tay.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Chăm từng vùng theo hướng dẫn riêng và đừng gộp hết thành một kiểu chăm chung cho cả môi và mày.",
      "Theo dõi môi và mày theo mốc thay vì sốt ruột khi giai đoạn đầu chưa ổn định ngay.",
      "Nhắn lại nếu một trong hai vùng có điều gì làm bạn chưa yên tâm.",
      "Giữ kỳ vọng nhẹ nhàng và để tổng thể gương mặt ổn định dần theo thời gian.",
    ],
    pricingFactors: [
      "Nền môi và nền mày hiện tại ra sao.",
      "Khách làm cùng giai đoạn hay chia thành từng chặng nhỏ.",
      "Mức độ xử lý thực tế của từng vùng sau khi tư vấn.",
    ],
    faqQuestions: [
      "Combo môi và mày có nhất thiết làm cùng lúc không?",
      "Nếu môi thâm hoặc mày cũ thì combo có phù hợp không?",
      "Combo có tiết kiệm hơn làm lẻ không?",
      "Sau làm cần chăm từng vùng thế nào?",
      "Nếu chỉ muốn tự nhiên rất nhẹ thì combo có hợp không?",
      "Có thể gửi hình để được tư vấn trước không?",
    ],
    priceFrom: "Tư vấn theo tình trạng",
    priceNote: "Combo được điều chỉnh theo nền môi, nền mày và nhịp làm phù hợp.",
    relatedServiceSlugs: ["phun-moi-vung-tau", "phun-xam-chan-may-vung-tau", "dam-lai-moi-may-vung-tau"],
  },
];

const extraServiceSeeds: ServiceSeed[] = [
  {
    slug: "botox-thon-gon-vung-mat-vung-tau",
    groupSlug: "filler-botox-vung-tau",
    title: "Botox thon gọn vùng mặt Vũng Tàu",
    seoTitle: "Botox thon gọn vùng mặt Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Botox thon gọn vùng mặt Vũng Tàu tại Chòi của Uyn theo hướng tự nhiên, tư vấn kỹ theo cấu trúc gương mặt thật trước khi làm.",
    shortDescription:
      "Hỗ trợ gương mặt nhìn gọn và mềm hơn khi nguyên nhân phù hợp với hướng tư vấn botox vùng mặt.",
    heroSubtitle:
      "Ưu tiên gương mặt hài hòa và thư giãn hơn, không cố làm mặt nhỏ theo một khuôn chung cho tất cả mọi người.",
    heroImage: sharedServiceImages.heroFiller,
    overviewAngle:
      "Botox thon gọn vùng mặt thường được tìm khi khách muốn tổng thể gương mặt nhìn nhẹ và gọn hơn nhưng vẫn giữ thần thái tự nhiên.",
    concernContext:
      "Có người cảm thấy nửa dưới gương mặt hơi nặng, có người thấy biểu cảm vùng mặt chưa đủ mềm hoặc tổng thể nhìn khá căng khi lên ảnh.",
    naturalDirection:
      "Tại Chòi của Uyn, hướng tư vấn luôn đặt câu hỏi nguyên nhân thật đến từ cơ, mô mềm hay cấu trúc tổng thể trước khi nói đến chuyện thực hiện.",
    suitableFor: [
      { title: "Muốn gương mặt mềm hơn", detail: "Phù hợp với người thích cảm giác hài hòa và thư giãn hơn thay vì thay đổi mạnh từng điểm." },
      { title: "Có vùng cơ hoạt động rõ", detail: "Những trường hợp vùng mặt nhìn nặng do thói quen cơ có thể cần được xem kỹ trước." },
      { title: "Ưu tiên tự nhiên", detail: "Phù hợp với người không muốn khuôn mặt nhìn cứng hoặc bị làm quá tay." },
      { title: "Muốn tư vấn kỹ trước khi làm", detail: "Nhóm khách cần hiểu đúng nguyên nhân trước khi quyết định thường hợp với cách làm của Uyn." },
    ],
    needConsult: [
      "Nếu gương mặt to chủ yếu do xương hoặc mô mỡ, botox vùng mặt có thể không phải hướng chính.",
      "Khách đang có tình trạng sức khỏe đặc biệt hoặc vùng cần làm quá nhạy nên được tư vấn trực tiếp trước.",
      "Nếu từng làm trước đó nhưng kết quả chưa như kỳ vọng, nên trao đổi rõ lịch sử cũ để đọc đúng tình trạng hiện tại.",
      "Khách đang mang thai hoặc cho con bú nên hỏi ý kiến chuyên môn trước với các dịch vụ có can thiệp.",
    ],
    advisoryPoints: [
      "Uyn thường nhìn biểu cảm khi nói cười, độ hoạt động của nhóm cơ và cảm giác tổng thể của gương mặt chứ không chỉ nhìn ảnh tĩnh.",
      "Nếu nguyên nhân chính không đến từ cơ, Uyn sẽ nói rõ để khách không kỳ vọng sai vào botox.",
      "Tinh thần chung vẫn là làm đẹp vừa đủ, giữ nét tự nhiên và không ép khách làm nếu chưa phù hợp.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn thật", description: "Hiểu rõ khách muốn mặt gọn hơn ở điểm nào và mức độ nào khiến khách thấy thoải mái." },
      { title: "Quan sát cấu trúc và hoạt động cơ", description: "Nhìn tổng thể khuôn mặt khi nghỉ và khi biểu cảm để đọc đúng nguyên nhân." },
      { title: "Tư vấn hướng phù hợp", description: "Nói rõ nếu botox là lựa chọn hợp lý, hoặc nếu nên đổi sang hướng khác nhẹ nhàng hơn." },
      { title: "Chuẩn bị và thực hiện", description: "Đi theo phương án đã chốt, ưu tiên sự gọn và mềm thay vì thay đổi gấp." },
      { title: "Hướng dẫn theo dõi sau làm", description: "Dặn kỹ mốc theo dõi, cảm giác thường gặp và khi nào nên nhắn lại để kiểm tra thêm." },
    ],
    expectedResults: [
      "Khi đúng nguyên nhân và đúng mức độ, gương mặt thường nhìn mềm và gọn hơn theo hướng khá tự nhiên.",
      "Điều quan trọng là tổng thể hài hòa hơn với chính gương mặt thật của khách, không tạo cảm giác bị can thiệp quá tay.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi vùng mặt theo các mốc đã được dặn thay vì đánh giá quá sớm trong vài ngày đầu.",
      "Giữ sinh hoạt nhẹ nhàng và nhắn lại nếu có điều gì khiến bạn chưa yên tâm.",
      "Không so kết quả của mình với ảnh hoặc trải nghiệm của người khác một cách máy móc.",
      "Chụp lại gương mặt theo mốc nếu bạn muốn nhìn tiến trình rõ hơn theo thời gian.",
    ],
    pricingFactors: [
      "Vùng cần tư vấn và mức độ hoạt động cơ thực tế.",
      "Phương án xử lý phù hợp sau khi xem cấu trúc gương mặt.",
      "Lịch theo dõi và nhịp chăm phù hợp với từng khách.",
    ],
    faqQuestions: [
      "Botox thon gọn vùng mặt có giống botox gọn hàm không?",
      "Bao lâu thì thấy mặt mềm hơn?",
      "Nếu mặt to do xương thì sao?",
      "Có cần tiêm lại theo chu kỳ không?",
      "Sau làm cần lưu ý điều gì?",
      "Có thể làm rất tự nhiên không?",
    ],
    priceFrom: "Tư vấn theo vùng",
    priceNote: "Giá tham khảo cần đọc cùng nguyên nhân thật và vùng cơ được tư vấn.",
    relatedServiceSlugs: ["botox-gon-ham-vung-tau", "botox-xoa-nhan-vung-tau", "combo-gon-mat-vung-tau"],
  },
  {
    slug: "treatment-da-xin-mau-vung-tau",
    groupSlug: "cham-soc-da-vung-tau",
    title: "Treatment da xỉn màu Vũng Tàu",
    seoTitle: "Treatment da xỉn màu Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Treatment da xỉn màu Vũng Tàu tại Chòi của Uyn theo hướng nhẹ nhàng, tư vấn theo nền da thật và không làm đại trà.",
    shortDescription:
      "Hỗ trợ da nhìn sáng, đều và có sức sống hơn khi tình trạng xỉn màu đến từ nền da phù hợp.",
    heroSubtitle:
      "Đi từ chuyện hiểu vì sao da xỉn, thiếu sáng hoặc kém mịn, rồi mới chọn hướng chăm phù hợp thay vì treatment quá tay.",
    heroImage: sharedServiceImages.da,
    overviewAngle:
      "Treatment da xỉn màu thường được quan tâm khi da nhìn mệt, thiếu sáng, makeup khó ăn hoặc bề mặt kém mịn trong thời gian dài.",
    concernContext:
      "Không ít khách chăm da đều nhưng vẫn cảm thấy da không trong, không tươi và khó nhìn ra sức sống vì nền da đang thiếu ẩm, bít tắc nhẹ hoặc phục hồi chưa đủ.",
    naturalDirection:
      "Ở Chòi của Uyn, treatment cho da xỉn màu được đi theo hướng vừa đủ, ưu tiên phục hồi nhịp da và cải thiện cảm giác tổng thể thay vì thúc nhanh bằng treatment nặng.",
    suitableFor: [
      { title: "Da xỉn và thiếu sức sống", detail: "Da không đều màu hoặc nhìn mệt dù không nhất thiết có mụn viêm rõ." },
      { title: "Bề mặt da kém mịn", detail: "Makeup dễ mốc hoặc da nhìn sần nhẹ thường cần được xem lại nền da thực tế." },
      { title: "Muốn da tươi hơn theo hướng tự nhiên", detail: "Phù hợp với người muốn da sáng khỏe chứ không theo cảm giác bóng giả." },
      { title: "Thích tư vấn theo nền da thật", detail: "Hợp với khách muốn hiểu nguyên nhân trước khi chọn treatment." },
    ],
    needConsult: [
      "Nếu da đang kích ứng, bong rát hoặc vừa treatment nặng trước đó, nên được xem kỹ trước khi làm tiếp.",
      "Da xỉn do thiếu ngủ, sinh hoạt thất thường hoặc hàng rào da yếu thường cần đọc nguyên nhân kỹ hơn thay vì treatment ngay.",
      "Khách có da quá nhạy hoặc từng phản ứng mạnh với treatment nên nói rõ lịch sử chăm da trước đó.",
      "Nếu đang dùng hoạt chất mạnh tại nhà, nên trao đổi trước để chọn nhịp chăm phù hợp hơn.",
    ],
    advisoryPoints: [
      "Uyn thường hỏi khá kỹ về routine tại nhà, mức dầu, độ khô và cảm giác của da sau khi rửa mặt hoặc makeup.",
      "Nếu da xỉn đến từ việc nền đang yếu, hướng phục hồi có thể quan trọng hơn chuyện thúc treatment ngay.",
      "Không ép liệu trình dài nếu sau khi nhìn da thấy khách chỉ cần điều chỉnh nhẹ một vài bước trước.",
    ],
    processSteps: [
      { title: "Đọc tình trạng nền da", description: "Quan sát độ ẩm, sắc da, bề mặt và lịch sử chăm da để nhận ra nguyên nhân chính." },
      { title: "Trao đổi sinh hoạt và routine", description: "Những thói quen hằng ngày ảnh hưởng khá nhiều đến chuyện da nhìn xỉn hay tươi." },
      { title: "Chọn hướng treatment phù hợp", description: "Đi theo nhịp vừa phải để da cải thiện ổn hơn, không ép thay đổi quá nhanh." },
      { title: "Thực hiện dịch vụ", description: "Tập trung vào việc làm sạch, hỗ trợ phục hồi và cải thiện cảm giác da theo tình trạng thực tế." },
      { title: "Dặn chăm sóc sau buổi làm", description: "Nói rõ cách duy trì tại nhà để kết quả không chỉ đẹp trong một buổi." },
    ],
    expectedResults: [
      "Da có thể nhìn sáng hơn, mịn hơn và bớt cảm giác mệt khi treatment đi đúng nguyên nhân gây xỉn màu.",
      "Kết quả tốt thường đến từ cả dịch vụ tại spa lẫn cách duy trì nhẹ nhàng ở nhà trong những ngày sau đó.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ routine tối giản và đừng thêm quá nhiều sản phẩm mới ngay sau buổi chăm da.",
      "Dưỡng ẩm, chống nắng và theo dõi độ ổn định của da trong vài ngày đầu.",
      "Nếu da có phản ứng khiến bạn thấy lạ, nên nhắn lại để được hướng dẫn thay vì tự tăng treatment.",
      "Duy trì sinh hoạt đều nếu muốn da giữ được cảm giác tươi lâu hơn.",
    ],
    pricingFactors: [
      "Mức xỉn màu và tình trạng nền da hiện tại.",
      "Da đang cần phục hồi nhẹ hay cần treatment theo chặng rõ hơn.",
      "Số buổi hoặc nhịp chăm phù hợp sau khi tư vấn.",
    ],
    faqQuestions: [
      "Da xỉn màu có phải lúc nào cũng cần treatment không?",
      "Bao lâu thì da nhìn tươi hơn?",
      "Nếu da vừa xỉn vừa nhạy thì sao?",
      "Có cần đi theo liệu trình không?",
      "Sau buổi treatment nên chăm da thế nào?",
      "Có thể kết hợp với meso không?",
    ],
    priceFrom: "Tư vấn theo tình trạng",
    priceNote: "Giá thường phụ thuộc nền da thật và hướng chăm được tư vấn sau khi xem trực tiếp.",
    relatedServiceSlugs: ["meso-cang-bong-cap-am-vung-tau", "phuc-hoi-da-yeu-vung-tau", "combo-da-cang-bong-vung-tau"],
  },
  {
    slug: "lam-gon-vung-vai-lung-vung-tau",
    groupSlug: "giam-mo-vung-nho-vung-tau",
    title: "Làm gọn vùng vai lưng Vũng Tàu",
    seoTitle: "Làm gọn vùng vai lưng Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Làm gọn vùng vai lưng Vũng Tàu tại Chòi của Uyn theo hướng theo dõi từng vùng nhỏ, tư vấn kỹ trước khi làm.",
    shortDescription:
      "Hỗ trợ vùng vai lưng nhìn gọn hơn khi nguyên nhân phù hợp với hướng xử lý vùng nhỏ.",
    heroSubtitle:
      "Tư vấn theo tình trạng mô mềm, form người và cảm giác tổng thể của phần vai lưng, không hứa thay đổi quá tay.",
    heroImage: sharedServiceImages.heroModel,
    overviewAngle:
      "Làm gọn vùng vai lưng thường được khách quan tâm khi mặc đồ ôm hoặc chụp ảnh thấy phần thân trên hơi nặng và thiếu gọn.",
    concernContext:
      "Có người tích mô mềm nhẹ ở lưng áo hoặc vùng vai sau, có người cảm thấy phần thân trên nhìn dày hơn mong muốn dù cân nặng không thay đổi nhiều.",
    naturalDirection:
      "Tại Chòi của Uyn, vùng vai lưng được nhìn như một vùng nhỏ cần theo dõi vừa phải, không biến nó thành lời hứa giảm dáng quá đà.",
    suitableFor: [
      { title: "Vùng vai lưng tích nhẹ mô mềm", detail: "Phù hợp với khách muốn tổng thể thân trên nhìn gọn hơn một chút." },
      { title: "Muốn mặc đồ thoải mái hơn", detail: "Một số khách tìm dịch vụ này vì muốn lên form áo đẹp và nhẹ mắt hơn." },
      { title: "Không muốn can thiệp phẫu thuật", detail: "Hợp với người muốn đi theo hướng theo dõi vùng nhỏ và tư vấn kỹ trước." },
      { title: "Giữ kỳ vọng thực tế", detail: "Phù hợp với khách hiểu đây là tiến trình theo vùng chứ không phải thay đổi tức thì." },
    ],
    needConsult: [
      "Nếu cảm giác vai lưng dày đến từ tư thế hoặc cấu trúc cơ thể, hướng tư vấn có thể khác so với mô mềm tích tụ.",
      "Khách có tình trạng da vùng lưng nhạy hoặc đang viêm cần được xem kỹ trước.",
      "Nếu đang kỳ vọng thay đổi rất nhanh trong thời gian ngắn, nên trao đổi để đọc lại mục tiêu thực tế hơn.",
      "Những trường hợp có tiền sử body treatment trước đó nên nói rõ để tư vấn sát hơn.",
    ],
    advisoryPoints: [
      "Uyn thường xem form người và vị trí khách cảm thấy nặng nhất để tránh tư vấn quá rộng hoặc quá chung chung.",
      "Nếu vùng này cần kết hợp thay đổi sinh hoạt hoặc nhịp theo dõi lâu hơn, Uyn sẽ nói rõ ngay từ đầu.",
      "Không ép đi liệu trình dài nếu sau khi xem thấy chưa thật sự phù hợp.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn về form vai lưng", description: "Hiểu khách muốn gọn ở đâu và muốn thay đổi ở mức nào." },
      { title: "Quan sát vùng thực tế", description: "Xem độ tích mô mềm, cảm giác da và form tổng thể để chọn hướng tư vấn." },
      { title: "Đề xuất lộ trình vừa phải", description: "Chỉ đi theo mức cần thiết thay vì tạo áp lực phải làm quá nhiều ngay từ đầu." },
      { title: "Thực hiện theo từng buổi", description: "Theo dõi phản ứng của vùng nhỏ để điều chỉnh nhịp phù hợp hơn." },
      { title: "Hướng dẫn sau buổi làm", description: "Dặn cách theo dõi và những điều nên lưu ý trong sinh hoạt hằng ngày." },
    ],
    expectedResults: [
      "Nếu đi đúng nguyên nhân, vùng vai lưng có thể nhìn gọn, nhẹ và vào form hơn theo thời gian.",
      "Điểm quan trọng là tổng thể cơ thể nhìn cân hơn chứ không phải một sự thay đổi đột ngột thiếu tự nhiên.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi vùng làm theo mốc đã được dặn, đừng đánh giá quá sớm chỉ sau một buổi.",
      "Giữ sinh hoạt đều và quan sát cảm giác mặc đồ, chụp ảnh theo thời gian.",
      "Nếu có điều gì khiến bạn chưa yên tâm, hãy nhắn lại để được hướng dẫn rõ hơn.",
      "Giữ kỳ vọng thực tế vì vùng vai lưng thường cần được đọc trong bối cảnh tổng thể form người.",
    ],
    pricingFactors: [
      "Mức độ tích mô mềm của vùng vai lưng.",
      "Số buổi phù hợp sau khi tư vấn.",
      "Mục tiêu mong muốn và tốc độ theo dõi của từng khách.",
    ],
    faqQuestions: [
      "Làm gọn vùng vai lưng bao lâu thấy thay đổi?",
      "Có cần đi theo liệu trình không?",
      "Nếu vai lưng dày do tư thế thì sao?",
      "Sau buổi làm cần chú ý gì?",
      "Có thể kết hợp với chăm sóc body không?",
      "Có thể gửi hình để tư vấn trước không?",
    ],
    priceFrom: "Tư vấn theo liệu trình",
    priceNote: "Phù hợp hơn khi xem rõ vùng vai lưng và mục tiêu thật của khách.",
    relatedServiceSlugs: ["giam-mo-canh-tay-vung-tau", "cham-soc-body-vung-tau", "giam-mo-bung-duoi-vung-tau"],
  },
  {
    slug: "cham-soc-body-vung-tau",
    groupSlug: "giam-mo-vung-nho-vung-tau",
    title: "Chăm sóc body Vũng Tàu",
    seoTitle: "Chăm sóc body Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Chăm sóc body Vũng Tàu tại Chòi của Uyn theo hướng thư giãn, gọn gàng và theo nhu cầu thật của từng khách.",
    shortDescription:
      "Chăm sóc body theo hướng nhẹ nhàng, giúp cơ thể dễ chịu hơn và hỗ trợ cảm giác gọn gàng ở những vùng cần theo dõi.",
    heroSubtitle:
      "Một lựa chọn dành cho khách muốn cơ thể được chăm đều, sạch và thư giãn hơn mà không cần đi theo treatment quá nặng.",
    heroImage: sharedServiceImages.heroModel,
    overviewAngle:
      "Chăm sóc body thường được tìm khi khách muốn cơ thể dễ chịu hơn, làn da body mịn hơn hoặc muốn theo dõi một vài vùng nhỏ theo cách nhẹ nhàng.",
    concernContext:
      "Không phải ai tìm body care cũng vì mỡ vùng nhỏ. Có khách chỉ muốn làn da body sạch, mềm và cơ thể được chăm chỉn chu hơn để cảm thấy tự tin hơn trong sinh hoạt thường ngày.",
    naturalDirection:
      "Ở Chòi của Uyn, body care đi theo hướng riêng tư, sạch và vừa đủ, tránh cảm giác làm dịch vụ chỉ để bán thêm liệu trình.",
    suitableFor: [
      { title: "Muốn cơ thể được chăm đều hơn", detail: "Phù hợp với khách muốn body sạch, mịn và dễ chịu hơn sau những ngày làm việc căng." },
      { title: "Thích cảm giác thư giãn", detail: "Một số khách chọn body care như một cách chăm mình nhẹ nhàng thay vì treatment nặng." },
      { title: "Muốn theo dõi vùng nhỏ kết hợp", detail: "Có thể phù hợp với khách đang đi kèm các dịch vụ body vùng nhỏ khác." },
      { title: "Ưa không gian mini spa riêng tư", detail: "Phù hợp với người cần một nhịp chăm vừa phải, không áp lực mua thêm." },
    ],
    needConsult: [
      "Nếu da body đang kích ứng hoặc có vấn đề cần theo dõi, nên nói rõ trước khi chọn dịch vụ.",
      "Khách đang kỳ vọng giảm vùng rõ chỉ bằng body care cần được tư vấn lại để hiểu đúng phạm vi của dịch vụ.",
      "Nếu muốn kết hợp nhiều dịch vụ body cùng lúc, cần sắp nhịp hợp lý hơn thay vì làm dồn.",
      "Những người quá nhạy với sản phẩm body nên trao đổi trước để được hướng dẫn phù hợp.",
    ],
    advisoryPoints: [
      "Uyn thường hỏi khách đang cần thư giãn, chăm da body hay theo dõi vùng nhỏ để gợi ý đúng hướng.",
      "Nếu body care chỉ nên là bước hỗ trợ chứ không phải bước chính, điều này sẽ được nói rõ ngay từ đầu.",
      "Không đẩy khách vào liệu trình dài nếu nhu cầu thật chỉ là chăm nhẹ theo từng buổi.",
    ],
    processSteps: [
      { title: "Trao đổi nhu cầu body care", description: "Hiểu khách đang cần thư giãn, chăm da body hay kết hợp theo dõi vùng nhỏ." },
      { title: "Xem tình trạng da body", description: "Quan sát độ khô, độ nhạy và cảm giác chung của làn da body trước khi làm." },
      { title: "Chốt hướng chăm phù hợp", description: "Đi theo phương án nhẹ nhàng và đúng nhu cầu thật thay vì thêm bước không cần thiết." },
      { title: "Thực hiện dịch vụ", description: "Giữ nhịp chăm sạch, tinh tế và riêng tư đúng tinh thần mini spa." },
      { title: "Hướng dẫn duy trì tại nhà", description: "Dặn các bước cơ bản để cảm giác dễ chịu được giữ lâu hơn sau buổi chăm." },
    ],
    expectedResults: [
      "Cơ thể thường cho cảm giác dễ chịu hơn, da body sạch và mềm hơn khi được chăm đúng nhu cầu.",
      "Nếu kết hợp theo dõi vùng nhỏ, body care cũng có thể hỗ trợ cảm giác cơ thể chỉn chu và dễ theo dõi hơn.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Duy trì dưỡng ẩm body và lắng nghe cảm giác cơ thể trong vài ngày sau buổi chăm.",
      "Nếu có kết hợp body treatment khác, nên làm đúng nhịp đã được tư vấn.",
      "Đừng tự thêm quá nhiều bước chăm nếu da body đang nhạy.",
      "Nhắn lại khi cần điều chỉnh nhịp hoặc muốn gợi ý dịch vụ phù hợp hơn ở lần sau.",
    ],
    pricingFactors: [
      "Nhu cầu thật của khách là thư giãn, chăm da body hay kết hợp vùng nhỏ.",
      "Mức độ chăm trong từng buổi và thời lượng phù hợp.",
      "Có hay không việc kết hợp với những dịch vụ body khác.",
    ],
    faqQuestions: [
      "Chăm sóc body có phù hợp nếu chỉ muốn thư giãn không?",
      "Body care có giúp gọn người không?",
      "Bao lâu nên chăm một lần?",
      "Có thể kết hợp với giảm vùng nhỏ không?",
      "Da body nhạy có làm được không?",
      "Nên chuẩn bị gì trước buổi chăm body?",
    ],
    priceFrom: "Tư vấn theo nhu cầu",
    priceNote: "Giá được gợi ý theo nhu cầu thật và nhịp chăm phù hợp của từng khách.",
    relatedServiceSlugs: ["lam-gon-vung-vai-lung-vung-tau", "giam-mo-canh-tay-vung-tau", "goi-cham-soc-dinh-ky-vung-tau"],
  },
  {
    slug: "combo-da-cang-bong-vung-tau",
    groupSlug: "combo-lieu-trinh-vung-tau",
    title: "Combo da căng bóng Vũng Tàu",
    seoTitle: "Combo da căng bóng Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Combo da căng bóng Vũng Tàu tại Chòi của Uyn dành cho nền da thiếu ẩm, kém mịn và cần phục hồi nhẹ theo tình trạng thật.",
    shortDescription:
      "Gợi ý lộ trình cho da thiếu ẩm, kém mịn hoặc xỉn màu khi cần kết hợp nhiều bước nhẹ nhàng.",
    heroSubtitle:
      "Combo này không chạy theo cảm giác bóng giả, mà ưu tiên da đủ ẩm, mịn và tươi hơn theo nhịp phù hợp.",
    heroImage: sharedServiceImages.heroMeso,
    overviewAngle:
      "Combo da căng bóng thường được tìm khi khách cảm thấy một dịch vụ đơn lẻ chưa đủ để cải thiện nền da thiếu ẩm, xỉn màu hoặc kém mịn.",
    concernContext:
      "Có khách da vừa thiếu nước vừa dễ xỉn, có người makeup không ăn nhưng cũng không muốn đi treatment quá nặng nên cần một hướng đi mềm hơn.",
    naturalDirection:
      "Tại Chòi của Uyn, combo da căng bóng được nhìn như một lộ trình hỗ trợ vừa phải để da khỏe và có sức sống hơn, không ép khách phải theo gói nếu chưa cần.",
    suitableFor: [
      { title: "Da thiếu ẩm kéo dài", detail: "Da hay khô căng, xỉn và nhìn kém sức sống trong sinh hoạt hằng ngày." },
      { title: "Da kém mịn", detail: "Bề mặt không đều, makeup khó mượt hoặc da thiếu độ căng nhẹ." },
      { title: "Muốn da tươi hơn nhưng không treatment mạnh", detail: "Phù hợp với người ưu tiên sự nhẹ nhàng và nhịp phục hồi vừa phải." },
      { title: "Muốn đi theo lộ trình có tư vấn", detail: "Hợp với khách muốn có người nhìn nền da và sắp thứ tự bước phù hợp." },
    ],
    needConsult: [
      "Nếu da đang kích ứng hoặc yếu rõ, có thể cần phục hồi trước thay vì vào combo ngay.",
      "Khách đang dùng nhiều hoạt chất mạnh nên được xem kỹ để tránh chồng treatment không cần thiết.",
      "Nếu kỳ vọng bóng rõ ngay sau một buổi, cần trao đổi để điều chỉnh lại mong đợi thực tế hơn.",
      "Da mụn hoạt động nhiều cũng nên được đọc riêng trước khi ghép vào combo căng bóng.",
    ],
    advisoryPoints: [
      "Uyn thường sắp thứ tự bước theo nền da chứ không chốt combo bằng một công thức cứng.",
      "Nếu sau khi xem thấy khách chỉ cần một bước nền trước, Uyn sẽ nói thẳng thay vì cố ghép thành gói.",
      "Mục tiêu là da khỏe và dễ chịu hơn theo thời gian, không phải một hiệu ứng đẹp ngắn hạn rồi xuống nhanh.",
    ],
    processSteps: [
      { title: "Đọc nền da và nhu cầu thật", description: "Xem da thiếu ẩm, xỉn hay kém mịn ở mức nào và khách mong muốn thay đổi ra sao." },
      { title: "Sắp thứ tự bước phù hợp", description: "Chọn nhịp chăm, meso hoặc phục hồi theo tình trạng thay vì ghép bước máy móc." },
      { title: "Thực hiện theo từng chặng", description: "Đi từng bước để da có thời gian đáp ứng và khách cũng dễ theo dõi hơn." },
      { title: "Đánh giá lại sau từng buổi", description: "Nếu cần đổi nhịp hoặc giảm bớt bước, Uyn sẽ điều chỉnh để hợp với da hơn." },
      { title: "Dặn chăm tại nhà", description: "Routine tối giản và chống nắng đúng cách là phần rất quan trọng để giữ kết quả." },
    ],
    expectedResults: [
      "Da có thể nhìn đủ ẩm hơn, mịn hơn và bớt cảm giác xỉn khi combo đi đúng với nền thật.",
      "Hiệu quả đẹp nhất thường đến từ cảm giác da khỏe lên từ từ, chứ không phải chỉ bóng tạm thời sau một buổi.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ routine chăm da tối giản và ưu tiên phục hồi trong những ngày đầu.",
      "Dùng chống nắng đều nếu có ra ngoài để tránh ảnh hưởng cảm giác sáng da vừa cải thiện.",
      "Không tự thêm treatment mạnh khi chưa được hướng dẫn.",
      "Theo dõi da theo mốc và nhắn lại nếu muốn điều chỉnh lộ trình.",
    ],
    pricingFactors: [
      "Số bước thật sự cần thiết sau khi xem nền da.",
      "Da cần phục hồi trước hay có thể vào combo ngay.",
      "Số buổi và nhịp theo dõi phù hợp với từng khách.",
    ],
    faqQuestions: [
      "Combo da căng bóng khác gì làm meso một buổi?",
      "Da nhạy có đi combo này được không?",
      "Cần bao nhiêu buổi để thấy da tươi hơn?",
      "Nếu da đang mụn thì sao?",
      "Routine ở nhà có cần đổi không?",
      "Có thể dừng giữa combo để theo dõi da không?",
    ],
    priceFrom: "Tư vấn theo lộ trình",
    priceNote: "Combo được điều chỉnh theo nền da và số bước thật sự cần thiết.",
    relatedServiceSlugs: ["meso-cang-bong-cap-am-vung-tau", "meso-phuc-hoi-da-vung-tau", "treatment-da-xin-mau-vung-tau"],
  },
  {
    slug: "combo-da-mun-vung-tau",
    groupSlug: "combo-lieu-trinh-vung-tau",
    title: "Combo da mụn Vũng Tàu",
    seoTitle: "Combo da mụn Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Combo da mụn Vũng Tàu tại Chòi của Uyn dành cho nền da bít tắc, dầu hoặc viêm nhẹ cần được tư vấn theo tình trạng thật.",
    shortDescription:
      "Gợi ý lộ trình cho da mụn cần đi theo từng chặng, ưu tiên làm sạch, phục hồi và theo dõi thay vì thúc quá nhanh.",
    heroSubtitle:
      "Một hướng đi dành cho da mụn cần sắp thứ tự rõ ràng, để da đỡ rối hơn chứ không bị đè thêm bởi quá nhiều bước cùng lúc.",
    heroImage: sharedServiceImages.da,
    overviewAngle:
      "Combo da mụn thường được khách tìm khi da vừa bít tắc vừa dễ lên mụn, làm một bước riêng lẻ mãi mà chưa thấy nền da ổn hơn.",
    concernContext:
      "Có khách cần lấy nhân mụn, có khách cần chăm da mụn đều và có người lại phải phục hồi hàng rào da trước khi đi sâu hơn vào treatment.",
    naturalDirection:
      "Ở Chòi của Uyn, combo da mụn không được xây như một gói cố định mà là một lộ trình có thể co giãn theo tình trạng thực tế của từng buổi.",
    suitableFor: [
      { title: "Da bít tắc, nhiều mụn ẩn", detail: "Những nền da dễ bí và lên mụn lặp lại thường cần đi theo thứ tự rõ hơn." },
      { title: "Da dầu hoặc viêm nhẹ", detail: "Phù hợp với khách cần được nhìn kỹ xem nên làm sạch, phục hồi hay treatment trước." },
      { title: "Muốn theo dõi da từng chặng", detail: "Hợp với người không muốn treatment dồn dập làm da thêm mệt." },
      { title: "Cần người tư vấn sát tình trạng", detail: "Combo này phù hợp khi khách cần một lộ trình bớt tự đoán hơn." },
    ],
    needConsult: [
      "Nếu da đang viêm nhiều hoặc quá nhạy, cần xem kỹ để chọn nhịp phù hợp hơn.",
      "Khách đang dùng treatment mạnh tại nhà nên trao đổi rõ để tránh chồng hoạt chất.",
      "Nếu chỉ muốn xử lý thật nhanh trong một vài buổi, cần điều chỉnh lại kỳ vọng vì da mụn thường cần nhịp chậm hơn.",
      "Một số trường hợp nền da yếu cần phục hồi trước khi đẩy treatment tiếp.",
    ],
    advisoryPoints: [
      "Uyn thường chia combo da mụn thành từng chặng để khách không bị quá tải cả về cảm giác lẫn tài chính.",
      "Nếu sau khi xem thấy chỉ cần làm sạch và ổn định routine trước, Uyn sẽ ưu tiên hướng đó.",
      "Không ép theo trọn combo nếu da đang cần được quan sát thêm sau từng buổi.",
    ],
    processSteps: [
      { title: "Đọc tình trạng mụn và nền da", description: "Xem mức độ bít tắc, viêm, dầu và độ yếu của da để sắp đúng thứ tự." },
      { title: "Chốt bước ưu tiên đầu tiên", description: "Có người cần làm sạch trước, có người cần phục hồi trước, không đi theo một công thức duy nhất." },
      { title: "Thực hiện theo từng chặng", description: "Giữ nhịp nhẹ để da có thời gian đáp ứng và khách dễ theo dõi cảm giác hơn." },
      { title: "Đánh giá lại sau mỗi buổi", description: "Nếu da thay đổi nhanh hoặc chậm hơn dự kiến, lộ trình sẽ được điều chỉnh lại." },
      { title: "Hướng dẫn routine tại nhà", description: "Routine đơn giản, đều và hợp nền da thường quan trọng không kém buổi chăm tại spa." },
    ],
    expectedResults: [
      "Da có thể sạch hơn, bớt bí hơn và dễ kiểm soát nhịp mụn hơn khi lộ trình đi đúng tình trạng thật.",
      "Sự cải thiện đẹp nhất thường đến từ nền da ổn dần chứ không phải chỉ nhìn bề mặt ngay sau một buổi.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ routine nhẹ và đừng tự thêm quá nhiều treatment mạnh sau buổi chăm.",
      "Theo dõi phản ứng của da trong vài ngày đầu thay vì đổi sản phẩm liên tục.",
      "Giữ vệ sinh cơ bản, chống nắng và nhắn lại nếu da có điều gì khiến bạn chưa yên tâm.",
      "Đi đúng nhịp hẹn nếu muốn nhìn tiến trình ổn định hơn theo từng chặng.",
    ],
    pricingFactors: [
      "Mức độ mụn và nền da hiện tại.",
      "Số bước cần thiết trong lộ trình sau khi tư vấn.",
      "Da cần ưu tiên phục hồi hay làm sạch ở giai đoạn đầu.",
    ],
    faqQuestions: [
      "Combo da mụn có phải đi liên tục không?",
      "Da viêm nhẹ có phù hợp không?",
      "Có cần lấy nhân mụn trong combo không?",
      "Nếu da yếu thì sao?",
      "Bao lâu thì thấy da ổn hơn?",
      "Có thể dừng giữa combo để theo dõi da không?",
    ],
    priceFrom: "Tư vấn theo lộ trình",
    priceNote: "Combo được cá nhân hóa theo tình trạng mụn, độ nhạy và nhịp phục hồi của da.",
    relatedServiceSlugs: ["cham-soc-da-mun-vung-tau", "lay-nhan-mun-vung-tau", "phuc-hoi-da-yeu-vung-tau"],
  },
  {
    slug: "combo-gon-mat-vung-tau",
    groupSlug: "combo-lieu-trinh-vung-tau",
    title: "Combo gọn mặt Vũng Tàu",
    seoTitle: "Combo gọn mặt Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Combo gọn mặt Vũng Tàu tại Chòi của Uyn giúp tư vấn thứ tự phù hợp khi khách muốn gương mặt nhìn gọn và hài hòa hơn.",
    shortDescription:
      "Gợi ý lộ trình cho khách muốn gương mặt nhìn gọn hơn theo hướng đọc đúng nguyên nhân và không làm quá tay.",
    heroSubtitle:
      "Không phải mặt to lúc nào cũng cần cùng một dịch vụ. Combo gọn mặt chỉ có ý nghĩa khi đi đúng nguyên nhân thật của gương mặt.",
    heroImage: sharedServiceImages.heroFiller,
    overviewAngle:
      "Combo gọn mặt thường được quan tâm khi khách cảm thấy tổng thể gương mặt hơi nặng, thiếu nét hoặc muốn nhìn thanh hơn nhưng chưa biết nên bắt đầu từ đâu.",
    concernContext:
      "Có người nghĩ mình cần botox, có người nghĩ cần filler cân chỉnh, và cũng có khách chỉ cần một thay đổi nhỏ hoặc thậm chí chưa cần làm gì ngay.",
    naturalDirection:
      "Tại Chòi của Uyn, combo gọn mặt được tư vấn theo thứ tự ưu tiên và mức độ vừa đủ để giữ gương mặt hài hòa, không chạy theo khuôn mặt V-line cứng nhắc.",
    suitableFor: [
      { title: "Muốn mặt gọn hơn nhưng vẫn tự nhiên", detail: "Phù hợp với người muốn tổng thể thanh hơn chứ không muốn khác hẳn." },
      { title: "Chưa biết nên chọn dịch vụ nào", detail: "Combo giúp nhìn ra thứ tự ưu tiên rõ hơn thay vì tự đoán từng bước." },
      { title: "Có nhiều nguyên nhân đan xen", detail: "Một số khách vừa có cơ hàm, vừa có điểm cần cân chỉnh nhẹ nên cần tư vấn tổng thể." },
      { title: "Ưu tiên tư vấn trung thực", detail: "Hợp với người muốn được nói rõ cái nào cần, cái nào chưa cần." },
    ],
    needConsult: [
      "Nếu mặt to chủ yếu do xương, combo gọn mặt cần được đọc rất kỹ để tránh chọn sai kỳ vọng.",
      "Khách mong thay đổi mạnh trong thời gian ngắn nên được tư vấn lại về mức độ thực tế hơn.",
      "Một số gương mặt chỉ cần một thay đổi nhỏ chứ không cần cả combo, nên tư vấn đầu vào rất quan trọng.",
      "Nếu đã từng làm trước đó, nên nói rõ để đọc lại cấu trúc và cảm giác hiện tại của gương mặt.",
    ],
    advisoryPoints: [
      "Uyn thường nhìn gương mặt khi nghỉ, khi cười và khi nói để không tư vấn chỉ theo một góc ảnh đẹp.",
      "Combo chỉ được gợi ý khi nhiều điểm thật sự liên quan với nhau và có thể hỗ trợ tổng thể tốt hơn.",
      "Không ép combo nếu sau khi nhìn kỹ thấy một dịch vụ đơn lẻ đã đủ cho điều khách đang cần.",
    ],
    processSteps: [
      { title: "Trao đổi mong muốn về tổng thể mặt", description: "Hiểu khách muốn gọn, mềm hay cân đối hơn ở mức nào." },
      { title: "Đọc nguyên nhân thật", description: "Xem cơ, mô mềm, cấu trúc và điểm nhấn gương mặt để sắp thứ tự ưu tiên." },
      { title: "Gợi ý hướng đi vừa đủ", description: "Có thể là một bước, cũng có thể là combo nếu thật sự phù hợp." },
      { title: "Thực hiện theo từng chặng", description: "Giữ nhịp để gương mặt ổn định tự nhiên và khách dễ cảm nhận sự thay đổi hơn." },
      { title: "Theo dõi và điều chỉnh", description: "Nếu sau một chặng đã đủ, hoàn toàn có thể dừng lại thay vì cố làm thêm." },
    ],
    expectedResults: [
      "Gương mặt có thể nhìn thanh và hài hòa hơn khi các bước được sắp đúng theo nguyên nhân thật.",
      "Một combo đẹp là combo khiến người khác thấy bạn gọn gàng hơn chứ không có cảm giác làm mặt quá tay.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Theo dõi gương mặt theo từng chặng, không vội đánh giá quá sớm.",
      "Nếu đã đi đúng mức độ mong muốn, không cần cố thêm bước chỉ vì tên combo.",
      "Nhắn lại khi có thắc mắc về cảm giác ổn định của từng vùng được tư vấn.",
      "Giữ kỳ vọng thực tế và đọc kết quả trong tổng thể gương mặt của chính mình.",
    ],
    pricingFactors: [
      "Số bước thật sự cần thiết sau khi tư vấn tổng thể.",
      "Nguyên nhân chính đến từ cơ, mô mềm hay cấu trúc gương mặt.",
      "Khách làm theo một chặng hay chia thành nhiều giai đoạn nhỏ.",
    ],
    faqQuestions: [
      "Combo gọn mặt có phải ai mặt to cũng phù hợp không?",
      "Nếu chỉ muốn thay đổi nhẹ thì sao?",
      "Có cần làm nhiều bước cùng lúc không?",
      "Mặt to do xương có cải thiện bằng combo này không?",
      "Bao lâu thì nhìn ra thay đổi?",
      "Có thể gửi hình để được tư vấn trước không?",
    ],
    priceFrom: "Tư vấn theo tình trạng",
    priceNote: "Combo chỉ được chốt sau khi nhìn rõ nguyên nhân thật của gương mặt.",
    relatedServiceSlugs: ["botox-gon-ham-vung-tau", "filler-cam-vung-tau", "botox-thon-gon-vung-mat-vung-tau"],
  },
  {
    slug: "goi-cham-soc-dinh-ky-vung-tau",
    groupSlug: "combo-lieu-trinh-vung-tau",
    title: "Gói chăm sóc định kỳ Vũng Tàu",
    seoTitle: "Gói chăm sóc định kỳ Vũng Tàu | Chòi của Uyn",
    metaDescription:
      "Gói chăm sóc định kỳ Vũng Tàu tại Chòi của Uyn dành cho khách muốn duy trì nhịp chăm ổn định và được tư vấn theo tình trạng thật.",
    shortDescription:
      "Gợi ý dành cho khách muốn duy trì nhịp chăm đều thay vì chờ đến khi vấn đề rõ mới xử lý.",
    heroSubtitle:
      "Một nhịp chăm đều, vừa sức và có người theo dõi thường giúp khách nhẹ đầu hơn nhiều so với việc làm đẹp theo cảm hứng từng lần.",
    heroImage: sharedServiceImages.heroModel,
    overviewAngle:
      "Gói chăm sóc định kỳ thường được khách quan tâm khi muốn giữ gương mặt hoặc làn da ở trạng thái ổn định, sạch và chỉn chu hơn theo thời gian.",
    concernContext:
      "Nhiều người không có một vấn đề quá lớn, nhưng lại dễ rơi vào cảnh lúc chăm rất kỹ, lúc bỏ bê hoàn toàn, khiến kết quả lúc nào cũng thiếu ổn định.",
    naturalDirection:
      "Tại Chòi của Uyn, gói định kỳ được xây theo tinh thần đồng hành nhẹ nhàng, để khách có lịch chăm rõ ràng nhưng không bị áp lực mua nhiều bước không cần thiết.",
    suitableFor: [
      { title: "Muốn duy trì nhịp chăm đều", detail: "Phù hợp với người thích mọi thứ gọn gàng và có lịch rõ ràng hơn." },
      { title: "Hay quên hoặc chăm theo cảm hứng", detail: "Một gói định kỳ giúp bạn đỡ rối và không phải tự nghĩ mỗi lần nên làm gì." },
      { title: "Muốn theo dõi da hoặc gương mặt lâu hơn", detail: "Hợp với khách cần người theo dõi tiến trình chứ không chỉ làm từng buổi lẻ." },
      { title: "Ưu tiên trải nghiệm riêng tư", detail: "Mini spa theo nhịp định kỳ phù hợp với người thích cảm giác thân và tin cậy." },
    ],
    needConsult: [
      "Nếu hiện tại chưa có nhu cầu rõ, gói định kỳ có thể chưa cần thiết ngay.",
      "Khách quá bận hoặc khó giữ lịch nên chọn nhịp phù hợp hơn thay vì ép quá dày.",
      "Nếu tình trạng thay đổi thất thường, gói cũng cần linh hoạt chứ không nên cứng nhắc.",
      "Không nên chọn gói chỉ vì ưu đãi nếu chưa hiểu rõ mình đang cần duy trì điều gì.",
    ],
    advisoryPoints: [
      "Uyn thường hỏi khách muốn duy trì điều gì nhất: da ổn hơn, mặt tươi hơn hay đơn giản là có lịch tự chăm đều hơn.",
      "Nhịp định kỳ được thiết kế để đủ đều nhưng không gây áp lực tài chính hoặc thời gian.",
      "Nếu sau vài buổi thấy chưa cần giữ nhịp dày như ban đầu, lịch hoàn toàn có thể điều chỉnh lại.",
    ],
    processSteps: [
      { title: "Trao đổi nhu cầu duy trì", description: "Hiểu khách cần giữ da, môi, mày hay body ở trạng thái nào theo thời gian." },
      { title: "Xem tình trạng hiện tại", description: "Đánh giá nền thật để tránh tạo ra một gói định kỳ nhưng không bám vào nhu cầu." },
      { title: "Thiết kế nhịp chăm phù hợp", description: "Sắp lịch đủ đều, đủ nhẹ và phù hợp với quỹ thời gian của khách." },
      { title: "Theo dõi sau từng buổi", description: "Mỗi lần chăm đều có thể là dịp điều chỉnh lại nhịp nếu cần." },
      { title: "Cập nhật hướng duy trì", description: "Khi tình trạng thay đổi, gói cũng nên thay đổi theo để luôn sát thực tế." },
    ],
    expectedResults: [
      "Điều khách thường nhận được là cảm giác ổn định hơn: da đỡ thất thường, gương mặt đỡ xuống phong độ và việc chăm mình đỡ bị ngắt quãng.",
      "Giá trị lớn nhất của gói định kỳ không phải làm nhiều, mà là giúp việc làm đẹp trở nên nhẹ và dễ duy trì hơn.",
      "Kết quả có thể khác nhau tùy cơ địa, tình trạng nền và cách chăm sóc sau dịch vụ.",
    ],
    aftercareChecklist: [
      "Giữ liên lạc nếu giữa các buổi bạn thấy tình trạng thay đổi bất thường.",
      "Đừng ngại điều chỉnh lịch nếu nhịp ban đầu chưa hợp với công việc hoặc sinh hoạt.",
      "Ghi chú cảm giác của da hoặc gương mặt giữa các buổi để việc tư vấn sau đó sát hơn.",
      "Xem gói định kỳ như một nhịp đồng hành, không phải áp lực phải dùng thật nhiều dịch vụ.",
    ],
    pricingFactors: [
      "Nhóm dịch vụ được duy trì định kỳ là gì.",
      "Tần suất phù hợp với lịch sinh hoạt và tình trạng thật của khách.",
      "Mức độ linh hoạt cần có trong từng giai đoạn chăm.",
    ],
    faqQuestions: [
      "Gói chăm sóc định kỳ có phù hợp nếu chưa từng làm dịch vụ không?",
      "Bao lâu nên đi một lần?",
      "Có thể đổi nhịp giữa chừng không?",
      "Gói này có áp dụng cho da và body cùng lúc không?",
      "Nếu bận có thể lùi lịch không?",
      "Làm sao biết mình có cần đi định kỳ hay không?",
    ],
    priceFrom: "Tư vấn theo nhịp chăm",
    priceNote: "Giá phụ thuộc nhóm dịch vụ muốn duy trì và tần suất phù hợp với từng khách.",
    relatedServiceSlugs: ["combo-da-cang-bong-vung-tau", "combo-da-mun-vung-tau", "cham-soc-body-vung-tau"],
  },
];

function sentenceList(items: string[]) {
  return items.filter(Boolean).join(" ");
}

function bulletSummary(items: BulletItem[], count = 2) {
  return items
    .slice(0, count)
    .map((item) => `${item.title.toLowerCase()} vì ${item.detail.toLowerCase()}`)
    .join(", ");
}

function groupLens(seed: ServiceSeed) {
  if (seed.groupSlug === "phun-xam-tham-my") {
    return {
      dailyNeed: "nhìn gọn gàng hơn khi để mặt mộc hoặc chỉ makeup rất nhẹ",
      consultFocus:
        "nền môi, sắc tố, dáng mày thật và mức độ thay đổi khiến khách thấy vẫn là mình",
      aftercareFocus:
        "giai đoạn bong, lên màu và cách giữ vùng làm sạch, yên ổn trong những ngày đầu",
      pricingFocus:
        "tình trạng nền và độ khó xử lý giữa môi nhợt, môi thâm, mày thưa hay mày cũ",
    };
  }

  if (seed.groupSlug === "filler-botox-vung-tau") {
    return {
      dailyNeed:
        "cân chỉnh một điểm nhỏ trên gương mặt nhưng vẫn muốn người khác nhìn thấy sự hài hòa thay vì sự can thiệp",
      consultFocus:
        "cấu trúc gương mặt, nguyên nhân thật của vùng cần chỉnh và mức độ vừa đủ để không làm quá tay",
      aftercareFocus:
        "mốc ổn định, cảm giác sưng nhẹ nếu có và chuyện theo dõi biểu cảm hoặc độ mềm của gương mặt",
      pricingFocus:
        "vùng tư vấn, mức độ cần cân chỉnh và lượng sản phẩm hoặc liều phù hợp với từng gương mặt",
    };
  }

  if (seed.groupSlug === "cham-soc-da-vung-tau") {
    return {
      dailyNeed:
        "da nhìn ổn hơn trong ánh sáng thật, dễ chăm hơn và đỡ cảm giác mệt hoặc bí bách kéo dài",
      consultFocus:
        "hàng rào da, mức dầu - khô, routine hiện tại và lý do thật khiến da thiếu ẩm, xỉn hoặc lên mụn",
      aftercareFocus:
        "routine tối giản, chống nắng, phục hồi và cách tránh chồng treatment không cần thiết",
      pricingFocus:
        "nền da, số buổi, mức phục hồi cần có và việc khách nên đi theo buổi lẻ hay lộ trình",
    };
  }

  if (seed.groupSlug === "giam-mo-vung-nho-vung-tau") {
    return {
      dailyNeed:
        "mặc đồ, chụp hình hoặc nhìn tổng thể cơ thể thấy gọn gàng và thoải mái hơn một chút",
      consultFocus:
        "đúng nguyên nhân của vùng nhỏ, mức tích mô mềm và kỳ vọng thực tế theo từng chặng",
      aftercareFocus:
        "theo dõi theo mốc, giữ sinh hoạt đều và tránh đánh giá quá sớm chỉ sau một buổi",
      pricingFocus:
        "mức tích vùng nhỏ, số buổi và việc có cần đi theo liệu trình linh hoạt hay không",
    };
  }

  return {
    dailyNeed: "giữ gương mặt hoặc làn da ổn định hơn theo một nhịp chăm vừa sức",
    consultFocus:
      "thứ tự ưu tiên, mức độ cần thiết và việc nên làm cùng lúc hay chia từng chặng",
    aftercareFocus:
      "giữ nhịp chăm đúng hướng và theo dõi phản ứng thực tế trước khi quyết định bước tiếp theo",
    pricingFocus:
      "số bước thật sự cần thiết sau tư vấn chứ không chỉ tên của combo hoặc liệu trình",
  };
}

function buildOverviewParagraphs(seed: ServiceSeed) {
  const lens = groupLens(seed);
  const firstFit = seed.suitableFor[0];
  const secondFit = seed.suitableFor[1];

  return [
    `${seed.overviewAngle} ${seed.shortDescription} Ở Chòi của Uyn, ${seed.title.toLowerCase()} không được đặt theo kiểu cứ thích là làm, mà luôn đi từ chuyện nhìn nền thật, hiểu mong muốn thật và chọn mức độ đủ hợp với gương mặt, làn da hoặc vùng cơ thể của từng khách.`,
    `${seed.concernContext} Nhiều khách tìm đến dịch vụ này vì muốn ${lens.dailyNeed}. Điều họ cần thường không phải một thay đổi ồn ào, mà là cảm giác tổng thể sáng hơn, gọn hơn hoặc dễ sống cùng hơn trong đời thường.`,
    `${seed.naturalDirection} Với những trường hợp như ${firstFit?.title.toLowerCase()} hoặc ${secondFit?.title.toLowerCase()}, Uyn thường giải thích khá rõ dịch vụ này đang giải quyết phần nào, phần nào chỉ nên theo dõi thêm, để khách bước vào buổi làm với tâm lý bình tĩnh hơn thay vì kỳ vọng theo ảnh mẫu.`,
  ];
}

function buildReasonsParagraphs(seed: ServiceSeed) {
  const lens = groupLens(seed);
  const fitSummary = bulletSummary(seed.suitableFor, 2);
  return [
    `Khách thường tìm ${seed.title.toLowerCase()} khi một vấn đề nhỏ lặp lại đủ lâu để trở thành sự bận tâm hằng ngày. Có người thấy mình phải tô son hoặc kẻ mày mới tự tin ra ngoài, có người nhìn da trong gương lúc nào cũng xỉn và thiếu sức sống, cũng có người chỉ cần một góc nghiêng hoặc một vùng nhỏ trên cơ thể gọn hơn là đã thấy dễ chịu hơn nhiều. Khi cảm giác này kéo dài, nhu cầu làm đẹp thường xuất phát từ sự muốn sống nhẹ đầu hơn chứ không hẳn là muốn biến mình thành một phiên bản khác.`,
    `Điều quan trọng là cùng một biểu hiện nhìn thấy được lại có thể đến từ nhiều nguyên nhân. Vì vậy, trước khi chốt ${seed.title.toLowerCase()}, Uyn luôn nhìn sâu hơn vào ${lens.consultFocus}. Với những khách đang ở tình huống như ${fitSummary}, phần phân tích này đặc biệt quan trọng vì nó giúp khách hiểu rõ dịch vụ đang chạm vào đâu, kỳ vọng nào là hợp lý và vì sao đôi khi làm ít nhưng đúng lại tốt hơn làm nhiều mà lệch nhu cầu.`,
  ];
}

function buildSuitableParagraphs(seed: ServiceSeed) {
  const preview = bulletSummary(seed.suitableFor, 3);
  const firstFit = seed.suitableFor[0];
  return [
    `${seed.title} thường phù hợp với những khách đang gặp các tình huống như ${preview}. Nhưng “phù hợp” ở đây không có nghĩa là chỉ cần đọc mô tả thấy giống mình là có thể chốt ngay. Điều cần hơn là đọc xem nền hiện tại có đi được với dịch vụ này không, mức độ nào khiến bạn thấy thoải mái và sau khi làm bạn muốn giữ lại cảm giác gì trên gương mặt hoặc làn da của mình.`,
    `Khi tư vấn, Uyn thường hỏi thêm thói quen sinh hoạt, cách bạn tự nhìn nhận khuôn mặt hoặc làn da của mình và điều bạn sợ nhất sau khi làm. Ví dụ, với nhóm khách ${firstFit?.title.toLowerCase()}, có người chỉ cần thay đổi rất nhẹ để người khác khó nhận ra, nhưng cũng có người muốn nhìn rõ sự gọn gàng hơn vì công việc hoặc vì đã chờ quá lâu mới quyết định làm. Nhờ cách trao đổi này, phần “ai phù hợp” không còn là một danh sách chung chung mà trở thành một cuộc đối chiếu thực tế hơn với chính bạn.`,
  ];
}

function buildConsultParagraphs(seed: ServiceSeed) {
  const [firstNeed, secondNeed] = seed.needConsult;
  return [
    `Không phải ai quan tâm đến ${seed.title.toLowerCase()} cũng nên làm ngay. Những trường hợp như ${firstNeed?.charAt(0).toLowerCase()}${firstNeed?.slice(1)} hoặc ${secondNeed?.charAt(0).toLowerCase()}${secondNeed?.slice(1)} thường cần được nhìn kỹ hơn trước khi quyết định. Đây không phải là cách nói để làm khách sợ, mà là cách để tránh việc chốt dịch vụ khi nền hiện tại chưa ở trạng thái phù hợp nhất.`,
    `Ở Chòi của Uyn, phần tư vấn trước của ${seed.title.toLowerCase()} được xem là một bước tạo trust chứ không phải bước dẫn vào bán hàng. Nếu sau khi nhìn tình trạng thật mà thấy khách đang gần với trường hợp như "${firstNeed}", Uyn sẽ nói rõ vì sao nên chờ, nên đổi hướng hoặc nên chuẩn bị gì trước. Điều đó giúp khách chủ động hơn với quyết định của mình, đồng thời làm cho kết quả sau này có cơ hội đi đúng hơn thay vì cố làm cho kịp một thời điểm nào đó.`,
  ];
}

function buildAdvisoryParagraphs(seed: ServiceSeed) {
  const lens = groupLens(seed);
  return [
    `Cách Chòi của Uyn tư vấn ${seed.title.toLowerCase()} luôn bắt đầu bằng việc đọc đúng tình trạng hiện tại rồi mới bàn tới giải pháp. Phần hỏi đáp thường xoay quanh ${lens.consultFocus}. Nhiều khách ban đầu chỉ nghĩ đơn giản là mình cần “làm cho đẹp hơn”, nhưng khi nhìn kỹ hơn mới thấy có những chi tiết rất nhỏ quyết định việc nên làm nhẹ, làm vừa hay thậm chí tạm thời chưa làm.`,
    `${sentenceList(seed.advisoryPoints)} Điều quan trọng không phải là thuyết phục khách chọn nhiều bước, mà là giúp khách nhìn ra một phương án đủ hợp với mong muốn và đủ bền trong đời sống hằng ngày. Khi hiểu vì sao một hướng được gợi ý, khách thường an tâm hơn và ít bị cảm giác bị dẫn dắt vào một dịch vụ mình chưa thực sự hiểu.`,
  ];
}

function buildExpectedParagraphs(seed: ServiceSeed) {
  return [
    `${seed.expectedResults[0]} Đây thường là kiểu thay đổi khiến khách cảm nhận rõ nhất khi nhìn mình ở ánh sáng thật, chụp ảnh gần hoặc sinh hoạt thường ngày, chứ không chỉ ở khoảnh khắc vừa làm xong. Với Uyn, một kết quả đẹp là khi vùng được xử lý đi đúng hướng nhưng tổng thể vẫn tự nhiên, không khiến khách thấy mình đang phải “gồng” để sống cùng nó.`,
    `${seed.expectedResults[1]} ${seed.expectedResults[2]} Vì vậy, thay vì so mình với ảnh tham khảo hoặc với trải nghiệm của người khác, Uyn thường khuyên khách đọc kết quả theo nền thật của chính mình và theo đúng mốc theo dõi đã được dặn từ đầu.`,
  ];
}

function buildAftercareParagraphs(seed: ServiceSeed) {
  const lens = groupLens(seed);
  return [
    `Chăm sóc sau ${seed.title.toLowerCase()} là phần gần như quyết định cảm giác yên tâm của khách trong những ngày đầu. Với nhóm dịch vụ này, trọng tâm thường nằm ở ${lens.aftercareFocus}. Không ít khách hoảng vì nhìn vùng làm thay đổi theo từng ngày nhưng lại không biết đâu là giai đoạn bình thường. Chính vì vậy, Uyn luôn dặn khá kỹ để khách không phải tự bơi giữa quá nhiều nguồn thông tin trái chiều.`,
    `${sentenceList(seed.aftercareChecklist)} Khi giữ được nhịp chăm đúng và bình tĩnh quan sát theo mốc, kết quả thường ổn định hơn và khách cũng đỡ cảm giác mình đang phải tự đoán mọi thứ một mình. Nếu có điều gì khiến bạn chưa yên tâm, việc nhắn lại để được xem thêm luôn tốt hơn là tự xử lý theo mẹo truyền miệng.`,
  ];
}

function buildPricingParagraphs(seed: ServiceSeed) {
  const lens = groupLens(seed);
  return [
    `Bảng giá của ${seed.title.toLowerCase()} được để theo dạng “${seed.priceFrom}” hoặc “tư vấn theo tình trạng” vì một con số cố định rất khó phản ánh đúng thực tế. Với dịch vụ này, phần giá thường chịu ảnh hưởng bởi ${lens.pricingFocus}. Hai khách nhìn qua có thể tưởng giống nhau, nhưng mức xử lý thật, nền hiện tại hoặc số bước cần thiết lại khác nhau khá nhiều.`,
    `${seed.priceNote} ${sentenceList(seed.pricingFactors.map((factor) => `${factor}.`))} Uyn muốn khách nhìn bảng giá như một điểm tham khảo để chuẩn bị trước, còn quyết định sau cùng vẫn nên dựa trên phương án đã được tư vấn kỹ thay vì chốt chỉ bằng tên dịch vụ.`,
  ];
}

function buildBeforeAfterParagraphs(seed: ServiceSeed) {
  return [
    `Ảnh before / after của ${seed.title.toLowerCase()} giúp bạn hình dung phong cách xử lý mà Chòi của Uyn theo đuổi: tự nhiên, vừa đủ và đọc theo nền thật của từng người. Phần ảnh này không nên được hiểu là “mẫu kết quả phải giống hệt”, vì cấu trúc môi, mày, gương mặt, nền da hay tốc độ đáp ứng ở mỗi khách đều khác nhau. Điều có giá trị nhất khi xem gallery là nhìn ra cách Uyn giữ sự hài hòa và mức độ can thiệp chứ không phải so từng milimet với một ca khác.`,
  ];
}

function buildCtaParagraphs(seed: ServiceSeed) {
  return [
    `Nếu bạn đang phân vân về ${seed.title.toLowerCase()}, cách nhẹ nhàng nhất là gửi hình hoặc mô tả tình trạng hiện tại để Uyn nhìn sơ bộ trước. Bạn không cần tự kết luận mình chắc chắn phải làm dịch vụ này. Chỉ cần hiểu rõ nền thật của mình, điều gì nên ưu tiên trước và mức độ nào là vừa đủ, quyết định sẽ dễ chịu hơn rất nhiều. Tinh thần chung của Chòi của Uyn vẫn là tư vấn theo tình trạng thật, không ép dịch vụ và chỉ làm khi khách thấy đủ yên tâm.`,
  ];
}

function createServiceRecord(seed: ServiceSeed): ServiceRecord {
  return {
    ...seed,
    heroTitle: seed.title,
    overviewParagraphs: buildOverviewParagraphs(seed),
    reasonsParagraphs: buildReasonsParagraphs(seed),
    suitableParagraphs: buildSuitableParagraphs(seed),
    consultParagraphs: buildConsultParagraphs(seed),
    advisoryParagraphs: buildAdvisoryParagraphs(seed),
    expectedParagraphs: buildExpectedParagraphs(seed),
    aftercareParagraphs: buildAftercareParagraphs(seed),
    pricingParagraphs: buildPricingParagraphs(seed),
    beforeAfterParagraphs: buildBeforeAfterParagraphs(seed),
    ctaParagraphs: buildCtaParagraphs(seed),
    faqs: seed.faqQuestions.map((question) => ({
      question,
      answer: buildServiceFaqAnswer(seed, question),
    })),
  };
}

function buildServiceFaqAnswer(service: ServiceSeed, question: string) {
  const lower = question.toLowerCase();
  const firstAftercare = service.aftercareChecklist[0]?.toLowerCase();
  const firstPricing = service.pricingFactors[0]?.toLowerCase();
  const firstNeedConsult = service.needConsult[0]?.toLowerCase();

  if (lower.includes("bao lâu bong")) {
    return `Thời gian bong hoặc thay đổi bề mặt sau ${service.title.toLowerCase()} không giống nhau ở mọi người. Nó phụ thuộc vào nền thật, tốc độ hồi phục và cả việc bạn có giữ đúng nhịp chăm như "${firstAftercare}" hay không. Uyn thường dặn khách theo dõi theo mốc thay vì so từng ngày, vì có người bong nhanh, có người chậm hơn một chút nhưng vẫn đi đúng hướng. Nếu bạn chưa yên tâm ở giai đoạn đầu, cứ nhắn lại để được hướng dẫn kỹ hơn.`;
  }

  if (lower.includes("bao lâu lên màu")) {
    return `Với các dịch vụ liên quan đến môi hoặc mày, màu thường cần thời gian để ổn định chứ không thể đọc chính xác chỉ sau vài ngày đầu. Nền môi, nền da và cách chăm sóc sau làm ảnh hưởng khá nhiều đến chuyện lên màu, nên cảm giác từng ngày có thể không giống nhau. Vì vậy, Uyn luôn nhắc khách đừng hoảng nếu giai đoạn đầu chưa ra đúng màu mong muốn ngay. Điều quan trọng là vùng làm đang đi đúng hướng và được theo dõi đúng nhịp.`;
  }

  if (lower.includes("có cần dặm")) {
    return `Việc có cần dặm lại hay không phụ thuộc vào tình trạng thực tế sau giai đoạn đầu chứ không phải mặc định ai cũng giống nhau. Có khách lên màu hoặc ổn định khá tốt ngay, nhưng cũng có khách cần dặm nhẹ để vùng làm cân hơn với nền thật ban đầu. Uyn thường chỉ tư vấn dặm khi nhìn ra phần nào thật sự cần hỗ trợ thêm, để giữ kết quả tự nhiên và không làm quá tay chỉ vì thói quen.`;
  }

  if (lower.includes("quá đậm") || lower.includes("quá tay")) {
    return `Nỗi lo nhìn quá đậm hoặc quá tay là điều Uyn nghe rất nhiều, và cũng là lý do phần tư vấn luôn được làm kỹ. Khi đã nhìn đúng nền thật và chốt đúng mức độ phù hợp, kết quả thường đi theo hướng mềm và hài hòa hơn. Dù vậy, ở một số giai đoạn đầu hoặc trong cảm giác mới làm xong, khách có thể thấy vùng đó nổi hơn bình thường. Điều cần làm là theo dõi đúng mốc và đọc kết quả sau khi đã ổn định hơn.`;
  }

  if (lower.includes("kiêng gì") || lower.includes("lưu ý gì")) {
    return `Phần cần lưu ý sau ${service.title.toLowerCase()} phụ thuộc vào vùng thực hiện, nhưng điểm chung là nên giữ nhịp chăm nhẹ nhàng, hạn chế tác động mạnh và làm đúng các hướng dẫn đã được dặn riêng, nhất là phần như "${firstAftercare}". Uyn luôn giải thích khá rõ phần saucare để khách không phải tự tra quá nhiều nguồn trái chiều. Nếu có điều gì khiến bạn không chắc nên kiêng đến mức nào, cứ nhắn lại để được hướng dẫn sát hơn với tình trạng thật của mình.`;
  }

  if (lower.includes("giữ được bao lâu") || lower.includes("hiệu quả giữ được bao lâu")) {
    return `Thời gian duy trì cảm nhận kết quả sau ${service.title.toLowerCase()} không hoàn toàn giống nhau ở mọi người. Nó phụ thuộc vào cơ địa, cấu trúc ban đầu, lối sống, tốc độ chuyển hóa hoặc nhịp chăm sóc về sau. Vì vậy, Uyn thường không hứa một mốc quá cứng cho tất cả trường hợp. Điều hữu ích hơn là hiểu mình đang phù hợp với dịch vụ đến đâu và nên theo dõi ở mốc nào để chủ động hơn cho lần kiểm tra tiếp theo nếu cần.`;
  }

  if (lower.includes("sưng không") || lower.includes("đỏ bao lâu")) {
    return `Một số phản ứng nhẹ như hơi đỏ, hơi nhạy hoặc thay đổi cảm giác vùng làm trong giai đoạn đầu có thể xảy ra tùy dịch vụ và nền của từng người. Điều này không có nghĩa là bạn phải quá lo ngay lập tức, nhưng cũng không nên tự bỏ qua nếu cảm thấy khác thường. Nếu bạn thuộc nhóm cần lưu ý trước như "${firstNeedConsult}", thì việc theo dõi sát và nhắn lại sớm khi thấy lạ sẽ càng quan trọng hơn.`;
  }

  if (lower.includes("đau không")) {
    return `Cảm giác khi làm ${service.title.toLowerCase()} khá khác nhau ở mỗi người vì ngưỡng chịu cảm giác và nền thực tế không giống nhau. Nhiều khách đến với tâm lý lo là điều rất bình thường, nên Uyn thường giải thích trước từng bước để khách đỡ căng hơn. Điều quan trọng là bạn hiểu rõ mình đang làm gì, mục tiêu là gì và cảm giác nào có thể xuất hiện trong hoặc sau buổi làm. Khi tâm lý nhẹ hơn, trải nghiệm cũng thường dễ chịu hơn.`;
  }

  if (lower.includes("mấy buổi") || lower.includes("bao lâu thấy thay đổi") || lower.includes("khi nào ổn định")) {
    return `Mốc thấy thay đổi sau ${service.title.toLowerCase()} phụ thuộc vào nền hiện tại, mục tiêu của khách và nhịp đáp ứng của từng cơ thể hoặc làn da. Có người cảm nhận khá sớm, nhưng cũng có người cần đi theo vài mốc quan sát mới thấy rõ hướng thay đổi. Những yếu tố như ${firstPricing} cũng làm cho kỳ vọng ban đầu của mỗi khách không hoàn toàn giống nhau. Đây là lý do Uyn luôn nói về “tiến trình” nhiều hơn là hứa một kết quả quá nhanh.`;
  }

  if (lower.includes("môi thâm") || lower.includes("mày cũ") || lower.includes("da mụn") || lower.includes("da yếu") || lower.includes("mặt to do xương")) {
    return `Câu trả lời ngắn là có thể phù hợp hoặc không, nhưng bắt buộc phải nhìn nền thật trước mới nói chính xác được. Với những tình trạng như nền môi thâm, mày cũ, da mụn, da yếu hay gương mặt to do xương, phần nguyên nhân thật rất quan trọng. Uyn thường không trả lời kiểu chắc chắn ngay từ đầu, vì điều trung thực hơn là xem đúng tình trạng rồi mới nói nên làm gì, chưa nên làm gì và kỳ vọng hợp lý nằm ở đâu.`;
  }

  if (lower.includes("gửi hình")) {
    return `Có thể. Gửi hình trước là một cách rất hữu ích để Uyn nhìn sơ bộ tình trạng của bạn và định hướng xem có nên hẹn tư vấn trực tiếp hay không. Dĩ nhiên, hình chỉ giúp đánh giá bước đầu chứ không thay thế hoàn toàn việc nhìn trực tiếp. Nhưng nó đủ để bạn biết mình đang đi đúng hướng hay cần chuẩn bị thêm gì trước khi quyết định, đặc biệt khi còn đang phân vân giữa vài dịch vụ khác nhau.`;
  }

  return `Với ${service.title.toLowerCase()}, câu trả lời luôn cần đặt trong bối cảnh tình trạng thật của từng khách. Uyn thường không muốn trả lời kiểu một câu cho tất cả vì điều đó dễ làm khách hiểu sai kỳ vọng. Cách tốt nhất là xem nền thật, hiểu đúng mục tiêu và theo dõi theo mốc phù hợp. Khi đã có đủ thông tin, bạn sẽ biết rõ hơn mình nên làm ngay, nên chờ thêm hay cần đổi hướng nhẹ nhàng hơn.`;
}

export const serviceGroups = groupSeeds;
export const services = [...serviceSeeds, ...extraServiceSeeds].map(createServiceRecord);

export const servicesBySlug = new Map(services.map((service) => [service.slug, service]));
export const serviceGroupsBySlug = new Map(serviceGroups.map((group) => [group.slug, group]));

export const servicesGroupedForMenu = serviceGroups.map((group) => ({
  ...group,
  services: services.filter((service) => service.groupSlug === group.slug),
}));

export const pricingItems: PricingItem[] = [
  { category: "Phun xăm thẩm mỹ", serviceName: "Phun môi", priceFrom: "Từ 1.500.000đ", description: "Tư vấn theo nền môi thật và mức độ xử lý.", slug: "phun-moi-vung-tau" },
  { category: "Phun xăm thẩm mỹ", serviceName: "Phun mày", priceFrom: "Từ 1.200.000đ", description: "Dáng mày mềm, cân với gương mặt.", slug: "phun-xam-chan-may-vung-tau" },
  { category: "Phun xăm thẩm mỹ", serviceName: "Khử thâm môi", priceFrom: "Từ 1.000.000đ", description: "Theo sắc tố môi và hướng xử lý thực tế.", slug: "khu-tham-moi-vung-tau" },
  { category: "Phun xăm thẩm mỹ", serviceName: "Sửa mày cũ", priceFrom: "Tư vấn theo tình trạng", description: "Phụ thuộc nền mày cũ và độ trổ màu.", slug: "sua-chan-may-cu-vung-tau" },
  { category: "Filler / Botox", serviceName: "Filler môi", priceFrom: "Tư vấn theo lượng cc", description: "Đi theo cấu trúc môi và mục tiêu thật.", slug: "filler-moi-vung-tau" },
  { category: "Filler / Botox", serviceName: "Filler cằm", priceFrom: "Tư vấn theo lượng cc", description: "Cân chỉnh theo tỷ lệ gương mặt.", slug: "filler-cam-vung-tau" },
  { category: "Filler / Botox", serviceName: "Botox gọn hàm", priceFrom: "Tư vấn theo liều", description: "Chỉ phù hợp khi nguyên nhân đến từ cơ hàm.", slug: "botox-gon-ham-vung-tau" },
  { category: "Filler / Botox", serviceName: "Botox xóa nhăn", priceFrom: "Tư vấn theo vùng", description: "Làm mềm nhăn động theo hướng tự nhiên.", slug: "botox-xoa-nhan-vung-tau" },
  { category: "Filler / Botox", serviceName: "Botox thon gọn vùng mặt", priceFrom: "Tư vấn theo vùng", description: "Tư vấn theo cấu trúc gương mặt thật.", slug: "botox-thon-gon-vung-mat-vung-tau" },
  { category: "Meso / Chăm sóc da", serviceName: "Meso căng bóng", priceFrom: "Từ 800.000đ/buổi", description: "Da thiếu ẩm, xỉn màu hoặc kém mịn.", slug: "meso-cang-bong-cap-am-vung-tau" },
  { category: "Meso / Chăm sóc da", serviceName: "Lấy nhân mụn", priceFrom: "Từ 300.000đ/buổi", description: "Làm sạch nhân mụn đúng cách.", slug: "lay-nhan-mun-vung-tau" },
  { category: "Meso / Chăm sóc da", serviceName: "Chăm sóc da mụn", priceFrom: "Từ 500.000đ/buổi", description: "Theo tình trạng da mụn thực tế.", slug: "cham-soc-da-mun-vung-tau" },
  { category: "Meso / Chăm sóc da", serviceName: "Peel da nhẹ", priceFrom: "Từ 700.000đ/buổi", description: "Kiểm tra nền da trước khi quyết định.", slug: "peel-da-vung-tau" },
  { category: "Meso / Chăm sóc da", serviceName: "Treatment da xỉn màu", priceFrom: "Tư vấn theo tình trạng", description: "Đi theo nguyên nhân khiến da xỉn và thiếu sức sống.", slug: "treatment-da-xin-mau-vung-tau" },
  { category: "Body / Làm gọn vùng nhỏ", serviceName: "Giảm mỡ cánh tay", priceFrom: "Tư vấn theo liệu trình", description: "Theo dõi theo từng buổi.", slug: "giam-mo-canh-tay-vung-tau" },
  { category: "Body / Làm gọn vùng nhỏ", serviceName: "Giảm mỡ nọng cằm", priceFrom: "Tư vấn theo liệu trình", description: "Cần xem đúng nguyên nhân vùng nọng.", slug: "giam-mo-nong-cam-vung-tau" },
  { category: "Body / Làm gọn vùng nhỏ", serviceName: "Giảm mỡ bụng dưới", priceFrom: "Tư vấn theo liệu trình", description: "Theo mức tích mỡ thực tế.", slug: "giam-mo-bung-duoi-vung-tau" },
  { category: "Body / Làm gọn vùng nhỏ", serviceName: "Làm gọn vùng vai lưng", priceFrom: "Tư vấn theo liệu trình", description: "Theo form người và vùng mô mềm thực tế.", slug: "lam-gon-vung-vai-lung-vung-tau" },
  { category: "Body / Làm gọn vùng nhỏ", serviceName: "Chăm sóc body", priceFrom: "Tư vấn theo nhu cầu", description: "Body care nhẹ nhàng, riêng tư và sạch sẽ.", slug: "cham-soc-body-vung-tau" },
  { category: "Combo", serviceName: "Combo môi + mày", priceFrom: "Tư vấn theo tình trạng", description: "Tư vấn theo tổng thể gương mặt.", slug: "combo-phun-moi-va-chan-may-vung-tau" },
  { category: "Combo", serviceName: "Combo da căng bóng", priceFrom: "Tư vấn theo lộ trình", description: "Đi theo nền da thiếu ẩm hoặc kém mịn.", slug: "combo-da-cang-bong-vung-tau" },
  { category: "Combo", serviceName: "Combo da mụn", priceFrom: "Tư vấn theo lộ trình", description: "Sắp thứ tự bước phù hợp cho da mụn.", slug: "combo-da-mun-vung-tau" },
  { category: "Combo", serviceName: "Combo gọn mặt", priceFrom: "Tư vấn theo tình trạng", description: "Đọc đúng nguyên nhân trước khi gợi ý combo.", slug: "combo-gon-mat-vung-tau" },
  { category: "Combo", serviceName: "Gói chăm sóc định kỳ", priceFrom: "Tư vấn theo nhịp chăm", description: "Duy trì nhịp chăm đều và vừa sức.", slug: "goi-cham-soc-dinh-ky-vung-tau" },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    slug: "ba-phun-moi",
    category: "Phun môi",
    service: "Phun môi",
    title: "Môi tươi hơn nhưng vẫn mềm",
    description: "Phù hợp với khách muốn mặt sáng hơn mà không cần dùng son đậm mỗi ngày.",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    note: "Kết quả tùy cơ địa, nền môi và cách chăm sóc sau làm.",
  },
  {
    slug: "ba-chan-may",
    category: "Chân mày",
    service: "Phun xăm chân mày",
    title: "Dáng mày gọn và cân mặt hơn",
    description: "Tập trung vào sự mềm mại, tránh làm chân mày quá sắc so với gương mặt thật.",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    note: "Kết quả tùy cơ địa, nền da và cách chăm sóc sau làm.",
  },
  {
    slug: "ba-filler",
    category: "Filler",
    service: "Filler môi",
    title: "Cân chỉnh môi theo hướng tự nhiên",
    description: "Độ đầy được giữ ở mức vừa phải để môi nhìn mềm và hợp tổng thể.",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    note: "Kết quả tùy cấu trúc môi và khả năng đáp ứng của từng khách.",
  },
  {
    slug: "ba-botox",
    category: "Botox",
    service: "Botox gọn hàm",
    title: "Phần hàm nhìn mềm và gọn hơn",
    description: "Chỉ áp dụng khi phần cơ hàm thật sự là nguyên nhân chính tạo cảm giác mặt vuông.",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    note: "Kết quả tùy cơ địa, vùng cơ hàm và tiến trình theo dõi.",
  },
  {
    slug: "ba-meso",
    category: "Meso / Da",
    service: "Meso căng bóng",
    title: "Da nhìn ẩm và có sức sống hơn",
    description: "Cảm giác da căng mịn nhẹ nhàng, không theo hướng bóng giả hoặc treatment quá nặng.",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    note: "Kết quả tùy nền da và nhịp chăm sau buổi làm.",
  },
  {
    slug: "ba-da-mun",
    category: "Meso / Da",
    service: "Chăm sóc da mụn",
    title: "Bề mặt da sạch và gọn hơn",
    description: "Tập trung vào làm sạch đúng cách và đưa da về nhịp ổn định hơn thay vì thúc quá nhanh.",
    beforeImage: "/images/placeholder-before.svg",
    afterImage: "/images/placeholder-after.svg",
    note: "Kết quả tùy tình trạng mụn, nền da và cách duy trì tại nhà.",
  },
];

const blogSeeds = [
  {
    slug: "sau-phun-moi-dau-hieu-binh-thuong-can-kiem-tra",
    title: "Sau phun môi: dấu hiệu nào bình thường, dấu hiệu nào cần kiểm tra?",
    category: "Phun môi",
    excerpt:
      "90% khách hoảng sau làm đẹp là vì không biết dấu hiệu nào bình thường và khi nào nên nhắn lại để được kiểm tra kỹ hơn.",
    metaDescription:
      "Bài viết giải thích những dấu hiệu thường gặp sau phun môi, điều gì bình thường và khi nào nên kiểm tra thêm.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Phun môi", "Sau làm đẹp", "Chăm sóc sau làm"],
    introParagraphs: [
      "90% khách hoảng sau làm đẹp không phải vì có vấn đề lớn, mà vì không biết điều gì đang diễn ra là bình thường và điều gì nên kiểm tra thêm. Sau phun môi, giai đoạn đầu thường đi kèm rất nhiều cảm xúc: lúc thì thấy màu đậm quá, lúc lại thấy môi khô, lúc bong sớm, lúc lại sốt ruột vì mãi chưa thấy màu mình mong. Những phản ứng đó dễ khiến khách tự tra cứu hàng chục nguồn khác nhau rồi càng đọc càng lo.",
      "Ở Chòi của Uyn, phần dặn dò sau phun môi luôn được làm khá kỹ vì Uyn biết rõ khách thường lo ở giai đoạn nào. Điều đáng sợ nhất không phải là môi đang thay đổi, mà là khách không biết sự thay đổi đó có nằm trong hướng bình thường hay không. Bài viết này được viết để giúp bạn bình tĩnh hơn, hiểu quá trình môi sau phun đi như thế nào, dấu hiệu nào thường gặp và khi nào nên nhắn lại để được kiểm tra kỹ hơn.",
    ],
    sections: [
      {
        id: "ly-do-khach-lo",
        heading: "Vì sao sau phun môi khách rất dễ hoảng?",
        paragraphs: [
          "Phun môi là dịch vụ mà kết quả đẹp cuối cùng không thể đọc ngay trong ngày đầu. Ngược lại, giai đoạn đầu lại thường là giai đoạn môi nhìn khác nhất: có thể đậm hơn, khô hơn, nhạy hơn hoặc chưa ra sắc như tưởng tượng. Chính khoảng trễ này khiến nhiều khách bị tâm lý “không giống hình dung ban đầu” và bắt đầu lo.",
          "Thêm một lý do nữa là môi là vùng rất dễ được nhìn sát mỗi ngày. Bạn soi gương, bạn thấy màu thay đổi, bạn thấy bề mặt môi thay đổi và rất khó không so sánh với ảnh mẫu hoặc trải nghiệm của người khác. Nhưng nền môi của mỗi người khác nhau, nên việc môi đi nhanh hay chậm, lên màu thế nào hay khô ở mức nào đều không thể giống nhau hoàn toàn.",
          "Khi khách hiểu trước rằng sau phun môi luôn có một quá trình ổn định, cảm giác hoảng sẽ giảm đi rất nhiều. Việc của bạn trong giai đoạn này không phải là đoán kết quả cuối ngay, mà là theo dõi xem môi có đang đi đúng hướng bình thường hay không.",
        ],
      },
      {
        id: "dau-hieu-binh-thuong",
        heading: "Những dấu hiệu thường gặp và thường là bình thường",
        paragraphs: [
          "Nhiều khách thấy môi đậm hơn mong muốn trong giai đoạn đầu và nghĩ rằng màu đã “lỡ quá tay”. Thực tế, đây là một phản ứng khiến khách lo nhiều nhưng lại khá thường gặp. Giai đoạn đầu không phải là lúc đọc màu cuối. Điều nên nhìn là môi có đang hồi theo hướng ổn không và bạn có đang chăm đúng hướng dẫn hay không.",
          "Khô môi, cảm giác hơi căng hoặc bề mặt môi thay đổi theo từng ngày cũng là điều không hiếm. Một số khách bong sớm, một số bong chậm hơn. Có người thấy màu nhạt đi rồi lại lo rằng “môi không ăn màu”, nhưng thực ra quá trình ổn định luôn cần thời gian. Nếu chỉ dựa vào một ngày cụ thể để kết luận, bạn rất dễ đánh giá sai.",
          "Điểm quan trọng là các biểu hiện bình thường thường vẫn đi cùng một cảm giác chung: môi đang thay đổi nhưng không tạo ra tình trạng khiến bạn thấy bất an rõ rệt. Khi còn phân vân, cách tốt nhất vẫn là chụp lại theo mốc và nhắn người tư vấn cho mình để được đọc tình trạng sát hơn.",
        ],
        checklist: [
          "Môi đậm hơn giai đoạn đầu không phải lúc nào cũng là dấu hiệu xấu.",
          "Khô, hơi căng hoặc bề mặt môi đổi theo ngày là điều thường gặp.",
          "Bong nhanh hay chậm còn tùy nền môi và cách chăm sóc.",
          "Màu môi trong vài ngày đầu chưa phải màu cuối cùng.",
        ],
      },
      {
        id: "dau-hieu-can-kiem-tra",
        heading: "Khi nào nên nhắn lại để được kiểm tra?",
        paragraphs: [
          "Có một khác biệt rất lớn giữa việc khách lo vì chưa quen với giai đoạn sau làm, và việc khách thấy một dấu hiệu khiến bản thân thực sự bất an. Nếu bạn cảm thấy môi có biểu hiện không giống những gì đã được dặn trước, hoặc cảm giác khó chịu tăng lên thay vì dịu dần, đó là lúc nên nhắn lại để được kiểm tra.",
          "Nhiều khách ngại vì sợ hỏi nhiều, hoặc sợ bị nghĩ là sốt ruột quá. Thực ra, việc nhắn lại đúng lúc là điều hoàn toàn nên làm. Một câu hỏi đúng thời điểm có thể giúp bạn tránh việc tự xử sai ở nhà. Ngược lại, cố chịu mà không hiểu môi đang ở giai đoạn nào lại dễ khiến bạn lo kéo dài không cần thiết.",
          "Nếu bạn không chắc dấu hiệu mình đang gặp có bình thường hay không, cứ xem lại hướng dẫn ban đầu và chụp ảnh theo ánh sáng rõ. Một hình rõ, đúng mốc thời gian, thường giúp phần tư vấn đọc tình trạng dễ hơn rất nhiều so với việc chỉ mô tả bằng cảm giác chung chung.",
        ],
        note:
          "Bài viết mang tính tham khảo, tình trạng thực tế nên được tư vấn trực tiếp trước khi quyết định làm dịch vụ hoặc khi cần kiểm tra lại sau làm.",
      },
      {
        id: "vi-sao-chua-dep-ngay",
        heading: "Vì sao làm xong chưa đẹp ngay là chuyện rất bình thường?",
        paragraphs: [
          "Một hiểu lầm phổ biến là nhiều khách nghĩ sau phun môi, kết quả đẹp sẽ xuất hiện ngay khi vừa rời mini spa. Nhưng phần lớn dịch vụ có giai đoạn ổn định đều không đi theo cách đó. Sau phun môi, bạn cần cho môi thời gian để đi qua các mốc riêng của nó. Đây là lý do Uyn luôn nói về “quá trình” nhiều hơn là “ảnh ngay sau làm”.",
          "Càng nhìn vào môi theo kiểu tìm kết quả ngay, bạn càng dễ bỏ lỡ điều quan trọng hơn: môi có đang hồi đúng hướng hay không. Có nền môi ban đầu thâm nhẹ, có nền môi nhợt, có người môi khô, có người môi mỏng. Từng yếu tố đó đều ảnh hưởng đến việc môi ổn định nhanh hay chậm. Vì thế, so với người khác thường không giúp ích nhiều cho bạn ở giai đoạn này.",
          "Khi hiểu tâm lý này, khách sẽ đỡ rơi vào hai thái cực: hoặc quá kỳ vọng ngay lập tức, hoặc quá hoảng khi chưa thấy giống điều mình tưởng. Sự bình tĩnh là một phần quan trọng của chăm sóc sau làm đẹp, không kém gì việc bạn giữ môi sạch và theo đúng hướng dẫn.",
        ],
      },
      {
        id: "cham-soc-sai",
        heading: "Chăm sóc sai ảnh hưởng đến kết quả như thế nào?",
        paragraphs: [
          "Nhiều kết quả bị ảnh hưởng không hẳn vì kỹ thuật ban đầu, mà vì khách tự chăm theo một hướng khác với những gì đã được dặn. Có người tự bóc phần bong vì sốt ruột, có người thử quá nhiều mẹo trên mạng, có người lại bỏ qua chuyện theo dõi giai đoạn đầu vì nghĩ “chắc ai cũng như ai”. Những thói quen đó khiến khách khó đọc đúng phản ứng của môi hơn và cũng dễ lo sai chỗ hơn.",
          "Chăm sóc sai còn ảnh hưởng đến tâm lý. Khi bạn tự can thiệp rồi thấy môi không đi như mong, nỗi lo sẽ lớn hơn rất nhiều vì không còn biết nguyên nhân đến từ đâu. Ngược lại, nếu bạn giữ đúng nhịp đã được dặn, việc theo dõi tình trạng sẽ rõ ràng hơn và người tư vấn cũng dễ nhìn ra môi đang ổn hay cần hỗ trợ thêm.",
          "Nói cách khác, chăm sóc sau phun môi không phải chỉ để “kiêng cho đủ”, mà là để giữ môi đi đúng hướng và giúp chính bạn đỡ phải căng thẳng trong giai đoạn chờ ổn định.",
        ],
        checklist: [
          "Không tự bóc phần bong vì dễ làm bạn đánh giá sai giai đoạn môi.",
          "Không thử quá nhiều mẹo không rõ nguồn khi chưa hỏi lại nơi làm.",
          "Giữ môi sạch, theo dõi đúng mốc và chụp lại nếu cần hỏi thêm.",
        ],
      },
      {
        id: "khi-nao-nen-hoi",
        heading: "Khi nào nên hỏi ngay thay vì tự chờ?",
        paragraphs: [
          "Nếu bạn đã đọc lại hướng dẫn mà vẫn thấy lo, hoặc môi xuất hiện cảm giác hay biểu hiện khác hẳn điều được dặn trước, hãy hỏi. Việc hỏi đúng lúc luôn tốt hơn việc cố đoán. Rất nhiều khách chỉ cần được giải thích rõ thêm là nhẹ đầu ngay và không còn tự làm mình căng vì những suy nghĩ tiêu cực.",
          "Đừng chờ đến khi mình quá hoảng mới nhắn lại. Một cuộc trao đổi ngắn với ảnh chụp rõ và mốc thời gian cụ thể sẽ giúp người tư vấn đọc tình trạng sát hơn nhiều. Điều này đặc biệt hữu ích với khách lần đầu làm, vì chưa có trải nghiệm để biết mình đang ở giai đoạn bình thường nào.",
          "Sự an tâm sau làm đẹp không đến từ việc không có thay đổi gì, mà đến từ việc bạn hiểu mình đang thay đổi trong một tiến trình bình thường hay cần hỗ trợ thêm. Biết hỏi đúng lúc chính là một phần của việc chăm sóc bản thân thật tốt sau dịch vụ.",
        ],
      },
      {
        id: "giu-binh-tinh",
        heading: "Điều quan trọng nhất: giữ bình tĩnh và theo dõi đúng mốc",
        paragraphs: [
          "Sau phun môi, việc quan trọng nhất không phải là soi môi liên tục để kết luận thật nhanh, mà là giữ một tâm lý bình tĩnh hơn. Một nền môi ổn định đẹp cần đúng cả ba điều: được làm theo nền thật, được chăm theo hướng dẫn và được theo dõi trong khoảng thời gian đủ để lên màu. Nếu thiếu một trong ba điều đó, khách rất dễ tự làm mình mất niềm tin quá sớm.",
          "Khi bạn hiểu đâu là dấu hiệu thường gặp, đâu là lúc nên kiểm tra, bạn sẽ đỡ bị cuốn vào những câu chuyện quá cực đoan trên mạng. Môi của bạn không cần giống môi người khác. Điều quan trọng là nó đi đúng hướng với nền thật của bạn, và bạn có người đồng hành để hỏi khi cần. Đó cũng là tinh thần chăm sóc sau làm mà Chòi của Uyn luôn cố giữ cho khách.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sau phun môi thấy đậm quá có đáng lo không?",
        answer:
          "Không phải lúc nào cũng đáng lo. Ở giai đoạn đầu, môi có thể nhìn đậm hơn mong muốn và đây là điều khiến nhiều khách dễ hoảng nhất. Điều cần làm là theo dõi đúng mốc và xem môi có đang đi đúng hướng bình thường không. Nếu bạn chưa yên tâm, cứ chụp lại và nhắn để được kiểm tra cụ thể hơn thay vì tự kết luận quá sớm.",
      },
      {
        question: "Môi bong chậm có phải lên màu không tốt không?",
        answer:
          "Không thể kết luận chỉ dựa vào việc bong nhanh hay chậm. Nền môi, độ khô, cách chăm sóc và cơ địa mỗi người khác nhau nên tốc độ thay đổi cũng khác. Bong chậm không đồng nghĩa với lên màu xấu. Điều quan trọng là môi có đang ổn định theo hướng bình thường hay không và bạn có làm đúng những gì đã được dặn sau buổi làm không.",
      },
      {
        question: "Bao lâu thì nên đánh giá màu môi cuối cùng?",
        answer:
          "Bạn không nên đọc màu cuối chỉ sau vài ngày đầu, vì đó thường chưa phải giai đoạn ổn định. Uyn luôn khuyên khách theo dõi theo mốc và giữ bình tĩnh hơn với quá trình của môi. Mỗi nền môi sẽ có tốc độ riêng. Khi chưa đến giai đoạn phù hợp mà đã kết luận đẹp hay xấu, bạn rất dễ rơi vào tâm lý hoảng không cần thiết.",
      },
      {
        question: "Lúc nào thì nên nhắn lại để kiểm tra?",
        answer:
          "Nếu bạn cảm thấy môi xuất hiện điều gì khác với phần hướng dẫn đã được dặn, hoặc cảm giác khó chịu tăng lên thay vì dịu dần, hãy nhắn lại. Việc hỏi đúng lúc luôn tốt hơn việc tự đoán. Chỉ cần ảnh rõ và mốc thời gian cụ thể, phần tư vấn thường sẽ đọc tình trạng nhanh và sát hơn nhiều so với việc bạn tự so với nhiều nguồn khác nhau trên mạng.",
      },
      {
        question: "Có nên tự tìm mẹo xử lý trên mạng khi thấy lo không?",
        answer:
          "Tốt nhất là không nên thử quá nhiều mẹo khi chưa hỏi lại nơi đã tư vấn cho bạn. Mỗi nền môi và mỗi giai đoạn sau làm khác nhau, nên một mẹo hợp với người khác chưa chắc hợp với bạn. Việc tự can thiệp đôi khi còn làm bạn khó theo dõi tình trạng thật hơn. Cách an toàn hơn là hỏi lại đúng nơi đã nhìn nền môi của bạn từ đầu.",
      },
    ],
    relatedPosts: ["moi-tham-co-phun-duoc-khong", "meso-cang-bong-co-phu-hop-da-mun-khong"],
  },
  {
    slug: "botox-gon-ham-bao-lau-thay-hieu-qua",
    title: "Botox gọn hàm bao lâu thấy hiệu quả?",
    category: "Filler / Botox",
    excerpt:
      "Điều nhiều khách quan tâm nhất không chỉ là gọn hay không, mà là bao lâu mới thấy mặt thay đổi và vì sao mỗi người lại khác nhau.",
    metaDescription:
      "Tìm hiểu mốc thời gian thường gặp sau botox gọn hàm và những yếu tố khiến hiệu quả đến sớm hoặc muộn khác nhau.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Botox", "Gọn hàm", "Filler / Botox"],
    introParagraphs: [
      "Botox gọn hàm là một trong những dịch vụ được hỏi nhiều nhất, nhưng cũng là dịch vụ rất dễ bị kỳ vọng sai nếu khách chỉ nhìn ảnh trước sau của người khác. Câu hỏi phổ biến nhất luôn là: bao lâu thì thấy hiệu quả? Phía sau câu hỏi đó thường là tâm lý rất thật: khách muốn biết mình cần chờ bao lâu, có bình thường không nếu chưa thấy gì, và làm sao để không lo khi mặt chưa thay đổi ngay như tưởng tượng.",
      "Điều cần nhớ đầu tiên là botox gọn hàm không phải dịch vụ “xong là thấy ngay”. Nó cần thời gian để đi theo cơ chế riêng của cơ hàm, và mốc thay đổi ở mỗi người không hoàn toàn giống nhau. Bài viết này sẽ giúp bạn hiểu rõ hơn vì sao tốc độ đáp ứng khác nhau, mốc theo dõi nào thường gặp, khi nào nên bình tĩnh chờ thêm và khi nào nên nhắn lại để được tư vấn cụ thể hơn.",
    ],
    sections: [
      {
        id: "khong-thay-ngay",
        heading: "Vì sao botox gọn hàm không cho kết quả ngay lập tức?",
        paragraphs: [
          "Rất nhiều khách bước vào dịch vụ này với một mong muốn đơn giản: mặt gọn hơn càng sớm càng tốt. Nhưng botox gọn hàm không hoạt động như một lớp makeup hay một filter trên ảnh. Nó cần thời gian để tác động lên phần cơ hàm phù hợp, nên việc chưa thấy thay đổi ngay trong vài ngày đầu là điều rất bình thường.",
          "Chính vì không thấy ngay, khách dễ rơi vào tâm lý nghi ngờ: có phải mình không hợp, có phải dịch vụ không có tác dụng, hay có phải người khác thấy nhanh hơn mình? Thực ra, những so sánh đó thường không có nhiều giá trị vì mỗi cơ hàm khác nhau, mức độ hoạt động khác nhau và mục tiêu mong muốn của từng khách cũng khác nhau.",
          "Điều hữu ích hơn là hiểu đây là một tiến trình có mốc theo dõi. Khi đọc đúng theo mốc đó, bạn sẽ bớt sốt ruột và dễ nhìn ra hướng thay đổi thực tế hơn thay vì cố ép mình phải thấy gọn ngay tức thì.",
        ],
      },
      {
        id: "yeu-to-anh-huong",
        heading: "Những yếu tố nào ảnh hưởng đến tốc độ thấy hiệu quả?",
        paragraphs: [
          "Yếu tố đầu tiên là nguyên nhân thật khiến mặt bạn trông to hoặc vuông hơn. Nếu phần cơ hàm là nguyên nhân chính, bạn sẽ là nhóm phù hợp hơn với dịch vụ này. Nhưng nếu gương mặt to chủ yếu do xương, do mô mỡ hoặc do tổng thể cấu trúc, cảm giác “gọn hàm” sau đó có thể không rõ theo hướng bạn kỳ vọng.",
          "Yếu tố tiếp theo là mức độ hoạt động của cơ hàm. Có người cơ hàm làm việc mạnh vì thói quen nhai, cắn hoặc siết hàm, nên khi được tư vấn đúng hướng, phần thay đổi có thể dễ đọc hơn theo thời gian. Ngoài ra, cơ địa và cảm nhận thẩm mỹ của khách cũng ảnh hưởng khá nhiều. Có người chỉ cần thay đổi nhẹ là đã thấy khuôn mặt thanh hơn, nhưng có người lại chờ một sự khác biệt lớn hơn mới cảm nhận rõ.",
          "Đó là lý do phần tư vấn trước khi làm rất quan trọng. Nó giúp bạn biết dịch vụ này đang giải quyết đúng điều gì và khoảng chờ đợi của mình nên đặt ở mức nào cho thực tế hơn.",
        ],
      },
      {
        id: "moc-theo-doi",
        heading: "Nên theo dõi theo mốc nào để đỡ sốt ruột?",
        paragraphs: [
          "Sai lầm phổ biến nhất là soi gương mỗi ngày và cố kết luận quá nhanh rằng “chưa thấy gì”. Với botox gọn hàm, cách theo dõi hữu ích hơn là nhìn theo mốc. Mỗi mốc giúp bạn đọc một tín hiệu khác nhau: có thể là cảm giác cơ hàm khác đi, có thể là đường nét mềm hơn dần, hoặc có thể là ảnh nghiêng nhìn nhẹ hơn ở phần dưới gương mặt.",
          "Việc theo dõi theo mốc còn giúp bạn đỡ bị cảm xúc chi phối. Hôm nay chụp ảnh ánh sáng khác, ngày mai ngủ ít hơn, khuôn mặt vốn đã không giống nhau từng ngày. Nếu chỉ dựa vào cảm giác trong một buổi sáng để kết luận, bạn rất dễ thấy mình “không có hiệu quả” dù thực tế vẫn đang đi đúng hướng.",
          "Nếu bạn đang phân vân, hãy chụp lại ở những mốc cố định với ánh sáng tương đối giống nhau. Cách theo dõi đơn giản này thường giúp đọc sự thay đổi thật rõ ràng hơn nhiều so với việc soi gương liên tục trong tâm lý sốt ruột.",
        ],
        checklist: [
          "Đừng đánh giá quá sớm chỉ sau vài ngày đầu.",
          "Theo dõi theo mốc thay vì soi từng ngày.",
          "Chụp ảnh cùng góc, cùng ánh sáng để so dễ hơn.",
          "Đọc kết quả theo hướng gương mặt mềm dần chứ không đòi thay đổi đột ngột.",
        ],
      },
      {
        id: "mat-to-do-xuong",
        heading: "Nếu mặt to do xương hoặc do mỡ thì sao?",
        paragraphs: [
          "Đây là điều rất quan trọng và cũng là điểm nhiều nơi bỏ qua khi tư vấn quá nhanh. Nếu gương mặt trông to chủ yếu do xương hoặc mô mỡ, botox gọn hàm không phải lúc nào cũng là lựa chọn chính. Khi nguyên nhân gốc không nằm ở cơ hàm, việc kỳ vọng mặt gọn đi rõ rệt sau botox sẽ dễ dẫn đến thất vọng không cần thiết.",
          "Nói điều này không có nghĩa là dịch vụ không tốt, mà chỉ có nghĩa là nó cần đi đúng người. Cũng giống như chăm da, một bước đúng người sẽ giúp khách hài lòng hơn rất nhiều so với một bước phổ biến nhưng không thật sự hợp với mình. Chính vì vậy, nếu bạn nghe tư vấn mà cảm giác quá dễ dãi, đừng ngại hỏi lại xem phần cơ hàm của mình có thật sự là yếu tố chính hay không.",
          "Sự trung thực ở bước đầu này giúp khách tiết kiệm cả tiền lẫn tâm lý. Đôi khi, biết một dịch vụ chưa phải hướng chính lại là điều giúp bạn an tâm hơn để chọn đúng hướng về sau.",
        ],
      },
      {
        id: "nhung-lo-lang-pho-bien",
        heading: "Những lo lắng phổ biến khiến khách hiểu sai về hiệu quả",
        paragraphs: [
          "Một lo lắng rất thường gặp là khách sợ mặt mình “không thay đổi gì”, trong khi thật ra thay đổi đang diễn ra nhưng theo cách khá nhẹ và kín. Vì botox gọn hàm đi theo hướng mềm và gọn dần, nhiều khách không nhận ra ngay nếu cứ nhìn mặt mình hằng ngày. Điều này hoàn toàn dễ hiểu.",
          "Lo lắng khác là so mình với ảnh mẫu của người khác. Nhưng ảnh trước sau thường không cho bạn thấy nguyên nhân gốc ban đầu, mức cơ hàm của người đó, góc chụp hay ánh sáng. So như vậy rất dễ khiến bạn nghĩ mình chậm hơn, yếu hơn hoặc không hợp, dù thực tế bạn chỉ đang có một tiến trình khác.",
          "Cách thoát khỏi vòng lo này là quay về câu hỏi gốc: mình có đang phù hợp với dịch vụ hay không, mình đang ở đúng mốc theo dõi chưa, và người tư vấn cho mình có nói rõ kỳ vọng thực tế ngay từ đầu không. Nếu ba điều này rõ, bạn sẽ đỡ căng hơn rất nhiều.",
        ],
      },
      {
        id: "khi-nao-can-nhan-lai",
        heading: "Khi nào nên nhắn lại để được kiểm tra thêm?",
        paragraphs: [
          "Nếu bạn đã đi qua một mốc theo dõi hợp lý mà vẫn không chắc mình đang ở đâu, đừng ngại nhắn lại. Một số khách nghĩ phải chờ thật lâu mới được hỏi, nhưng điều đó không cần thiết. Hỏi đúng lúc giúp bạn đọc kết quả tốt hơn và cũng đỡ mang cảm giác lo một mình.",
          "Ngoài chuyện chưa thấy thay đổi rõ, bạn cũng nên nhắn lại nếu có điều gì khiến bản thân chưa yên tâm trong giai đoạn đầu hoặc sau một mốc theo dõi quan trọng. Phần ảnh chụp cùng góc và mô tả cảm giác vùng hàm thường giúp việc kiểm tra từ xa dễ hơn nhiều. Quan trọng nhất là đừng tự kết luận chỉ vì thấy mình chưa giống một hình mẫu nào đó trên mạng.",
          "Một cuộc trao đổi đúng lúc có thể giúp bạn bình tĩnh hơn rất nhiều. Điều đó cũng phù hợp với tinh thần tư vấn trước và theo dõi sau làm mà Chòi của Uyn luôn cố giữ cho khách.",
        ],
      },
      {
        id: "ky-vong-thuc-te",
        heading: "Giữ kỳ vọng thực tế là cách giúp bạn hài lòng hơn",
        paragraphs: [
          "Botox gọn hàm không phải phép biến đổi gương mặt thành một khuôn mẫu khác. Nó là một dịch vụ giúp hỗ trợ phần cơ hàm khi thật sự phù hợp, để đường nét phía dưới gương mặt có thể mềm hơn và gọn hơn theo thời gian. Khi bạn bước vào dịch vụ với cách hiểu này, cảm giác theo dõi kết quả sẽ dễ chịu hơn rất nhiều.",
          "Điều giúp khách hài lòng lâu dài không phải là thấy thay đổi thật mạnh sau vài ngày, mà là cảm giác gương mặt của mình đi đúng hướng và vẫn là mình khi nhìn vào gương. Đó cũng là lý do Uyn luôn nói nhiều về “vừa đủ”, “tự nhiên” và “đúng người” hơn là những lời hứa nghe rất nhanh nhưng khó giữ đúng cho tất cả mọi người.",
        ],
      },
    ],
    faqs: [
      {
        question: "Nếu vài ngày đầu chưa thấy gì thì có bình thường không?",
        answer:
          "Có. Đây là điều rất thường gặp với botox gọn hàm vì dịch vụ này không cho cảm giác thay đổi tức thì như nhiều người tưởng. Điều nên làm là theo dõi theo mốc và đọc kết quả theo đúng hướng tư vấn ban đầu. Nếu bạn chưa yên tâm, có thể chụp ảnh theo góc cố định để việc kiểm tra sau đó rõ ràng và bớt cảm tính hơn.",
      },
      {
        question: "Vì sao người khác thấy nhanh còn mình thì chưa rõ?",
        answer:
          "Mỗi người có cơ hàm, nguyên nhân gương mặt trông to và kỳ vọng cảm nhận kết quả rất khác nhau. Cũng vì thế, tốc độ nhận ra sự thay đổi không giống nhau. So với người khác thường làm bạn lo hơn chứ không giúp ích nhiều. Điều quan trọng hơn là bạn có đang phù hợp với dịch vụ và đang theo dõi đúng mốc hay không.",
      },
      {
        question: "Nếu mặt to do xương thì botox gọn hàm có hiệu quả không?",
        answer:
          "Nếu nguyên nhân chính là xương, botox gọn hàm có thể không phải lựa chọn chính cho kỳ vọng gọn mặt của bạn. Điều này cần được tư vấn thẳng từ đầu để tránh hiểu sai dịch vụ. Không phải cứ muốn gọn hàm là nên làm botox. Cần nhìn đúng nguyên nhân thì mới có thể đọc hiệu quả theo hướng phù hợp và thực tế hơn.",
      },
      {
        question: "Có nên soi gương mỗi ngày để theo dõi không?",
        answer:
          "Bạn có thể quan sát, nhưng không nên kết luận mỗi ngày. Sự thay đổi ở gương mặt vốn đã chịu ảnh hưởng bởi ánh sáng, giấc ngủ, góc nhìn và cả tâm lý. Cách theo dõi tốt hơn là chụp cùng góc, cùng ánh sáng ở các mốc nhất định. Nhờ vậy, bạn sẽ nhìn rõ tiến trình hơn và giảm cảm giác lo do nhìn quá sát từng ngày.",
      },
      {
        question: "Khi nào nên nhắn lại để được kiểm tra?",
        answer:
          "Nếu bạn đã đi qua một mốc theo dõi hợp lý mà vẫn không chắc mình đang ở đâu, hoặc có điều gì khiến bản thân chưa yên tâm, hãy nhắn lại. Hỏi đúng lúc là điều nên làm. Một cuộc trao đổi ngắn với ảnh chụp rõ sẽ giúp bạn đỡ suy đoán và đỡ lo hơn rất nhiều so với việc tiếp tục so mình với những trường hợp khác trên mạng.",
      },
    ],
    relatedPosts: ["sau-phun-moi-dau-hieu-binh-thuong-can-kiem-tra", "sau-tiem-filler-can-kieng-gi"],
  },
  {
    slug: "meso-cang-bong-co-phu-hop-da-mun-khong",
    title: "Meso căng bóng có phù hợp với da mụn không?",
    category: "Meso",
    excerpt:
      "Không phải da mụn nào cũng nên làm meso ngay. Điều quan trọng là xem nền da đang cần gì trước khi nghĩ đến độ căng bóng.",
    metaDescription:
      "Giải thích khi nào da mụn có thể phù hợp với meso căng bóng, khi nào nên xử lý nền da trước và cách tư vấn thực tế.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Meso", "Da mụn", "Chăm sóc da"],
    introParagraphs: [
      "Meso căng bóng là dịch vụ được rất nhiều khách thích vì nghe đến đâu cũng thấy hấp dẫn: da ẩm hơn, mịn hơn, nhìn có sức sống hơn. Nhưng khi gắn thêm chữ “da mụn”, câu chuyện không còn đơn giản như vậy nữa. Rất nhiều khách da mụn đến tư vấn với tâm lý muốn da vừa bớt mụn vừa căng bóng nhanh hơn, nhưng nếu chọn sai thời điểm, da có thể chưa kịp khỏe đã bị đẩy đi quá nhanh.",
      "Câu hỏi “da mụn có làm meso được không?” vì vậy không thể trả lời chỉ bằng một chữ có hoặc không. Điều đúng hơn là phải nhìn nền da hiện tại: mụn ở mức nào, da có đang yếu không, đang treatment gì, mức bít tắc ra sao và mục tiêu thật của khách là gì. Bài viết này sẽ giúp bạn hiểu khi nào meso có thể là một phần trong hướng chăm da, và khi nào nên dừng lại để xử lý nền da trước.",
    ],
    sections: [
      {
        id: "da-mun-khong-giong-nhau",
        heading: "Không phải da mụn nào cũng giống nhau",
        paragraphs: [
          "Nhiều người nói “da mụn” như một nhóm duy nhất, nhưng thực tế đây là một thế giới rất rộng. Có da mụn ẩn, có da bít tắc nhiều dầu, có da viêm nhẹ, có da vừa mụn vừa yếu vì treatment sai. Khi gom tất cả vào một câu trả lời chung, bạn rất dễ chọn nhầm dịch vụ chỉ vì thấy người khác hợp mà nghĩ mình cũng sẽ hợp.",
          "Đó là lý do Chòi của Uyn luôn xem tình trạng thật của da trước khi nói đến chuyện meso. Một nền da mụn nhưng khỏe, ổn, ít kích ứng sẽ khác hoàn toàn với một nền da mụn đang mỏng, đỏ và quá tải. Dịch vụ nào cũng chỉ phát huy đúng khi nó đi vào đúng nền da phù hợp.",
          "Nếu bỏ qua bước phân loại này, khách rất dễ rơi vào vòng treatment mạnh, thấy da đẹp một chút rồi lại mệt hơn ở giai đoạn sau. Với da mụn, đi chậm mà đúng thường vẫn an tâm hơn đi nhanh nhưng rối.",
        ],
      },
      {
        id: "khi-nao-co-the-can-nhac",
        heading: "Khi nào da mụn có thể cân nhắc meso căng bóng?",
        paragraphs: [
          "Da mụn có thể cân nhắc meso khi nền da đủ ổn, hàng rào da không quá yếu và mục tiêu của buổi làm rõ ràng. Ví dụ, có những khách mụn không còn viêm nhiều, nền da đang thiếu ẩm, bề mặt khô và kém sức sống. Lúc đó, nếu được tư vấn đúng, meso có thể là một phần hỗ trợ giúp da ẩm và dễ chịu hơn.",
          "Tuy vậy, “có thể cân nhắc” không có nghĩa là nên quyết định ngay chỉ vì thích hiệu ứng căng bóng. Vẫn cần xem da có đang treatment hoạt chất mạnh không, có bít tắc quá nhiều không và da đang cần làm sạch hay phục hồi trước. Nếu bỏ qua những điểm này, dịch vụ dễ đi sai nhịp của làn da.",
          "Nói cách khác, câu hỏi không phải là “da mụn có làm meso được không” mà là “nền da mụn hiện tại của mình có đang ở trạng thái phù hợp để meso chưa”. Đây là cách hỏi giúp bạn thực tế hơn và ít bị cuốn theo xu hướng hơn.",
        ],
      },
      {
        id: "khi-nao-nen-xu-ly-nen-truoc",
        heading: "Khi nào nên xử lý nền da trước khi nghĩ đến meso?",
        paragraphs: [
          "Nếu da đang quá bít tắc, mụn viêm rõ, hàng rào da yếu hoặc da đang phản ứng nhiều với routine hiện tại, việc ưu tiên meso ngay thường không phải lựa chọn đầu tiên. Có nền da cần làm sạch lại nhịp chăm, có nền da cần giảm treatment mạnh, có nền da lại cần phục hồi đủ trước để meso sau đó đi êm hơn và bền hơn.",
          "Đây là phần khách thường sốt ruột nhất. Bởi ai cũng muốn đi thẳng đến bước nghe có vẻ “đẹp” hơn. Nhưng da cũng giống một nền nhà đang yếu: nếu nền chưa ổn mà đã chồng thêm thứ mới, cảm giác căng bóng có thể không đi cùng sự ổn định thật. Khi đó, khách vừa tốn công vừa dễ nản vì da không đi đúng kỳ vọng.",
          "Xử lý nền trước không có nghĩa là chậm hơn một cách vô ích. Nó là cách để meso, nếu thật sự phù hợp, phát huy đúng vai trò của nó ở một thời điểm tốt hơn.",
        ],
      },
      {
        id: "hieu-sai-ve-cang-bong",
        heading: "Hiểu đúng về “căng bóng” để không kỳ vọng sai",
        paragraphs: [
          "Rất nhiều khách nghe chữ “căng bóng” và tưởng rằng da phải sáng bóng ngay, mịn ngay, đẹp ngay mới là đúng. Nhưng với Uyn, da căng bóng đúng nghĩa là da có đủ ẩm, có sức sống và nhìn khỏe hơn theo nền thật của nó. Đó không phải là một lớp hiệu ứng bề mặt che đi việc da đang mệt.",
          "Với da mụn, cách hiểu này lại càng quan trọng. Nếu chỉ chạy theo hiệu ứng đẹp nhanh mà bỏ qua tình trạng nền, da rất dễ bị kéo đi lệch hướng. Có thể hôm đó bạn thấy da ổn hơn, nhưng nếu không đúng thời điểm, sự ổn đó sẽ không bền hoặc làm bạn nhầm rằng da đã khỏe trong khi hàng rào da vẫn còn yếu.",
          "Khi giữ được góc nhìn này, bạn sẽ bớt áp lực hơn với làn da của mình và cũng dễ chấp nhận những bước phục hồi hoặc làm sạch trước khi nghĩ đến độ bóng khỏe mà mình mong muốn.",
        ],
      },
      {
        id: "cach-tu-van-thuc-te",
        heading: "Cách Chòi của Uyn thường tư vấn với da mụn muốn làm meso",
        paragraphs: [
          "Khi khách da mụn hỏi về meso, Uyn thường không trả lời kiểu một câu. Thay vào đó, Uyn sẽ nhìn loại mụn, mức bít tắc, độ dầu, nền da có đang đỏ hay yếu không, khách đang dùng gì ở nhà và điều khách mong nhất là gì. Có người tưởng mình cần meso, nhưng sau khi xem lại thì điều cần nhất là phục hồi nền hoặc làm sạch đúng cách trước.",
          "Có khách khác thì nền da đủ ổn, mụn không phải vấn đề chính nữa mà da đang thiếu ẩm và kém mịn. Lúc đó, meso có thể được cân nhắc như một bước hỗ trợ. Điểm mấu chốt là không ai bị áp vào cùng một câu trả lời. Da mụn cần được đối xử như một tình trạng thật, không phải một hashtag.",
          "Khi tư vấn theo kiểu này, khách thường thấy nhẹ đầu hơn rất nhiều. Mình biết mình đang ở đâu, chưa cần đuổi theo xu hướng nào và nếu làm thì cũng hiểu vì sao làm ở thời điểm này.",
        ],
      },
      {
        id: "sau-buoi-lam",
        heading: "Nếu da mụn làm meso thì sau buổi làm cần lưu ý gì?",
        paragraphs: [
          "Sau buổi meso, da mụn càng cần được chăm nhẹ và theo dõi kỹ. Không nên xem một buổi làm là lý do để ngay lập tức quay lại treatment mạnh hoặc thử thêm sản phẩm mới vì thấy da đang ổn hơn một chút. Phần quan trọng nhất là giữ da yên, ẩm và chống nắng kỹ để nền da đi tiếp đúng nhịp.",
          "Da mụn thường khiến khách mất kiên nhẫn vì đang muốn giải quyết nhiều thứ cùng lúc. Nhưng chính lúc đó, giữ nhịp lại là điều đáng làm nhất. Khi da được chăm đúng sau buổi meso, phản ứng sẽ dễ đọc hơn và bạn cũng bớt cảm giác phải đoán xem da đang tốt lên hay chỉ đang phản ứng tạm thời.",
          "Nếu có điều gì khiến bạn chưa yên tâm sau buổi làm, hãy hỏi lại nơi đã tư vấn cho mình. Với da mụn, việc được hướng dẫn sát sau buổi làm giúp bạn tránh được rất nhiều xử lý cảm tính tại nhà.",
        ],
        checklist: [
          "Giữ routine nhẹ, không thêm treatment mạnh ngay.",
          "Chống nắng và dưỡng ẩm đúng hướng dẫn.",
          "Theo dõi da theo mốc thay vì soi từng giờ.",
          "Nhắn lại nếu da phản ứng khác thường hoặc bạn không chắc bước chăm nào nên giữ.",
        ],
      },
      {
        id: "ket-luan",
        heading: "Kết luận: da mụn có thể phù hợp, nhưng không nên tự quyết quá nhanh",
        paragraphs: [
          "Da mụn có thể phù hợp với meso căng bóng trong một số trường hợp, nhưng hoàn toàn không nên được quyết định chỉ vì bạn thích hiệu ứng của dịch vụ này trên người khác. Điều đúng hơn là nhìn nền da hiện tại, mức độ khỏe của da và mục tiêu thật của bạn. Nếu nền da chưa sẵn sàng, việc xử lý nền trước sẽ giúp bạn đi xa hơn về lâu dài.",
          "Làm đẹp cho da mụn chưa bao giờ chỉ là chọn đúng một cái tên dịch vụ. Nó là chuyện chọn đúng thời điểm, đúng nhịp và đúng mức độ. Khi hiểu điều đó, bạn sẽ bớt bị cuốn theo những lời hứa quá nhanh và bắt đầu lắng nghe làn da của mình thực tế hơn. Đó cũng là hướng tư vấn mà Chòi của Uyn luôn ưu tiên cho nhóm khách da mụn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Da mụn có thể làm meso căng bóng ngay không?",
        answer:
          "Có thể hoặc không, tùy nền da. Nếu da mụn nhưng nền da tương đối ổn, ít viêm, không quá yếu và đang thiếu ẩm rõ, meso có thể được cân nhắc. Nhưng nếu da đang bít tắc nhiều, viêm hoặc hàng rào da yếu, thường nên xử lý nền trước. Câu trả lời đúng chỉ có khi nhìn trực tiếp tình trạng da thật của bạn.",
      },
      {
        question: "Nếu da mụn mà vẫn thiếu ẩm thì sao?",
        answer:
          "Đây là trường hợp khá thường gặp. Da mụn không đồng nghĩa với da đủ ẩm. Có nhiều nền da vừa dầu vừa thiếu nước, nên nhìn vẫn bóng nhưng thật ra lại khô ở bên trong. Chính những nền da như vậy càng cần được nhìn kỹ trước khi quyết định meso, vì điều quan trọng là biết da đang cần cấp ẩm hay cần làm sạch, phục hồi trước.",
      },
      {
        question: "Có phải cứ muốn da căng bóng là nên meso không?",
        answer:
          "Không. “Căng bóng” chỉ là kết quả lý tưởng khi nền da đang đi đúng hướng. Nếu da yếu, bít tắc hoặc treatment quá đà, việc chạy theo hiệu ứng căng bóng ngay có thể làm bạn bỏ qua phần nền đang rất cần được ổn định lại. Meso chỉ đẹp khi nó đến đúng lúc, chứ không đẹp chỉ vì nghe tên hấp dẫn.",
      },
      {
        question: "Da mụn sau meso cần chăm khác gì không?",
        answer:
          "Có. Da mụn sau buổi meso cần được giữ nhịp nhẹ, ẩm và chống nắng kỹ hơn. Không nên quay lại treatment mạnh ngay hoặc thử sản phẩm mới liên tục. Với da mụn, cảm giác sốt ruột rất dễ khiến bạn tự làm rối nền da trở lại. Giữ da yên sau buổi làm là một phần quan trọng để đọc đúng phản ứng và giữ kết quả đi đúng hướng.",
      },
      {
        question: "Nếu chưa chắc mình hợp meso thì nên làm gì?",
        answer:
          "Cách nhẹ nhàng nhất là gửi hình hoặc mô tả tình trạng da hiện tại để được nhìn sơ bộ trước. Bạn không cần tự quyết quá nhanh chỉ vì thấy dịch vụ này đang được nhắc nhiều. Khi đã hiểu da mình đang cần gì, việc chọn đúng bước tiếp theo sẽ đỡ rối hơn rất nhiều và cũng giúp bạn tránh được cảm giác vừa làm vừa lo sau đó.",
      },
    ],
    relatedPosts: ["lay-nhan-mun-xong-nen-cham-da-the-nao", "da-yeu-co-nen-peel-khong"],
  },
  {
    slug: "moi-tham-co-phun-duoc-khong",
    title: "Môi thâm có phun được không?",
    category: "Phun môi",
    excerpt:
      "Môi thâm vẫn có thể được tư vấn theo nhiều hướng khác nhau, nhưng điều quan trọng là nhìn đúng nền môi trước khi quyết định.",
    metaDescription:
      "Bài viết giải thích khi nào môi thâm có thể phun, khi nào cần khử thâm hoặc tư vấn kỹ trước khi làm.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Phun môi", "Khử thâm môi"],
    introParagraphs: [
      "Môi thâm là lý do khiến rất nhiều khách ngại phun môi dù rất muốn mặt tươi hơn. Nỗi lo thường gặp là nếu môi thâm thì phun có lên màu không, có bị càng tối không hoặc có cần làm thêm bước gì trước đó không. Thực tế, môi thâm không phải là một câu trả lời chung cho tất cả. Mỗi nền môi thâm lại có mức độ và hướng xử lý khác nhau.",
      "Tại Chòi của Uyn, câu hỏi “môi thâm có phun được không” luôn được trả lời sau khi nhìn nền môi thật. Có môi chỉ thâm nhẹ và có thể tư vấn trực tiếp theo hướng phun màu phù hợp. Có môi lại cần đi theo hướng cải thiện nền trước, hoặc cần giải thích kỹ hơn về kỳ vọng. Bài viết này giúp bạn hiểu lý do vì sao nền môi phải được nhìn đúng trước khi quyết định.",
    ],
    sections: buildGenericBlogSections("Môi thâm có phun được không?", "phun môi", "nền môi", "màu môi"),
    faqs: buildGenericBlogFaqs("Môi thâm có phun được không?"),
    relatedPosts: ["sau-phun-moi-dau-hieu-binh-thuong-can-kiem-tra", "chan-may-cu-tro-xanh-do-xu-ly-the-nao"],
  },
  {
    slug: "chan-may-cu-tro-xanh-do-xu-ly-the-nao",
    title: "Chân mày cũ trổ xanh đỏ xử lý thế nào?",
    category: "Chân mày",
    excerpt:
      "Khi chân mày cũ trổ màu hoặc quá sắc, điều cần nhất không phải là che thật nhanh mà là đọc đúng nền cũ trước.",
    metaDescription:
      "Tìm hiểu cách tư vấn và xử lý chân mày cũ trổ xanh đỏ theo tình trạng thật và gương mặt hiện tại.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Chân mày", "Sửa mày cũ"],
    introParagraphs: [
      "Chân mày cũ trổ xanh đỏ là nỗi lo rất phổ biến ở khách từng làm mày trước đó nhưng giờ không còn thấy hợp nữa. Có người ngại vì màu cũ lộ rõ, có người lại thấy dáng quá sắc khiến gương mặt căng hơn mong muốn. Khi nhìn vào gương, điều khách thường muốn nhất là sửa thật nhanh để đỡ phải nghĩ nhiều.",
      "Nhưng với mày cũ, làm nhanh chưa chắc là làm đúng. Điều cần nhất là nhìn đúng sắc tố cũ, dáng cũ và khả năng chỉnh sửa thực tế trước khi quyết định bước tiếp theo. Bài viết này sẽ giúp bạn hiểu vì sao chân mày cũ không nên tư vấn qua loa và khi nào nên đi theo hướng sửa mềm, chậm nhưng đúng hơn.",
    ],
    sections: buildGenericBlogSections("Chân mày cũ trổ xanh đỏ xử lý thế nào?", "chân mày", "mày cũ", "dáng mày"),
    faqs: buildGenericBlogFaqs("Chân mày cũ trổ xanh đỏ xử lý thế nào?"),
    relatedPosts: ["moi-tham-co-phun-duoc-khong", "sau-phun-moi-dau-hieu-binh-thuong-can-kiem-tra"],
  },
  {
    slug: "sau-tiem-filler-can-kieng-gi",
    title: "Sau tiêm filler cần kiêng gì?",
    category: "Filler / Botox",
    excerpt:
      "Không phải điều gì sau filler cũng phải kiêng quá căng, nhưng hiểu đúng những lưu ý đầu tiên sẽ giúp bạn bớt lo và theo dõi dễ hơn.",
    metaDescription:
      "Hướng dẫn những điều cần lưu ý sau filler và vì sao chăm sóc đúng giúp bạn yên tâm hơn trong giai đoạn đầu.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Filler", "Chăm sóc sau làm"],
    introParagraphs: [
      "Sau filler, điều khách hỏi nhiều nhất thường không phải là đẹp chưa mà là có cần kiêng gì không. Câu hỏi này rất thật vì giai đoạn đầu luôn dễ làm khách lo: chạm vào có sao không, sinh hoạt thế nào, có nên so với ảnh mẫu ngay không. Nếu không được dặn kỹ, khách rất dễ rơi vào hai thái cực: hoặc sợ quá mức, hoặc chủ quan quá mức.",
      "Bài viết này không nhằm biến việc chăm sau filler thành một danh sách kiêng khem nặng nề. Mục tiêu là giúp bạn hiểu vì sao một vài lưu ý đầu tiên lại quan trọng, đâu là điều nên nhẹ nhàng tránh trong giai đoạn đầu và khi nào nên hỏi lại để được tư vấn kỹ hơn. Hiểu đúng sẽ giúp bạn yên tâm hơn rất nhiều.",
    ],
    sections: buildGenericBlogSections("Sau tiêm filler cần kiêng gì?", "filler", "vùng làm", "chăm sóc sau làm"),
    faqs: buildGenericBlogFaqs("Sau tiêm filler cần kiêng gì?"),
    relatedPosts: ["botox-gon-ham-bao-lau-thay-hieu-qua", "meso-cang-bong-co-phu-hop-da-mun-khong"],
  },
  {
    slug: "lay-nhan-mun-xong-nen-cham-da-the-nao",
    title: "Lấy nhân mụn xong nên chăm da thế nào?",
    category: "Chăm sóc da",
    excerpt:
      "Lấy nhân mụn xong không có nghĩa là da tự ổn nếu routine ở nhà tiếp tục quá mạnh hoặc quá rối.",
    metaDescription:
      "Hướng dẫn chăm da sau lấy nhân mụn để da ổn định hơn và hạn chế vòng lặp tự nặn rồi nổi lại.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Lấy nhân mụn", "Chăm sóc da"],
    introParagraphs: [
      "Nhiều khách nghĩ lấy nhân mụn xong là xong một nửa chặng chăm da, nhưng thực tế nếu chăm sau đó sai, da vẫn rất dễ quay lại vòng bít tắc, nổi lại hoặc xuống nền. Điều làm khách mệt nhất là tưởng mình đã làm một bước đúng rồi mà da vẫn không đi đúng hướng như kỳ vọng.",
      "Với Chòi của Uyn, lấy nhân mụn chỉ là một phần trong câu chuyện của nền da. Sau buổi làm, chính routine nhẹ, cách giữ da yên và việc không tự nặn tiếp mới là thứ quyết định khá nhiều đến cảm giác ổn định của da. Bài viết này giúp bạn hiểu sau buổi lấy nhân mụn nên chăm da ra sao để đỡ rối hơn.",
    ],
    sections: buildGenericBlogSections("Lấy nhân mụn xong nên chăm da thế nào?", "lấy nhân mụn", "da sau làm sạch", "routine ở nhà"),
    faqs: buildGenericBlogFaqs("Lấy nhân mụn xong nên chăm da thế nào?"),
    relatedPosts: ["meso-cang-bong-co-phu-hop-da-mun-khong", "da-yeu-co-nen-peel-khong"],
  },
  {
    slug: "da-yeu-co-nen-peel-khong",
    title: "Da yếu có nên peel không?",
    category: "Chăm sóc da",
    excerpt:
      "Peel không phải bước nên làm chỉ vì da đang xỉn hoặc sần. Với da yếu, chọn sai thời điểm rất dễ làm nền da mệt hơn.",
    metaDescription:
      "Bài viết giải thích khi nào da yếu chưa nên peel và cách nhìn nền da trước khi quyết định treatment.",
    image: "/images/placeholder-blog-soft.svg",
    tags: ["Peel da", "Da yếu"],
    introParagraphs: [
      "Khi da xỉn, sần hoặc lâu không cải thiện, nhiều khách rất dễ nghĩ đến peel như một bước “đẩy nhanh” để da thay đổi. Nhưng với da yếu, peel không phải lựa chọn nên quyết định chỉ dựa trên mong muốn đẹp nhanh. Nếu da chưa đủ ổn, bước này có thể làm nền da mệt hơn thay vì sáng hơn.",
      "Bài viết này được viết cho những ai đang phân vân giữa việc muốn cải thiện bề mặt da và nỗi lo da mình có vẻ đang yếu, dễ đỏ hoặc khó chịu. Điều quan trọng nhất là đọc đúng nền da trước khi nói đến treatment. Khi hiểu điều đó, bạn sẽ đỡ rơi vào vòng làm gì cũng lo hoặc làm quá nhanh rồi phải phục hồi lại từ đầu.",
    ],
    sections: buildGenericBlogSections("Da yếu có nên peel không?", "peel da", "da yếu", "treatment"),
    faqs: buildGenericBlogFaqs("Da yếu có nên peel không?"),
    relatedPosts: ["lay-nhan-mun-xong-nen-cham-da-the-nao", "meso-cang-bong-co-phu-hop-da-mun-khong"],
  },
];

function buildGenericBlogSections(title: string, focus: string, condition: string, outcome: string): ArticleSection[] {
  return [
    {
      id: "mo-dau",
      heading: `Hiểu đúng vấn đề trước khi quyết định ${focus}`,
      paragraphs: [
        `${title} là câu hỏi nhiều khách đặt ra khi đang vừa muốn cải thiện bản thân vừa sợ làm sai hướng. Điều dễ thấy nhất là chúng ta thường nhìn vào một dấu hiệu bên ngoài rồi muốn chọn ngay một dịch vụ có vẻ hợp. Nhưng với làm đẹp, đặc biệt là ở mini spa theo hướng tư vấn kỹ, điều quan trọng hơn là hiểu vì sao tình trạng hiện tại xuất hiện và ${condition} của mình đang ở mức nào.`,
        `Khi bỏ qua bước nhìn gốc vấn đề, khách rất dễ bị cuốn vào cảm giác phải làm một thứ gì đó thật nhanh. Còn khi hiểu đúng hơn, mình sẽ biết điều gì nên làm trước, điều gì có thể chờ và điều gì thực ra không cần vội. Cách tiếp cận này không làm bạn chậm đi, mà giúp bạn bớt đi vòng và đỡ lo hơn rất nhiều.`,
      ],
    },
    {
      id: "ly-do-thuong-gap",
      heading: `Vì sao khách thường quan tâm đến ${focus}?`,
      paragraphs: [
        `Phía sau câu hỏi về ${focus} thường là một mong muốn rất thật: muốn nhìn tươi hơn, gọn hơn, đỡ mệt hơn hoặc đơn giản là cảm thấy tự tin hơn khi soi gương. Có người thấy ${condition} khiến mình ngại ra ngoài, có người cảm giác ${outcome} chưa bao giờ được như mong muốn dù đã thử nhiều cách.`,
        `Điểm đáng nói là nhiều khách không thiếu nỗ lực chăm sóc bản thân, nhưng lại thiếu một góc nhìn đủ rõ để biết mình đang cần gì. Chính khoảng mơ hồ đó làm khách dễ bị ảnh hưởng bởi trend, bởi ảnh mẫu hoặc bởi trải nghiệm của người khác. Một bài viết tốt không nên ép bạn chốt ngay, mà nên giúp bạn bình tĩnh và hiểu bản thân hơn trước.`,
      ],
    },
    {
      id: "dau-hieu-nen-xem-lai",
      heading: "Những dấu hiệu cho thấy bạn nên xem lại tình trạng hiện tại",
      paragraphs: [
        `Nếu bạn thấy ${condition} lặp đi lặp lại, hoặc chăm ở nhà mãi mà cảm giác không đi đúng hướng, đó là lúc nên dừng lại để đọc tình trạng hiện tại kỹ hơn. Vấn đề không nằm ở việc bạn chưa cố đủ, mà có thể nằm ở chỗ cách tiếp cận hiện tại chưa đúng nhịp với nền thật của mình.`,
        `Cũng có những khách không gặp tình trạng quá nặng, nhưng cứ thấy bản thân thiếu thoải mái khi nhìn một vùng nào đó trên gương mặt hoặc làn da. Cảm giác này cũng đáng được tôn trọng. Chỉ cần mình không vội chốt dịch vụ theo cảm hứng, việc hỏi và được tư vấn trước luôn là một bước hợp lý.`,
      ],
      checklist: [
        `Tình trạng ${condition} lặp lại dù đã chăm ở nhà khá đều.`,
        "Cảm giác mình đang thử nhiều thứ nhưng chưa hiểu đúng vấn đề chính.",
        "Lo nhiều hơn sau khi xem trải nghiệm của người khác trên mạng.",
      ],
    },
    {
      id: "cach-tu-van",
      heading: "Cách Chòi của Uyn thường tư vấn trong trường hợp này",
      paragraphs: [
        `Ở Chòi của Uyn, phần tư vấn luôn bắt đầu bằng chuyện xem tình trạng thật thay vì chốt dịch vụ chỉ theo mô tả chung. Uyn thường hỏi cả điều khách mong muốn lẫn điều khách sợ nhất sau khi làm. Chính điều này giúp phần tư vấn không bị một chiều và cũng giúp khách cảm thấy mình được lắng nghe kỹ hơn.`,
        `Khi đã có đủ thông tin, Uyn sẽ nói rõ đâu là hướng phù hợp, đâu là điều cần chờ thêm và đâu là kỳ vọng hợp lý nhất. Cách làm này tạo cảm giác nhẹ đầu cho khách vì biết mình không phải tự ráp từng mảnh thông tin rời rạc nữa.`,
      ],
    },
    {
      id: "sai-lam-pho-bien",
      heading: "Sai lầm phổ biến khiến kết quả hoặc cảm giác theo dõi bị ảnh hưởng",
      paragraphs: [
        `Sai lầm phổ biến nhất là quyết quá nhanh chỉ vì thấy một người khác có vẻ hợp. Điều thứ hai là chăm sau đó theo cảm tính, tự thay đổi routine hoặc tự xử thêm khi chưa hiểu giai đoạn của mình. Những điều này không chỉ làm ${outcome} khó đạt hơn, mà còn làm tâm lý của khách nặng hơn vì không biết sai ở đâu.`,
        `Làm đẹp bền hơn khi mình đi đúng nhịp. Nghe có vẻ chậm, nhưng thật ra lại là đường ngắn hơn về lâu dài. Nhất là với những dịch vụ liên quan đến nền da, nền môi, gương mặt hoặc body, sự bình tĩnh luôn giúp bạn đọc kết quả sát thực tế hơn.`,
      ],
    },
    {
      id: "cta-bai-viet",
      heading: "Nếu vẫn chưa chắc mình có phù hợp không",
      paragraphs: [
        `Bạn không cần phải tự quyết hoàn toàn một mình sau khi đọc bài. Bài viết chỉ giúp bạn có góc nhìn rõ hơn, còn tình trạng thực tế vẫn nên được xem trực tiếp hoặc ít nhất là qua hình ảnh rõ ràng. Khi có thêm dữ liệu thực tế, phần tư vấn sẽ giúp bạn biết rõ nên làm gì, chưa nên làm gì và cần chuẩn bị gì nếu muốn bắt đầu.`,
        `Điều Uyn luôn giữ là không ép dịch vụ và không nói quá về kết quả. Nếu bạn đang phân vân, cứ bắt đầu bằng một câu hỏi hoặc một tấm hình. Chỉ cần biết mình đang đi đúng hướng, cảm giác làm đẹp sẽ nhẹ hơn rất nhiều.`,
      ],
      note:
        "Bài viết mang tính tham khảo, tình trạng thực tế nên được tư vấn trực tiếp trước khi quyết định làm dịch vụ.",
    },
  ];
}

function buildGenericBlogFaqs(topic: string): FaqItem[] {
  return [
    {
      question: `Nếu đang phân vân về "${topic.toLowerCase()}" thì có nên tự quyết luôn không?`,
      answer:
        "Không nhất thiết. Nếu bạn còn thấy mơ hồ về tình trạng thật của mình, việc tự quyết quá nhanh dễ khiến bạn chọn sai hướng hoặc kỳ vọng sai mức độ thay đổi. Cách nhẹ nhàng hơn là nhìn lại nền thật, ghi rõ điều mình mong muốn và hỏi trước để được tư vấn. Khi hiểu rõ hơn, quyết định của bạn sẽ bớt cảm tính và dễ chịu hơn nhiều.",
    },
    {
      question: "Vì sao cùng một vấn đề nhưng mỗi người lại được tư vấn khác nhau?",
      answer:
        "Vì nền thật của mỗi người khác nhau. Cùng là da mụn, môi thâm, mày cũ hay vùng mặt chưa cân, nhưng nguyên nhân bên dưới có thể hoàn toàn khác nhau. Khi nguyên nhân khác nhau, cách xử lý cũng cần khác. Chính vì vậy, phần tư vấn kỹ là điều giúp bạn không bị áp vào một công thức chung thiếu thực tế.",
    },
    {
      question: "Có nên so mình với ảnh mẫu hoặc người khác trên mạng không?",
      answer:
        "Ảnh mẫu có thể giúp bạn hình dung phong cách hoặc mức độ tự nhiên mong muốn, nhưng không nên dùng làm thước đo tuyệt đối cho nền thật của mình. Cấu trúc gương mặt, làn da, cơ địa và cả cách chăm sóc sau làm đều khác nhau. So quá nhiều thường chỉ làm bạn lo hơn chứ không giúp quyết định đúng hơn.",
    },
    {
      question: "Nếu chưa muốn làm ngay thì buổi tư vấn có ý nghĩa không?",
      answer:
        "Có. Thực ra nhiều khách chỉ cần được nhìn đúng tình trạng và nghe giải thích rõ đã thấy đỡ rối hơn rất nhiều. Buổi tư vấn không nhất thiết để chốt dịch vụ ngay. Nó giúp bạn hiểu mình đang ở đâu, hướng nào phù hợp và cần chuẩn bị gì nếu muốn bắt đầu ở một thời điểm dễ chịu hơn cho bản thân.",
    },
    {
      question: "Điều quan trọng nhất trước khi quyết định dịch vụ là gì?",
      answer:
        "Điều quan trọng nhất là hiểu tình trạng thật và kỳ vọng của chính mình. Bạn muốn thay đổi điều gì, muốn giữ điều gì, sợ điều gì nhất sau khi làm và nền hiện tại của bạn đang cho phép đi đến đâu. Khi bốn yếu tố đó rõ, việc chọn dịch vụ sẽ bớt cảm tính hơn nhiều và cơ hội hài lòng về sau cũng cao hơn.",
    },
  ];
}

export const blogPosts: BlogPostRecord[] = blogSeeds as BlogPostRecord[];
export const blogPostsBySlug = new Map(blogPosts.map((post) => [post.slug, post]));

export const serviceHubFaqs: FaqItem[] = [
  {
    question: "Có cần đặt lịch trước không?",
    answer:
      "Nên đặt lịch trước để Uyn có thời gian xem tình trạng và tư vấn kỹ hơn. Với những dịch vụ cần nhìn nền môi, nền da, cấu trúc gương mặt hoặc vùng cơ thể trước khi quyết định, việc hẹn trước giúp buổi tư vấn đi sâu hơn và cũng tránh cảm giác bị vội.",
  },
  {
    question: "Có tư vấn online trước không?",
    answer:
      "Có thể. Bạn có thể gửi hình môi, mày, da hoặc vùng muốn cải thiện để Uyn nhìn sơ bộ trước. Dĩ nhiên, hình ảnh không thay thế hoàn toàn việc nhìn trực tiếp, nhưng nó đủ để bạn biết mình đang đi đúng hướng hay cần hẹn tư vấn kỹ hơn ở bước tiếp theo.",
  },
  {
    question: "Làm dịch vụ xong có được hướng dẫn chăm sóc không?",
    answer:
      "Có. Đây là phần Chòi của Uyn rất chú ý vì nhiều khách lo nhất ở giai đoạn sau làm. Bạn sẽ được dặn cách theo dõi, cách chăm nhẹ và những điều nên lưu ý theo từng dịch vụ để không phải tự tra cứu quá nhiều nguồn khác nhau.",
  },
  {
    question: "Có thể kết hợp nhiều dịch vụ không?",
    answer:
      "Có thể hoặc chưa nên, tùy tình trạng thật. Một số khách phù hợp đi theo combo hoặc lộ trình. Nhưng cũng có khách chỉ cần làm một bước trước là đủ. Uyn luôn ưu tiên sắp thứ tự phù hợp hơn là ghép nhiều dịch vụ chỉ vì muốn thấy thay đổi thật nhanh.",
  },
  {
    question: "Giá phụ thuộc vào điều gì?",
    answer:
      "Giá phụ thuộc vào tình trạng nền, lượng sản phẩm nếu có, số buổi hoặc mức độ xử lý thực tế. Vì vậy nhiều dịch vụ được để theo dạng “từ” hoặc “tư vấn theo tình trạng” thay vì một mức cứng cho tất cả mọi người. Cách này phản ánh thực tế tốt hơn và giúp tư vấn sát hơn.",
  },
];

export function getGroupServices(groupSlug: string) {
  return services.filter((service) => service.groupSlug === groupSlug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs
    .map((slug) => servicesBySlug.get(slug))
    .filter((service): service is ServiceRecord => Boolean(service));
}

export function getRelatedPosts(slugs: string[]) {
  return slugs
    .map((slug) => blogPostsBySlug.get(slug))
    .filter((post): post is BlogPostRecord => Boolean(post));
}

export const blogCategories = [
  "Tất cả",
  "Phun môi",
  "Chân mày",
  "Filler / Botox",
  "Chăm sóc da",
  "Meso",
  "Body",
  "Sau làm đẹp",
] as const;

export const heroSlides = [
  {
    id: "home-natural",
    title: "Làm đẹp tự nhiên, vừa đủ để vẫn là mình",
    subtitle:
      "Chòi của Uyn tư vấn theo từng gương mặt, nền môi, dáng mày và tình trạng da thật của mỗi khách.",
    primaryCta: "Đặt lịch tư vấn",
    secondaryCta: "Xem dịch vụ",
    image: sharedServiceImages.heroModel,
    alt: "Người mẫu nữ với layout beauty nhẹ và ánh sáng sạch",
    accent: "Tư vấn theo gương mặt thật",
  },
  {
    id: "home-offer",
    title: "Ưu đãi phun môi & chân mày tháng này",
    subtitle:
      "Kiểm tra nền môi, dáng mày và tư vấn màu hoặc dáng phù hợp trước khi làm.",
    primaryCta: "Xem ưu đãi",
    image: sharedServiceImages.phunMoi,
    alt: "Hình ảnh beauty tông nude cho ưu đãi phun môi và mày",
    badge: "Limited slots",
    accent: "Ưu đãi cho lịch hẹn sớm",
  },
  {
    id: "home-meso",
    title: "Meso căng bóng cấp ẩm",
    subtitle:
      "Phù hợp với làn da thiếu ẩm, xỉn màu, cần phục hồi độ mịn và độ căng nhẹ.",
    primaryCta: "Tìm hiểu Meso",
    image: sharedServiceImages.heroMeso,
    alt: "Hình ảnh người mẫu da căng mịn cho dịch vụ meso",
    accent: "Da thiếu ẩm, xỉn màu, kém mịn",
  },
  {
    id: "home-filler",
    title: "Filler / Botox / Gọn hàm",
    subtitle: "Ưu tiên gương mặt hài hòa, tự nhiên, không làm quá tay.",
    primaryCta: "Tư vấn trước khi làm",
    image: sharedServiceImages.heroFiller,
    alt: "Chân dung beauty mềm cho nhóm filler và botox",
    accent: "Ưu tiên kết quả hài hòa",
  },
] as const;

export const homeOffers = [
  "Combo phun môi + tư vấn nền môi",
  "Meso cấp ẩm cho da thiếu nước",
  "Botox gọn hàm / xóa nhăn tư vấn riêng",
  "Chăm sóc da mụn theo buổi",
] as const;

export const siteAnnouncement =
  "Ưu đãi khai trương: Tư vấn miễn phí + soi tình trạng da/môi/mày trước khi làm";
