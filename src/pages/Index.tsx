import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const timelineEvents = [
    {
      time: "15:00",
      event: "Сбор гостей",
      description: "Встречаем дорогих гостей",
    },
    {
      time: "15:30",
      event: "Церемония",
      description: "Официальная регистрация брака",
    },
    {
      time: "16:30",
      event: "Фотосессия",
      description: "Запечатлеваем важные моменты",
    },
    { time: "17:30", event: "Банкет", description: "Праздничный ужин и танцы" },
    { time: "23:00", event: "Afterparty", description: "Продолжаем веселье" },
  ];

  const giftList = [
    { name: "Набор посуды", price: "15 000 ₽", icon: "Utensils" },
    { name: "Постельное белье", price: "8 000 ₽", icon: "Bed" },
    { name: "Техника для кухни", price: "25 000 ₽", icon: "Zap" },
    { name: "Подарочный сертификат", price: "10 000 ₽", icon: "Gift" },
    { name: "Декор для дома", price: "5 000 ₽", icon: "Home" },
    { name: "Книги", price: "3 000 ₽", icon: "BookOpen" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-rose-100/40 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <Icon
              name="Heart"
              size={64}
              className="text-pink-500 mx-auto mb-4 animate-pulse"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-['Playfair_Display'] font-bold text-gray-800 mb-6 animate-fade-in">
            Анна <span className="text-pink-500">&</span> Михаил
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Приглашаем вас разделить с нами этот особенный день
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100 animate-scale-in">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Icon name="Calendar" size={32} className="text-pink-500" />
              <div>
                <p className="text-3xl font-bold text-gray-800">
                  15 августа 2024
                </p>
                <p className="text-lg text-gray-600">Суббота</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex items-center justify-center gap-4">
              <Icon name="MapPin" size={32} className="text-pink-500" />
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  Ресторан "Аврора"
                </p>
                <p className="text-gray-600">Москва, ул. Пречистенка, 12</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold text-center text-gray-800 mb-16">
            Программа дня
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineEvents.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-pink-100"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">
                        {event.event}
                      </CardTitle>
                      <p className="text-pink-500 font-semibold">
                        {event.time}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold text-gray-800 mb-16">
            Место проведения
          </h2>
          <Card className="overflow-hidden shadow-2xl border-pink-100">
            <div className="h-64 bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center overflow-hidden rounded-t-lg relative">
              <img
                src="/img/6f8de8a5-2b03-4996-b519-b11f373d837c.jpg"
                alt="Ресторан Аврора"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white">
                <Icon name="Building" size={64} className="mx-auto mb-4" />
                <p className="font-semibold">Ресторан "Аврора"</p>
              </div>
            </div>
            <CardContent className="p-8">
              <CardTitle className="text-2xl mb-4 text-gray-800">
                Ресторан "Аврора"
              </CardTitle>
              <CardDescription className="text-gray-600 mb-6 text-lg">
                Элегантный ресторан в историческом центре Москвы с изысканной
                кухней и уютной атмосферой. Идеальное место для нашего
                особенного дня.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Показать на карте
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gift List Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold text-center text-gray-800 mb-8">
            Список подарков
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Мы будем рады любому подарку от сердца, но если вы хотите что-то
            особенное, вот несколько идей, которые помогут нам создать уютный
            дом.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftList.map((gift, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-pink-100"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <Icon name={gift.icon} size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-800">
                        {gift.name}
                      </CardTitle>
                      <p className="text-pink-500 font-semibold">
                        {gift.price}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Выбрать подарок
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Card className="inline-block bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Icon name="CreditCard" size={32} className="text-pink-500" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      Денежный подарок
                    </p>
                    <p className="text-gray-600">
                      Сбербанк: 1234 5678 9012 3456
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Icon
              name="Heart"
              size={48}
              className="text-pink-500 mx-auto mb-4"
            />
            <h3 className="text-2xl font-['Playfair_Display'] font-bold text-gray-800 mb-2">
              С любовью, Анна и Михаил
            </h3>
            <p className="text-gray-600">
              Мы не можем дождаться, чтобы отпраздновать этот день вместе с
              вами!
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button
              variant="outline"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              anna.mikhail@example.com
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
