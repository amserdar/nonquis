// Select the element by its ID
const el = document.getElementById('myElement');

// Define attributes to be set
const attr = {
    'class': 'myClass',
    'data-info': 'someData',
    'title': 'My Tooltip'
};

// Set each attribute on the element
for (const key in attr) {
    if (attr.hasOwnProperty(key)) {
        el.setAttribute(key, attr[key]);
    }
}

// Alternatively, using modern JavaScript (ES6+)
Object.entries(attr).forEach(([key, value]) => {
    el.setAttribute(key, value);
});
