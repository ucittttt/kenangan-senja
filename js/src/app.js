document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
          { id: 1, name: 'Robusta Brazil', jpg: '1.jpg', price: 20000 },
          { id: 2, name: 'Robusta Brazil', img: '2.jpg', price: 20000 },
          { id: 3, name: 'Robusta Brazil', img: '3.jpg', price: 20000 },
          { id: 4, name: 'Robusta Brazil', img: '4.jpg', price: 20000 },
          { id: 5, name: 'Robusta Brazil', img: '5.jpg', price: 20000 },
        ],
    }));
});

