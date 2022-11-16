const { createApp } = Vue

createApp({
    data() {
        return {
            textNewTodo: '',
            todoList: [
                {
                    text: 'Fare i compiti',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Chiamare la nonna',
                    done: false,
                }
            ]
        }
    },
    methods: {
        removeTodo(i) {
            this.todoList.splice(i, 1);
        },
        addTodo() {
            const objNewTodo = {
                text: this.textNewTodo,
                done: false
            };
            this.todoList.push(objNewTodo);
            this.textNewTodo = '';
        },
        onClickTodo(todo) {
            // if(todo.done === true) {
            //     todo.done = false;
            // } else {
            //     todo.done = true;
            // }

            // todo.done = todo.done ? false : true;

            todo.done = !todo.done;
        }
    }
}).mount('#app')