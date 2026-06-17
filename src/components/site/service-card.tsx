import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export function ServiceCard({ title, description, image, alt, href }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--border-soft)] bg-white shadow-[0_20px_50px_rgba(101,72,61,0.05)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-[1.08/1] overflow-hidden bg-[color:var(--surface-soft)]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">{title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-7 text-[color:var(--muted)]">{description}</p>
        <Link href={href} className="mt-6 text-sm font-semibold text-[color:var(--earth)]">
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
