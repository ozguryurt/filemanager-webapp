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
![1](https://github.com/user-attachments/assets/9690167d-0969-4e93-ae47-0138480ab67e)

### Kullanıcı ekranı
![2](https://github.com/user-attachments/assets/ff3a66a8-96e2-4c6c-b69f-c5177ffc7c8b)
