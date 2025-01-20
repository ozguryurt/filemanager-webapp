const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const ejs = require('ejs');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Admin bilgileri (kullanıcı adı ve SHA-256 ile şifrelenmiş şifre)
const users = {
  admin: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
};

// Dosyaların kaydedileceği klasör
const uploadFolder = './uploads';

// Yetki kontrol middleware
function checkAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}

// Session ayarları
app.use(session({
  secret: 'SECRET_KEY_123',
  resave: false,
  saveUninitialized: true,
}));

// Body parse middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static dosya ayarları
app.use(express.static(uploadFolder));
app.use(express.static('public')); // Tailwind CSS için public klasörü

// Multer ayarları
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    //cb(null, Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// EJS ayarları
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes

app.get('/', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  return res.redirect('/dashboard');
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Şifreyi hashle
  const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

  // Kullanıcı doğrulama
  if (users[username] && users[username] === hashedPassword) {
    req.session.user = username;
    req.session.messageData = {
      status: "success",
      message: "Başarıyla giriş yaptınız."
    };
    return res.redirect('/dashboard');
  }

  req.session.messageData = {
    status: "error",
    message: "Hatalı kullanıcı adı veya şifre."
  };
  return res.redirect('/login');
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/dashboard');
  }
  const messageData = req.session.messageData;
  req.session.messageData = null;
  res.render('login', { messageData });
});

app.get('/dashboard', checkAuth, (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    if (err) {
      return res.render('dashboard', {
        files, messageData: {
          status: "error",
          message: "Dosyalar yüklenirken bir hata oluştu."
        }
      });
    }
    const messageData = req.session.messageData;
    req.session.messageData = null;
    res.render('dashboard', { files, messageData });
  });
});

app.post('/dashboard/upload', checkAuth, upload.single('file'), (req, res) => {
  req.session.messageData = {
    status: "success",
    message: "Dosya başarıyla yüklendi."
  };
  return res.redirect('/dashboard');
});

app.get('/dashboard/download/:filename', checkAuth, (req, res) => {
  const filePath = path.join(uploadFolder, req.params.filename);
  res.download(filePath);
});

app.get('/dashboard/delete/:filename', checkAuth, (req, res) => {
  const filePath = path.join(uploadFolder, req.params.filename);
  fs.unlink(filePath, err => {
    if (err) {
      req.session.messageData = {
        status: "error",
        message: "Dosya silinirken bir hata meydana geldi."
      };
      res.redirect('/dashboard');
    }
    req.session.messageData = {
      status: "success",
      message: "Dosya başarıyla silindi."
    };
    res.redirect('/dashboard');
  });
});

app.get('/logout', (req, res) => {
  res.redirect('/login');
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/dashboard');
    }
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  if (!fs.existsSync(uploadFolder)) {
    fs.mkdirSync(uploadFolder);
  }
  console.log(`Server running at PORT: ${port}`);
});