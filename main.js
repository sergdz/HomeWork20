function myFunc() {
    const inputShop = document.querySelector('#input__shop');
    const buttonShop = document.querySelector('#button__shop');
    const listName = document.querySelector('#input__listName');
    const listAuthor = document.querySelector('#input__author');
    const h4 = document.querySelector('h4');
    const myList = new ShoppingList('', '', '')
    buttonShop.addEventListener('click', () => {
        myList.maxNumberOfItems = inputShop.value;
        myList.listAuthor = listAuthor.value;
        myList.listName = listName.value;
        h4.textContent = `Допустимое количество товаров:\n ${inputShop.value} 
        Автор " ${listAuthor.value} ". Название списка " ${listName.value}"`
        inputShop.value = ''
    })
    const wrapperItem = document.querySelector('.wrapper__item');
    const inputTitle = document.querySelector('#input__title');
    const inputAmount = document.querySelector('#input__amount');
    const inputUnit = document.querySelector('#input__unit');
    const inputButton = document.querySelector('#input__button');
    const inputId = document.querySelector('#input__id');
    const inputDelete = document.querySelector('#input__delete');

    inputButton.addEventListener('click', () => {
        try {
            myList.addItem('', inputTitle.value, inputAmount.value, inputUnit.value)
            const p = document.createElement('p')
            p.classList.add(`${myList.list.length}`)
            wrapperItem.append(p)
            myList.list.forEach((i) => p.textContent = ` Товар: ${i.title}, количество: ${i.amount} ${i.unit}. Его id: ${i.id}`)
        
        } catch (e) {
            const p = document.createElement('p')
            wrapperItem.append(p)
            p.textContent = ` ${e.message}`
            p.classList.add('p__error')
            setTimeout(() => {
                p.remove()
            }, 3000);

        } finally {
            if (inputTitle.value && inputAmount.value && inputUnit.value !== '') {
                if ( myList.list.length < myList.maxNumberOfItems){
                    const p = document.createElement('p')
                wrapperItem.append(p)
                p.textContent = `Товар ${inputTitle.value}, количество: ${inputAmount.value} ${inputUnit.value} успешно добавлен  `
                p.classList.add('p__finally')
                setTimeout(() => {
                    p.remove()
                }, 3000);
                }
                
            }
            inputTitle.value = ''
            inputAmount.value = ''
            inputUnit.value = ''
        }
    })

    inputDelete.addEventListener('click', () => {
        try {
            myList.removeItem(+inputId.value)
            document.getElementsByClassName(`${+inputId.value}`)[0].remove()
        } catch (e) {
            const p = document.createElement('p')
            wrapperItem.append(p)
            p.textContent = ` ${e.message}`
            setTimeout(() => {
                p.remove()
            }, 1000);
        }
    })
   
}

myFunc()


/* =================================================================================================== */

function iterator() {
    const myList = new ShoppingList('ShoppingList', 'Sergei', 3);
    myList.addItem(1, 'coffee', 300, 'gram')
    myList.addItem(2, 'water', 1, 'bottle')
    myList.addItem(3, 'sugar', 100, 'gram')
    for(const key of myList){
        console.log(key);
    }


}

iterator()