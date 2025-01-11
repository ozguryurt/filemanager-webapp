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
  admin: '3202f552c0a5615e276ace85c578d2bf136b501f971397d8d36eab324f86ec12'
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
![1](https://github.com/user-attachments/assets/fca5c2d0-8bdd-4e3f-a4ab-4b90e661430a)

### Kullanıcı ekranı
![2](https://github.com/user-attachments/assets/c736af9a-9bc0-4b99-bcdc-bb5bbe2c0fd2)
