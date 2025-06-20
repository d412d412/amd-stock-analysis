# AMD Stock Analysis - Báo cáo Tài chính

Đây là website báo cáo tài chính chi tiết về cổ phiếu AMD (Advanced Micro Devices) trong 1 năm gần đây, được xây dựng để host trên GitHub Pages.

## Tính năng chính

- **Phân tích kỹ thuật toàn diện**: Bao gồm các chỉ số SMA, EMA, RSI, Bollinger Bands
- **Biểu đồ tương tác**: Candlestick chart, biểu đồ giá, khối lượng giao dịch
- **Phân tích hiệu suất**: Lợi nhuận hàng ngày, phân phối lợi nhuận, ma trận tương quan
- **Giao diện responsive**: Tương thích với cả desktop và mobile
- **Thiết kế hiện đại**: Sử dụng Tailwind CSS và shadcn/ui components

## Cấu trúc dự án

```
amd-stock-analysis/
├── dist/                    # Thư mục build cho GitHub Pages
├── src/
│   ├── assets/             # Biểu đồ và dữ liệu phân tích
│   ├── components/ui/      # UI components
│   ├── App.jsx            # Component chính
│   └── App.css            # Styles
├── index.html             # HTML entry point
└── package.json           # Dependencies
```

## Hướng dẫn deploy lên GitHub Pages

### Bước 1: Tạo repository trên GitHub
1. Đăng nhập vào GitHub
2. Tạo repository mới với tên `amd-stock-analysis`
3. Không cần khởi tạo với README, .gitignore hay license

### Bước 2: Upload code lên GitHub
```bash
cd /path/to/amd-stock-analysis
git init
git add .
git commit -m "Initial commit: AMD Stock Analysis website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amd-stock-analysis.git
git push -u origin main
```

### Bước 3: Cấu hình GitHub Pages
1. Vào repository trên GitHub
2. Chọn tab **Settings**
3. Scroll xuống phần **Pages**
4. Trong **Source**, chọn **Deploy from a branch**
5. Chọn branch **main** và folder **/ (root)**
6. Click **Save**

### Bước 4: Cấu hình cho static files
Vì đây là React app được build, bạn cần:

1. Tạo file `.nojekyll` trong thư mục `dist/`:
```bash
touch dist/.nojekyll
```

2. Hoặc cấu hình GitHub Pages để deploy từ thư mục `dist/`:
   - Trong Settings > Pages
   - Chọn **GitHub Actions** thay vì **Deploy from a branch**
   - Tạo workflow file để build và deploy

### Bước 5: Truy cập website
Sau khi cấu hình xong, website sẽ có sẵn tại:
```
https://YOUR_USERNAME.github.io/amd-stock-analysis/
```

## Cập nhật dữ liệu

Để cập nhật dữ liệu mới:
1. Chạy lại script phân tích cổ phiếu
2. Copy các file biểu đồ mới vào `src/assets/`
3. Build lại project: `npm run build`
4. Commit và push changes lên GitHub

## Công nghệ sử dụng

- **React 18**: Frontend framework
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **shadcn/ui**: UI components
- **Lucide React**: Icons
- **Python**: Data analysis và visualization
- **yfinance**: Stock data
- **matplotlib/plotly**: Charts generation

## Lưu ý

- Dữ liệu được cập nhật từ Yahoo Finance
- Báo cáo chỉ mang tính chất tham khảo, không phải lời khuyên đầu tư
- Website được tối ưu hóa cho GitHub Pages hosting

# amd-stock-analysis
# amd-stock-analysis
