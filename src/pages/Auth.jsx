import React, { useState } from "react";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

function Auth({ setUser, users, setUsers }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = () => {
    if (!name.trim() || !password.trim()) {
      setError("Введите имя и пароль");
      return;
    }

    if (isRegistering) {
      const userExists = users.find((user) => user.name === name);
      if (userExists) {
        setError("Пользователь уже существует");
        return;
      }
      setUsers([...users, { name, password }]);
      setUser(name);
    } else {
      const user = users.find(
        (user) => user.name === name && user.password === password
      );
      if (!user) {
        setError("Неверные данные");
        return;
      }
      setUser(name);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 ">
        {isRegistering ? "Регистрация" : "Вход"}
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <Input
        placeholder="Введите ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Введите пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="mt-2" onClick={handleAuth}>
        {isRegistering ? "Зарегистрироваться" : "Войти"}
      </Button>
      <Button
        className="mt-2"
        variant="outline"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? "Уже есть аккаунт? Войти"
          : "Нет аккаунта? Зарегистрироваться"}
      </Button>
    </div>
  );
}

export default Auth;
