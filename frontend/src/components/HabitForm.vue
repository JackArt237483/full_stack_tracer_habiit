<template>
  <div>
    <h2>Добавить новую привычку</h2>
    <form @submit.prevent="createHabit">
      <div>
        <label for="title">Название:</label>
        <input id="title" v-model="title" required />
      </div>
      <div>
        <label for="description">Описание:</label>
        <input id="description" v-model="description" required />
      </div>
      <button type="submit">Создать</button>
    </form>

    <h3>Список привычек:</h3>
    <ul>
      <li v-for="habit in habits" :key="habit.id">
        <strong>{{ habit.title }}</strong>: {{ habit.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      description: '',
      habits: [], // Список привычек
    };
  },
  methods: {
    async createHabit() {
      try {
        // Отправляем POST-запрос для создания новой привычки
        const response = await axios.post('http://localhost:3000/api/habits', {
          title: this.title,
          description: this.description,
        });

        // Обновляем список привычек
        this.habits = response.data;

        // Уведомление о созданной привычке
        alert('Привычка создана: ' + JSON.stringify(response.data));

        // Очищаем поля формы
        this.title = '';
        this.description = '';
      } catch (error) {
        console.error('Ошибка при создании привычки:', error.response.data);
        alert('Ошибка: ' + error.response.data.error);
      }
    },
    async loadHabits() {
      try {
        // Загружаем все привычки с сервера
        const response = await axios.get('http://localhost:3000/api/habits');
        this.habits = response.data; // Обновляем список привычек
      } catch (error) {
        console.error('Ошибка при загрузке привычек:', error);
      }
    },
  },
  mounted() {
    // Загружаем привычки при монтировании компонента
    this.loadHabits();
  },
};
</script>
