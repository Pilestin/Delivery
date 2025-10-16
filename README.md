# Dynamic Routing Application

Modern bir web tabanlı dinamik rotalama uygulaması. React frontend ve Express backend kullanarak JSON formatındaki rota dosyalarını görselleştirir ve dinamik rotalama imkanı sunar.

##  Özellikler

- **JSON Rota Yükleme**: Rota dosyalarını drag & drop ile yükleme
- **İnteraktif Harita**: Leaflet tabanlı modern harita arayüzü
- **Çoklu Katman Desteği**: OSM, CartoDB, Esri Satellite, Terrain
- **Dinamik Rotalama**: Haritaya tıklayarak yeni noktalar ekleme
- **OSRM Entegrasyonu**: Gerçek zamanlı rota hesaplama
- **Rota Görselleştirme**: Düz çizgi, animasyonlu ve oklu çizgi seçenekleri
- **Modern UI**: Ant Design ile profesyonel arayüz
- **Responsive Design**: Mobil ve masaüstü uyumlu

##  Teknolojiler

### Frontend
- React 18
- Ant Design (UI Framework)
- React Leaflet (Harita)
- Axios (HTTP Client)
- Styled Components

### Backend
- Node.js
- Express.js
- Multer (Dosya Yükleme)
- OSRM (Rota Hesaplama)

##  Gereksinimler

- Node.js 16+
- OSRM Server (localhost:5000)

##  Kurulum

### 1. Depoyu Klonlayın
```bash
git clone <repository-url>
cd dynamic-routing-app
```

### 2. Backend Kurulumu
```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Kurulumu
```bash
cd frontend
npm install
npm start
```

### 4. OSRM Server Kurulumu
```bash
# Docker ile OSRM kurulumu (önerilen)
docker run -t -i -p 5000:5000 -v "${PWD}:/data" osrm/osrm-backend osrm-routed --algorithm mld /data/turkey-latest.osrm
```

##  Kullanım

1. **Rota Dosyası Yükle**: Sol panelden JSON rota dosyanızı yükleyin
2. **Rota Seç**: Yüklenen rotalardan birini seçin
3. **Haritayı İncele**: Rota harita üzerinde görselleştirilir
4. **Yeni Nokta Ekle**: "Yeni Nokta Ekle" butonuna tıklayıp harita üzerinde istediğiniz noktaya tıklayın
5. **Rota Güncellensin**: OSRM ile yeni rota otomatik hesaplanır

##  JSON Format

```json
{
  "routes": [
    {
      "id": 1,
      "name": "Route Name",
      "start_point": {
        "id": "start_1",
        "location": {
          "latitude": 39.9334,
          "longitude": 32.8597
        },
        "node_detail": {
          "depot": "Main Depot"
        }
      },
      "delivery_points": [
        {
          "id": "delivery_1",
          "location": {
            "latitude": 39.9234,
            "longitude": 32.8497
          },
          "node_detail": {
            "customer": {
              "requests": {
                "product_id": "1",
                "product_name": "Product A",
                "service_time": 300,
                "load_information": {
                  "weight": 50,
                  "quantity": 2
                }
              }
            }
          }
        }
      ],
      "end_point": {
        "id": "end_1",
        "location": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      }
    }
  ]
}
```

## 🔧 API Endpoints

- `POST /api/routes/upload` - Rota dosyası yükleme
- `GET /api/routes/:routeId` - Rota verilerini getirme
- `GET /api/routes/:routeId/route/:routeName` - Belirli rotayı getirme
- `POST /api/routes/:routeId/route/:routeName/add-point` - Rotaya nokta ekleme
- `POST /api/osrm/route` - OSRM ile rota hesaplama

### Kod Yapısı
```
dynamic-routing-app/
├── backend/           # Express.js API
│   ├── server.js     # Ana server dosyası
│   ├── uploads/      # Yüklenen dosyalar
│   └── stored-routes/ # Kaydedilen rotalar
├── frontend/         # React uygulaması
│   └── src/
│       ├── components/   # React bileşenleri
│       ├── services/     # API servisleri
│       └── App.js       # Ana uygulama
└── README.md
```

##  Harita Katmanları

- **OpenStreetMap**: Standart sokak haritası
- **CartoDB**: Minimal ve temiz görünüm
- **Esri Satellite**: Uydu görüntüleri
- **Terrain**: Topografik harita

##  Rota Gösterimi

- **Düz Çizgi**: Basit polyline
- **Animasyonlu**: Hareket eden kesikli çizgi
- **Oklu Çizgi**: Yön belirten oklar

##  Responsive Design

Uygulama mobil cihazlarda da kullanılabilir. Sol panel daraltılabilir ve harita kontrolleri optimize edilmiştir.

##  Gelecek Özellikler

- [ ] Çoklu araç desteği
- [ ] Zaman penceresi optimizasyonu
- [ ] GPS takip entegrasyonu
- [ ] Raporlama sistemi
- [ ] Kullanıcı yetkilendirmesi
- [ ] Veritabanı entegrasyonu

##  Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

##  Lisans

Bu proje MIT lisansı altında lisanslanmıştır.




