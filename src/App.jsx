import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { TrendingUp, TrendingDown, BarChart3, LineChart, PieChart, Activity, DollarSign, Calendar, Target } from 'lucide-react'
import './App.css'

// Import images
import candlestickChart from './assets/AMD_candlestick_volume.png'
import closingPriceChart from './assets/AMD_closing_price.png'
import tradingVolumeChart from './assets/AMD_trading_volume.png'
import smaChart from './assets/AMD_sma.png'
import emaChart from './assets/AMD_ema.png'
import dailyReturnsChart from './assets/AMD_daily_returns.png'
import dailyReturnsHistChart from './assets/AMD_daily_returns_hist.png'
import bollingerBandsChart from './assets/AMD_bollinger_bands.png'
import rsiChart from './assets/AMD_rsi.png'
import correlationMatrixChart from './assets/AMD_correlation_matrix.png'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const stockData = {
    currentPrice: 127.45,
    priceChange: 2.34,
    priceChangePercent: 1.87,
    volume: 45234567,
    marketCap: '205.8B',
    peRatio: 23.45,
    high52Week: 182.50,
    low52Week: 78.90
  }

  const analysisData = {
    sma20: 125.67,
    sma50: 118.23,
    ema20: 126.89,
    ema50: 119.45,
    rsi: 58.34,
    volatility: 0.0234
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AMD Stock Analysis</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Báo cáo Tài chính 2024-2025</p>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              Cập nhật: 19/06/2025
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stock Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Giá Hiện Tại</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stockData.currentPrice}</div>
              <div className={`flex items-center text-xs ${stockData.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stockData.priceChange >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                +${stockData.priceChange} ({stockData.priceChangePercent}%)
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Khối Lượng</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(stockData.volume / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">Khối lượng giao dịch</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vốn Hóa</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${stockData.marketCap}</div>
              <p className="text-xs text-muted-foreground">Vốn hóa thị trường</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">P/E Ratio</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stockData.peRatio}</div>
              <p className="text-xs text-muted-foreground">Tỷ lệ giá/thu nhập</p>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <TabsTrigger value="overview">Tổng Quan</TabsTrigger>
            <TabsTrigger value="technical">Phân Tích Kỹ Thuật</TabsTrigger>
            <TabsTrigger value="performance">Hiệu Suất</TabsTrigger>
            <TabsTrigger value="comparison">So Sánh</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="w-5 h-5 mr-2" />
                    Biểu Đồ Nến & Khối Lượng
                  </CardTitle>
                  <CardDescription>
                    Phân tích giá và khối lượng giao dịch trong 1 năm qua
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={candlestickChart} 
                    alt="AMD Candlestick and Volume Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Giá Đóng Cửa
                  </CardTitle>
                  <CardDescription>
                    Xu hướng giá đóng cửa theo thời gian
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={closingPriceChart} 
                    alt="AMD Closing Price Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>Thông Tin Chi Tiết</CardTitle>
                <CardDescription>
                  Các chỉ số quan trọng và phân tích thị trường
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">${stockData.high52Week}</div>
                    <div className="text-sm text-muted-foreground">Cao nhất 52 tuần</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">${stockData.low52Week}</div>
                    <div className="text-sm text-muted-foreground">Thấp nhất 52 tuần</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold">{analysisData.rsi.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground">RSI</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold">{(analysisData.volatility * 100).toFixed(2)}%</div>
                    <div className="text-sm text-muted-foreground">Độ biến động</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Simple Moving Average (SMA)</CardTitle>
                  <CardDescription>
                    Đường trung bình động đơn giản 20 và 50 ngày
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={smaChart} 
                    alt="AMD SMA Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-lg font-bold text-orange-600">${analysisData.sma20}</div>
                      <div className="text-sm text-muted-foreground">SMA 20</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-lg font-bold text-red-600">${analysisData.sma50}</div>
                      <div className="text-sm text-muted-foreground">SMA 50</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Exponential Moving Average (EMA)</CardTitle>
                  <CardDescription>
                    Đường trung bình động hàm mũ 20 và 50 ngày
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={emaChart} 
                    alt="AMD EMA Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="text-lg font-bold text-orange-600">${analysisData.ema20}</div>
                      <div className="text-sm text-muted-foreground">EMA 20</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="text-lg font-bold text-red-600">${analysisData.ema50}</div>
                      <div className="text-sm text-muted-foreground">EMA 50</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Bollinger Bands</CardTitle>
                  <CardDescription>
                    Dải Bollinger cho phân tích độ biến động
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={bollingerBandsChart} 
                    alt="AMD Bollinger Bands Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Relative Strength Index (RSI)</CardTitle>
                  <CardDescription>
                    Chỉ số sức mạnh tương đối
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={rsiChart} 
                    alt="AMD RSI Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                  <div className="mt-4">
                    <div className={`text-center p-3 rounded-lg ${
                      analysisData.rsi > 70 ? 'bg-red-50 dark:bg-red-900/20' :
                      analysisData.rsi < 30 ? 'bg-green-50 dark:bg-green-900/20' :
                      'bg-yellow-50 dark:bg-yellow-900/20'
                    }`}>
                      <div className={`text-lg font-bold ${
                        analysisData.rsi > 70 ? 'text-red-600' :
                        analysisData.rsi < 30 ? 'text-green-600' :
                        'text-yellow-600'
                      }`}>
                        {analysisData.rsi.toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {analysisData.rsi > 70 ? 'Quá mua' :
                         analysisData.rsi < 30 ? 'Quá bán' :
                         'Trung tính'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Lợi Nhuận Hàng Ngày</CardTitle>
                  <CardDescription>
                    Biến động lợi nhuận theo ngày
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={dailyReturnsChart} 
                    alt="AMD Daily Returns Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Phân Phối Lợi Nhuận</CardTitle>
                  <CardDescription>
                    Histogram phân phối lợi nhuận hàng ngày
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={dailyReturnsHistChart} 
                    alt="AMD Daily Returns Histogram" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Khối Lượng Giao Dịch</CardTitle>
                  <CardDescription>
                    Xu hướng khối lượng giao dịch theo thời gian
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={tradingVolumeChart} 
                    alt="AMD Trading Volume Chart" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle>Ma Trận Tương Quan</CardTitle>
                  <CardDescription>
                    Mối quan hệ giữa các chỉ số kỹ thuật
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={correlationMatrixChart} 
                    alt="AMD Correlation Matrix" 
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle>So Sánh Với Đối Thủ</CardTitle>
                <CardDescription>
                  Phân tích so sánh AMD với Intel, Qualcomm và NVIDIA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Kết Luận Phân Tích</h3>
                    <p className="text-muted-foreground">
                      Dựa trên phân tích kỹ thuật, AMD đang cho thấy xu hướng phục hồi sau giai đoạn điều chỉnh. 
                      Các chỉ số SMA và EMA cho thấy tín hiệu tích cực, trong khi RSI ở mức trung tính cho phép không gian tăng trưởng.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-lg font-bold text-green-600">Tích Cực</div>
                      <div className="text-sm text-muted-foreground">Xu hướng phục hồi</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="text-lg font-bold text-yellow-600">Trung Tính</div>
                      <div className="text-sm text-muted-foreground">RSI cân bằng</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">Tiềm Năng</div>
                      <div className="text-sm text-muted-foreground">Không gian tăng trưởng</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 AMD Stock Analysis. Dữ liệu được cập nhật từ Yahoo Finance.</p>
            <p className="mt-1">Báo cáo này chỉ mang tính chất tham khảo, không phải lời khuyên đầu tư.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

