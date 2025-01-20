# File Manager Web App

File Manager Web App, web tabanlı bir dosya depolama uygulamasıdır. Kullanıcılar, dosyalarını yükleyebilir, indirebilir, silebilir ve düzenleyebilir. Güvenli bir kullanıcı girişi sistemi ile yalnızca yetkili kullanıcıların dosyalara erişimine izin verir.

## 🛠 Kullanılan Teknolojiler

- NodeJS, EJS, TailwindCSS

## 📦 Kurulum

### Gerekli Ön Koşullar

- NodeJS yüklü olmalıdır.
- npm paket yöneticisi.

### Kurulum Adımları

1. Projeyi klonlayın:
```bash
git clone https://github.com/ozguryurt/filemanager-webapp.git
cd File-Manager-Web-App
```

2. Gerekli paketleri kurun:
```bash
npm install
```

3. **src/app.js** dosyasında kullanıcı bilgilerini düzenleyin:
```javascript
// ...
// Kullanıcı adı ve SHA-256 ile şifrelenmiş şifre
const users = {
  admin: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
};
//...
```

4. Uygulamayı çalıştırın:
```bash
node .\src\app.js
```

5. Tarayıcınızdan şu adrese gidin:
```bash
http://localhost:3000
```

## 📸 Ekran Görüntüleri

### Giriş ekranı
![1](https://github.com/user-attachments/assets/949e2fed-0b3f-49b6-b165-40be46e18747)

### Kullanıcı ekranı
![2](https://github.com/user-attachments/assets/16563db7-8b1a-4941-8cf9-d41002277110)
