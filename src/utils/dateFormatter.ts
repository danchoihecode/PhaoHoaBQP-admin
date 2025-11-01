// utils/dateFormatter.ts

/**
 * Định dạng chuỗi ngày giờ ISO 8601 thành định dạng DD/MM/YYYY HH:mm
 * @param isoString Chuỗi ngày giờ từ backend (ví dụ: "2025-10-15T03:32:58.000000Z")
 * @returns Chuỗi ngày giờ đã được định dạng
 */
export const formatDateTime = (isoString: string | null | undefined): string => {
  if (!isoString) {
    return 'N/A';
  }

  const date = new Date(isoString);

  // Sử dụng phương thức toLocaleString() để định dạng ngày giờ một cách hiệu quả
  // 'vi-VN' là locale của Việt Nam, giúp đảm bảo định dạng ngày tháng đúng chuẩn
  // Bạn có thể tùy chỉnh options để thay đổi format
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Dùng định dạng 24h
  };

  return date.toLocaleString('vi-VN', options);
};