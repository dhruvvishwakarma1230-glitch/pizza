const cafeMenu = [
  {
    name: "Classic Coffee",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    modelGlb: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/CoffeeCup/glTF/CoffeeCup.gltf"
  },
  {
    name: "BigBoss Pancho Pizza",
    price: "$15.00",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    // YOUR PIZZA MODEL (CONVERTED TO RAW)
    modelGlb: "https://raw.githubusercontent.com/dhruvvishwakarma1230-glitch/pizza/08a097eba51e00bc9a4e697d248acf0b79c56c36/pizza_bigboss_pancho.glb"
  },
  {
    name: "Diner Club Sandwich",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    modelGlb: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb"
  },
  {
    name: "The Worker's Combo",
    price: "$11.50",
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=600&q=80",
    modelGlb: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Assets/Models/CoffeeCup/glTF/CoffeeCup.gltf"
  }
];

const container = document.getElementById('menu-container');

// Render Menu
cafeMenu.forEach(item => {
  const card = document.createElement('div');
  card.className = 'menu-card';
  
  card.innerHTML = `
    <model-viewer 
      src="${item.modelGlb}" 
      poster="${item.image}" 
      ar ar-modes="webxr scene-viewer quick-look" 
      camera-controls 
      shadow-intensity="1"
      reveal="interaction">
      
      <button slot="hotspot-order" 
              class="hotspot-order" 
              data-position="0 0.15 0.1" 
              data-normal="0 0 1"
              onclick="alert('🛎️ Order Sent! 1x ${item.name} is coming to your table.')">
        🛒 ORDER NOW
      </button>

      <button slot="ar-button" class="ar-btn">★ VIEW ON TABLE ★</button>
    </model-viewer>
    
    <h3>${item.name}</h3>
    <div class="price-tag">${item.price}</div>
  `;
  container.appendChild(card);
});
