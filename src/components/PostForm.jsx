import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ru", ru);

function PostForm({ addPost }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [peopleNeeded, setPeopleNeeded] = useState(1);
  const [dateTime, setDateTime] = useState(null);
  const [payment, setPayment] = useState(50);

  const handleSubmit = () => {
    if (text.trim() && dateTime) {
      addPost({
        text,
        peopleNeeded,
        dateTime: dateTime.toISOString(),
        payment,
      });
      setIsOpen(false);
      setText("");
      setPeopleNeeded(1);
      setDateTime(null);
      setPayment(50);
    }
  };

  return (
    <div className="text-center">
      <Button onClick={() => setIsOpen(true)}>Добавить запрос</Button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg max-w-sm">
            <h2 className="text-xl font-bold mb-2">Добавить запрос</h2>
            <Input
              placeholder="Описание (до 200 символов)"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={200}
            />
            <select
              className="w-full p-2 border rounded mt-2"
              value={peopleNeeded}
              onChange={(e) => setPeopleNeeded(Number(e.target.value))}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} чел.
                </option>
              ))}
            </select>
            <DatePicker
              locale="ru"
              selected={dateTime}
              onChange={(date) => setDateTime(date)}
              showTimeSelect
              dateFormat="dd MMMM yyyy HH:mm"
              className="w-88 p-2 border rounded mt-2"
              placeholderText="Выберите дату и время"
            />
            <select
              className="w-full p-2 border rounded mt-2"
              value={payment}
              onChange={(e) => setPayment(Number(e.target.value))}
            >
              {[...Array(200).keys()].map((i) => (
                <option key={(i + 1) * 5} value={(i + 1) * 5}>
                  {(i + 1) * 5} BYN
                </option>
              ))}
            </select>
            <Button onClick={handleSubmit} className="mt-2">
              Создать
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              Отмена
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostForm;
