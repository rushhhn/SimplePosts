# SimplePosts

Миниприложение на React Native/Redux/Typescipt. Фейковый сервер на https://my-json-server.typicode.com/rushhhn/SimplePosts.

Приложение состоит из двух страниц react native navigation.

Главная страница отображает список постов. 
Реализовано добавление/удаление/редактирование постов.
Свойства поста:
{
  id: number, 
  title: string, 
  body: string
}

По нажатию на карточку поста - переход на страницу с его комментариями. Реализовано добавление/удаление/редактирование комментариев.
Свойства комментария: 
{
  id: number,
  postId: number,
  text: string, 
}

Сервер фейковый. Обновление списка постов/комментариев реализовано внутри Redux.
Исходники находятся в ветке SimplePosts.
Файл apk находится по ссылке https://ufile.io/gvgs4347.
