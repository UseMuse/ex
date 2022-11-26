# Ex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

Соддержит 2 каталога:

1. my-libs-workspace - рабочее пространство с библиотекой my-lib внутри
2. my-app - приложение которое использует библиотеку my-lib

# Описание 

Репозиторий созданный с целью демонстрации ошибки импорта сервиса TestServiceService из библиотеки my-lib в компоненте AppComponent проекта my-app (который использует эту библиотеку, установку см в package.json проекта my-app)

# Описание ошибки

Текст ошибки:
./src/app/app.component.ts:2:0-63 - Error: Module not found: Error: Package path ./lib/services/test-service.service is not exported from package ...\ex\my-app\node_modules\my-lib (see exports field in ...\ex\my-app\node_modules\my-lib\package.json)

```js
import { Component } from '@angular/core';
//import { TestServiceService } from 'my-lib/lib/services/test-service.service';//dont work
import { TestServiceService } from 'my-lib'; //work
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  constructor(private MyLibService: TestServiceService) {}
}

```

# Как воспроизвести ошибку

Скачиваем репозиторий, заходим в my-libs-workspace, выполняем команды npm install, npm run pack. <br>
Заходим в my-app, выполняем команды npm install, npm run install:my-lib, запускаем проект npm run start<br>
Наблюдаем ошибку, чтобы устранить ошибку, в файле app.component.ts меняем импорт с нерабочего на рабочий

# Вопросы

Как сделать сконфигурировать рабочее пространство библиотек или саму библиотеку или проект использующий библиотеку, таким образом, чтобы было возможно импортировать сущности из библиотеки my-lib различными способами, например:
```ts
import { TestServiceService } from 'my-lib';
import { TestServiceService } from 'my-lib/lib/services';// не работает, а хотелось бы
import { TestServiceService } from 'my-lib/lib/services/test-service.service';// не работает, а хотелось бы
```

