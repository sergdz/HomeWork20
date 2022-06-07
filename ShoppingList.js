'use strict'

class ShoppingList {
    list = []
    constructor(listName, listAuthor, maxNumberOfItems) {
        this.listName = listName;
        this.listAuthor = listAuthor;
        this.maxNumberOfItems = maxNumberOfItems;
    }
    addItem(id, title, amount, unit) {
        
            id = this.list.length + 1;
            if (id > this.maxNumberOfItems) {
                throw new Error(`Вы можете добавить не больше ${this.maxNumberOfItems} товаров`)
            } else if (amount < 1) {
                throw new Error('Отсутствует количество товара')
            } else if (title === ''){
                throw new Error('Введите название товара')
            } else if (unit === '')  {
                throw new Error('Выберите единицу измерения')
            }
            this.list.push(new ListItem(id, title, amount, unit))
    }
    removeItem(id) {
            if (this.list.find(item => item.id === id)) {
                this.list.forEach((item) => {
                    if (item.id === id) {
                        this.list.splice(item.id, 1)
                        
                    }
                })
            } else  {
                throw new Error(`Номера: ${id}, нет в списке`)
            }
        
    }
/* ======================================================================================= */
    [Symbol.iterator] = function() {
       return {
        next:() =>  {
            const value = this
            console.log(value);
            return {value: value, done: true} 
        
       }
    }
}
}

