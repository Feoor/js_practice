class User {
    constructor(name, age, role = 'пользователь') {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    describe() {
        return `Пользователь ${this.name} (${this.age} лет) с правами ${this.role}`
    }
}

class Admin extends User {
    constructor(name, age, role, pass, func = [], session = 'админ') {
        super(name, age, role);
        this.func = func;
        this.pass = pass;
        this.session = session;
    }

    deleteUser(user) {
        for (let i = 0; i < users.length; i++) {
            let currentUser = users[i];

            if (currentUser.name === user.name) {
                users.splice(i, 1);
            }
        }
        console.log(`Пользователь ${user.name} удален администратором ${this.name}`);
        return user;
    }
}
class SuperAdmin extends Admin {
    constructor(name, age, role, pass, func = [], session = 'супер админ') {
        super(name, age, role, pass, func, session);
    }

    banUser(user) {
        user.banned = true;
        console.log(`Пользователь ${user.name} заблокирован супер администратором ${this.name}`);
        return user;
    }
}

class Moderator extends User {
    constructor(name, age, role, pass, categories = [], users = ["all"]) {
        super(name, age, role);
        this.categories = categories;
        this.pass = pass;
        this.users = users;
    }

    editUser(user, newName) {
        console.log(`Имя пользователя ${user.name} изменено на ${newName} модератором ${this.name}`);
        user.name = newName;
        return user
    }
}

// Применение
// Создайте массив пользователей (минимум 5 человек с разными ролями).
let users = [
    new User('Саня', 18),
    new User('Олег', 17),
    new SuperAdmin('Миша', 17, 'администратор', 'admin123', ['delete', 'edit']),
    new Moderator('Арлан', 17, 'модератор', 'mod123', ['sports', 'news']),
    new User('Дима', 17),
]


// Пройдитесь по массиву, вызвав методы describe() у всех пользователей.
let moderators = [];
let admins = [];

for (let i = 0; i < users.length; i++) {
    let user = users[i];

    console.log(user.describe());

    if (user.role === 'модератор') {
        // У первого модератора измените имя одного из пользователей.
        if (moderators.length === 0) {
            user.editUser(users[0], 'Саша Белый');
        }
        moderators.push(user);
    } else if (user.role === 'администратор') {
        // А у первого администратора удалите другого пользователя.
        if (admins.length === 0) {
            user.deleteUser(users[1]);
            --i; // Коррекция индекса, так как массив пользователей изменился
        }
        admins.push(user);
    }
}


