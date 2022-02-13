import 'normalize.css';

import { MultiSelect, TreeSelect } from './components';
import './style.scss';

/** Region **/

const regionSelect = document.querySelector<HTMLSelectElement>(
    'select[name="region"]'
);

new MultiSelect(regionSelect, {
    onChange: (selectedOptions) => {
        console.log('regionSelect -> selectedOptions:', selectedOptions);
    },
});

regionSelect?.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    console.log('regionSelect -> value:', target.value);
});

/** Customer **/

const customerSelect = document.querySelector<HTMLSelectElement>(
    'select[name="customer"]'
);

new TreeSelect(customerSelect, {
    onChange: (selectedOptions) => {
        console.log('customerSelect -> selectedOptions:', selectedOptions);
    },
});

customerSelect?.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    console.log('customerSelect -> value:', target.value);
});

//my code 

const form = document.querySelector<HTMLElement>('.form__back')!;
const table = document.querySelector<HTMLInputElement>('.first')!;
const table2 = document.querySelector<HTMLInputElement>('.second')!;
const modal = document.querySelector<HTMLElement>('#modals')!;
const option = document.querySelectorAll<HTMLInputElement>('.select')!;
const select = document.querySelector<HTMLElement>('#selected')!;
const reset = document.querySelector<HTMLElement>('.btn__filter')!;
const open2 = document.querySelector<HTMLElement>('.a__top')!;
const op = document.querySelector<HTMLElement>('.a__bottom')!;
const accept = document.querySelector<HTMLElement>('.close')!;
const accept2 = document.querySelector<HTMLElement>('.close1')!;
const close = document.querySelector<HTMLElement>('.content__back__link')!;
const result = document.querySelector<HTMLElement>('.top')!;
const result1 = document.querySelector<HTMLElement>('.bottom')!;
const search = document.querySelector<HTMLInputElement>('.content__back__input')!;


form.addEventListener('submit', function (e) {
    return e.preventDefault() ;
});

table.addEventListener('click', function () {
    let arr = table.value.split(',');
    for (let opt of Array.from(option)) {
        if (arr.includes(opt.value)) {
            opt.classList.add('selectfull');
            opt.classList.remove('select');
        }
    }
    modal.style.display = 'block';
});

table2.addEventListener('click', function () {
    let arr = table2.value.split(',');
    for (let opt of Array.from(option)) {
        if (arr.includes(opt.value)) {
            opt.classList.add('selectfull');
            opt.classList.remove('select');
        }
    }
    modal.style.display = 'block';
});

op.addEventListener('click', function () {
    modal.style.display = 'block';
});

open2.addEventListener('click', function () {
    modal.style.display = 'block';
});

close.addEventListener('click', function () {
    modal.style.display = 'none';
    for (let opt of Array.from(option)) {
        if (opt.className == 'selectfull') {
            opt.classList.add('select');
            opt.classList.remove('selectfull');
        }
    }
});

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// for (let opt of option) {
//     let check = document.createElement("input");
//     check.type="checkbox";
//     check.classList.add("show");
//     opt.prepend(check);
// }

select.addEventListener('click', function (e: any) {
    // let optionArr = Array.from(option);
    if (e.target.classList == 'select') {
        e.target.classList.add('selectfull');
        e.target.classList.remove('select');
    } else {
        e.target.classList.add('select');
        e.target.classList.remove('selectfull');
    }
    if (
        e.target.tagName != 'OPTION' ||
        (e.target.dataset.level == '1' &&
            e.target.nextElementSibling.dataset.level == '1') ||
        (e.target.dataset.level == '6' &&
            e.target.nextElementSibling.dataset.level == '6')
    )
        return;
    // if (e.target.dataset.level == "1")
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});

accept.addEventListener('click', function () {
    let a = [];
    for (let opt of Array.from(option)) {
        if (opt.className == 'selectfull') {
            a.push(opt.value);
        }
        let d = a.length;
        if (d > 1) {
            (result as any).text = `Показать выбранное (${d})`;
        }
    }
    let c = a.join(',');
    table.value = c;
});

accept2.addEventListener('click', function () {
    let a = [];
    for (let opt of Array.from(option)) {
        if (opt.className == 'selectfull') {
            a.push(opt.value);
        }
        let d = a.length;

        if (d > 1) {
            (result1 as any).text = `Показать выбранное (${d})`;
        }
        let c = a.join(',');
        table2.value = c;
    }
});

result.addEventListener('click', function () {
    let arr = table.value.split(',');
    for (let opt of Array.from(option)) {
        if (arr.includes(opt.value)) {
            opt.classList.add('selectfull');
            opt.classList.remove('select');
        }
    }
    modal.style.display = 'block';
});

result1.addEventListener('click', function () {
    let arr = table2.value.split(',');
    for (let opt of Array.from(option)) {
        if (arr.includes(opt.value)) {
            opt.classList.add('selectfull');
            opt.classList.remove('select');
        }
    }
    modal.style.display = 'block';
});

search.addEventListener('input', function () {
    let val = this.value.trim();
    if (val != '') {
        option.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                // elem.hidden = false;
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            } else {
                // elem.hidden = true;
                elem.classList.remove('hide');
                let str1 = elem.innerText;
                elem.innerHTML = insertMark(
                    str1,
                    elem.innerText.search(val),
                    val.length
                );
            }
        });
    } else {
        option.forEach(function (elem) {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
});

function insertMark(str: string, pos: number, len: number) {
    return (
        str.slice(0, pos) +
        '<mark>' +
        str.slice(pos, pos + len) +
        '</mark>' +
        str.slice(pos + len)
    );
}

reset.addEventListener('click', function () {
    search.value = '';
    for (let opt of Array.from(option)) {
        if (opt.className == 'selectfull') {
            opt.classList.add('select');
            opt.classList.remove('selectfull');
        }
    }
});

