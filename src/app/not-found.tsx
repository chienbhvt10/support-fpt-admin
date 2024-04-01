import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Không tìm thấy trang</h2>
      <Link href="/">
        <h3>Về trang chủ hộ bố</h3>
      </Link>
    </div>
  );
}
