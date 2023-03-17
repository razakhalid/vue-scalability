const data = {
    Parent: {
        img: 'jane-doe.png',
        name: "Jane Doe",
        age: "50",
        children: [
            {
                child: {
                    img: "john-doe.png",
                    name: "John Doe",
                    age: "25",
                    children: [
                        {
                            grandchild: {
                                img: "habib.png",
                                name: "Habib",
                                age: 10
                            }
                        }
                    ]
                }
            },
            {
                child: {
                    img: "rashid.png",
                    name: "Rashid",
                    age: "14",
                    children: [
                        {
                            grandchild: {
                                img: "rafae.png",
                                name: "Rafae",
                                age: 10
                            }
                        },
                        {
                            grandchild: {
                                img: "rafae.png",
                                name: "Rafae",
                                age: 10
                            }
                        }
                    ]
                }
            }
        ]
    }
};

let markupArray = [`<ul>`];

function createList(items) {
    switch (true) {
        case (Array.isArray(items)):
            // items is an array
            console.log(typeof items);
            items.forEach(item => {
               createList(item);
            });
            break;
        case (typeof items === 'string'):
            console.log('2');
            markupArray.push(getMarkup(items, false));
            break;
        case (typeof items === 'object'):
            // items is an object
            console.log('3');
            getItems(items);
            break;
        default:
            break;
    }
}

function getMarkup(item, hasChildren) {
    if (hasChildren) {
        return `<li><span>${item}</span><ul>`;
    } else {
        return `<li><span>${item}</span></li>`;
    }
}

function getItems(items) {
    for (const item in items) {
        markupArray.push(`<li>`);
        markupArray.push(`<div class="test">`);
        markupArray.push(`<span>${item}</span>`);
        getDetails(items[item]);
        markupArray.push(`</li>`);
    }
}

function getDetails(details) {
    for (const detail in details) {
        if (detail === "img"){
            markupArray.push(`<img src="./assets/img/${details[detail]}" alt=${details[detail]} />`);
        } else if (detail === "children") {
            markupArray.push(`</div><ul>`);
            details[detail].forEach(element => {
                getItems(element);
            });
            markupArray.push(`</ul>`);
        } else {
            markupArray.push(`<span>${details[detail]}</span>`)
        }
    }
}

function main() {
    createList(data);
    markupArray.push(`</ul>`);
    document.querySelector('#list').innerHTML = markupArray.join("");
}

window.addEventListener('load', () => {
    main();
});
