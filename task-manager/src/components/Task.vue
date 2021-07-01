<template>
  <div class="todo-item" data-cy="taskContainer">
    <p>
      <label v-bind:class="{'is-complete':task.completed}">
      
        <input type="checkbox" class="cb" @click="markComplete" data-cy="taskCheck">
        {{task.name}}

      </label>
      
      <button @click="deleteTask" data-cy="taskDelete">Delete</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Task",
  props: ["task"],
  methods: {
    ...mapActions(['removeTask', 'updateTask']),
    markComplete() {
      const updatedTask = {
          id: this.task.id,
          name: this.task.name,
          completed: !this.task.completed
      };
      this.updateTask(updatedTask);
    },
    deleteTask() {
      this.removeTask(this.task);
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .cb {
    text-decoration: none;
  }

  .is-complete {
    text-decoration: line-through;
    color: red;
  }
</style>

