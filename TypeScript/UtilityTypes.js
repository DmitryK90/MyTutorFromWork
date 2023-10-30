Утилиты:
TypeScript предоставляет 16 утилит для упрощения базовых преобразований типов.
Разберём основные:
1) Readonly.
    interface User {
        name: string
    }
    const user: Readonly<User>{
        name: 'Sasha'
    }
    user.name = 'Max'; // ошибка, нельзя переопределить, только для чтения.

2) Required.
    Помогает создать тип все поля которога становятся обязательными.
    interface Props {
        a?: number;
        b?: string;
    };
    const obj: props = {a: 5}; // ok.
    const obj2: Required<Props> = {a: 5}; // Error.

3) Record.
    Утилита которая создаёт тип с набором свойств Page типа PageInfo.
    interface PageInfo {
        title: string;
    };
    type Page = 'home' | 'about' | 'contact';
    const x: Record<Page, PageInfo> = {
        about: {title: 'about'},
        contact: {title: 'contact'},
        home: {title: 'home'}
    };

    ......