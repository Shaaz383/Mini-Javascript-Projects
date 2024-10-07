let container = document.querySelector('.container');
let string = '';

container.addEventListener("click", (event) => {
    let btnText = event.target.innerText;

    if (btnText === '=') {
        try {
            string = eval(string);
        } catch (error) {
            string = 'Error';
        }
        document.querySelector('input').value = string;
    } else if (btnText === 'C') {
        string = '';
        document.querySelector('input').value = string;
    } else if (!isNaN(btnText) || ['+', '-', '*', '/', '.'].includes(btnText)) {
        string += btnText;
        document.querySelector('input').value = string;
    }
});
