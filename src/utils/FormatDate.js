export function formatDate(dateString) {
    const date = new Date(dateString);

    // Lấy giờ, phút, ngày, tháng, năm
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}