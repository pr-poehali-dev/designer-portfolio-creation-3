import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Category = 'Все работы' | 'Digital Art' | 'Иллюстрации' | 'Портреты';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, title: 'Цифровой портрет', category: 'Digital Art', image: 'https://cdn.poehali.dev/projects/39fe0fbe-b153-45b0-aebd-ee7aefcec80b/files/0f0258f0-e3c4-4e56-a25b-edf072b7c1b8.jpg', description: 'Современная цифровая живопись' },
  { id: 2, title: 'Фантазийный пейзаж', category: 'Иллюстрации', image: 'https://cdn.poehali.dev/projects/39fe0fbe-b153-45b0-aebd-ee7aefcec80b/files/20929eeb-8027-46e7-a5c6-02e7340f7d42.jpg', description: 'Иллюстрация для книги' },
  { id: 3, title: 'Портрет маслом', category: 'Портреты', image: 'https://cdn.poehali.dev/projects/39fe0fbe-b153-45b0-aebd-ee7aefcec80b/files/0fdc88cc-685b-4a57-9a0e-5fca89b9d58c.jpg', description: 'Классическая техника' },
  { id: 4, title: 'Концепт арт', category: 'Digital Art', image: 'https://cdn.poehali.dev/projects/39fe0fbe-b153-45b0-aebd-ee7aefcec80b/files/0f0258f0-e3c4-4e56-a25b-edf072b7c1b8.jpg', description: 'Дизайн персонажа' },
  { id: 5, title: 'Детская иллюстрация', category: 'Иллюстрации', image: 'https://cdn.poehali.dev/projects/39fe0fbe-b153-45b0-aebd-ee7aefcec80b/files/20929eeb-8027-46e7-a5c6-02e7340f7d42.jpg', description: 'Яркая и добрая' },
  { id: 6, title: 'Реалистичный портрет', category: 'Портреты', image: 'https://cdn.poehali.dev/projects/39fe0fbe-b153-45b0-aebd-ee7aefcec80b/files/0fdc88cc-685b-4a57-9a0e-5fca89b9d58c.jpg', description: 'Графика' },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>('Все работы');
  const [menuOpen, setMenuOpen] = useState(false);

  const categories: Category[] = ['Все работы', 'Digital Art', 'Иллюстрации', 'Портреты'];

  const filteredPortfolio = activeCategory === 'Все работы' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Портфолио
          </h1>
          
          <div className="hidden md:flex gap-6">
            {['Главная', 'О себе', 'Портфолио', 'Услуги', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {['Главная', 'О себе', 'Портфолио', 'Услуги', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section id="главная" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Художник
              <br />
              Иллюстратор
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаю уникальные иллюстрации и цифровое искусство, которое вдохновляет
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('портфолио')}
            >
              Смотреть работы
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="о-себе" className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
                О себе
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-scale-in">
                  <img 
                    src="/placeholder.svg" 
                    alt="Художник" 
                    className="rounded-2xl shadow-2xl w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 animate-fade-in">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Привет! Я профессиональный художник-иллюстратор с более чем 5-летним опытом создания уникального визуального контента.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Моя специализация — цифровое искусство, иллюстрации для книг, журналов и брендинга. Каждая работа создается с вниманием к деталям и любовью к искусству.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary" className="text-sm">Photoshop</Badge>
                    <Badge variant="secondary" className="text-sm">Procreate</Badge>
                    <Badge variant="secondary" className="text-sm">Традиционная живопись</Badge>
                    <Badge variant="secondary" className="text-sm">Концепт-арт</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="портфолио" className="py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
              Портфолио
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-200 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredPortfolio.map((item) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                          <p className="text-sm text-white/80">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="услуги" className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
              Услуги
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: 'Palette',
                  title: 'Digital Art',
                  description: 'Создание цифровых иллюстраций любой сложности для ваших проектов',
                  price: 'от 5000₽'
                },
                {
                  icon: 'Book',
                  title: 'Книжные иллюстрации',
                  description: 'Иллюстрации для книг, журналов и издательств',
                  price: 'от 8000₽'
                },
                {
                  icon: 'User',
                  title: 'Портреты',
                  description: 'Портреты в любой технике — от цифровой до масляной живописи',
                  price: 'от 10000₽'
                }
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                    <p className="text-xl font-semibold text-primary">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="контакты" className="py-24">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
              Контакты
            </h3>
            <div className="max-w-2xl mx-auto">
              <Card className="animate-scale-in">
                <CardContent className="p-8 space-y-6">
                  <p className="text-center text-lg text-muted-foreground mb-8">
                    Готов обсудить ваш проект! Свяжитесь со мной удобным способом
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { icon: 'Mail', text: 'artist@example.com', href: 'mailto:artist@example.com' },
                      { icon: 'Phone', text: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
                      { icon: 'Instagram', text: '@artist_portfolio', href: '#' },
                      { icon: 'MessageCircle', text: 'Telegram', href: '#' }
                    ].map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon name={contact.icon as any} size={24} className="text-primary" />
                        </div>
                        <span className="text-lg">{contact.text}</span>
                      </a>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border">
                    <Button 
                      className="w-full text-lg py-6 hover:scale-105 transition-transform duration-200"
                      size="lg"
                    >
                      Написать сообщение
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Художник-иллюстратор. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}